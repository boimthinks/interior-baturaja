/**
 * Data 5 Halaman Pilar Layanan (Money Pages).
 * Konten ditulis mendalam: paket berjenjang, simulasi RAB, spesifikasi
 * hardware, pertimbangan lokasi, SOP & K3, serta aspek perizinan.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePackage {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  includes: string[];
  bestFor: string;
  highlight?: boolean;
}

export interface PriceRow {
  item: string;
  spec: string;
  unit: string;
  price: string;
}

export interface SpecGroup {
  title: string;
  items: { name: string; detail: string }[];
}

export interface VenueRow {
  venue: string;
  challenge: string;
  solution: string;
}

export interface ProcessStep {
  title: string;
  detail: string;
  duration: string;
}

export interface Service {
  slug: string;
  shortTitle: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  intro: string;
  quickAnswer: string;
  priceFrom: string;
  priceUnit: string;
  packages: ServicePackage[];
  priceTable: PriceRow[];
  specs: SpecGroup[];
  venues: VenueRow[];
  process: ProcessStep[];
  safety: string[];
  permits: { title: string; detail: string }[];
  faqs: ServiceFaq[];
  relatedTags: string[];
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'kitchen-set-baturaja',
    shortTitle: 'Kitchen Set Custom',
    title: 'Jasa Pembuatan Kitchen Set Baturaja — HPL & PVC Anti Rayap',
    h1: 'Jasa Pembuatan Kitchen Set Custom di Baturaja & OKU Raya',
    eyebrow: 'Dapur Custom · HPL Taco · PVC Anti Rayap',
    description:
      'Jasa pembuatan kitchen set Baturaja model lurus, huruf L, dan minibar. Multipleks 18mm HPL Taco atau PVC board anti rayap, engsel soft-close, produksi workshop sendiri, garansi.',
    keywords: [
      'jasa kitchen set baturaja',
      'harga kitchen set per meter baturaja',
      'pembuatan kitchen set minimalis baturaja',
      'kitchen set anti rayap OKU',
      'kitchen set HPL Taco baturaja',
      'kitchen set PVC board baturaja',
    ],
    intro:
      'Dapur di rumah Baturaja punya tantangan khas: udara panas, lantai sering dipel, dan sebagian rumah berada di area yang rawan rayap. Kitchen set yang hanya menggunakan particle board murah akan menggelembung dalam dua sampai tiga tahun. Kami memproduksi kabinet dapur langsung di workshop Banding Agung dengan rangka multipleks 18mm atau PVC board, finishing HPL Taco, dan hardware soft-close yang bisa diservis.',
    quickAnswer:
      'Estimasi biaya kitchen set custom di Baturaja: Rp1.800.000–Rp2.600.000 per meter lari untuk multipleks 18mm + HPL Taco, dan Rp2.500.000–Rp3.200.000 per meter lari untuk PVC board anti rayap. Produksi 14–21 hari kerja setelah desain dan DP disepakati.',
    priceFrom: 'Rp1.800.000',
    priceUnit: 'per meter lari',
    packages: [
      {
        name: 'Paket Hemat',
        tagline: 'Untuk rumah subsidi, kontrakan, dan dapur sederhana',
        price: 'Rp1.650.000',
        unit: 'per meter lari',
        includes: [
          'Multipleks 15mm + HPL lokal',
          'Engsel standar (bukan soft-close)',
          'Layout lurus atau L sederhana',
          'Top table beton/keramik existing',
          'Tanpa minibar dan tanpa lampu kabinet',
        ],
        bestFor: 'Rumah tipe 30–36, kontrakan, atau dapur pendukung di belakang rumah.',
      },
      {
        name: 'Paket Standar',
        tagline: 'Pilihan paling banyak dipesan rumah tinggal di Baturaja',
        price: 'Rp1.950.000',
        unit: 'per meter lari',
        includes: [
          'Multipleks 18mm + HPL Taco 0.8mm',
          'Engsel soft-close Taco/Huben',
          'Rel laci double track',
          'Kabinet atas dan bawah',
          'Edging PVC 2mm rapi',
          'Rak piring stainless steel',
        ],
        bestFor: 'Rumah perumahan Air Paoh, Sukaraya, Kemelak, Sekar Jaya, dan Tanjung Baru.',
        highlight: true,
      },
      {
        name: 'Paket Anti Rayap',
        tagline: 'PVC board penuh untuk dapur lembap dan area rawan rayap',
        price: 'Rp2.650.000',
        unit: 'per meter lari',
        includes: [
          'PVC board 18mm high density (100% anti rayap)',
          'HPL Taco + edging PVC',
          'Engsel soft-close dan rel tandem',
          'Tahan air, tidak menggelembung',
          'Cocok untuk dapur dekat kamar mandi',
        ],
        bestFor: 'Dapur lembap, rumah kayu, area Danau Ranau, dan bangunan dekat sumber air.',
      },
    ],
    priceTable: [
      {
        item: 'Kitchen set bawah (base cabinet)',
        spec: 'Multipleks 18mm + HPL Taco + soft-close',
        unit: 'm¹',
        price: 'Rp1.800.000 – Rp2.200.000',
      },
      {
        item: 'Kitchen set atas (wall cabinet)',
        spec: 'Multipleks 18mm + HPL Taco + rak piring',
        unit: 'm¹',
        price: 'Rp1.600.000 – Rp2.000.000',
      },
      {
        item: 'Kitchen set huruf L lengkap 3 meter',
        spec: 'Atas + bawah + top table granit + backsplash',
        unit: 'paket',
        price: 'Rp9.500.000 – Rp14.000.000',
      },
      {
        item: 'Minibar / breakfast bar',
        spec: 'Multipleks 18mm + HPL + lampu LED strip',
        unit: 'm¹',
        price: 'Rp1.900.000 – Rp2.700.000',
      },
      {
        item: 'Top table granit alam',
        spec: 'Granit 60 cm, tebal 15–20mm, potong sink & kompor',
        unit: 'm¹',
        price: 'Rp1.400.000 – Rp2.100.000',
      },
      {
        item: 'Backsplash WPC fluted',
        spec: 'WPC panel + LED strip warm white',
        unit: 'm²',
        price: 'Rp450.000 – Rp750.000',
      },
      {
        item: 'Kabinet full PVC board',
        spec: 'PVC 18mm + HPL Taco + soft-close',
        unit: 'm¹',
        price: 'Rp2.500.000 – Rp3.200.000',
      },
      {
        item: 'Survey, desain 3D & instalasi',
        spec: 'Pengukuran, gambar kerja, pengiriman, perakitan',
        unit: 'proyek',
        price: 'Sudah termasuk',
      },
    ],
    specs: [
      {
        title: 'Struktur Kabinet',
        items: [
          {
            name: 'Multipleks / plywood 18mm',
            detail:
              'Bukan particle board. Sekrup tidak mudah dol, kuat menahan beban piring dan peralatan dapur.',
          },
          {
            name: 'PVC board 18mm',
            detail:
              'Alternatif anti rayap dan tahan air untuk dapur lembap. Tidak menggelembung saat terkena cipratan.',
          },
          {
            name: 'Rangka kaki & plint',
            detail:
              'Kaki adjustable agar kabinet tetap rata di lantai yang tidak presisi, plint PVC melindungi bagian bawah dari air pel.',
          },
        ],
      },
      {
        title: 'Finishing',
        items: [
          {
            name: 'HPL Taco 0.8mm',
            detail:
              'Tahan gores, tahan panas, mudah dibersihkan. Motif serat kayu, marmer, solid matte, dan glossy.',
          },
          {
            name: 'Edging PVC 2mm',
            detail:
              'Dipasang rapi dengan lem khusus dan trimmer, tidak mudah terkelupas seperti edging tipis.',
          },
          {
            name: 'Sealant tepi top table',
            detail:
              'Silikon anti jamur di pertemuan granit dan dinding untuk mencegah rembesan air ke kabinet.',
          },
        ],
      },
      {
        title: 'Hardware & Aksesoris',
        items: [
          {
            name: 'Engsel soft-close',
            detail:
              'Merk Taco atau Huben. Pintu menutup perlahan, tidak berbunyi bantingan, dan bisa disetel.',
          },
          {
            name: 'Rel laci double track',
            detail:
              'Baja dengan bantalan nylon, menarik lebih stabil untuk laci berat berisi alat masak.',
          },
          {
            name: 'Rak piring & rak botol stainless',
            detail:
              'Modul tarik atau tetap, tahan karat, mudah dilepas untuk dibersihkan.',
          },
          {
            name: 'Lampu LED strip',
            detail:
              'Warm white 3000K di bawah kabinet atas, memberi penerangan area potong tanpa bayangan.',
          },
        ],
      },
    ],
    venues: [
      {
        venue: 'Rumah subsidi tipe 36 di Baturaja',
        challenge: 'Dapur sempit 1,5 × 3 meter, pintu dan jendela saling berhadapan.',
        solution:
          'Layout L dua sisi tanpa island, kabinet atas sampai plafon, top table granit 60 cm, dan rak gantung untuk menghemat ruang.',
      },
      {
        venue: 'Rumah perumahan Air Paoh / Sukaraya',
        challenge: 'Dapur relatif luas tetapi ingin terlihat modern dan menyatu dengan ruang makan.',
        solution:
          'Kitchen set L + island minibar, backsplash WPC fluted, lampu gantung, dan HPL motif marmer yang mudah dirawat.',
      },
      {
        venue: 'Dapur lembap dekat Danau Ranau',
        challenge: 'Kelembapan tinggi, dinding sering berembun, risiko rayap dan jamur.',
        solution:
          'Full PVC board, sealer dinding, plint PVC, dan ventilasi tambahan. Tidak memakai multipleks di area bawah.',
      },
      {
        venue: 'Kontrakan / kos mahasiswa',
        challenge: 'Budget terbatas tetapi harus tahan pemakaian berganti penghuni.',
        solution:
          'Paket hemat multipleks 15mm dengan HPL solid, modul sederhana, dan top table keramik yang mudah diganti.',
      },
    ],
    process: [
      {
        title: 'Konsultasi & kirim ukuran',
        detail:
          'Kirim foto dapur dan ukuran kasar via WhatsApp. Kami beri estimasi awal dan opsi layout.',
        duration: '1 hari',
      },
      {
        title: 'Survey & pengukuran presisi',
        detail:
          'Tim mengukur di lokasi, cek posisi pipa, stop kontak, dan tinggi plafon sebelum desain difinalkan.',
        duration: '1–2 hari',
      },
      {
        title: 'Desain 3D & RAB',
        detail:
          'Anda menerima visual 3D, pilihan motif HPL, dan rincian biaya per item sebelum DP.',
        duration: '2–3 hari',
      },
      {
        title: 'Produksi di workshop',
        detail:
          'Pemotongan, edging, perakitan modul, dan QC dilakukan di workshop Banding Agung, bukan di rumah Anda.',
        duration: '10–14 hari',
      },
      {
        title: 'Instalasi & serah terima',
        detail:
          'Pengiriman, pemasangan, penyetelan engsel, pembersihan, dan garansi pemeliharaan.',
        duration: '2–3 hari',
      },
    ],
    safety: [
      'Pemotongan dan pengecatan dilakukan di workshop, sehingga rumah klien bebas debu kayu dan bau lem.',
      'Instalasi listrik untuk lampu kabinet dikerjakan oleh teknisi dan diuji sebelum diserahkan.',
      'Peralatan kerja dibawa lengkap; lokasi kerja dilapisi pelindung lantai dan dibersihkan setiap hari.',
      'Pekerja memakai alat pelindung diri saat instalasi di rumah yang sudah dihuni.',
    ],
    permits: [
      {
        title: 'Izin lingkungan perumahan',
        detail:
          'Untuk rumah di cluster, kami menyesuaikan jam kerja dan surat izin renovasi yang diminta pengelola.',
      },
      {
        title: 'Perubahan instalasi air & listrik',
        detail:
          'Pemindahan pipa atau stop kontak dikoordinasikan dengan tukang/teknisi berwenang agar tidak melanggar instalasi awal.',
      },
      {
        title: 'Garansi & serah terima',
        detail:
          'Berita acara serah terima mencantumkan spesifikasi material, jumlah modul, dan masa garansi tertulis.',
      },
    ],
    faqs: [
      {
        q: 'Berapa harga kitchen set per meter di Baturaja?',
        a: 'Untuk multipleks 18mm dengan HPL Taco dan engsel soft-close, kisaran Rp1.800.000–Rp2.600.000 per meter lari. Full PVC board anti rayap Rp2.500.000–Rp3.200.000 per meter lari. Harga final tergantung panjang kabinet, jumlah laci, top table, dan aksesori.',
      },
      {
        q: 'Apakah bisa hanya membuat kabinet bawah tanpa kabinet atas?',
        a: 'Bisa. Banyak pelanggan di Baturaja memilih kabinet bawah dan top table lebih dulu, lalu menambah kabinet atas pada tahap berikutnya. Modul dibuat dengan sistem yang memudahkan penambahan tanpa membongkar kabinet lama.',
      },
      {
        q: 'Lebih baik multipleks atau PVC board untuk dapur di OKU?',
        a: 'Jika dapur kering dan berventilasi baik, multipleks 18mm HPL lebih hemat dan cukup awet. Jika dapur dekat kamar mandi, sering terkena cipratan, atau berada di area lembap seperti Danau Ranau, PVC board lebih aman karena tidak menyerap air dan anti rayap.',
      },
      {
        q: 'Berapa lama proses pembuatan kitchen set?',
        a: 'Rata-rata 14–21 hari kerja sejak desain 3D dan DP disepakati. Untuk model sederhana tanpa top table granit bisa lebih cepat. Kami memberi jadwal produksi tertulis agar Anda bisa menyiapkan waktu instalasi.',
      },
      {
        q: 'Apakah top table granit termasuk dalam harga?',
        a: 'Top table granit dihitung terpisah karena harga mengikuti panjang dan jenis granit. Kami tetap menyusunnya dalam RAB yang sama agar total biaya transparan sejak awal.',
      },
      {
        q: 'Bagaimana sistem pembayaran dan garansi?',
        a: 'Pembayaran umumnya DP 50% setelah desain disetujui, pelunasan setelah instalasi selesai dan Anda memeriksa hasilnya. Garansi mencakup konstruksi kabinet serta penyetelan engsel dan rel.',
      },
      {
        q: 'Apakah melayani kitchen set di luar Baturaja?',
        a: 'Ya. Kami melayani Muaradua, Banding Agung, Martapura, Gumawang Belitang, Muara Enim, Tanjung Enim, dan Prabumulih. Biaya pengiriman dan akomodasi tim dihitung terpisah sesuai jarak.',
      },
    ],
    relatedTags: ['Kitchen Set'],
    imageAlt:
      'Kitchen set minimalis HPL Taco dengan top table granit di rumah Baturaja',
  },
  {
    slug: 'lemari-custom-kamar-set-baturaja',
    shortTitle: 'Lemari & Kamar Set',
    title: 'Pembuatan Lemari Pakaian Custom & Kamar Set Baturaja',
    h1: 'Lemari Pakaian Custom, Walk-In Closet & Kamar Set Pengantin di Baturaja',
    eyebrow: 'Lemari Sliding · Full Plafon · Kamar Set',
    description:
      'Jasa pembuatan lemari pakaian custom Baturaja: pintu sliding, swing, full plafon, walk-in closet, lemari bawah tangga, dan paket kamar set pengantin. Multipleks 18mm HPL Taco, garansi.',
    keywords: [
      'lemari pakaian custom baturaja',
      'harga lemari sliding baturaja',
      'kamar set pengantin baturaja',
      'lemari bawah tangga baturaja',
      'walk in closet OKU',
      'furniture kamar custom baturaja',
    ],
    intro:
      'Lemari pabrikan sering menyisakan celah di atas dan samping, sehingga debu menumpuk dan ruangan terasa sempit. Lemari custom dibuat mengikuti ukuran dinding, tinggi plafon, dan kebutuhan penyimpanan Anda. Untuk kamar di Baturaja yang cenderung panas, kami memakai multipleks 18mm dengan finishing HPL yang tidak memuai, ditambah ventilasi internal agar pakaian tidak berbau apek.',
    quickAnswer:
      'Harga lemari pakaian custom di Baturaja berkisar Rp1.900.000–Rp2.700.000 per meter persegi untuk multipleks 18mm + HPL Taco. Pintu sliding menambah Rp300.000–Rp500.000 per meter persegi. Paket kamar set pengantin lengkap mulai Rp12.000.000.',
    priceFrom: 'Rp1.900.000',
    priceUnit: 'per meter persegi',
    packages: [
      {
        name: 'Lemari Sliding 2 Pintu',
        tagline: 'Solusi kamar sempit di rumah tipe 36–45',
        price: 'Rp4.500.000',
        unit: 'mulai dari',
        includes: [
          'Multipleks 18mm + HPL Taco',
          'Pintu sliding kaca/panel',
          'Rel sliding heavy duty',
          'Rak gantung + rak lipat',
          'Laci kecil di bagian bawah',
        ],
        bestFor: 'Kamar utama atau kamar anak dengan ruang gerak terbatas.',
      },
      {
        name: 'Lemari Full Plafon',
        tagline: 'Penyimpanan maksimal tanpa celah debu',
        price: 'Rp2.100.000',
        unit: 'per meter persegi',
        includes: [
          'Tinggi sampai plafon',
          'Pintu swing dengan soft-close',
          'Modul rak, laci, dan gantungan',
          'Cermin internal + LED strip',
          'Finishing HPL motif kayu/marmer',
        ],
        bestFor: 'Kamar utama dengan plafon tinggi dan kebutuhan pakaian keluarga.',
        highlight: true,
      },
      {
        name: 'Kamar Set Pengantin',
        tagline: 'Paket lengkap siap huni untuk kamar pengantin',
        price: 'Rp12.000.000',
        unit: 'mulai dari',
        includes: [
          'Lemari pakaian 3–4 m²',
          'Dipan kasur custom + headboard',
          '2 nakas gantung',
          'Meja rias + cermin LED',
          'Rak TV atau rak pajangan',
        ],
        bestFor: 'Rumah baru, kamar pengantin, atau renovasi kamar utama.',
      },
    ],
    priceTable: [
      {
        item: 'Lemari pakaian swing',
        spec: 'Multipleks 18mm + HPL Taco, tinggi 2,4 m',
        unit: 'm²',
        price: 'Rp1.900.000 – Rp2.400.000',
      },
      {
        item: 'Lemari pakaian pintu sliding',
        spec: 'Rel heavy duty + kaca/panel HPL',
        unit: 'm²',
        price: 'Rp2.200.000 – Rp2.700.000',
      },
      {
        item: 'Walk-in closet',
        spec: 'Rak terbuka, laci, cermin, LED strip',
        unit: 'm²',
        price: 'Rp2.300.000 – Rp3.000.000',
      },
      {
        item: 'Dipan kasur storage',
        spec: 'Multipleks 18mm + hidrolik + laci',
        unit: 'unit',
        price: 'Rp3.500.000 – Rp6.500.000',
      },
      {
        item: 'Meja rias + cermin LED',
        spec: 'HPL + kaca bevel + lampu warm white',
        unit: 'unit',
        price: 'Rp2.200.000 – Rp4.000.000',
      },
      {
        item: 'Lemari bawah tangga',
        spec: 'Custom mengikuti kemiringan tangga',
        unit: 'm²',
        price: 'Rp1.900.000 – Rp2.600.000',
      },
      {
        item: 'Nakas gantung',
        spec: '2 laci + soft-close',
        unit: 'unit',
        price: 'Rp850.000 – Rp1.400.000',
      },
    ],
    specs: [
      {
        title: 'Material & Struktur',
        items: [
          {
            name: 'Multipleks 18mm',
            detail:
              'Rangka kokoh untuk pintu besar. Tidak mudah melengkung meski menyangga pakaian berat.',
          },
          {
            name: 'Backing panel 9–12mm',
            detail:
              'Bagian belakang tetap tertutup rapi agar serangga dan debu tidak masuk dari celah dinding.',
          },
          {
            name: 'Plint & kaki adjustable',
            detail:
              'Menjaga kabinet tetap rata dan melindungi bagian bawah dari air saat mengepel.',
          },
        ],
      },
      {
        title: 'Pintu & Mekanisme',
        items: [
          {
            name: 'Rel sliding heavy duty',
            detail:
              'Bantalan nylon dan track aluminium, tidak macet meski pintu lebar dan berat.',
          },
          {
            name: 'Engsel soft-close',
            detail:
              'Untuk pintu swing dan kabinet atas, menutup perlahan dan bisa disetel posisinya.',
          },
          {
            name: 'Handle minimalis',
            detail:
              'Profil aluminium, handle tarik, atau push-to-open sesuai tema kamar.',
          },
        ],
      },
      {
        title: 'Interior & Pencahayaan',
        items: [
          {
            name: 'Modul rak fleksibel',
            detail:
              'Rak gantung, rak lipat, laci, dan sekat dapat dipindah sesuai kebutuhan.',
          },
          {
            name: 'LED strip sensor',
            detail:
              'Lampu menyala saat pintu dibuka, membantu mencari pakaian tanpa menyalakan lampu utama.',
          },
          {
            name: 'Ventilasi tersembunyi',
            detail:
              'Celah ventilasi kecil di bagian belakang mengurangi kelembapan dalam lemari.',
          },
        ],
      },
    ],
    venues: [
      {
        venue: 'Kamar utama rumah tipe 36',
        challenge: 'Luas kamar sekitar 3 × 3 meter, pintu kamar mandi di dalam.',
        solution:
          'Lemari sliding dua pintu sampai plafon di dinding pendek, cermin di sisi dalam, dan nakas gantung agar lantai tetap lega.',
      },
      {
        venue: 'Kamar anak di Baturaja Timur',
        challenge: 'Dua anak berbagi kamar, butuh tempat tidur dan meja belajar.',
        solution:
          'Tempat tidur tingkat custom, lemari masing-masing, dan meja belajar menyatu di bawah tangga tempat tidur.',
      },
      {
        venue: 'Rumah panggung / kayu di Ranau',
        challenge: 'Dinding tidak rata dan lantai sedikit miring.',
        solution:
          'Kabinet dibuat dengan rangka terpisah dan shim adjustable, sehingga tidak memaksa dinding atau lantai.',
      },
      {
        venue: 'Kamar pengantin di Muaradua',
        challenge: 'Ingin tampilan hotel tetapi tetap sesuai budget.',
        solution:
          'Paket kamar set dengan headboard tinggi, dipan storage, meja rias LED, dan HPL motif walnut.',
      },
    ],
    process: [
      {
        title: 'Diskusi kebutuhan penyimpanan',
        detail:
          'Kami hitung jumlah pakaian, sepatu, tas, dan kebutuhan khusus seperti setrika atau brankas.',
        duration: '1 hari',
      },
      {
        title: 'Pengukuran & cek dinding',
        detail:
          'Mengukur tinggi plafon, posisi saklar, kemiringan lantai, dan jalur pintu agar tidak benturan.',
        duration: '1 hari',
      },
      {
        title: 'Desain & pilih HPL',
        detail:
          'Anda melihat gambar 3D dan sampel HPL sebelum produksi dimulai.',
        duration: '2–3 hari',
      },
      {
        title: 'Produksi modular',
        detail:
          'Modul diproduksi di workshop, termasuk pengeboran dan pemasangan hardware.',
        duration: '10–16 hari',
      },
      {
        title: 'Instalasi & penyetelan',
        detail:
          'Perakitan di kamar, penyetelan pintu, pemasangan cermin/LED, dan pembersihan.',
        duration: '1–2 hari',
      },
    ],
    safety: [
      'Pemasangan cermin dan kaca menggunakan bracket serta lem khusus yang aman.',
      'Instalasi LED memakai adaptor berstandar dan jalur kabel tersembunyi.',
      'Debu hasil pemotongan tidak masuk ke kamar karena produksi dilakukan di workshop.',
      'Pekerja memakai sarung tangan dan masker saat instalasi di ruangan tertutup.',
    ],
    permits: [
      {
        title: 'Izin renovasi cluster',
        detail:
          'Untuk perubahan yang menempel permanen di dinding, kami membantu menyiapkan gambar kerja bila pengelola perumahan meminta.',
      },
      {
        title: 'Titik listrik tambahan',
        detail:
          'Penambahan stop kontak untuk lampu lemari dikoordinasikan agar tidak membebani jalur yang sudah ada.',
      },
      {
        title: 'Garansi hardware',
        detail:
          'Rel sliding, engsel, dan LED memiliki masa garansi yang dicantumkan dalam nota serah terima.',
      },
    ],
    faqs: [
      {
        q: 'Berapa harga lemari pakaian custom di Baturaja?',
        a: 'Kisaran Rp1.900.000–Rp2.700.000 per meter persegi tergantung material, jenis pintu, dan aksesori. Lemari sliding umumnya lebih mahal karena rel dan pintu, sedangkan lemari swing lebih ekonomis.',
      },
      {
        q: 'Apakah lemari bisa dibuat sampai plafon?',
        a: 'Bisa dan sangat disarankan untuk kamar dengan plafon 2,8–3,2 meter. Bagian atas dipakai untuk barang musiman, sehingga tidak ada celah debu dan ruangan terlihat lebih rapi.',
      },
      {
        q: 'Lebih baik sliding atau swing untuk kamar sempit?',
        a: 'Untuk kamar sempit, sliding lebih hemat ruang karena pintu tidak memerlukan area buka. Namun sliding membutuhkan lebar dinding yang cukup dan rel berkualitas agar tidak macet.',
      },
      {
        q: 'Apakah bisa membuat lemari di bawah tangga?',
        a: 'Bisa. Kami mengukur kemiringan tangga dan membuat modul bertingkat agar setiap sentimeter terpakai, biasanya untuk lemari pakaian, sepatu, atau gudang.',
      },
      {
        q: 'Berapa lama pembuatan kamar set pengantin?',
        a: 'Rata-rata 18–25 hari kerja karena mencakup lemari, dipan, nakas, dan meja rias. Kami menyarankan pemesanan minimal satu bulan sebelum acara.',
      },
      {
        q: 'Apakah HPL bisa mengelupas saat cuaca panas?',
        a: 'HPL berkualitas dengan proses press yang benar tidak mudah mengelupas. Kami memakai lem khusus dan melakukan perataan permukaan sebelum pengepresan, serta menghindari pemasangan di dinding yang masih lembap.',
      },
      {
        q: 'Bisakah memesan hanya lemari tanpa kamar set?',
        a: 'Tentu. Paket kamar set bersifat opsional. Anda bisa memesan lemari, dipan, atau meja rias secara terpisah sesuai kebutuhan.',
      },
    ],
    relatedTags: ['Lemari & Kamar Set'],
    imageAlt:
      'Lemari pakaian custom pintu sliding full plafon dengan cermin dan LED di kamar Baturaja',
  },
  {
    slug: 'backdrop-tv-partisi-ruangan-baturaja',
    shortTitle: 'Backdrop TV & Partisi',
    title: 'Pembuatan Backdrop TV & Partisi Ruangan Minimalis Baturaja',
    h1: 'Backdrop TV, Credenza & Partisi Ruangan Custom di Baturaja',
    eyebrow: 'Ruang Tamu · WPC · Partisi Dua Sisi',
    description:
      'Jasa pembuatan backdrop TV minimalis HPL, WPC fluted panel, credenza gantung, partisi ruangan dua sisi, sekat sliding, dan rak sepatu foyer di Baturaja. Rapi, kabel tersembunyi, bergaransi.',
    keywords: [
      'backdrop tv minimalis baturaja',
      'harga backdrop tv baturaja',
      'partisi ruangan minimalis baturaja',
      'wallpanel WPC baturaja',
      'sekat ruangan sliding baturaja',
      'credenza gantung TV',
    ],
    intro:
      'Ruang tamu adalah area pertama yang dilihat tamu, tetapi sering dipenuhi kabel, router, dan barang kecil. Backdrop TV custom bukan sekadar dinding hias: di dalamnya bisa disembunyikan jalur kabel, stop kontak, rak perangkat, dan penyimpanan. Untuk rumah di Baturaja yang banyak memakai ruang tamu terbuka, partisi dua sisi membantu memisahkan area tanpa membuat ruangan terasa sempit.',
    quickAnswer:
      'Harga backdrop TV di Baturaja berkisar Rp1.700.000–Rp2.500.000 per meter persegi untuk multipleks 18mm + HPL, atau Rp2.200.000–Rp3.000.000 per meter persegi bila memakai WPC fluted panel dan lampu LED. Partisi dua sisi dihitung per meter persegi dengan kisaran serupa.',
    priceFrom: 'Rp1.700.000',
    priceUnit: 'per meter persegi',
    packages: [
      {
        name: 'Backdrop TV Minimalis',
        tagline: 'Fokus pada tampilan bersih dan kabel tersembunyi',
        price: 'Rp3.500.000',
        unit: 'mulai dari',
        includes: [
          'Panel HPL motif marmer/kayu',
          'Rangka multipleks 18mm',
          'Jalur kabel & stop kontak tersembunyi',
          'Rak perangkat TV',
          'Tanpa credenza',
        ],
        bestFor: 'Ruang tamu sederhana atau kamar dengan TV dinding.',
      },
      {
        name: 'Backdrop + Credenza',
        tagline: 'Paling populer untuk rumah baru dan renovasi',
        price: 'Rp6.500.000',
        unit: 'mulai dari',
        includes: [
          'Backdrop HPL + WPC fluted',
          'Credenza gantung dengan laci',
          'Lampu LED strip warm white',
          'Manajemen kabel & ventilasi perangkat',
          'Rak pajangan di sisi backdrop',
        ],
        bestFor: 'Ruang tamu rumah tipe 45–70 di perumahan Baturaja.',
        highlight: true,
      },
      {
        name: 'Partisi Ruangan Dua Sisi',
        tagline: 'Penyekat multifungsi dengan tampilan dari dua arah',
        price: 'Rp1.900.000',
        unit: 'per meter persegi',
        includes: [
          'Rangka multipleks 18mm dua sisi',
          'Finishing HPL kedua sisi',
          'Rak display tembus pandang',
          'Opsi pintu sliding',
          'Lampu LED opsional',
        ],
        bestFor: 'Memisahkan ruang tamu, ruang keluarga, mushola, atau area kerja.',
      },
    ],
    priceTable: [
      {
        item: 'Backdrop TV HPL',
        spec: 'Multipleks 18mm + HPL Taco + jalur kabel',
        unit: 'm²',
        price: 'Rp1.700.000 – Rp2.500.000',
      },
      {
        item: 'Backdrop TV + WPC fluted',
        spec: 'WPC panel + HPL + LED strip',
        unit: 'm²',
        price: 'Rp2.200.000 – Rp3.000.000',
      },
      {
        item: 'Credenza gantung',
        spec: '2–3 laci, soft-close, tanpa kaki',
        unit: 'm¹',
        price: 'Rp1.800.000 – Rp2.600.000',
      },
      {
        item: 'Partisi ruangan dua sisi',
        spec: 'HPL dua sisi + rak display',
        unit: 'm²',
        price: 'Rp1.900.000 – Rp2.700.000',
      },
      {
        item: 'Sekat sliding ruangan',
        spec: 'Rel atas + panel HPL/kaca',
        unit: 'm²',
        price: 'Rp2.300.000 – Rp3.200.000',
      },
      {
        item: 'Rak sepatu + bangku foyer',
        spec: 'Custom menyatu dekat pintu masuk',
        unit: 'm¹',
        price: 'Rp1.500.000 – Rp2.400.000',
      },
      {
        item: 'Sekat mushola minimalis',
        spec: 'Kisi HPL + panel solid + pintu',
        unit: 'm²',
        price: 'Rp2.000.000 – Rp2.800.000',
      },
    ],
    specs: [
      {
        title: 'Struktur & Panel',
        items: [
          {
            name: 'Rangka multipleks 18mm',
            detail:
              'Panel backdrop tidak hanya menempel di dinding, tetapi punya rangka agar aman untuk TV besar.',
          },
          {
            name: 'WPC fluted panel',
            detail:
              'Panel bergelombang tahan lembap, ringan, dan tidak perlu dicat ulang. Tersedia motif kayu dan warna solid.',
          },
          {
            name: 'Rangka hollow untuk partisi besar',
            detail:
              'Untuk partisi tinggi atau sekat ruang rapat, rangka besi hollow memberi kekakuan tambahan.',
          },
        ],
      },
      {
        title: 'Finishing',
        items: [
          {
            name: 'HPL motif marmer',
            detail:
              'Memberi kesan mewah dengan biaya lebih rendah dibanding marmer asli, dan mudah dibersihkan.',
          },
          {
            name: 'HPL motif kayu',
            detail:
              'Cocok untuk konsep Japandi, Scandinavian, atau rustic modern yang sedang banyak dipilih.',
          },
          {
            name: 'Profil aluminium & edging',
            detail:
              'Menyelesaikan tepi panel agar rapi dan tidak mudah terkelupas.',
          },
        ],
      },
      {
        title: 'Kelistrikan & Detail',
        items: [
          {
            name: 'Manajemen kabel',
            detail:
              'Kabel TV, router, dan konsol disembunyikan di dalam panel dengan akses servis.',
          },
          {
            name: 'Ventilasi perangkat',
            detail:
              'Celah tersembunyi menjaga suhu receiver dan router agar tidak cepat panas.',
          },
          {
            name: 'LED strip & track light',
            detail:
              'Pencahayaan tidak langsung membuat ruang tamu terasa lebih hangat dan mahal.',
          },
        ],
      },
    ],
    venues: [
      {
        venue: 'Ruang tamu memanjang tipe 36',
        challenge: 'Ruang sempit dan memanjang, TV dan sofa berdesakan.',
        solution:
          'Backdrop tipis 12 cm dengan credenza gantung, TV dinding, dan rak vertikal di sisi kanan untuk menyimpan barang kecil.',
      },
      {
        venue: 'Rumah perumahan Sekar Jaya',
        challenge: 'Ingin kesan mewah tanpa renovasi besar.',
        solution:
          'Kombinasi HPL marmer dan WPC fluted, lampu LED tersembunyi, serta panel akustik tipis di sisi backdrop.',
      },
      {
        venue: 'Ruang tamu + ruang keluarga terbuka',
        challenge: 'Tidak ada sekat, suara TV mengganggu area belajar anak.',
        solution:
          'Partisi dua sisi dengan rak display tembus pandang dan pintu sliding, tetap membiarkan cahaya masuk.',
      },
      {
        venue: 'Rumah dengan banyak kabel perangkat',
        challenge: 'Router, receiver, dan konsol berserakan di lantai.',
        solution:
          'Credenza dengan kompartemen perangkat, ventilasi, lubang kabel, dan stop kontak di dalam kabinet.',
      },
    ],
    process: [
      {
        title: 'Ukur dinding & posisi TV',
        detail:
          'Kami cek lebar dinding, tinggi TV, posisi stop kontak, dan jalur kabel yang ada.',
        duration: '1 hari',
      },
      {
        title: 'Pilih konsep & material',
        detail:
          'Diskusi motif HPL, WPC, warna LED, dan apakah perlu credenza atau rak display.',
        duration: '1–2 hari',
      },
      {
        title: 'Desain 3D',
        detail:
          'Visualisasi tampak depan dan sudut ruang agar proporsi sesuai ukuran ruangan.',
        duration: '2 hari',
      },
      {
        title: 'Produksi panel',
        detail:
          'Panel dipotong dan difinishing di workshop, termasuk lubang kabel dan dudukan TV.',
        duration: '7–12 hari',
      },
      {
        title: 'Instalasi & finishing',
        detail:
          'Pemasangan panel, credenza, LED, dan penyetelan akhir di lokasi.',
        duration: '1–2 hari',
      },
    ],
    safety: [
      'Dudukan TV dihitung berdasarkan berat dan ukuran TV, bukan hanya ketebalan panel.',
      'Jalur kabel dipisahkan dari jalur air dan diberi akses servis.',
      'Pemasangan lampu LED memakai adaptor berstandar dan tidak membebani stop kontak yang ada.',
      'Area kerja dilindungi agar lantai dan furnitur existing tidak tergores.',
    ],
    permits: [
      {
        title: 'Izin pengelola perumahan',
        detail:
          'Untuk perubahan fasad atau panel yang menempel di dinding luar, kami menyesuaikan aturan cluster.',
      },
      {
        title: 'Instalasi listrik',
        detail:
          'Penambahan titik lampu dan stop kontak dikerjakan dengan memperhatikan kapasitas MCB.',
      },
      {
        title: 'Persetujuan desain',
        detail:
          'Gambar kerja disetujui sebelum produksi agar tidak ada perubahan di tengah pengerjaan.',
      },
    ],
    faqs: [
      {
        q: 'Berapa harga backdrop TV minimalis di Baturaja?',
        a: 'Mulai Rp3.500.000 untuk backdrop sederhana tanpa credenza. Untuk backdrop dengan WPC fluted, credenza gantung, dan LED, kisaran Rp6.500.000–Rp12.000.000 tergantung ukuran dan material.',
      },
      {
        q: 'Apakah kabel TV dan router bisa disembunyikan?',
        a: 'Bisa. Kami membuat rongga kabel, lubang akses, dan kompartemen perangkat di dalam backdrop atau credenza. Stop kontak juga bisa dipindahkan ke dalam kabinet agar tampilan depan bersih.',
      },
      {
        q: 'Partisi dua sisi itu seperti apa?',
        a: 'Partisi yang kedua sisinya difinishing rapi, sehingga bisa dinikmati dari ruang tamu maupun ruang keluarga. Bisa dilengkapi rak display tembus pandang atau pintu sliding.',
      },
      {
        q: 'Apakah partisi membuat ruangan terasa sempit?',
        a: 'Jika dirancang dengan bukaan dan material ringan, justru sebaliknya. Kami sering memakai rak tembus pandang, kisi, atau pintu kaca agar cahaya dan sirkulasi udara tetap mengalir.',
      },
      {
        q: 'Bisa pasang backdrop TV di dinding gypsum?',
        a: 'Bisa, tetapi perlu rangka yang ditambatkan ke struktur dinding, bukan hanya ke gypsum. Kami akan memeriksa kondisi dinding sebelum menentukan metode pemasangan.',
      },
      {
        q: 'Berapa lama pengerjaan backdrop dan partisi?',
        a: 'Rata-rata 10–16 hari kerja untuk produksi dan 1–2 hari instalasi. Proyek dengan kaca atau WPC khusus bisa sedikit lebih lama.',
      },
    ],
    relatedTags: ['Backdrop TV & Partisi'],
    imageAlt:
      'Backdrop TV minimalis HPL marmer dengan WPC fluted panel dan credenza gantung di ruang tamu Baturaja',
  },
  {
    slug: 'interior-kantor-instansi-baturaja',
    shortTitle: 'Interior Kantor & Instansi',
    title: 'Kontraktor Interior Kantor Dinas & Instansi Baturaja OKU Raya',
    h1: 'Interior Kantor Dinas, Ruang Rapat & Front Office di Baturaja, OKU Raya',
    eyebrow: 'Kantor Dinas · Front Office · Ruang Rapat',
    description:
      'Kontraktor interior kantor dan instansi di Baturaja, Martapura, Muaradua: meja resepsionis, backdrop pelayanan, ruang kerja pejabat, ruang rapat, workstation, pantry, dan interior villa/homestay Danau Ranau.',
    keywords: [
      'jasa interior kantor baturaja',
      'kontraktor interior kantor dinas OKU',
      'meja resepsionis kantor baturaja',
      'interior ruang rapat martapura',
      'interior villa danau ranau',
      'interior mess karyawan tanjung enim',
    ],
    intro:
      'Kantor dinas dan instansi di OKU Raya bukan hanya tempat bekerja, tetapi juga wajah pelayanan publik. Ruang tunggu yang nyaman, meja resepsionis yang jelas, dan ruang rapat yang kedap suara memberi kesan profesional sekaligus mempercepat pekerjaan. Kami mengerjakan fit-out kantor dari skala satu ruangan hingga gedung, dengan memperhatikan jalur kabel, keamanan dokumen, dan aturan pengadaan yang berlaku.',
    quickAnswer:
      'Estimasi interior kantor di Baturaja: meja resepsionis Rp2.000.000–Rp2.800.000 per meter lari, workstation Rp1.500.000–Rp2.500.000 per unit, dan paket ruang rapat 8 orang Rp35.000.000–Rp80.000.000 tergantung ukuran, akustik, dan material.',
    priceFrom: 'Rp2.000.000',
    priceUnit: 'per meter lari (resepsionis)',
    packages: [
      {
        name: 'Front Office & Pelayanan',
        tagline: 'Kesan profesional di titik pertama pelayanan',
        price: 'Rp18.000.000',
        unit: 'mulai dari',
        includes: [
          'Meja resepsionis custom',
          'Backdrop logo & huruf timbul',
          'Rak arsip / berkas pelayanan',
          'Bench tunggu + meja tamu',
          'Lampu sorot & downlight',
        ],
        bestFor: 'Kantor dinas, klinik, bank, koperasi, dan kantor pelayanan publik.',
        highlight: true,
      },
      {
        name: 'Ruang Kerja Pejabat',
        tagline: 'Ruang kerja representatif untuk kepala dinas/direksi',
        price: 'Rp25.000.000',
        unit: 'mulai dari',
        includes: [
          'Meja kerja besar + credenza',
          'Rak buku & kabinet arsip',
          'Meja rapat kecil 4 kursi',
          'Partisi privasi / backdrop',
          'Panel akustik & pencahayaan',
        ],
        bestFor: 'Kepala dinas, direktur, camat, dan pimpinan instansi.',
      },
      {
        name: 'Ruang Rapat & Workstation',
        tagline: 'Kolaborasi tim dengan akustik yang nyaman',
        price: 'Rp35.000.000',
        unit: 'paket ruang rapat',
        includes: [
          'Meja rapat 8–12 orang',
          'Partisi akustik / kedap suara',
          'Workstation kubikel',
          'Papan tulis & layar presentasi',
          'Jalur kabel & stop kontak',
        ],
        bestFor: 'Kantor pemerintah, BUMN, perusahaan tambang, dan sekolah.',
      },
    ],
    priceTable: [
      {
        item: 'Meja resepsionis',
        spec: 'Multipleks 18mm + HPL marmer + LED strip',
        unit: 'm¹',
        price: 'Rp2.000.000 – Rp2.800.000',
      },
      {
        item: 'Backdrop logo & huruf timbul',
        spec: 'Panel HPL + akrilik LED / neon box',
        unit: 'm²',
        price: 'Rp1.800.000 – Rp3.200.000',
      },
      {
        item: 'Workstation kubikel',
        spec: 'Partisi 120 cm + meja + laci',
        unit: 'unit',
        price: 'Rp1.500.000 – Rp2.500.000',
      },
      {
        item: 'Meja rapat 8 orang',
        spec: 'HPL + jalur kabel + modesty panel',
        unit: 'unit',
        price: 'Rp8.000.000 – Rp15.000.000',
      },
      {
        item: 'Partisi akustik ruang rapat',
        spec: 'Rangka hollow + rockwool + fabric panel',
        unit: 'm²',
        price: 'Rp1.900.000 – Rp3.000.000',
      },
      {
        item: 'Pantry / kitchenette kantor',
        spec: 'Kabinet HPL + sink + top table',
        unit: 'm¹',
        price: 'Rp1.900.000 – Rp2.700.000',
      },
      {
        item: 'Interior villa/homestay Danau Ranau',
        spec: 'Paket kamar, lobby, dan area makan',
        unit: 'paket',
        price: 'Sesuai RAB & luas',
      },
    ],
    specs: [
      {
        title: 'Material & Keamanan',
        items: [
          {
            name: 'Multipleks 18mm + HPL',
            detail:
              'Kuat untuk meja kerja dan kabinet arsip. Finishing mudah dibersihkan dan tahan gores.',
          },
          {
            name: 'Panel akustik',
            detail:
              'Rockwool dan fabric panel mengurangi gema di ruang rapat dan ruang pelayanan.',
          },
          {
            name: 'Kabel & data',
            detail:
              'Jalur listrik, LAN, dan telepon dipisahkan serta diberi akses servis di bawah meja.',
          },
        ],
      },
      {
        title: 'Furnitur & Ergonomi',
        items: [
          {
            name: 'Tinggi meja standar',
            detail:
              'Meja kerja 75 cm, meja resepsionis 75–110 cm, dan meja rapat disesuaikan jumlah kursi.',
          },
          {
            name: 'Credenza & arsip',
            detail:
              'Laci berkunci untuk dokumen penting, dengan kapasitas dan kedalaman yang terukur.',
          },
          {
            name: 'Bench tunggu',
            detail:
              'Dudukan empuk dan mudah dibersihkan, dapat dibuat menyatu dengan partisi.',
          },
        ],
      },
      {
        title: 'Finishing & Identitas',
        items: [
          {
            name: 'Warna instansi',
            detail:
              'Kami menyesuaikan warna HPL atau duco dengan identitas lembaga tanpa mengurangi keterbacaan.',
          },
          {
            name: 'Huruf timbul',
            detail:
              'Akrilik atau stainless dengan LED, dipasang rapi dan aman untuk area publik.',
          },
          {
            name: 'Pencahayaan',
            detail:
              'Downlight, track light, dan lampu tugas disusun agar tidak menyilaukan pengunjung.',
          },
        ],
      },
    ],
    venues: [
      {
        venue: 'Kantor dinas Pemkab OKU di Baturaja',
        challenge: 'Ruang pelayanan sempit, antrean pengunjung padat, dan dokumen menumpuk.',
        solution:
          'Meja resepsionis dengan sekat, rak berkas di belakang, bench tunggu, dan backdrop logo yang mudah dikenali.',
      },
      {
        venue: 'Kantor camat / instansi di Martapura',
        challenge: 'Bangunan lama, plafon tinggi, dan jalur kabel belum rapi.',
        solution:
          'Partisi ruang kerja, meja pelayanan, penutup jalur kabel, dan pencahayaan ulang tanpa membongkar struktur.',
      },
      {
        venue: 'Villa & homestay Danau Ranau',
        challenge: 'Ingin tampilan resor yang tahan lembap dan mudah dirawat.',
        solution:
          'Furnitur HPL tahan lembap, tempat tidur custom, lobby set, dan area makan dengan material lokal.',
      },
      {
        venue: 'Mess & kantor kontraktor tambang Tanjung Enim',
        challenge: 'Kebutuhan cepat, pemakaian berat, dan harus mudah dibersihkan.',
        solution:
          'Furnitur modular knock-down, material HPL solid, dan instalasi bertahap agar operasional tidak berhenti.',
      },
    ],
    process: [
      {
        title: 'Koordinasi kebutuhan & anggaran',
        detail:
          'Kami memetakan ruangan, jumlah pengguna, alur pelayanan, dan plafon anggaran instansi.',
        duration: '2–5 hari',
      },
      {
        title: 'Survey & pengukuran',
        detail:
          'Pengukuran lokasi, pengecekan instalasi listrik/data, dan dokumentasi kondisi ruangan.',
        duration: '1–3 hari',
      },
      {
        title: 'Desain & RAB',
        detail:
          'Layout, 3D, spesifikasi material, dan RAB per item untuk keperluan persetujuan internal.',
        duration: '5–10 hari',
      },
      {
        title: 'Produksi & pengadaan',
        detail:
          'Produksi furnitur di workshop dan pengadaan material pendukung sesuai spesifikasi.',
        duration: '14–30 hari',
      },
      {
        title: 'Instalasi bertahap',
        detail:
          'Pemasangan dijadwalkan di luar jam pelayanan atau akhir pekan agar operasional tetap berjalan.',
        duration: '3–10 hari',
      },
    ],
    safety: [
      'Pekerjaan di area publik memakai barikade, rambu, dan jalur evakuasi yang tidak terhalang.',
      'Instalasi listrik dan data dikerjakan oleh teknisi serta diuji sebelum ruangan dipakai.',
      'Material yang mudah terbakar dijauhkan dari sumber panas dan sesuai standar keselamatan gedung.',
      'Pembersihan dilakukan setiap hari kerja agar debu tidak mengganggu pelayanan.',
    ],
    permits: [
      {
        title: 'Dokumen pengadaan',
        detail:
          'Kami menyiapkan penawaran, spesifikasi teknis, gambar kerja, dan RAB untuk mendukung proses pengadaan internal instansi.',
      },
      {
        title: 'Izin pekerjaan di gedung',
        detail:
          'Untuk pekerjaan di gedung pemerintah, mall, atau area BUMN, kami mengikuti prosedur izin kerja dan jam akses yang ditetapkan.',
      },
      {
        title: 'K3 & asuransi pekerja',
        detail:
          'Tim memakai APD dan mengikuti briefing keselamatan sebelum memasuki area kerja.',
      },
    ],
    faqs: [
      {
        q: 'Apakah menerima pekerjaan interior kantor dinas dan instansi pemerintah?',
        a: 'Ya. Kami mengerjakan interior kantor dinas, camat, sekolah, puskesmas, BUMN, dan kantor swasta di Baturaja, Martapura, Muaradua, Muara Enim, Tanjung Enim, dan Prabumulih, lengkap dengan dokumen penawaran dan RAB.',
      },
      {
        q: 'Bisakah pekerjaan dilakukan tanpa menghentikan pelayanan?',
        a: 'Bisa. Kami menyusun jadwal bertahap, mengerjakan area yang tidak dipakai lebih dulu, dan memasang barikade serta melakukan pembersihan harian.',
      },
      {
        q: 'Berapa lama pembuatan meja resepsionis kantor?',
        a: 'Rata-rata 14–21 hari kerja setelah desain disetujui, tergantung ukuran, huruf timbul, dan kebutuhan listrik.',
      },
      {
        q: 'Apakah bisa membuat ruang rapat kedap suara?',
        a: 'Bisa. Kami memakai kombinasi rangka, rockwool, fabric panel, dan pintu rapat untuk mengurangi suara keluar-masuk ruangan.',
      },
      {
        q: 'Apakah melayani interior villa dan homestay di Danau Ranau?',
        a: 'Ya. Kami mengerjakan kamar, lobby, area makan, dan furnitur custom untuk villa, homestay, dan kafe di kawasan Banding Agung dan Danau Ranau.',
      },
      {
        q: 'Bagaimana skema pembayaran untuk proyek instansi?',
        a: 'Skema menyesuaikan kontrak, umumnya termin 30–40% saat produksi, 40–50% saat pengiriman, dan sisanya setelah serah terima. Kami menerbitkan kuitansi dan berita acara.',
      },
    ],
    relatedTags: ['Interior Kantor & Instansi'],
    imageAlt:
      'Meja resepsionis kantor dinas dengan backdrop logo dan bench tunggu di Baturaja',
  },
  {
    slug: 'interior-toko-mall-booth-pameran-baturaja',
    shortTitle: 'Toko, Mall & Booth',
    title: 'Interior Toko, Tenant Mall & Booth Pameran Baturaja',
    h1: 'Fit-Out Interior Toko, Island Booth Mall & Booth Pameran Knock-Down',
    eyebrow: 'Retail Fit-Out · Citimall · Booth Expo',
    description:
      'Kontraktor interior toko dan tenant mall di Baturaja & Prabumulih: island booth, rak display apotek/butik/kosmetik, meja kasir, etalase kaca, huruf timbul, serta booth pameran knock-down.',
    keywords: [
      'kontraktor interior toko baturaja',
      'jasa pembuatan booth pameran baturaja',
      'island booth citimall baturaja',
      'renovasi interior toko baturaja',
      'rak display apotek belitang',
      'tenant mall prabumulih',
    ],
    intro:
      'Toko yang rapi dan terang meningkatkan nilai jual, terutama untuk produk yang dilihat langsung seperti kosmetik, apotek, butik, dan optik. Kami mengerjakan fit-out toko dari rak display, meja kasir, etalase kaca, sampai island booth untuk tenant mall. Untuk event instansi dan UMKM, kami memproduksi booth pameran sistem knock-down yang bisa dibongkar-pasang dan dikirim ke lokasi acara.',
    quickAnswer:
      'Estimasi fit-out toko di Baturaja: renovasi parsial mulai Rp15.000.000, renovasi penuh Rp1.500.000–Rp2.800.000 per meter persegi, island booth mall Rp8.000.000–Rp35.000.000 per unit, dan booth pameran knock-down 3×3 meter Rp6.000.000–Rp15.000.000.',
    priceFrom: 'Rp6.000.000',
    priceUnit: 'mulai booth 3×3',
    packages: [
      {
        name: 'Booth Pameran Knock-Down',
        tagline: 'Sistem bongkar-pasang untuk event dan expo',
        price: 'Rp6.000.000',
        unit: 'per booth 3×3 m',
        includes: [
          'Rangka besi hollow ringan',
          'Panel multipleks HPL',
          'Meja counter + rak display',
          'Lampu LED & stop kontak',
          'Huruf/logo foam board',
          'Bongkar-pasang & pengiriman',
        ],
        bestFor: 'Pameran pembangunan, expo UMKM, dan event instansi di OKU Raya.',
      },
      {
        name: 'Island Booth Mall',
        tagline: 'Tenant tengah dengan tampilan 360 derajat',
        price: 'Rp12.000.000',
        unit: 'mulai per unit',
        includes: [
          'Rangka besi + multipleks HPL',
          'Counter & laci kasir',
          'Rak display + kaca tempered',
          'Track light & LED strip',
          'Neon box / huruf timbul',
          'Instalasi malam sesuai guideline mall',
        ],
        bestFor: 'Citimall Baturaja, Citimall Prabumulih, dan pusat perbelanjaan lain.',
        highlight: true,
      },
      {
        name: 'Fit-Out Toko Full',
        tagline: 'Renovasi menyeluruh dari ruang kosong',
        price: 'Rp1.500.000',
        unit: 'per meter persegi',
        includes: [
          'Rak display dinding & gondola',
          'Meja kasir custom',
          'Etalase kaca',
          'Plafon & pencahayaan',
          'Backdrop logo & signage',
          'Manajemen kabel & stop kontak',
        ],
        bestFor: 'Apotek, butik, kosmetik, optik, minimarket, dan toko bangunan.',
      },
    ],
    priceTable: [
      {
        item: 'Island booth mall',
        spec: 'Rangka besi + HPL + kaca + track light',
        unit: 'unit',
        price: 'Rp8.000.000 – Rp35.000.000',
      },
      {
        item: 'Rak display dinding (wall gondola)',
        spec: 'Multipleks 18mm + HPL + LED',
        unit: 'm¹',
        price: 'Rp1.600.000 – Rp2.500.000',
      },
      {
        item: 'Rak display apotek / kosmetik',
        spec: 'Rak bertingkat + label + kaca',
        unit: 'm²',
        price: 'Rp1.500.000 – Rp2.300.000',
      },
      {
        item: 'Meja kasir custom',
        spec: 'HPL + laci + jalur kabel',
        unit: 'm¹',
        price: 'Rp1.800.000 – Rp2.600.000',
      },
      {
        item: 'Etalase kaca tempered',
        spec: 'Rangka aluminium/besi + kaca 8mm',
        unit: 'm¹',
        price: 'Rp2.200.000 – Rp3.500.000',
      },
      {
        item: 'Booth pameran 3×3 knock-down',
        spec: 'Rangka hollow + panel HPL + LED',
        unit: 'unit',
        price: 'Rp6.000.000 – Rp15.000.000',
      },
      {
        item: 'Huruf timbul / neon box',
        spec: 'Akrilik LED atau stainless',
        unit: 'm²',
        price: 'Rp1.200.000 – Rp2.800.000',
      },
      {
        item: 'Renovasi interior toko penuh',
        spec: 'Rak, kasir, plafon, lantai, pencahayaan',
        unit: 'm²',
        price: 'Rp1.500.000 – Rp2.800.000',
      },
    ],
    specs: [
      {
        title: 'Struktur & Material',
        items: [
          {
            name: 'Rangka besi hollow',
            detail:
              'Untuk booth dan rak tinggi agar kokoh, aman, dan tidak mudah goyang saat disentuh pengunjung.',
          },
          {
            name: 'Multipleks 18mm + HPL',
            detail:
              'Permukaan rak yang rapi, tahan gores, dan mudah dibersihkan setiap hari.',
          },
          {
            name: 'Kaca tempered',
            detail:
              'Untuk etalase dan showcase, lebih aman dibanding kaca biasa bila pecah.',
          },
        ],
      },
      {
        title: 'Pencahayaan & Daya Tarik',
        items: [
          {
            name: 'Track light',
            detail:
              'Lampu sorot yang bisa diarahkan ke produk unggulan tanpa menyilaukan mata pembeli.',
          },
          {
            name: 'LED strip rak',
            detail:
              'Membuat produk terlihat lebih tajam dan mahal, terutama kosmetik dan perhiasan.',
          },
          {
            name: 'Neon box & huruf timbul',
            detail:
              'Identitas toko terlihat dari lorong mall atau jalan, meningkatkan daya tarik impulsif.',
          },
        ],
      },
      {
        title: 'Operasional & Keamanan',
        items: [
          {
            name: 'Manajemen kabel',
            detail:
              'Kabel kasir, EDC, CCTV, dan lampu ditata di jalur tertutup dan diberi akses servis.',
          },
          {
            name: 'Sistem knock-down',
            detail:
              'Booth pameran memakai baut dan konektor yang bisa dibongkar tanpa merusak panel.',
          },
          {
            name: 'Kunci & keamanan',
            detail:
              'Laci kasir dan kabinet penyimpanan dilengkapi kunci untuk area retail.',
          },
        ],
      },
    ],
    venues: [
      {
        venue: 'Citimall Baturaja',
        challenge: 'Guideline mall ketat, jam kerja malam, dan deposit renovasi.',
        solution:
          'Gambar kerja disesuaikan guideline, instalasi malam, proteksi lantai, dan koordinasi dengan building management.',
      },
      {
        venue: 'Citimall Prabumulih',
        challenge: 'Jarak tempuh dari workshop dan kebutuhan instalasi cepat.',
        solution:
          'Modul diproduksi dan diuji di workshop, lalu dikirim dalam kondisi siap rakit untuk mempersingkat waktu di lokasi.',
      },
      {
        venue: 'Apotek & klinik di Gumawang Belitang',
        challenge: 'Produk kecil banyak, butuh rak rapi dan mudah dicari.',
        solution:
          'Rak bertingkat dengan label, pencahayaan merata, meja racik, dan meja kasir dengan laci.',
      },
      {
        venue: 'Pameran pembangunan OKU Raya',
        challenge: 'Booth harus berdiri cepat dan dibongkar tanpa rusak.',
        solution:
          'Sistem knock-down dengan panel ringan, konektor baut, dan peti pengiriman yang melindungi panel.',
      },
    ],
    process: [
      {
        title: 'Kirim denah & guideline',
        detail:
          'Untuk mall, kirim guideline dan denah unit. Untuk event, kirim ukuran booth dan tema acara.',
        duration: '1 hari',
      },
      {
        title: 'Desain & simulasi tampilan',
        detail:
          'Kami buat layout, 3D, dan daftar material termasuk kebutuhan listrik.',
        duration: '3–5 hari',
      },
      {
        title: 'Persetujuan & produksi',
        detail:
          'Setelah desain disetujui, modul diproduksi dan diuji coba di workshop.',
        duration: '10–20 hari',
      },
      {
        title: 'Instalasi di lokasi',
        detail:
          'Pengiriman, perakitan, penyetelan lampu, dan pembersihan sesuai jadwal gedung/event.',
        duration: '1–5 hari',
      },
      {
        title: 'Serah terima & garansi',
        detail:
          'Pengecekan bersama, serah terima kunci/akses, dan garansi konstruksi.',
        duration: '1 hari',
      },
    ],
    safety: [
      'Instalasi di mall mengikuti jam kerja dan prosedur izin building management.',
      'Rak tinggi ditambatkan ke dinding atau rangka agar tidak roboh saat ditarik.',
      'Kabel listrik diberi pelindung dan MCB sesuai beban perangkat toko.',
      'Booth pameran memakai material ringan namun stabil, dengan pemberat bila perlu.',
    ],
    permits: [
      {
        title: 'Guideline tenant mall',
        detail:
          'Kami menyesuaikan desain dengan aturan ukuran, material, kaca, listrik, dan jam instalasi dari pengelola mall.',
      },
      {
        title: 'Izin event / pameran',
        detail:
          'Untuk booth pameran, kami menyesuaikan spesifikasi panitia mengenai tinggi maksimal, jalur listrik, dan waktu bongkar-pasang.',
      },
      {
        title: 'Deposit & asuransi',
        detail:
          'Klien mengurus deposit tenant; kami membantu menyiapkan dokumen gambar dan spesifikasi yang diminta pengelola.',
      },
    ],
    faqs: [
      {
        q: 'Apakah melayani pembuatan island booth di Citimall Baturaja dan Prabumulih?',
        a: 'Ya. Kami mengerjakan island booth, kiosk, dan renovasi tenant di Citimall Baturaja maupun Citimall Prabumulih, termasuk pengurusan gambar kerja sesuai guideline mall dan instalasi malam.',
      },
      {
        q: 'Berapa harga booth pameran knock-down 3×3?',
        a: 'Kisaran Rp6.000.000–Rp15.000.000 tergantung material, lampu, huruf timbul, rak display, dan kebutuhan listrik. Booth dapat dipakai berulang untuk event berikutnya.',
      },
      {
        q: 'Bisakah hanya membuat rak display tanpa renovasi seluruh toko?',
        a: 'Bisa. Kami melayani renovasi parsial seperti rak dinding, gondola tengah, meja kasir, etalase, atau backdrop logo saja.',
      },
      {
        q: 'Berapa lama pengerjaan interior toko?',
        a: 'Renovasi parsial 10–14 hari kerja, fit-out penuh 3–5 minggu, dan booth pameran 7–14 hari kerja setelah desain disetujui.',
      },
      {
        q: 'Apakah bisa mengerjakan di luar jam operasional toko?',
        a: 'Bisa. Untuk toko dan tenant mall, instalasi sering dilakukan malam hari atau setelah jam tutup agar operasional tidak terganggu.',
      },
      {
        q: 'Apakah booth pameran bisa disewa atau harus beli?',
        a: 'Kami memproduksi booth untuk dibeli karena desainnya disesuaikan kebutuhan brand. Booth knock-down dapat disimpan dan dipakai ulang pada event berikutnya.',
      },
    ],
    relatedTags: ['Interior Toko, Mall & Booth'],
    imageAlt:
      'Island booth mall dan rak display toko kosmetik dengan pencahayaan LED di Baturaja',
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
