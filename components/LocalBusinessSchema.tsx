// LocalBusiness JSON-LD za Video Alfa.
// Renderira se iz app/layout.tsx unutar <body> taga kao <script type="application/ld+json">.
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.video-alfa.hr/#business',
    name: 'Video Alfa',
    description:
      'Foto i video studio iz Slatine. Fotografiranje i video snimanje vjenčanja, 28+ godina iskustva.',
    url: 'https://www.video-alfa.hr/',
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
      { '@type': 'Country', name: 'Croatia' },
      { '@type': 'Country', name: 'Germany' },
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
          name: 'Foto paketi',
          description:
            'Fotografiranje na dan vjenčanja, photo session na lokaciji i kožni wedding book 30×30 ili 30×40 cm. Sve fotografije i stranice booka na USB-u.',
          seller: { '@type': 'Organization', name: 'Video Alfa' },
        },
        {
          '@type': 'Offer',
          name: 'Video paketi',
          description:
            'Montirani film u Full HD rezoluciji s uvodnom špicom i glavnim spotom, od 2,5 do 4,5 sata, u većim paketima s dvije kamere i dronom. Film na USB-u.',
          seller: { '@type': 'Organization', name: 'Video Alfa' },
        },
        {
          '@type': 'Offer',
          name: 'Light show',
          description:
            'Niski dim, prskalice i balončići za prvi ples, niski dim i prskalice za tortu te rasvjeta i bojanje cijele sale.',
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