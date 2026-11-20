/**
 * Pemetaan tag artikel -> label tampilan, warna, dan URL filter.
 */
export const TAG_META: Record<
  string,
  { label: string; group: 'layanan' | 'wilayah' | 'edukasi'; href: string }
> = {
  'Kitchen Set': { label: 'Kitchen Set', group: 'layanan', href: '/blog/?tag=Kitchen%20Set' },
  'Lemari & Kamar Set': {
    label: 'Lemari & Kamar Set',
    group: 'layanan',
    href: '/blog/?tag=Lemari%20%26%20Kamar%20Set',
  },
  'Backdrop TV & Partisi': {
    label: 'Backdrop TV & Partisi',
    group: 'layanan',
    href: '/blog/?tag=Backdrop%20TV%20%26%20Partisi',
  },
  'Interior Kantor & Instansi': {
    label: 'Interior Kantor',
    group: 'layanan',
    href: '/blog/?tag=Interior%20Kantor%20%26%20Instansi',
  },
  'Interior Toko, Mall & Booth': {
    label: 'Toko, Mall & Booth',
    group: 'layanan',
    href: '/blog/?tag=Interior%20Toko%2C%20Mall%20%26%20Booth',
  },
  'Edukasi & Material': {
    label: 'Edukasi & Material',
    group: 'edukasi',
    href: '/blog/?tag=Edukasi%20%26%20Material',
  },
  'Harga & RAB': {
    label: 'Harga & RAB',
    group: 'edukasi',
    href: '/blog/?tag=Harga%20%26%20RAB',
  },
  Baturaja: { label: 'Baturaja', group: 'wilayah', href: '/blog/?tag=Baturaja' },
  'OKU Timur': { label: 'OKU Timur', group: 'wilayah', href: '/blog/?tag=OKU%20Timur' },
  'OKU Selatan': { label: 'OKU Selatan', group: 'wilayah', href: '/blog/?tag=OKU%20Selatan' },
  'Muara Enim': { label: 'Muara Enim', group: 'wilayah', href: '/blog/?tag=Muara%20Enim' },
  Prabumulih: { label: 'Prabumulih', group: 'wilayah', href: '/blog/?tag=Prabumulih' },
};

/** Tag layanan utama (untuk filter cepat) */
export const SERVICE_TAGS = Object.entries(TAG_META)
  .filter(([, v]) => v.group === 'layanan')
  .map(([key, v]) => ({ key, ...v }));

export const AREA_TAGS = Object.entries(TAG_META)
  .filter(([, v]) => v.group === 'wilayah')
  .map(([key, v]) => ({ key, ...v }));

/** Tag edukasi & harga (untuk filter blog) */
export const EDU_TAGS = Object.entries(TAG_META)
  .filter(([, v]) => v.group === 'edukasi')
  .map(([key, v]) => ({ key, ...v }));
