// Seluruh isi website ada di file ini. Ubah teks di sini tanpa menyentuh tampilan.

export const beritaInternal = () => berita.filter((b) => !b.url);

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amanahkohati.id",
  nama: "Amanah KOHATI",
  deskripsi:
    "Mengenal lebih dekat Dini Asmiatul Amanah, M.Pd — rekam jejak, gagasan, dan ikhtiarnya untuk KOHATI. Amanah KOHATI, untuk Perempuan Indonesia.",
};

export const profil = {
  nama: "Dini Asmiatul Amanah, M.Pd",
  namaPendek: "Dini Asmiatul Amanah",
  peran: "Bakal Calon Ketua Umum KOHATI PB HMI",
  periode: "Periode 2027–2029",
  asal: "Tasikmalaya, Jawa Barat, Indonesia",
  fokus: ["Kepemimpinan", "Komunikasi", "Pemberdayaan Perempuan"],
  kontak: {
    telepon: "+62 822-1656-5693",
    whatsapp: "https://wa.me/6282216565693?text=" + encodeURIComponent("Halo, saya mendukung Dini Asmiatul Amanah untuk Amanah KOHATI."),
    email: "Diniasmiatul13@gmail.com",
    instagram: "amanahkohati",
  },
};

export const hero = {
  judul: "Amanah KOHATI,",
  sub: "untuk Perempuan Indonesia",
  tagline: "Tanggung Jawab Besar, Meniti Jalan Muslimah Insan Cita",
  ajakan: "Mari mengenal lebih dekat Dini Asmiatul Amanah",
  ajakanSub: "rekam jejak, gagasan, dan ikhtiarnya untuk KOHATI.",
};

export type Berita = {
  slug: string;
  kategori: string;
  bannerJudul: string;
  bannerSub: string;
  judul: string;
  ringkasan: string;
  tanggal: string; // isi dengan tanggal rilis, contoh "12 Desember 2026"
  isi: string[];
  kutipan?: string;
  // Untuk liputan media dari situs lain: isi `url` dan `sumber`.
  // Kartu akan langsung membuka artikel aslinya (tanpa halaman detail).
  url?: string;
  sumber?: string;
  // Media yang juga memberitakan (ditampilkan sebagai tautan di halaman detail)
  sumberLiputan?: { nama: string; url: string };
  // Nama file banner di public/images (default: berita-<slug>.jpg)
  banner?: string;
};

// Ganti isi berita di sini. Tambah objek baru untuk rilis berikutnya,
// lalu taruh banner-nya di public/images/berita-<slug>.jpg
export const berita: Berita[] = [
  {
    slug: "dini-ambil-formulir-calon-ketum-kohati",
    kategori: "Pendaftaran",
    bannerJudul: "Pendaftaran",
    bannerSub: "Bakal Calon Ketua Umum KOHATI PB HMI",
    judul: "Putri Daerah Jawa Barat, Dini Asmiatul Amanah Resmi Ambil Formulir Calon Ketua Umum KOHATI PB HMI 2027–2029",
    ringkasan:
      "Didampingi tim, Dini mengambil formulir pendaftaran di Sekretariat PB HMI, Jakarta Selatan, menjelang Munas KOHATI ke-XXVI di Bandar Lampung.",
    tanggal: "17 November 2026",
    isi: [
      "Jakarta — Dini Asmiatul Amanah resmi mengambil formulir pendaftaran Bakal Calon Ketua Umum KOHATI PB HMI periode 2027–2029 pada Selasa, 17 November 2026. Didampingi tim, putri asal Tasikmalaya, Jawa Barat, itu datang ke Sekretariat PB HMI di Jakarta Selatan menjelang Musyawarah Nasional (Munas) KOHATI ke-XXVI yang akan digelar di Bandar Lampung.",
      "Menurut Dini, pengambilan formulir ini adalah penanda kesiapannya untuk ikut dalam kontestasi kepemimpinan KOHATI di tingkat nasional.",
      "Lahir dan besar di Tasikmalaya, Dini menamatkan pendidikan sarjana dan magister Pendidikan Sosiologi di Universitas Pendidikan Indonesia (UPI). Kini ia tengah menempuh program doktor Ilmu Politik di Universitas Nasional.",
      "Proses berorganisasinya dimulai dari HMI Cabang Bandung. Ia pernah dipercaya sebagai Ketua Umum HMI Komisariat FPIPS UPI dan Ketua Umum KOHATI HMI Cabang Bandung, sebelum melanjutkan pengabdian di PB HMI. Saat ini ia menjabat Ketua Bidang Pemberdayaan Umat (PU) PB HMI periode 2024–2026.",
      "Dalam pencalonannya, Dini mengusung gagasan “Amanah KOHATI, untuk Perempuan Indonesia”. Visinya adalah membangun KOHATI yang kuat dalam kaderisasi, tangguh dalam kelembagaan, serta menjadi ruang gerakan kepemimpinan Muslimah yang berkualitas.",
      "Bagi Dini, ukuran kepemimpinan bukanlah jabatan, melainkan kesediaan untuk melayani, menjaga kepercayaan, dan menerjemahkan gagasan menjadi kerja nyata.",
      "Ia pun memohon doa dan dukungan dari seluruh HMI-Wati, khususnya kader dari Jawa Barat, agar KOHATI semakin hadir dan memberi manfaat bagi perempuan Indonesia.",
    ],
    kutipan: "Kepemimpinan bukan soal jabatan, kepemimpinan adalah kesediaan untuk melayani.",
    banner: "berita-pengambilanformulir.jpg",
    sumberLiputan: {
      nama: "Berita Opini",
      url: "https://beritaopini.id/2026/11/17/putri-daerah-jawa-barat-dini-asmiatul-amanah-maju-sebagai-calon-ketua-umum-kohati-pb-hmi-periode-2027-2029/",
    },
  },
];

export const profilSection = {
  judulMiring: "Profil",
  judul: "Teh Dini",
  narasi: "Ditempa di ruang kaderisasi, tumbuh lewat pengabdian. Inilah perjalanan yang membentuk cara memimpin.",
};

export const pendidikan = [
  { jenjang: "S3", nama: "Ilmu Politik", tempat: "Universitas Nasional", catatan: "Sedang menempuh" },
  { jenjang: "S2", nama: "Ilmu Pendidikan Sosiologi", tempat: "Universitas Pendidikan Indonesia" },
  { jenjang: "S1", nama: "Pendidikan Sosiologi", tempat: "Universitas Pendidikan Indonesia" },
  { jenjang: "SMA", nama: "SMA Negeri 1 Singaparna" },
  { jenjang: "SMP", nama: "SMP Islam Bahrul Ulum" },
];

export const publikasi = [
  {
    judul: "Structural analysis of Sundanese women's participation in legislative institutions",
    sitasi: "Komariah, S., Amanah, D. A., & Mujayapura, M. R. R. (2025). Cakrawala Pendidikan, 44(2), 413–424.",
    doi: "https://doi.org/10.21831/cp.v44i2.82057",
    indeks: "Scopus Q3",
  },
  {
    judul: "Dinamika peran perempuan Sunda dalam kepemimpinan politik era modern",
    sitasi: "Amanah, D. A., Nurbayani K., S., Komariah, S., & Nugraha, R. A. (2023). Jurnal Analisa Sosiologi, 12(2), 410–430.",
    doi: "https://doi.org/10.20961/jas.v12i2.70660",
    indeks: "SINTA 3",
  },
];

export const prestasiNarasi = "Tidak ada tangga yang dilewati; setiap amanah datang setelah amanah sebelumnya ditunaikan.";
export const prestasi = [
  { judul: "Duta Wisata hingga Tingkat Nasional", isi: "Semasa kuliah, Dini meraih Juara 2 Mojang Jajaka Kabupaten Tasikmalaya dan Juara 2 Putera Puteri Wisata Jawa Barat, lalu mewakili Jawa Barat di Putera Puteri Wisata Indonesia dan meraih Runner-up 1 Kategori Digital." },
  { judul: "Ajudan Milenial Gubernur Jawa Barat", isi: "Terpilih sebagai satu dari 22 ajudan milenial dari 11.171 pendaftar, melalui wawancara, psikotes, tes fisik, dan bootcamp." },
  { judul: "Pelatih Paskibraka Jawa Barat", isi: "Berawal sebagai anggota Paskibraka Kabupaten Tasikmalaya pada 2013, lalu dipercaya menjadi pelatih Paskibraka Provinsi Jawa Barat pada 2020 dan 2021." },
  { judul: "Reporter JMPS UPI", isi: "Sejak 2017 aktif sebagai reporter JMPS UPI, meliput langsung berbagai acara termasuk konferensi internasional dan pertunjukan seni." },
];

export const organisasiNarasi = "Belajar memimpin, belajar dipimpin. Jabatan pada akhirnya adalah soal komitmen dan tanggung jawab.";
export const kaderisasi = [
  { kode: "LK I", tempat: "HMI Cabang Bandung" },
  { kode: "LK II", tempat: "HMI Cabang Surabaya" },
  { kode: "LK III", tempat: "HMI Badko Bali-Nusra" },
  { kode: "LKK", tempat: "KOHATI HMI Cabang Semarang" },
];
export const organisasi = [
  { grup: "PB HMI & KOHATI PB HMI", daftar: ["Ketua Bidang PU PB HMI", "Wasekjen Bidang PU PB HMI", "Wasekum Bidang PSDO KOHATI PB HMI", "Wabendum Bidang HAL KOHATI PB HMI"] },
  { grup: "HMI & KOHATI Cabang Bandung", daftar: ["Ketua Umum KOHATI HMI Cabang Bandung", "Kabid Eksternal KOHATI HMI Cabang Bandung", "Ketua Umum HMI Komisariat FPIPS"] },
  { grup: "Organisasi Lainnya", daftar: ["Pengurus IKA UPI Pusat", "Duta Wisata Jawa Barat", "Duta Wisata Kabupaten Tasikmalaya", "Pengurus Provinsi Purna Paskibraka Jawa Barat", "Mojang Kabupaten Tasikmalaya"] },
];

export const manifesto = {
  label: "Pesan Dini menuju Munas KOHATI ke-XXVI",
  sorot: "Musyawarah Nasional KOHATI",
  kalimat: " adalah momentum untuk kembali meneguhkan arah gerak: menjaga nilai, menguatkan kader, dan memastikan KOHATI tetap menjadi rumah bagi perempuan Islam yang siap memimpin.",
  oleh: "— Dini Asmiatul Amanah, M.Pd",
  komitmen: [
    { judul: "Menjaga Nilai", isi: "Keislaman, keindonesiaan, dan intelektualitas sebagai pijakan gerak." },
    { judul: "Menguatkan Kader", isi: "Ruang tumbuh, belajar, dan memimpin bagi setiap HMI-Wati." },
    { judul: "Memperluas Manfaat", isi: "Kehadiran nyata bagi perempuan, anak, dan masyarakat." },
  ],
};

export const visi =
  "Membangun Amanah KOHATI yang kuat dalam kaderisasi, tangguh dalam kelembagaan, serta menjadi ruang gerakan kepemimpinan Muslimah yang berkualitas Insan Cita.";

export const misi = [
  { no: "01", judul: "Amanah Kaderisasi", isi: "Terbangunnya sistem kaderisasi yang berlandaskan keislaman, keindonesiaan, dan intelektualitas serta responsif terhadap kebutuhan zaman, untuk melahirkan HMI-Wati berkualitas Insan Cita." },
  { no: "02", judul: "Amanah Kepemimpinan", isi: "Terbangunnya ekosistem kepemimpinan perempuan yang berkelanjutan dan berdampak melalui pengembangan kapasitas, perluasan representasi, dan kolaborasi gerakan." },
  { no: "03", judul: "Amanah Kelembagaan", isi: "Terbangunnya kelembagaan KOHATI yang transparan, akuntabel, partisipatif, mandiri, dan adaptif melalui tata kelola digital serta pengelolaan sumber daya yang profesional." },
];

export const dimensi = [
  { judul: "Leadership Development", isi: "Pengembangan kapasitas dan keterampilan kepemimpinan kader." },
  { judul: "Leadership Representation", isi: "Perluasan kehadiran HMI-Wati di posisi strategis organisasi, publik, dan profesional." },
  { judul: "Leadership Impact", isi: "Kepemimpinan yang menghasilkan kebijakan, advokasi, dan pengabdian bagi perempuan dan anak." },
  { judul: "Leadership Sustainability", isi: "Kemandirian kader dan regenerasi kepemimpinan yang berkesinambungan." },
];

export const kutipan = {
  miring: "Kepemimpinan bukan sekadar tentang jabatan.",
  lanjut: " Kepemimpinan adalah keberanian untuk melayani.",
};

// misi: 1 = Kaderisasi, 2 = Kepemimpinan, 3 = Kelembagaan
export const program = [
  { no: "01", nama: "Trainer UP", misi: 1, isi: "Peningkatan kapasitas instruktur training KOHATI dan pembaruan kurikulum serta modul kaderisasi agar relevan dengan kebutuhan zaman." },
  { no: "02", nama: "Learning Center", misi: 1, isi: "Ruang literasi, kajian keislaman, dan wawasan keperempuanan berbasis keilmuan progresif untuk membentuk HMI-Wati berkualitas Insan Cita." },
  { no: "03", nama: "Future Leaders Project", misi: 2, isi: "Akses beasiswa, pelatihan kepemimpinan, peningkatan keterampilan, serta pendorongan kader mengisi posisi strategis." },
  { no: "04", nama: "Policy Institute", misi: 2, isi: "Pusat riset dan rekomendasi kebijakan yang berpihak pada hak perempuan dan perlindungan anak." },
  { no: "05", nama: "Advocacy Center", misi: 2, isi: "Layanan pendampingan hukum dan psikologis bagi perempuan dan anak bersama lembaga bantuan hukum dan psikolog." },
  { no: "06", nama: "Humanity", misi: 2, isi: "Wadah kepedulian sosial, aksi relawan, dan pemberdayaan masyarakat bersama mitra pemerintah, kampus, dan dunia usaha." },
  { no: "07", nama: "Career Hub", misi: 2, isi: "Jejaring kerja, magang, mentorship, dan kewirausahaan untuk kemandirian ekonomi HMI-Wati." },
  { no: "08", nama: "Digital Hub", misi: 3, isi: "Modernisasi tata kelola: e-office, pendataan kaderisasi LKK, pemetaan potensi kader, publikasi laporan, dan kanal aspirasi kader." },
];

// Jumlah foto galeri: galeri-01.jpg … galeri-12.jpg di public/images
export const jumlahGaleri = 12;

export const dukungan = {
  label: "Dukung Dini",
  judul: "Bersama Dini Asmiatul Amanah, Wujudkan Amanah KOHATI untuk Perempuan Indonesia",
  isi: "Dini hadir membawa rekam jejak dari ruang kaderisasi hingga pengabdian di tingkat nasional, serta gagasan yang siap dijalankan. Dukungan Kanda, Yunda, dan seluruh kader di Musyawarah Nasional KOHATI ke-XXVI adalah langkah pertama untuk menjadikan gagasan itu kerja nyata.",
  tagar: "#AmanahKOHATI",
};
