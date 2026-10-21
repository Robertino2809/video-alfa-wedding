import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const cache = new Map<string, { width: number; height: number }>();

/** Stvarne dimenzije slike iz public/, da browser rezervira prostor i nema skakanja layouta. */
export function getImageDimensions(src: string) {
  const cached = cache.get(src);
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", src);
  if (!fs.existsSync(file)) {
    throw new Error(`[vjencanja] Slika ne postoji: public${src}`);
  }
  const { width, height } = imageSize(fs.readFileSync(file));
  const dims = { width, height };
  cache.set(src, dims);
  return dims;
}
