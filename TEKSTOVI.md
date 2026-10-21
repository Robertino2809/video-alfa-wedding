# Tekstovi s weba – Video Alfa

Sav vidljivi tekst stranice, po stranicama i sekcijama redom kojim se pojavljuju.
Meta opisi, alt tekstovi i aria-oznake nisu uključeni.

---

## Zajedničko – navigacija (na svim stranicama)

**Komponenta:** `Navbar` – `components/navbar/Navbar.tsx`

Poveznice (desktop, od 1220px):
- O nama
- Galerija
- Vjenčanja *(prikazuje se samo ako postoji barem jedna objavljena priča)*
- Paketi
- Kontakt

Gumb: **Zatraži ponudu**

Mobilni izbornik (ispod 1220px) – iste poveznice uz dodatnu:
- Početna

Gumb: **Zatraži ponudu**

---

# 1. Početna (`/`)

Stranica: `app/page.tsx`

## 1.1 Hero

**Komponenta:** `Hero` – `components/hero/Hero.tsx`

# Fotografiranje i video snimanje vjenčanja

Dobrodošli u naš studio – gdje trenuci postaju uspomene

Stvaramo bezvremensku fotografiju vjenčanja koja bilježi emocije, atmosferu i detalje vašeg najposebnijeg dana. Svaka priča je jedinstvena – a naš cilj je ispričati je s elegancijom.

Gumb: **Rezervirajte svoj datum →**

## 1.2 O nama

**Komponenta:** `About` – `components/about/About.tsx`

Nadnaslov: O nama

## Strast prema bezvremenskoj eleganciji

Godinama fotografiramo vjenčanja s naglaskom na autentične emocije, profinjenu estetiku i detalje koji čine razliku.

Naš pristup temelji se na smirenosti, diskreciji i osjećaju za trenutak. Vjerujemo da prava ljepota nastaje spontano – a naš zadatak je zabilježiti je s mjerom i stilom.

Gumb: **Saznajte više**

## 1.3 Fotografija preko cijelog ekrana

**Komponenta:** `FullscreenImage` – `components/FullScreenImage.tsx`

*(samo slika, bez teksta)*

## 1.4 Pregled galerije

**Komponenta:** `GalleryPreview` – `components/gallerypreview/GalleryPreview.tsx`

*(prikazuje se kad su objavljene manje od 3 priče s vjenčanja)*

Nadnaslov: Portfolio

## Priče koje traju zauvijek

Svako vjenčanje za nas je jedinstvena priča. Istražite odabrane trenutke ispunjene emocijom, elegancijom i bezvremenskom estetikom.

Gumb: **Pogledajte galeriju**

## 1.5 Priče s vjenčanja

**Komponenta:** `HomeStories` – `components/vjencanja/HomeStories.tsx` (kartice: `StoryCards` – `components/vjencanja/StoryCards.tsx`)

*(prikazuje se samo ako postoji barem jedna objavljena priča; trenutno je jedina priča, `content/vjencanja/primjer.mdx`, neobjavljena pa se sekcija u produkciji ne vidi)*

Nadnaslov: Vjenčanja

## Priče s vjenčanja

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

Kartice priča (tekst dolazi iz MDX datoteka): grad, naslov priče; kod samo jedne priče i kratki opis te poveznica **Pročitajte priču**.

Gumb: **Sve priče**

## 1.6 Usluge

**Komponenta:** `Pricing` – `components/pricing/Pricing.tsx`

Nadnaslov: Što radimo

## Fotografija, video i light show

### Fotografija
- Kožni wedding book po vašem izboru
- Fotografiranje ceremonije i photo sessiona na lokaciji koju odaberete
- Sve fotografije na USB-u

Gumb: **Istražite pakete** (vodi na `/packages/?tab=foto`)

### Video snimanje
- Uvodna špica i glavni spot
- Snimanje s dvije kamere i dronom u većim paketima
- Montirani film na USB-u

Gumb: **Istražite pakete** (vodi na `/packages/?tab=video`)

### Light show
- Niski dim, prskalice i balončići za prvi ples
- Rasvjeta i bojanje cijele sale
- Niski dim i prskalice za tortu

Gumb: **Istražite pakete** (vodi na `/packages/?tab=light-show`)

Gumb: **Pogledajte sve pakete i ponude**

## 1.7 Fotografija preko cijelog ekrana

**Komponenta:** `FullscreenImage` – `components/FullScreenImage2.tsx`

*(samo slika, bez teksta)*

## 1.8 Iskustva mladenaca

**Komponenta:** `Testimonials` – `components/testimonials/Testimonials.tsx`

Nadnaslov: Iskustva mladenaca

## Riječi koje nam znače najviše

> “Od prvog susreta znali smo da smo u pravim rukama. Fotografije su nadmašile sva naša očekivanja.”
>
> — ANA & MARKO

> “Diskretni, profesionalni i nevjerojatno talentirani. Svaki trenutak zabilježen je s osjećajem i stilom.”
>
> — IVANA & LUKA

## 1.9 Kontakt

**Komponenta:** `Contact` – `components/contact/Contact.tsx`

Nadnaslov: Kontakt

## Započnimo vašu priču zajedno

Polja obrasca:
- Ime i prezime
- Email
- Datum vjenčanja (placeholder: DD.MM.GGGG)
- Lokacija vjenčanja
- Vaša poruka

Gumb: **Pošaljite upit** (tijekom slanja: **Šalje se...**)

Poruka o grešci: Nešto je pošlo po krivu. Pokušajte ponovo.

Nakon uspješnog slanja:
- Hvala vam
- Vaš upit je uspješno poslan.
- Javit ćemo vam se što je prije moguće.

Kontakt podaci:
- alfavjencanja@gmail.com
- Mobitel: +385 98 660 275
- Telefon: +385 33 553 553
- Facebook
- Instagram

## 1.10 Galerija od tri fotografije

**Komponenta:** `ElegantGallery` – `components/ElegantGallery.tsx`

*(samo slike, bez teksta)*

## 1.11 Društvene mreže

**Komponenta:** `Social` – `components/instagram/Social.tsx`

Nadnaslov: Društvene mreže

## Trenuci koje dijelimo svakodnevno

Poveznice:
- Instagram
- Facebook
- YouTube

---

# 2. O nama (`/about`)

Stranica: `app/about/page.tsx`

## 2.1 Hero

**Komponenta:** `AboutHero` – `components/about/AboutHero.tsx`

Nadnaslov: O nama

# Naša priča iza svakog kadra

Vjerujemo da svaka ljubavna priča zaslužuje biti ispričana s elegancijom, mirnoćom i osjećajem za detalj.

## 2.2 Naša priča

**Komponenta:** `AboutStory` – `components/about/AboutStory.tsx`

Video Alfa postoji od 1998. godine. Više od 28 godina pratimo parove kroz jedan od najvažnijih dana u njihovom životu — i svaki put pristupamo mu s jednakom pažnjom i odgovornošću.

Naš tim radi iz studija u Slatini, Braće Radić 13. Fotografija, video snimanje, dron i light show — sve pod jednim krovom, s jednim timom koji poznajete od prvog susreta do predaje materijala.

Vjerujemo da dobra fotografija mora zadržati emociju, ali i estetiku koja traje. Naš cilj nije samo dokumentirati dan — već stvoriti vizualnu priču koju ćete gledati i za dvadeset godina.

Foto Studio Video Alfa · Braće Radić 13, Slatina

## 2.3 Naše brojke

**Komponenta:** `StatsSection` – `components/about/StatsSection.tsx`

Nadnaslov: Naše brojke

## Povjerenje koje traje godinama

- **28+** – godina iskustva
- **500+** – zadovoljnih mladenaca
- **1 cilj** – savršeno zabilježen trenutak
- **∞** – uhvaćenih iskrenih trenutaka

## 2.4 Vrijednosti

**Komponenta:** `AboutValues` – `components/about/AboutValues.tsx`

### Diskrecija
Prisustvo bez nametanja, kako bi trenuci ostali prirodni i iskreni.

### Estetika
Pažljivo birana kompozicija, svjetlo i detalji u svakom kadru.

### Povjerenje
Gradimo odnos koji omogućuje opuštenost i autentičnost.

---

# 3. Galerija (`/gallery`)

Stranica: `app/gallery/page.tsx`

## 3.1 Hero

**Komponenta:** `GalleryHero` – `components/GalleryHero.tsx`

Nadnaslov: Galerija

# Trenuci koji ostaju zauvijek

Svako vjenčanje nosi svoju atmosferu, emociju i energiju. Ovdje izdvajamo trenutke koji pričaju priču o ljubavi, eleganciji i bezvremenskoj estetici.

## 3.2 Uvod

**Komponenta:** `GalleryIntro` – `components/GalleryIntro.tsx`

Nadnaslov: Galerija

## Trenuci koji ostaju zauvijek

Svako vjenčanje nosi svoju atmosferu, emociju i energiju. Ovdje izdvajamo odabrane trenutke koji pričaju priču o ljubavi, eleganciji i bezvremenskoj estetici.

## 3.3 Mreža fotografija

**Komponenta:** `GalleryGrid` – `components/GalleryGrid.tsx`

*(samo slike; u prikazu preko cijelog ekrana jedini tekst je gumb za zatvaranje **×**)*

---

# 4. Paketi (`/packages`)

Stranica: `app/packages/page.tsx`

## 4.1 Hero

**Komponenta:** `PackagesHero` – `components/packages/PackagesHero.tsx`

Nadnaslov: Paketi

# Odaberite savršeni paket za vaš dan

Svaki paket pažljivo je osmišljen kako bi odgovarao različitim željama, stilovima i budžetima, uz istu razinu elegancije i profesionalnosti.

## 4.2 Popis paketa

**Komponenta:** `PackagesList` – `components/packages/PackagesList.tsx`

Kartice: **Foto paketi** | **Video paketi** | **Light show** (kartica se može otvoriti izravno: `/packages/?tab=foto`, `?tab=video`, `?tab=light-show`)

Svaki paket ima isti raspored: naziv, prva stavka ispod naziva, ostale stavke u desnom stupcu i gumb **Zatraži ponudu**.

**Napomena na dnu (sve kartice):**

Stil fotografiranja, montaže i izgled booka su naši, a vaše želje dogovaramo unaprijed. Sve detalje dogovaramo u studiju u Slatini, Braće Radić 13, uz prethodnu najavu.

### Kartica „Foto paketi”

**Zajednički tekst iznad paketa:**

Svaki foto paket uključuje fotografiranje na dan vjenčanja, photo session na lokaciji koju zajedno dogovorimo i izradu kožnog wedding booka. Fotografije za book odabiremo i obrađujemo mi, a zatim od njih slažemo stranice knjige koja ide u tisak. Izgled korica birate sami. Sve fotografije i stranice booka dobivate i na USB-u.

Paketi se razlikuju po veličini booka, broju stranica i dokad ostajemo s vama na vjenčanju.

#### Foto Paket 1
- Wedding book 30×30 cm, 20 listova / 40 stranica
- Fotografiranje na vjenčanju i na lokaciji
- Ne uključuje fotografiranje okupljanja kod kuće ni u restoranu

#### Foto Paket 2
- Wedding book 30×30 cm, 30 listova / 60 stranica
- Fotografiranje na vjenčanju i na lokaciji
- Ne uključuje fotografiranje okupljanja kod kuće ni u restoranu

#### Foto Paket 3 — oznaka: Popularno
- Wedding book 30×40 cm, 20 listova / 40 stranica
- Fotografiranje na vjenčanju, na lokaciji i u restoranu do večere
- Ne uključuje fotografiranje nakon večere

#### Foto Paket 4
- Wedding book 30×40 cm, 30 listova / 50 stranica
- Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00

#### Foto Paket 5
- Wedding book 30×40 cm, 40 listova / 80 stranica
- Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00

#### Foto Paket 6
- Wedding book 30×40 cm, 40 listova / 80 stranica, uz dva dodatna booka 15×20 cm
- Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:30

### Kartica „Video paketi”

**Zajednički tekst iznad paketa:**

Snimamo dan prema terminu iz paketa i od snimljenog materijala montiramo film: uvodnu špicu, glavni spot snimljen na lokaciji koju odaberete i ostatak dana. Film je u Full HD rezoluciji i dobivate ga na USB-u.

Paketi se razlikuju po tome kad počinjemo snimati, koliko traje montirani film i s koliko kamera snimamo.

Dodatne izmjene ili skraćivanje filma naplaćujemo prema utrošenom vremenu.

#### Video Paket 1
- Uvodna špica + 1 spot
- Snimamo od 16:00 do 03:00
- Montirani film od 2,5 sata

#### Video Paket 2
- Uvodna špica + 1 spot
- Snimamo od 16:00 do 03:00
- Montirani film od 3 sata

#### Video Paket 3 — oznaka: Popularno
- Uvodna špica + 1 spot
- Snimamo od 14:00 do 03:00
- Montirani film od 3,5 sata

#### Video Paket 4
- Uvodna špica + 1 spot
- Snimamo od 12:00 do 03:00
- Montirani film od 4 sata

#### Video Paket 5
- Uvodna špica + 1 spot
- Snimamo od 12:00 do 03:30
- Montirani film od 4,5 sata
- Dvije kamere: prva od 12:00 do 03:30, druga od 12:00 do 20:00

#### Video Paket 6
- Uvodna špica + 1 spot
- Snimamo od 12:00 do 03:30
- Montirani film od 4,5 sata
- Dvije kamere: prva od 12:00 do 03:30, druga od 12:00 do 20:00
- Dron od 12:00 do ulaska u restoran

### Kartica „Light show”

**Zajednički tekst iznad paketa:**

Light show radimo za prvi ples i za rezanje torte, a cijelu salu osvjetljavamo u bojama tijekom večeri.

#### Light show
- Prvi ples: niski dim, 4 prskalice i balončići
- Rasvjeta i bojanje cijele sale
- Torta: niski dim i 2 prskalice

## 4.3 Poziv na akciju

**Komponenta:** `PackagesCTA` – `components/packages/PackagesCTA.tsx`

## Spremni za vaš poseban dan?

Gumb: **Kontaktirajte nas**

---

# 5. Kontakt (`/contact`)

Stranica: `app/contact/page.tsx`

## 5.1 Hero

**Komponenta:** `ContactHero` – `components/contact/ContactHero.tsx`

Nadnaslov: Kontakt

# Započnimo vašu priču zajedno

Slobodno nam se javite za provjeru dostupnosti, dodatne informacije ili personaliziranu ponudu. Veselimo se vašem danu.

## 5.2 Kontakt obrazac

**Komponenta:** `Contact` – `components/contact/Contact.tsx`

*(ista komponenta kao na početnoj – vidi 1.9; tekst je identičan)*

Nadnaslov: Kontakt

## Započnimo vašu priču zajedno

Polja obrasca: Ime i prezime · Email · Datum vjenčanja (DD.MM.GGGG) · Lokacija vjenčanja · Vaša poruka

Gumb: **Pošaljite upit**

Kontakt podaci: alfavjencanja@gmail.com · Mobitel: +385 98 660 275 · Telefon: +385 33 553 553 · Facebook · Instagram

---

# 6. Footer (na svim stranicama)

**Komponenta:** `Footer` – `components/Footer.tsx`

## Započnimo vašu priču

Gumb: **Rezervirajte termin**

### Studio
- Alfa Vjenčanja
- Bezvremenska fotografija

### Kontakt
- alfavjencanja@gmail.com
- +385 98 660 275

### Pratite nas
- Facebook
- Instagram

© {tekuća godina} Alfa Vjenčanja. Sva prava pridržana.
