export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.video-alfa.hr/#business',
    name: 'Alfa Vjenčanja',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja u Slavoniji, Zagrebu i okolici. Više od 10 godina iskustva.',
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
      { '@type': 'City', name: 'Zagreb' },
      { '@type': 'AdministrativeArea', name: 'Slavonija' },
      { '@type': 'AdministrativeArea', name: 'Virovitičko-podravska županija' },
      { '@type': 'AdministrativeArea', name: 'Osječko-baranjska županija' },
    ],
    sameAs: [
      'https://www.facebook.com/alfa.vjencanja',
      'https://www.instagram.com/alfavjencanja',
      'https://www.youtube.com/@VIDEOALFA.',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
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
          description: 'Do 6 sati fotografiranja, 300+ obrađenih fotografija, online privatna galerija.',
          seller: { '@type': 'Organization', name: 'Alfa Vjenčanja' },
        },
        {
          '@type': 'Offer',
          name: 'Signature',
          description: 'Do 10 sati fotografiranja, 600+ obrađenih fotografija, premium foto album, online galerija.',
          seller: { '@type': 'Organization', name: 'Alfa Vjenčanja' },
        },
        {
          '@type': 'Offer',
          name: 'Exclusive',
          description: 'Cjelodnevno fotografiranje, 800+ fotografija, luksuzni album, video snimanje, drone snimke.',
          seller: { '@type': 'Organization', name: 'Alfa Vjenčanja' },
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
        reviewBody: 'Od prvog susreta znali smo da smo u pravim rukama. Fotografije su nadmašile sva naša očekivanja.',
        author: { '@type': 'Person', name: 'Ana & Marko' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        reviewBody: 'Diskretni, profesionalni i nevjerojatno talentirani. Svaki trenutak zabilježen je s osjećajem i stilom.',
        author: { '@type': 'Person', name: 'Ivana & Luka' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
