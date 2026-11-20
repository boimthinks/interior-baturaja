/**
 * Aturan autolink kontekstual untuk artikel blog.
 * Frasa dicocokkan case-insensitive pada teks paragraf, bukan heading.
 */
export interface AutolinkRule {
  phrase: string;
  url: string;
}

export const AUTOLINK_RULES: AutolinkRule[] = [
  { phrase: 'jasa pembuatan kitchen set baturaja', url: '/layanan/kitchen-set-baturaja/' },
  { phrase: 'kitchen set baturaja', url: '/layanan/kitchen-set-baturaja/' },
  { phrase: 'kitchen set custom', url: '/layanan/kitchen-set-baturaja/' },
  { phrase: 'lemari pakaian custom', url: '/layanan/lemari-custom-kamar-set-baturaja/' },
  { phrase: 'kamar set pengantin', url: '/layanan/lemari-custom-kamar-set-baturaja/' },
  { phrase: 'lemari bawah tangga', url: '/layanan/lemari-custom-kamar-set-baturaja/' },
  { phrase: 'backdrop tv', url: '/layanan/backdrop-tv-partisi-ruangan-baturaja/' },
  { phrase: 'partisi ruangan', url: '/layanan/backdrop-tv-partisi-ruangan-baturaja/' },
  { phrase: 'interior kantor dinas', url: '/layanan/interior-kantor-instansi-baturaja/' },
  { phrase: 'interior kantor', url: '/layanan/interior-kantor-instansi-baturaja/' },
  { phrase: 'booth pameran', url: '/layanan/interior-toko-mall-booth-pameran-baturaja/' },
  { phrase: 'island booth', url: '/layanan/interior-toko-mall-booth-pameran-baturaja/' },
  { phrase: 'interior toko', url: '/layanan/interior-toko-mall-booth-pameran-baturaja/' },
  { phrase: 'jasa interior baturaja', url: '/layanan/' },
  { phrase: 'area layanan', url: '/area-layanan/' },
  { phrase: 'portofolio', url: '/portfolio/' },
];

export const SORTED_AUTOLINK_RULES = [...AUTOLINK_RULES].sort(
  (a, b) => b.phrase.length - a.phrase.length
);
