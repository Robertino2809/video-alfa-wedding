#!/usr/bin/env node
// Optimizacija slika: JPG/PNG/WebP -> WebP, ispravna rotacija prema EXIF-u,
// uklanjanje svih metapodataka, smanjivanje na najveću dopuštenu dimenziju.
// Za slike s popisa `largeImages` (scripts/images.config.mjs) generira i
// responzivne verzije (ime-640.webp, ime-1080.webp, ...).
//
// Upotreba:
//   node scripts/optimize-images.mjs [mapa] [--dry-run] [--out=mapa] [--only=a.webp,b.webp] [--force]
//
//   mapa       mapa koja se obrađuje (zadano: public/images)
//   --dry-run  samo ispiše što bi napravila, ništa ne zapisuje
//   --out      zapisuje u zadanu mapu umjesto preko originala (npr. compare/)
//   --only     obradi samo navedene datoteke (ime ili putanja)
//   --force    ponovno obradi i slike koje su već obrađene
//
// Već obrađene slike pamte se u scripts/optimized-images.json (SHA-1 sadržaja),
// pa ponovno pokretanje ne kompresira istu sliku više puta.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import {
  large,
  standard,
  largeImages,
  keepFormat,
  responsiveWidths,
} from "./images.config.mjs";

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, "scripts", "optimized-images.json");
// Popis responzivnih verzija koji čita components/ResponsiveImage.tsx.
const RESPONSIVE_MANIFEST = path.join(ROOT, "lib", "responsive-images.json");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const VARIANT_RE = new RegExp(`-(${responsiveWidths.join("|")})\\.webp$`);

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];

const dryRun = flag("dry-run");
const force = flag("force");
const outDir = option("out");
const only = option("only")?.split(",").map((s) => s.trim());
const dir = args.find((a) => !a.startsWith("--")) ?? "public/images";

const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");
const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
const sha1 = (buf) => crypto.createHash("sha1").update(buf).digest("hex");

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) return walk(p);
    if (!EXTENSIONS.has(path.extname(e.name).toLowerCase())) return [];
    if (VARIANT_RE.test(e.name)) return []; // responzivne verzije se ne obrađuju ponovno
    return [p];
  });
}

function settingsFor(relPath) {
  if (keepFormat[relPath]) return { ...standard, ...keepFormat[relPath], keepFormat: true };
  if (largeImages.includes(relPath)) return { ...large, responsive: true };
  return { ...standard };
}

function encode(input, { maxSize, quality, keepFormat: keep }, width) {
  // rotate() bez argumenata okreće prema EXIF orijentaciji; sharp po zadanom
  // ne prenosi metapodatke (EXIF, GPS, XMP) i pretvara boje u sRGB.
  let img = sharp(input).rotate();
  img = width
    ? img.resize({ width, withoutEnlargement: true })
    : img.resize({ width: maxSize, height: maxSize, fit: "inside", withoutEnlargement: true });
  if (keep) return img.png({ compressionLevel: 9, palette: true, effort: 10 }).toBuffer({ resolveWithObject: true });
  return img
    .webp({ quality, smartSubsample: true, effort: 6 })
    .toBuffer({ resolveWithObject: true });
}

const readJson = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {});
const manifest = readJson(MANIFEST);
const responsiveManifest = readJson(RESPONSIVE_MANIFEST);
const files = walk(path.resolve(ROOT, dir)).filter(
  (f) => !only || only.some((o) => rel(f) === o || path.basename(f) === o),
);

let totalBefore = 0;
let totalAfter = 0;
const rows = [];

for (const file of files) {
  const relPath = rel(file);
  const input = fs.readFileSync(file);
  const s = settingsFor(relPath);
  const ext = s.keepFormat ? path.extname(file) : ".webp";
  const target = outDir
    ? path.resolve(ROOT, outDir, path.basename(file, path.extname(file)) + ext)
    : file.slice(0, -path.extname(file).length) + ext;

  const alreadyDone = !force && !outDir && manifest[relPath] === sha1(input);
  const meta = await sharp(input).metadata();

  let output = input;
  let info = { width: meta.width, height: meta.height };
  let note = "";
  if (alreadyDone) {
    note = "već obrađeno";
  } else {
    ({ data: output, info } = await encode(input, s));
    const unchangedSize = info.width === meta.width && info.height === meta.height;
    const hasMeta = Boolean(meta.exif || meta.xmp || meta.iptc || meta.icc);
    if (output.length >= input.length && unchangedSize && !hasMeta && target === file) {
      output = input; // nova verzija ne bi bila manja, zadrži original
      note = "zadržan original (manji)";
    }
  }

  totalBefore += input.length;
  totalAfter += output.length;
  rows.push({
    file: relPath,
    target: rel(target),
    from: `${meta.width}x${meta.height}`,
    to: `${info.width}x${info.height}`,
    before: input.length,
    after: output.length,
    q: s.keepFormat ? "png" : `q${s.quality}`,
    note,
  });

  if (!dryRun && output !== input) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    const tmp = `${target}.tmp`;
    fs.writeFileSync(tmp, output);
    fs.renameSync(tmp, target);
  }
  if (!dryRun && !outDir) manifest[rel(target)] = sha1(output);

  // Responzivne verzije rade se iz originala, ne iz već kompresirane verzije.
  if (s.responsive) {
    const source = alreadyDone ? output : input;
    const publicPath = (p) => "/" + path.relative(path.join(ROOT, "public"), p).split(path.sep).join("/");
    const variants = [];
    for (const w of responsiveWidths) {
      if (w >= info.width) continue; // nema smisla za verziju širu od same slike
      const vTarget = target.replace(/\.webp$/, `-${w}.webp`);
      variants.push({ src: publicPath(vTarget), width: w });
      if (!force && !outDir && fs.existsSync(vTarget) && alreadyDone) continue;
      const { data, info: vInfo } = await encode(source, s, w);
      totalAfter += data.length;
      rows.push({
        file: `  ↳ ${w}w`,
        target: rel(vTarget),
        from: "",
        to: `${vInfo.width}x${vInfo.height}`,
        before: 0,
        after: data.length,
        q: `q${s.quality}`,
        note: "responzivna verzija",
      });
      if (!dryRun) fs.writeFileSync(vTarget, data);
    }
    responsiveManifest[publicPath(target)] = {
      width: info.width,
      height: info.height,
      srcSet: [...variants, { src: publicPath(target), width: info.width }]
        .map((v) => `${v.src} ${v.width}w`)
        .join(", "),
    };
  }
}

if (!dryRun && !outDir) {
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  fs.writeFileSync(RESPONSIVE_MANIFEST, JSON.stringify(responsiveManifest, null, 2) + "\n");
}

const pad = (v, n) => String(v).padEnd(n);
const padL = (v, n) => String(v).padStart(n);
console.log(dryRun ? "DRY RUN — ništa nije zapisano\n" : "");
console.log(`${pad("datoteka", 52)} ${pad("prije", 11)} ${pad("poslije", 11)} ${padL("staro", 8)} ${padL("novo", 8)}  ${pad("", 5)} napomena`);
for (const r of rows) {
  const saving = r.before ? `${Math.round((1 - r.after / r.before) * 100)}%` : "";
  console.log(
    `${pad(r.file, 52)} ${pad(r.from, 11)} ${pad(r.to, 11)} ${padL(r.before ? kb(r.before) : "", 8)} ${padL(kb(r.after), 8)}  ${pad(r.q, 5)} ${saving} ${r.note}`,
  );
}
const mb = (b) => `${(b / 1024 / 1024).toFixed(1)} MB`;
console.log(
  `\nUkupno: ${files.length} slika, ${mb(totalBefore)} -> ${mb(totalAfter)} (uključujući responzivne verzije), ušteda ${mb(totalBefore - totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}%)`,
);
