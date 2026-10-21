// Postavke za scripts/optimize-images.mjs.
// Putanje su relativne prema korijenu projekta.

// Hero slike i FullScreenImage: veća rezolucija i kvaliteta.
export const large = {
  maxSize: 2560, // dulja stranica u px
  quality: 85,
};

// Galerija i sve ostale slike.
export const standard = {
  maxSize: 2000,
  quality: 82,
};

// Za ove slike koristi se `large` i generiraju se responzivne verzije
// (ime-640.webp, ime-1080.webp, ime-1600.webp) za <img srcset>.
export const responsiveWidths = [640, 1080, 1600];

export const largeImages = [
  "public/images/webp/image94.webp", // Hero početne
  "public/images/webp/image57.webp", // AboutHero
  "public/images/webp/image26.webp", // GalleryHero
  "public/images/webp/image21.webp", // PackagesHero
  "public/images/webp/image53.webp", // ContactHero
  "public/images/webp/image30.webp", // VjencanjaHero
  "public/images/webp/image83.webp", // FullScreenImage
  "public/images/webp/DSC_8883.webp", // FullScreenImage2
];

// Logotipi ostaju PNG (isto ime, logo-alfa.png koristi i LocalBusinessSchema).
// Samo se smanjuju i uklanjaju im se metapodaci.
export const keepFormat = {
  "public/images/Logo.png": { maxSize: 800 },
  "public/images/logo-alfa.png": { maxSize: 480 }, // navbar 200 px; Google traži logo min. 112 px visine
};
