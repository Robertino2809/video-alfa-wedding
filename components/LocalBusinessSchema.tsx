// ============================================================
// KREIRATI KAO: components/LocalBusinessSchema.tsx
// DODATI U: app/layout.tsx unutar <body> taga
//
// Primjer u layout.tsx:
//   import LocalBusinessSchema from '@/components/LocalBusinessSchema'
//   ...
//   <body>
//     <LocalBusinessSchema />
//     {children}
//   </body>
// ============================================================

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.video-alfa.hr/#business',
    name: 'Video Alfa',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja. Više od 25 godina iskustva.',
    url: 'https://www.video-alfa.hr',
    telephone: '+38598660275',
    email: 'alfavjencanja@gmail.com',
    image: 'https://www.video-alfa.hr/images/og-image.jpg',
    logo: 'https://www.video-alfa.hr/images/logo-alfa.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Slatina',
      addressRegion: 'Virovitičko-podravska županija',
      postalCode: '33520',
      addressCountry: 'HR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.7049,
      longitude: 17.7003,
    },
    areaServed: [
      { '@type': 'City', name: 'Slatina' },
      { '@type': 'City', name: 'Virovitica' },
      { '@type': 'City', name: 'Osijek' },
      { '@type': 'City', name: 'Slavonski Brod' },
      { '@type': 'City', name: 'Požega' },
      { '@type': 'City', name: 'Đakovo' },
      { '@type': 'City', name: 'Vinkovci' },
      { '@type': 'City', name: 'Vukovar' },
      { '@type': 'City', name: 'Zagreb' },
      { '@type': 'City', name: 'Rijeka' },
      { '@type': 'AdministrativeArea', name: 'Slavonija' },
      { '@type': 'AdministrativeArea', name: 'Virovitičko-podravska županija' },
      { '@type': 'AdministrativeArea', name: 'Osječko-baranjska županija' },
      { '@type': 'AdministrativeArea', name: 'Brodsko-posavska županija' },
      { '@type': 'AdministrativeArea', name: 'Požeško-slavonska županija' },
    ],
    sameAs: [
      'https://www.facebook.com/p/ALFAVjenčanja-100063607212380/',
      'https://www.instagram.com/video.alfa/',
      'https://www.youtube.com/@video-alfa',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paketi fotografije i video snimanja vjenčanja',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Essential',
          description:
            'Do 6 sati fotografiranja, 300+ obrađenih fotografija, online privatna galerija, dostava unutar 30 dana.',
          seller: { '@type': 'Organization', name: 'Video Alfa' },
        },
        {
          '@type': 'Offer',
          name: 'Signature',
          description:
            'Do 10 sati fotografiranja, 600+ obrađenih fotografija, premium foto album, online galerija, dostava unutar 30 dana.',
          seller: { '@type': 'Organization', name: 'Video Alfa' },
        },
        {
          '@type': 'Offer',
          name: 'Exclusive',
          description:
            'Cjelodnevno fotografiranje, 800+ obrađenih fotografija, luksuzni album, video snimanje, drone snimke, personalizirana ponuda.',
          seller: { '@type': 'Organization', name: 'Video Alfa' },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewBody:
          'Od prvog susreta znali smo da smo u pravim rukama. Fotografije su nadmašile sva naša očekivanja.',
        author: { '@type': 'Person', name: 'Ana & Marko' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        reviewBody:
          'Diskretni, profesionalni i nevjerojatno talentirani. Svaki trenutak zabilježen je s osjećajem i stilom.',
        author: { '@type': 'Person', name: 'Ivana & Luka' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}