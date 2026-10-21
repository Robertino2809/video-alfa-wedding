import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: 'Kontakt – Video Alfa, Braće Radić 13, Slatina',
  description:
    'Provjerite je li vaš datum slobodan. Nazovite +385 98 660 275 ili pošaljite upit.',
  alternates: { canonical: 'https://www.video-alfa.hr/contact/' },
  openGraph: {
    title: 'Kontakt – Video Alfa, Braće Radić 13, Slatina',
    description: 'Provjerite je li vaš datum slobodan. Tel: +385 98 660 275.',
    url: 'https://www.video-alfa.hr/contact/',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm hideHeading />
    </main>
  );
}
