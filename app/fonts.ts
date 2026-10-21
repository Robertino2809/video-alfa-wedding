import { Montserrat, Monsieur_La_Doulaise } from "next/font/google";

// latin-ext zbog č, ć, š, ž, đ. Učitavaju se samo težine koje se koriste
// (font-light, normalni tekst, font-medium).
export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
  // Ukrasni font, nije na početnoj ni iznad pregiba, pa se ne preloada.
  preload: false,
});
