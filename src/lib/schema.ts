import { SITE } from '../config/site';
import type { Post } from '../lib/content';
import type { Service } from '../data/services';

const abs = (path: string) => new URL(path, SITE.domain).href;
const BUSINESS_ID = `${SITE.domain}/#business`;
const ORG_ID = `${SITE.domain}/#organization`;
const WEBSITE_ID = `${SITE.domain}/#website`;

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.streetAddress,
  addressLocality: SITE.address.addressLocality,
  addressRegion: SITE.address.addressRegion,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.addressCountry,
};

const AREA_SERVED = [
  ...SITE.administrativeAreas.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  ...['Baturaja', 'Muaradua', 'Banding Agung', 'Martapura', 'Gumawang', 'Tanjung Enim', 'Muara Enim', 'Prabumulih'].map(
    (name) => ({ '@type': 'City', name })
  ),
];

const OPENING_HOURS = SITE.openingHours.map((o) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: o.days,
  opens: o.opens,
  closes: o.closes,
}));

export function businessSchema() {
  return {
    '@type': SITE.entityType,
    '@id': BUSINESS_ID,
    name: 'Jasa Pembuatan Interior, Kitchen Set & Booth Baturaja — OKU Raya',
    alternateName: SITE.name,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    image: [abs('/og/og-default.png')],
    logo: abs('/interior-baturaja.svg'),
    description: SITE.description,
    address: ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [...SITE.sameAs],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        availableLanguage: ['Indonesian'],
        areaServed: 'ID',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Katalog Layanan Interior & Fit-Out Komersial',
      itemListElement: [
        'Jasa Pembuatan Kitchen Set Custom HPL & PVC Anti Rayap',
        'Jasa Pembuatan Lemari Pakaian Custom & Kamar Set',
        'Pembuatan Backdrop TV & Partisi Ruangan Minimalis',
        'Kontraktor Interior Kantor Dinas, Hotel, Villa & Instansi',
        'Kontraktor Interior Toko, Tenant Mall & Booth Pameran Knock-Down',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.domain,
    logo: {
      '@type': 'ImageObject',
      url: abs('/interior-baturaja.svg'),
      width: 512,
      height: 512,
    },
    description: SITE.description,
    address: ADDRESS,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      availableLanguage: ['Indonesian'],
    },
    sameAs: [...SITE.sameAs],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.domain,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'id-ID',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.domain}/blog/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function serviceSchema(service: Service, url: string) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    url,
    image: abs(`/og/layanan-${service.slug}.png`),
    provider: { '@id': BUSINESS_ID },
    areaServed: AREA_SERVED,
    offers: service.packages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      description: pkg.tagline,
      priceCurrency: 'IDR',
      price: pkg.price.replace(/[^0-9]/g, ''),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'IDR',
        price: pkg.price.replace(/[^0-9]/g, ''),
        unitText: pkg.unit,
      },
      availability: 'https://schema.org/InStock',
      url,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Paket ${service.shortTitle}`,
      itemListElement: service.packages.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        itemOffered: { '@type': 'Service', name: `${service.shortTitle} — ${pkg.name}` },
      })),
    },
  };
}

export function areaServiceSchema(
  area: { name: string; districts: string[]; description: string; h1: string },
  url: string
) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Jasa Interior ${area.name}`,
    serviceType: 'Jasa Pembuatan Interior & Furniture Custom',
    description: area.description,
    url,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      ...area.districts.map((d) => ({ '@type': 'City', name: d })),
      { '@type': 'AdministrativeArea', name: area.name },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Layanan Interior ${area.name}`,
      itemListElement: [
        'Kitchen Set Custom',
        'Lemari Pakaian & Kamar Set',
        'Backdrop TV & Partisi Ruangan',
        'Interior Kantor & Instansi',
        'Interior Toko, Mall & Booth Pameran',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}

export function articleSchema(post: Post, url: string) {
  const isPortfolio = Array.isArray(post.data.category)
    ? post.data.category.includes('Portfolio')
    : post.data.category === 'Portfolio';
  return {
    '@type': isPortfolio ? 'CreativeWork' : 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.data.title,
    name: post.data.title,
    description: post.data.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: [abs(post.data.heroImage ?? `/og/${post.id}.png`)],
    datePublished: (post.data.pubDate ?? new Date()).toISOString(),
    dateModified: (post.data.updatedDate ?? post.data.pubDate ?? new Date()).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.data.author,
      url: SITE.domain,
    },
    publisher: { '@id': ORG_ID },
    keywords: post.data.targetKeywords.join(', '),
    articleSection: post.data.category,
    ...(isPortfolio && post.data.projectDetails
      ? {
          contentLocation: {
            '@type': 'Place',
            name: post.data.projectDetails.location,
          },
          about: post.data.projectDetails.material,
          temporalCoverage: String(post.data.projectDetails.year),
        }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${items[items.length - 1]?.url ?? SITE.domain}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[], url: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[], url: string) {
  return {
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

export const SCHEMA_IDS = { BUSINESS_ID, ORG_ID, WEBSITE_ID };
