/**
 * Konfigurasi Situs & NAP (Name-Address-Phone) — Interior Baturaja.
 * Semua schema JSON-LD, footer, tombol WhatsApp, dan halaman kontak
 * mengambil data dari file ini agar konsisten (Local SEO + E-E-A-T).
 */

export const SITE = {
  name: 'Interior Baturaja',
  legalName: 'Interior Baturaja — Workshop Interior & Fit-Out OKU Raya',
  domain: 'https://interiorbaturaja.web.id',
  primaryKeyword: 'Jasa Interior Baturaja',
  tagline: 'Workshop Interior Custom, Kitchen Set & Fit-Out Komersial',
  description:
    'Jasa pembuatan interior Baturaja & OKU Raya: kitchen set, lemari custom, kamar set, backdrop TV, partisi, interior kantor dinas, fit-out toko/mall, dan booth pameran knock-down. Workshop sendiri, material HPL & PVC anti rayap, bergaransi.',
  author: {
    name: 'Tim Interior Baturaja',
    role: 'Desainer & Pelaksana Workshop',
  },
  /** WhatsApp format internasional tanpa '+' */
  whatsapp: '6285310024736',
  phone: '+62 853-1002-4736',
  phoneDisplay: '0853-1002-4736',
  email: 'halo@interiorbaturaja.web.id',
  priceRange: 'Rp1.800.000 - Rp3.500.000',
  /** Alamat workshop & kantor pemasaran (NAP utama) */
  address: {
    streetAddress:
      'Jl. Pantai Bidadari Jembatan 1 Sugih Waras, Ranau, Kec. Banding Agung',
    addressLocality: 'Kabupaten Ogan Komering Ulu Selatan',
    addressRegion: 'Sumatera Selatan',
    postalCode: '32274',
    addressCountry: 'ID',
  },
  workshop: {
    label: 'Workshop & Kantor',
    street: 'Jl. Pantai Bidadari Jembatan 1 Sugih Waras',
    district: 'Ranau, Kec. Banding Agung',
    city: 'OKU Selatan',
    province: 'Sumatera Selatan',
    postalCode: '32274',
  },
  geo: {
    latitude: -4.7669,
    longitude: 103.9331,
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    { days: ['Saturday'], opens: '08:00', closes: '15:00' },
  ],
  openingHoursText:
    'Senin–Jumat 08.00–17.00 WIB, Sabtu 08.00–15.00 WIB (Minggu dengan perjanjian)',
  /** Area layanan utama + ekspansi */
  serviceAreas: [
    'Baturaja',
    'Baturaja Timur',
    'Baturaja Barat',
    'Air Paoh',
    'Sukaraya',
    'Kemelak',
    'Sekar Jaya',
    'Tanjung Baru',
    'Tanjung Agung',
    'Pasar Baru Baturaja',
    'Lubuk Batang',
    'Peninjauan',
    'Muaradua',
    'Banding Agung',
    'Danau Ranau',
    'Martapura',
    'Gumawang Belitang',
    'Muara Enim',
    'Tanjung Enim',
    'Prabumulih',
  ],
  /** Link kanonik yang dipakai sebagai sameAs (tanpa akun sosial fiktif) */
  sameAs: ['https://wa.me/6285310024736'],
  mapsEmbed:
    'https://www.google.com/maps?q=Jl.+Pantai+Bidadari+Jembatan+1+Sugih+Waras+Banding+Agung+Ogan+Komering+Ulu+Selatan&output=embed',
  entityType: 'HomeAndConstructionBusiness',
  /** Wilayah administratif untuk schema areaServed */
  administrativeAreas: [
    'Kabupaten Ogan Komering Ulu',
    'Kabupaten Ogan Komering Ulu Selatan',
    'Kabupaten Ogan Komering Ulu Timur',
    'Kabupaten Muara Enim',
    'Kota Prabumulih',
  ],
} as const;

/** Helper: WhatsApp link dengan prefilled text */
export function waLink(
  message = 'Halo Interior Baturaja, saya ingin konsultasi gratis mengenai pembuatan interior di Baturaja / OKU Raya.'
) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Helper: format tanggal Indonesia */
export function formatDate(date: Date) {
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
