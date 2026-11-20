/**
 * Data halaman area layanan (geo-targeted landing pages).
 * Setiap area memiliki konten unik: karakter pasar, kecamatan,
 * pertimbangan logistik, dan FAQ lokal.
 */

export interface AreaFaq {
  q: string;
  a: string;
}

export interface Area {
  slug: string;
  shortName: string;
  name: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  intro: string;
  quickAnswer: string;
  districts: string[];
  landmarks: string[];
  marketProfile: string;
  highlights: { title: string; detail: string }[];
  serviceFocus: { slug: string; reason: string }[];
  logistics: { from: string; distance: string; note: string }[];
  localNotes: { title: string; detail: string }[];
  faqs: AreaFaq[];
  imageAlt: string;
}

export const AREAS: Area[] = [
  {
    slug: 'oku-selatan-muaradua-danau-ranau',
    shortName: 'OKU Selatan',
    name: 'Muaradua & Danau Ranau',
    title: 'Jasa Interior Muaradua & Danau Ranau OKU Selatan',
    h1: 'Jasa Interior, Kitchen Set & Furniture Custom Muaradua — Danau Ranau',
    eyebrow: 'Basis Workshop · OKU Selatan',
    description:
      'Jasa interior Muaradua, Banding Agung, dan Danau Ranau: kitchen set anti rayap, kamar set, interior villa/homestay, kantor dinas OKU Selatan, dan fit-out kafe. Workshop sendiri di Sugih Waras.',
    keywords: [
      'jasa interior muaradua',
      'kitchen set muaradua oku selatan',
      'interior villa danau ranau',
      'kontraktor interior kantor pemkab oku selatan',
      'furniture custom banding agung',
      'homestay danau ranau',
    ],
    intro:
      'OKU Selatan adalah rumah kami. Workshop dan kantor pemasaran Interior Baturaja berada di Jl. Pantai Bidadari Jembatan 1 Sugih Waras, Kecamatan Banding Agung — tepat di kawasan Danau Ranau. Artinya, untuk pelanggan di Muaradua, Banding Agung, Simpang, dan sekitarnya, survei bisa lebih cepat, koordinasi produksi lebih dekat, dan biaya logistik lebih rendah dibanding vendor dari luar daerah.',
    quickAnswer:
      'Kami melayani pembuatan kitchen set, lemari custom, kamar set, backdrop TV, partisi, interior kantor dinas, serta interior villa dan homestay di seluruh OKU Selatan. Untuk area Danau Ranau, kami menyarankan material PVC board atau HPL tahan lembap karena kelembapan udara lebih tinggi.',
    districts: [
      'Muaradua',
      'Banding Agung',
      'Simpang',
      'Sugih Waras',
      'Bumi Agung',
      'Warkuk Ranau Selatan',
      'Muaradua Kisam',
      'Buay Sandang Aji',
      'Pulau Beringin',
      'Sungai Are',
    ],
    landmarks: [
      'Danau Ranau',
      'Pantai Bidadari',
      'Pasar Muaradua',
      'Kantor Pemkab OKU Selatan',
      'Simpang Sugih Waras',
    ],
    marketProfile:
      'Pasar OKU Selatan terbagi menjadi dua: rumah tinggal dan kantor instansi di Muaradua, serta bisnis wisata di koridor Danau Ranau. Villa, homestay, kafe, dan warung makan di sekitar Banding Agung membutuhkan furnitur yang tahan lembap, mudah dirawat, dan tetap terlihat menarik untuk tamu. Di Muaradua, permintaan datang dari rumah keluarga, toko, apotek, dan kantor dinas.',
    highlights: [
      {
        title: 'Workshop berada di OKU Selatan',
        detail:
          'Produksi di Sugih Waras, Banding Agung. Survei, produksi, dan instalasi dikerjakan tim sendiri tanpa perantara.',
      },
      {
        title: 'Material disesuaikan iklim Danau Ranau',
        detail:
          'Kami memprioritaskan PVC board, HPL, dan finishing yang tahan kelembapan untuk area dekat danau.',
      },
      {
        title: 'Paham kebutuhan wisata',
        detail:
          'Furnitur homestay harus kuat, mudah dibersihkan, dan tidak mudah rusak oleh pergantian tamu.',
      },
      {
        title: 'Jangkauan Muaradua–Ranau',
        detail:
          'Tim instalasi rutin bergerak di koridor Muaradua, Simpang, Banding Agung, dan Warkuk Ranau.',
      },
    ],
    serviceFocus: [
      {
        slug: 'kitchen-set-baturaja',
        reason:
          'Dapur villa, homestay, dan rumah di sekitar danau membutuhkan kabinet anti lembap dan anti rayap.',
      },
      {
        slug: 'interior-kantor-instansi-baturaja',
        reason:
          'Kantor dinas dan instansi di Muaradua membutuhkan front office, ruang rapat, dan meja pelayanan.',
      },
      {
        slug: 'lemari-custom-kamar-set-baturaja',
        reason:
          'Kamar homestay dan rumah tinggal membutuhkan lemari serta kamar set yang tahan pemakaian harian.',
      },
    ],
    logistics: [
      {
        from: 'Workshop Sugih Waras → Muaradua',
        distance: '±45 km',
        note: 'Survei bisa dijadwalkan dalam 1–2 hari kerja.',
      },
      {
        from: 'Workshop Sugih Waras → Banding Agung',
        distance: '±5 km',
        note: 'Area workshop, instalasi paling cepat.',
      },
      {
        from: 'Workshop Sugih Waras → Simpang',
        distance: '±35 km',
        note: 'Termasuk koridor Danau Ranau bagian selatan.',
      },
      {
        from: 'Workshop Sugih Waras → Baturaja',
        distance: '±110 km',
        note: 'Pengiriman memakai armada sendiri, dijadwalkan bersamaan dengan proyek lain.',
      },
    ],
    localNotes: [
      {
        title: 'Kelembapan Danau Ranau',
        detail:
          'Udara di sekitar danau lebih lembap. Untuk kabinet bawah, PVC board lebih aman dibanding multipleks tanpa pelapis.',
      },
      {
        title: 'Akses jalan ke lokasi wisata',
        detail:
          'Beberapa villa berada di jalan menanjak atau sempit. Kami menyesuaikan ukuran modul agar bisa masuk dan dirakit di lokasi.',
      },
      {
        title: 'Musim ramai kunjungan',
        detail:
          'Pengerjaan homestay sebaiknya selesai sebelum musim liburan. Pemesanan disarankan 3–4 minggu sebelum target operasional.',
      },
    ],
    faqs: [
      {
        q: 'Apakah workshop Interior Baturaja benar-benar berada di OKU Selatan?',
        a: 'Ya. Workshop dan kantor kami berada di Jl. Pantai Bidadari Jembatan 1 Sugih Waras, Ranau, Kecamatan Banding Agung, Kabupaten OKU Selatan. Untuk pelanggan Muaradua dan Danau Ranau, jarak tempuh tim lebih dekat.',
      },
      {
        q: 'Apakah melayani pembuatan interior villa dan homestay di Danau Ranau?',
        a: 'Ya. Kami mengerjakan kamar, lobby, area makan, kitchen set, dan furnitur custom untuk villa, homestay, kafe, dan restoran di kawasan Banding Agung dan Danau Ranau.',
      },
      {
        q: 'Material apa yang cocok untuk rumah dekat danau?',
        a: 'PVC board untuk kabinet bawah, HPL untuk permukaan, dan hardware anti karat. Hindari particle board dan material yang menyerap air.',
      },
      {
        q: 'Berapa lama pengiriman dari workshop ke Muaradua?',
        a: 'Sekitar 1–2 jam perjalanan darat. Pengiriman dijadwalkan setelah modul selesai QC dan disesuaikan dengan kesiapan lokasi.',
      },
      {
        q: 'Apakah bisa mengerjakan kantor dinas di Muaradua?',
        a: 'Bisa. Kami menyiapkan desain, RAB, spesifikasi teknis, dan dokumen pendukung untuk kebutuhan pengadaan instansi.',
      },
    ],
    imageAlt:
      'Interior villa dan kitchen set tahan lembap di kawasan Danau Ranau OKU Selatan',
  },
  {
    slug: 'oku-timur-martapura-belitang',
    shortName: 'OKU Timur',
    name: 'Martapura & Belitang',
    title: 'Jasa Interior Martapura & Belitang OKU Timur',
    h1: 'Jasa Interior, Kitchen Set & Fit-Out Toko Martapura — Belitang',
    eyebrow: 'Koridor Niaga · OKU Timur',
    description:
      'Jasa interior Martapura, Gumawang Belitang, dan Tugumulyo: kitchen set, lemari custom, interior kantor dinas OKU Timur, apotek, klinik, ruko, dan toko di jalur niaga Belitang.',
    keywords: [
      'jasa interior martapura oku timur',
      'kitchen set belitang gumawang',
      'tukang furniture custom belitang',
      'kontraktor interior apotek belitang',
      'interior kantor dinas oku timur',
      'renovasi ruko martapura',
    ],
    intro:
      'OKU Timur punya karakter pasar yang berbeda dari Baturaja. Belitang adalah pusat niaga dan pertanian yang ramai, dengan ruko, apotek, klinik, dan rumah besar di sepanjang jalur Gumawang. Martapura sebagai ibu kota kabupaten menjadi pusat perkantoran dan instansi. Kami melayani keduanya dengan produksi modular di workshop, sehingga furnitur tiba dalam kondisi siap rakit dan waktu di lokasi lebih singkat.',
    quickAnswer:
      'Untuk OKU Timur, kami melayani kitchen set, lemari custom, kamar set, interior kantor dinas, serta fit-out apotek, klinik, dan ruko di Martapura, Gumawang Belitang, BK 10, dan Tugumulyo. Estimasi kitchen set mulai Rp1.800.000 per meter lari, belum termasuk pengiriman area Belitang.',
    districts: [
      'Martapura',
      'Gumawang',
      'Belitang',
      'BK 10',
      'Tugumulyo',
      'Buay Madang',
      'Cempaka',
      'Semendawai',
      'Madang Suku',
      'Belitang Jaya',
    ],
    landmarks: [
      'Kantor Pemkab OKU Timur',
      'Pasar Gumawang',
      'BK 10',
      'Jalur Lintas Timur Sumatera',
      'Tugu Belitang',
    ],
    marketProfile:
      'Belitang memiliki banyak rumah besar dan ruko yang melayani kebutuhan pertanian, sembako, dan kesehatan. Pemilik apotek dan klinik di Gumawang sering membutuhkan rak display, meja racik, dan ruang tunggu yang rapi. Di Martapura, permintaan lebih banyak dari kantor dinas, sekolah, dan rumah keluarga.',
    highlights: [
      {
        title: 'Produksi modular',
        detail:
          'Modul dibuat dan diuji di workshop, lalu dirakit di lokasi. Cocok untuk ruko yang tetap ingin beroperasi.',
      },
      {
        title: 'Paham kebutuhan apotek & klinik',
        detail:
          'Rak obat, meja racik, etalase, dan ruang tunggu dirancang agar mudah dibersihkan dan efisien.',
      },
      {
        title: 'Jadwal instalasi fleksibel',
        detail:
          'Untuk toko dan ruko, instalasi bisa dilakukan malam atau hari libur agar tidak mengganggu jualan.',
      },
      {
        title: 'Satu tim untuk Baturaja–OKU Timur',
        detail:
          'Pengiriman dijadwalkan bersama proyek lain untuk menekan biaya transportasi.',
      },
    ],
    serviceFocus: [
      {
        slug: 'interior-toko-mall-booth-pameran-baturaja',
        reason:
          'Ruko, apotek, klinik, dan toko di Belitang membutuhkan rak display dan meja kasir yang tahan lama.',
      },
      {
        slug: 'interior-kantor-instansi-baturaja',
        reason:
          'Kantor dinas dan instansi di Martapura membutuhkan front office serta ruang rapat representatif.',
      },
      {
        slug: 'kitchen-set-baturaja',
        reason:
          'Rumah keluarga di Gumawang dan Tugumulyo membutuhkan kitchen set berukuran besar.',
      },
    ],
    logistics: [
      {
        from: 'Workshop Banding Agung → Martapura',
        distance: '±150 km',
        note: 'Perjalanan ±4 jam, pengiriman dijadwalkan pagi hari.',
      },
      {
        from: 'Workshop Banding Agung → Gumawang Belitang',
        distance: '±170 km',
        note: 'Biaya transportasi dihitung per pengiriman, bisa digabung beberapa proyek.',
      },
      {
        from: 'Baturaja → Martapura',
        distance: '±100 km',
        note: 'Tim instalasi sering transit di Baturaja untuk muat material tambahan.',
      },
      {
        from: 'Baturaja → Tugumulyo',
        distance: '±115 km',
        note: 'Melewati jalur lintas timur, akses relatif lancar.',
      },
    ],
    localNotes: [
      {
        title: 'Biaya pengiriman',
        detail:
          'Area OKU Timur berada di luar radius gratis survei. Kami tetap memberikan rincian transportasi secara terbuka di RAB.',
      },
      {
        title: 'Ruko yang tetap beroperasi',
        detail:
          'Untuk renovasi parsial, kami membagi pekerjaan per zona agar toko bisa tetap melayani pembeli.',
      },
      {
        title: 'Karakter bangunan',
        detail:
          'Banyak ruko di Belitang memiliki plafon tinggi dan dinding lama. Kami memeriksa kondisi dinding sebelum pemasangan kabinet.',
      },
    ],
    faqs: [
      {
        q: 'Apakah melayani pembuatan kitchen set di Belitang dan Gumawang?',
        a: 'Ya. Kami melayani kitchen set custom di Gumawang, Belitang, BK 10, Tugumulyo, dan Martapura. Biaya pengiriman dihitung terpisah dan dicantumkan di RAB.',
      },
      {
        q: 'Bisa membuat rak apotek dan meja racik?',
        a: 'Bisa. Kami membuat rak obat bertingkat, meja racik, etalase kaca, meja kasir, dan ruang tunggu untuk apotek dan klinik di OKU Timur.',
      },
      {
        q: 'Apakah menerima renovasi ruko yang masih berjualan?',
        a: 'Ya. Pekerjaan dibagi per zona dan dapat dilakukan malam hari atau hari libur agar operasional toko tetap berjalan.',
      },
      {
        q: 'Berapa lama pengiriman ke Martapura?',
        a: 'Sekitar 4 jam perjalanan darat dari workshop. Pengiriman dijadwalkan setelah modul lolos QC dan lokasi siap menerima.',
      },
      {
        q: 'Apakah bisa mengerjakan interior kantor dinas OKU Timur?',
        a: 'Bisa. Kami menyiapkan desain, RAB, spesifikasi, dan dokumen penawaran untuk kebutuhan instansi di Martapura.',
      },
    ],
    imageAlt:
      'Interior apotek dan rak display obat custom di Gumawang Belitang OKU Timur',
  },
  {
    slug: 'muara-enim-tanjung-enim',
    shortName: 'Muara Enim',
    name: 'Muara Enim & Tanjung Enim',
    title: 'Jasa Interior Muara Enim & Tanjung Enim',
    h1: 'Jasa Interior, Kitchen Set & Furniture Custom Muara Enim — Tanjung Enim',
    eyebrow: 'Koridor Tambang · Muara Enim',
    description:
      'Jasa interior Muara Enim dan Tanjung Enim: kitchen set, lemari custom, interior rumah, mess karyawan, kantor kontraktor tambang, kafe, dan furnitur custom dengan material HPL tahan pakai.',
    keywords: [
      'jasa interior muara enim',
      'kitchen set tanjung enim',
      'furniture custom tanjung enim',
      'interior mess karyawan tambang',
      'kontraktor interior kantor muara enim',
      'interior kafe muara enim',
    ],
    intro:
      'Muara Enim dan Tanjung Enim memiliki daya beli yang relatif tinggi, terutama di sekitar kompleks PT Bukit Asam dan perusahaan pendukungnya. Permintaan interior datang dari rumah karyawan, mess, kantor kontraktor, kafe, dan rumah keluarga. Karakter pasarnya cepat, praktis, dan menuntut hasil rapi tanpa mengganggu jadwal kerja shift.',
    quickAnswer:
      'Kami melayani kitchen set, lemari custom, kamar set, backdrop TV, interior kantor, mess karyawan, dan kafe di Muara Enim, Tanjung Enim, dan Lawang Kidul. Untuk mess dan kantor, kami menawarkan furnitur modular yang cepat dipasang dan mudah dirawat.',
    districts: [
      'Muara Enim',
      'Tanjung Enim',
      'Lawang Kidul',
      'Muara Lawai',
      'Ujan Mas',
      'Gunung Megang',
      'Belimbing',
      'Rambang',
      'Lubai',
      'Semende Darat',
    ],
    landmarks: [
      'Kompleks PT Bukit Asam',
      'Kantor Pusat PTBA Tanjung Enim',
      'Pasar Tanjung Enim',
      'Jalur Lintas Tengah Sumatera',
      'Stadion Tanjung Enim',
    ],
    marketProfile:
      'Tanjung Enim bergerak mengikuti jadwal tambang. Karyawan dan kontraktor membutuhkan furnitur yang kuat, mudah dibersihkan, dan tidak memerlukan perawatan rumit. Mess dan kantor sering dihuni bergantian, sehingga material HPL solid dan sistem modular lebih cocok dibanding furnitur custom yang rumit.',
    highlights: [
      {
        title: 'Furnitur untuk pemakaian berat',
        detail:
          'Kami memilih multipleks 18mm, HPL tebal, dan hardware yang bisa diservis untuk area dengan pergantian pengguna tinggi.',
      },
      {
        title: 'Instalasi mengikuti jadwal shift',
        detail:
          'Pekerjaan dijadwalkan agar tidak mengganggu jam istirahat atau operasional kantor.',
      },
      {
        title: 'Modular & knock-down',
        detail:
          'Cocok untuk mess dan kantor yang mungkin dipindah atau ditata ulang.',
      },
      {
        title: 'Desain cepat untuk kontraktor',
        detail:
          'Kami menyiapkan gambar kerja dan RAB yang bisa langsung dipakai untuk persetujuan internal.',
      },
    ],
    serviceFocus: [
      {
        slug: 'interior-kantor-instansi-baturaja',
        reason:
          'Mess, kantor kontraktor, dan ruang rapat membutuhkan furnitur modular serta akustik yang nyaman.',
      },
      {
        slug: 'kitchen-set-baturaja',
        reason:
          'Rumah karyawan dan mess membutuhkan kitchen set yang kuat dan mudah dibersihkan.',
      },
      {
        slug: 'lemari-custom-kamar-set-baturaja',
        reason:
          'Kamar mess dan rumah tinggal membutuhkan lemari serta dipan storage yang tahan pemakaian harian.',
      },
    ],
    logistics: [
      {
        from: 'Workshop Banding Agung → Muara Enim',
        distance: '±150 km',
        note: 'Perjalanan ±4 jam melalui Baturaja–Muara Enim.',
      },
      {
        from: 'Workshop Banding Agung → Tanjung Enim',
        distance: '±170 km',
        note: 'Pengiriman dijadwalkan pagi agar instalasi bisa dimulai hari yang sama.',
      },
      {
        from: 'Baturaja → Tanjung Enim',
        distance: '±110 km',
        note: 'Jalur lintas tengah, akses relatif baik untuk armada engkel.',
      },
      {
        from: 'Baturaja → Muara Enim',
        distance: '±90 km',
        note: 'Sering menjadi titik transit tim instalasi.',
      },
    ],
    localNotes: [
      {
        title: 'Jadwal kerja shift',
        detail:
          'Instalasi di mess atau rumah karyawan sebaiknya dilakukan siang hari saat penghuni tidak beristirahat.',
      },
      {
        title: 'Keamanan area kerja',
        detail:
          'Untuk area perusahaan, kami mengikuti prosedur izin masuk, APD, dan briefing keselamatan.',
      },
      {
        title: 'Biaya transportasi',
        detail:
          'Transportasi dan akomodasi tim dihitung terpisah, namun bisa ditekan bila proyek digabung dalam satu jadwal.',
      },
    ],
    faqs: [
      {
        q: 'Apakah melayani pembuatan kitchen set di Tanjung Enim?',
        a: 'Ya. Kami melayani kitchen set custom di Tanjung Enim, Muara Enim, Lawang Kidul, dan sekitarnya. Pengiriman dijadwalkan dari workshop Banding Agung.',
      },
      {
        q: 'Bisa membuat furnitur untuk mess karyawan?',
        a: 'Bisa. Kami membuat tempat tidur, lemari, meja kerja, dan kitchen set modular yang kuat, mudah dibersihkan, dan bisa dibongkar-pasang.',
      },
      {
        q: 'Apakah menerima pekerjaan di area PTBA?',
        a: 'Kami dapat mengerjakan proyek di area perusahaan dengan mengikuti prosedur izin masuk, APD, dan aturan keselamatan yang berlaku.',
      },
      {
        q: 'Berapa lama pengerjaan interior kantor di Muara Enim?',
        a: 'Rata-rata 3–5 minggu setelah desain disetujui, tergantung luas ruangan dan kebutuhan instalasi listrik.',
      },
      {
        q: 'Apakah bisa membuat interior kafe di Tanjung Enim?',
        a: 'Bisa. Kami mengerjakan meja, kursi, bench, bar counter, rak display, dan pencahayaan untuk kafe dan coffee shop.',
      },
    ],
    imageAlt:
      'Interior mess karyawan dan kitchen set modular di Tanjung Enim Muara Enim',
  },
  {
    slug: 'prabumulih',
    shortName: 'Prabumulih',
    name: 'Prabumulih',
    title: 'Jasa Interior Prabumulih & Citimall Prabumulih',
    h1: 'Jasa Interior, Kitchen Set & Fit-Out Toko Prabumulih',
    eyebrow: 'Kota Niaga · Prabumulih',
    description:
      'Jasa interior Prabumulih: kitchen set, lemari custom, interior rumah, fit-out toko, island booth Citimall Prabumulih, kafe, dan kantor. Material HPL, produksi workshop, instalasi terjadwal.',
    keywords: [
      'jasa interior prabumulih',
      'kitchen set prabumulih',
      'island booth citimall prabumulih',
      'kontraktor interior toko prabumulih',
      'furniture custom prabumulih',
      'interior kafe prabumulih',
    ],
    intro:
      'Prabumulih adalah kota niaga di jalur lintas tengah Sumatera dengan aktivitas retail yang hidup. Citimall Prabumulih menjadi pusat tenant modern, sementara pusat kota dipenuhi ruko, kafe, dan kantor. Kami melayani fit-out tenant, renovasi toko, kitchen set rumah, dan furnitur custom dengan jadwal yang disesuaikan aturan pengelola gedung.',
    quickAnswer:
      'Untuk Prabumulih, kami melayani kitchen set, lemari custom, interior rumah, fit-out toko, island booth Citimall Prabumulih, dan interior kafe. Estimasi kitchen set mulai Rp1.800.000 per meter lari; island booth mall mulai Rp12.000.000 per unit.',
    districts: [
      'Prabumulih Timur',
      'Prabumulih Barat',
      'Prabumulih Utara',
      'Prabumulih Selatan',
      'Cambai',
      'Rambang Kapak Tengah',
    ],
    landmarks: [
      'Citimall Prabumulih',
      'Pasar Prabumulih',
      'Jalur Lintas Tengah Sumatera',
      'Kantor Wali Kota Prabumulih',
      'Stadion Bumi Patra',
    ],
    marketProfile:
      'Pasar Prabumulih didominasi rumah tinggal di kota dan koridor retail di jalur utama. Tenant mall membutuhkan desain yang mengikuti guideline ketat, sementara kafe dan toko membutuhkan tampilan yang instagramable namun tetap mudah dirawat. Untuk rumah, kitchen set dan lemari custom menjadi permintaan paling sering.',
    highlights: [
      {
        title: 'Pengalaman tenant mall',
        detail:
          'Kami memahami alur guideline, deposit, jam instalasi malam, dan koordinasi dengan building management.',
      },
      {
        title: 'Desain retail yang menjual',
        detail:
          'Rak display, pencahayaan, dan penataan produk disusun agar pembeli mudah melihat dan mengambil barang.',
      },
      {
        title: 'Produksi rapi & cepat',
        detail:
          'Modul dibuat di workshop dan diuji sebelum dikirim, sehingga waktu instalasi di lokasi lebih singkat.',
      },
      {
        title: 'Jangkauan Baturaja–Prabumulih',
        detail:
          'Jarak tempuh relatif dekat, memudahkan survei dan pengecekan progres.',
      },
    ],
    serviceFocus: [
      {
        slug: 'interior-toko-mall-booth-pameran-baturaja',
        reason:
          'Citimall Prabumulih dan ruko di jalur utama membutuhkan fit-out tenant, rak display, dan booth.',
      },
      {
        slug: 'kitchen-set-baturaja',
        reason:
          'Rumah tinggal di Prabumulih Timur dan Barat membutuhkan kitchen set custom.',
      },
      {
        slug: 'backdrop-tv-partisi-ruangan-baturaja',
        reason:
          'Rumah dan kafe membutuhkan backdrop TV, partisi, dan pencahayaan yang menarik.',
      },
    ],
    logistics: [
      {
        from: 'Workshop Banding Agung → Prabumulih',
        distance: '±190 km',
        note: 'Perjalanan ±5 jam, pengiriman dijadwalkan pagi.',
      },
      {
        from: 'Baturaja → Prabumulih',
        distance: '±75 km',
        note: 'Jalur lintas tengah, akses baik untuk armada engkel.',
      },
      {
        from: 'Baturaja → Citimall Prabumulih',
        distance: '±80 km',
        note: 'Instalasi malam disesuaikan jam operasional mall.',
      },
      {
        from: 'Workshop → Prabumulih Timur',
        distance: '±185 km',
        note: 'Survei dapat digabung dengan proyek Muara Enim.',
      },
    ],
    localNotes: [
      {
        title: 'Aturan Citimall',
        detail:
          'Desain tenant wajib mengikuti guideline ukuran, material, listrik, dan tampilan. Kami membantu menyiapkan gambar kerja.',
      },
      {
        title: 'Instalasi malam',
        detail:
          'Pekerjaan di mall dilakukan setelah jam tutup. Tim membawa penerangan dan peralatan lengkap.',
      },
      {
        title: 'Kafe & retail',
        detail:
          'Untuk kafe, kami memperhatikan jalur kabel, ventilasi, dan material yang mudah dibersihkan.',
      },
    ],
    faqs: [
      {
        q: 'Apakah melayani pembuatan booth dan tenant di Citimall Prabumulih?',
        a: 'Ya. Kami mengerjakan island booth, kiosk, dan renovasi tenant di Citimall Prabumulih dengan menyesuaikan guideline pengelola mall.',
      },
      {
        q: 'Berapa harga kitchen set di Prabumulih?',
        a: 'Mulai Rp1.800.000 per meter lari untuk multipleks 18mm HPL. Harga final tergantung ukuran, top table, dan aksesori, ditambah biaya pengiriman.',
      },
      {
        q: 'Bisakah survei dilakukan pada akhir pekan?',
        a: 'Bisa, dengan penjadwalan sebelumnya. Untuk area Prabumulih, survei sering digabung dengan kunjungan proyek lain agar lebih efisien.',
      },
      {
        q: 'Apakah menerima renovasi toko yang sedang beroperasi?',
        a: 'Ya. Kami membagi pekerjaan per zona dan dapat bekerja malam hari agar toko tetap buka pada siang hari.',
      },
      {
        q: 'Berapa lama pengiriman dari workshop ke Prabumulih?',
        a: 'Sekitar 5 jam perjalanan darat. Modul dikirim setelah lolos QC dan lokasi siap menerima.',
      },
    ],
    imageAlt:
      'Fit-out tenant dan island booth Citimall Prabumulih dengan pencahayaan LED',
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
