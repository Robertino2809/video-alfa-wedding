import { Montserrat, Monsieur_La_Doulaise, Tangerine, Imperial_Script } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-script",
  display: "swap",
});

export const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});
