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

Gumb: **Zatraži ponudu** (na početnoj skrola do kontakt forme, na ostalim stranicama vodi na `/contact/`)

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

*(prikazuje se samo ako postoji barem jedna objavljena priča)*

Nadnaslov: Vjenčanja

## Priče s vjenčanja

Svako vjenčanje koje snimamo je drugačije. Ovdje izdvajamo neka od njih.

Kartice priča (tekst dolazi iz MDX datoteka): grad, naslov priče; kod samo jedne priče i kratki opis te poveznica **Pročitajte priču**.

Gumb: **Sve priče**

## 1.6 Usluge

**Komponenta:** `Pricing` – `components/pricing/Pricing.tsx`

Nadnaslov: Što nudimo

## Usluge prilagođene vašoj priči

### Fotografija
- Kožni wedding book po izboru
- Fotografiranje ceremonije i photo sessiona
- Fotografije arhivirane na USB

Gumb: **Istražite pakete** (vodi na `/packages/?tab=foto`)

### Video snimanje
- Uvodna špica i glavni spot
- Full HD 16:9 (widescreen)
- Snimanje dronom dostupno uz odabrane pakete
- Arhivirano na USB stick

Gumb: **Istražite pakete** (vodi na `/packages/?tab=video`)

### Light show
- Niski dim, 4 prskalice i balončići za prvi ples
- Rasvjeta i bojanje cijele sale
- Niski dim i 2 prskalice za tortu

Gumb: **Istražite pakete** (vodi na `/packages/?tab=light-show`)

Gumb: **Pogledajte sve pakete i ponude**

## 1.7 Fotografija preko cijelog ekrana

**Komponenta:** `FullscreenImage` – `components/FullScreenImage2.tsx`

*(samo slika, bez teksta)*

## 1.8 Kontakt

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

## 1.9 Galerija od tri fotografije

**Komponenta:** `ElegantGallery` – `components/ElegantGallery.tsx`

*(samo slike, bez teksta)*

## 1.10 Društvene mreže

**Komponenta:** `Social` – `components/instagram/Social.tsx`

Nadnaslov: Društvene mreže

## Trenuci koje dijelimo svakodnevno

Mreža od šest fotografija.

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

## 3.2 Mreža fotografija

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

Svaki paket ima isti raspored: naziv, prva rečenica ispod naziva, ostale rečenice u desnom stupcu i gumb **Zatraži ponudu**.

**Napomena na dnu (sve kartice):**

Sve dogovore oko fotografiranja, izrade booka, izbora korisnih stranica, lokacije i sl. dogovaramo isključivo u našem studiju Video Alfa u Slatini, Braće Radić 13, uz prethodni dogovor.

### Kartica „Foto paketi”

**Zajednički tekst iznad paketa:**

Izgled vanjskih stranica po želji mladenaca.

Kod wedding booka biramo fotografije, računalno ih obrađujemo i kreiramo stranice koje se printaju i stvaraju dojam knjige u kojoj se nalaze uspomene vašeg vjenčanog dana.

Paket se odnosi na fotografiranje i izradu wedding booka te arhiviranje fotografija i stranica booka na USB.

#### Foto Paket 1
Kožni wedding book 30×30 cm (20 listova / 40 stranica). Fotografiranje se odnosi na fotografiranje na vjenčanju te fotografiranje na lokaciji uz dogovor. Paket se ne odnosi na fotografiranje kod kuće na okupljanju ni na fotografiranje u restoranu.

#### Foto Paket 2
Kožni wedding book 30×30 cm (30 listova / 60 stranica). Fotografiranje se odnosi na fotografiranje na vjenčanju te fotografiranje na lokaciji uz dogovor. Paket se ne odnosi na fotografiranje kod kuće na okupljanju ni na fotografiranje u restoranu.

#### Foto Paket 3
Kožni wedding book 30×40 cm (20 listova / 40 stranica). Fotografiranje se odnosi na fotografiranje na vjenčanju, fotografiranje na lokaciji uz dogovor i u restoranu do večere. Paket se ne odnosi na fotografiranje poslije večere.

#### Foto Paket 4
Kožni wedding book 30×40 cm (30 listova / 60 stranica). Fotografiranje se odnosi na fotografiranje na vjenčanju, fotografiranje na lokaciji uz dogovor i u restoranu do 3:00 ujutro.

#### Foto Paket 5
Kožni wedding book 30×40 cm (40 listova / 80 stranica). Fotografiranje se odnosi na fotografiranje na vjenčanju, fotografiranje na lokaciji uz dogovor i u restoranu do 3:00 ujutro.

#### Foto Paket 6
Kožni wedding book 30×40 cm (40 listova / 80 stranica) te dodatna dva wedding booka 15×20 cm. Fotografiranje se odnosi na fotografiranje na vjenčanju, fotografiranje na lokaciji uz dogovor i u restoranu do 3:30 ujutro.

**Napomena ispod foto paketa:** Studio Video Alfa zadržava pravo potpune kreativnosti prilikom izrade wedding booka, kao i pravo stilskog izražaja prilikom fotografiranja na terenu.

### Kartica „Video paketi”

**Zajednički tekst iznad paketa:**

Snimanje na lokaciji za spot po izboru mladenaca.

U Full HD kvaliteti 16:9 (widescreen).

Dodatna montaža ili želje mladenaca za izmjenom ili skraćivanjem snimke dodatno se naplaćuju ovisno o utrošenom vremenu.

#### Video Paket 1
Uvodna špica + 1 glavni spot. Snimamo od 16:00 na dan vjenčanja do 03:00 sljedećeg dana. Ukupno 2,5 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick.

#### Video Paket 2
Uvodna špica + 1 glavni spot. Snimamo od 16:00 na dan vjenčanja do 03:00 sljedećeg dana. Ukupno 3 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick.

#### Video Paket 3
Uvodna špica + 1 glavni spot. Snimamo od 14:00 na dan vjenčanja do 03:00 sljedećeg dana. Ukupno 3,5 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick.

#### Video Paket 4
Uvodna špica + 1 glavni spot. Snimamo od 12:00 na dan vjenčanja do 03:00 sljedećeg dana. Ukupno 4 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick.

#### Video Paket 5
Uvodna špica + 1 glavni spot. Snimamo od 12:00 na dan vjenčanja do 03:30 sljedećeg dana. Ukupno 4,5 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick. Snimanje s dvije kamere: kamerman 1 od 12:00 do 03:30, kamerman 2 od 12:00 do 20:00.

#### Video Paket 6
Uvodna špica + 1 glavni spot. Snimamo od 12:00 na dan vjenčanja do 03:30 sljedećeg dana. Ukupno 4,5 sata materijala, koji računalno obrađujemo, dodajemo uvod i spot te arhiviramo na USB stick. Snimanje s dvije kamere i dronom: kamerman 1 od 12:00 do 03:30, kamerman 2 od 12:00 do 20:00, snimatelj s dronom od 12:00 do ulaska u restoran.

**Napomena ispod video paketa:** Foto studio Video Alfa zadržava pravo potpune kreativnosti prilikom izrade videosnimke, kao i pravo stilskog izražaja prilikom snimanja na terenu.

### Kartica „Light show”

#### Light show
- Prvi ples: niski dim, 4 prskalice i balončići
- Rasvjeta i bojanje cijele sale
- Torta: niski dim i 2 prskalice

Gumb: **Zatraži ponudu**

## 4.3 Poziv na akciju

**Komponenta:** `PackagesCTA` – `components/packages/PackagesCTA.tsx`

## Spremni za vaš poseban dan?

Gumb: **Kontaktirajte nas**

---

# 5. Kontakt (`/contact`)

Stranica: `app/contact/page.tsx`

## 5.1 Hero

**Komponenta:** `ContactHero` – `components/contact/ContactHero.tsx`

# Kontakt

## 5.2 Kontakt obrazac

**Komponenta:** `Contact` – `components/contact/Contact.tsx`

*(ista komponenta kao na početnoj – vidi 1.8; ovdje s drugim nadnaslovom i odlomkom)*

Nadnaslov: Upit

## Započnimo vašu priču zajedno

Slobodno nam se javite za provjeru dostupnosti, dodatne informacije ili personaliziranu ponudu. Veselimo se vašem danu.

Polja obrasca: Ime i prezime · Email · Datum vjenčanja (DD.MM.GGGG) · Lokacija vjenčanja · Vaša poruka

Gumb: **Pošaljite upit**

Kontakt podaci: alfavjencanja@gmail.com · Mobitel: +385 98 660 275 · Telefon: +385 33 553 553 · Facebook · Instagram

---

# 6. Footer (na svim stranicama)

**Komponenta:** `Footer` – `components/Footer.tsx`

## Započnimo vašu priču

Gumb: **Rezervirajte termin**

### Studio
- Foto studio Video Alfa
- Bezvremenska fotografija

### Kontakt
- alfavjencanja@gmail.com
- +385 98 660 275

### Pratite nas
- Facebook
- Instagram

© {tekuća godina} Video Alfa. Sva prava pridržana.
