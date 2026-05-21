import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: 'Kontakt – Rezervirajte Datum Vjenčanja',
  description:
    'Kontaktirajte Alfa Vjenčanja. Tel: +385 98 660 275. Fotografiramo u Slavoniji, Zagrebu i regiji. Provjerite dostupnost vašeg datuma i zatražite ponudu.',
  alternates: { canonical: 'https://www.video-alfa.hr/contact' },
  openGraph: {
    title: 'Kontakt | Alfa Vjenčanja – Rezervirajte Datum',
    description: 'Provjerite dostupnost vašeg datuma. Tel: +385 98 660 275.',
    url: 'https://www.video-alfa.hr/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
