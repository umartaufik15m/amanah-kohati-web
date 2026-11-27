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
    instagramPribadi: "diniasmiatul02",
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
  // Untuk tulisan opini: nama penulis (menggantikan "Tim Media Amanah KOHATI")
  penulis?: string;
  // Untuk liputan media dari situs lain: isi `url` dan `sumber`.
  // Kartu akan langsung membuka artikel aslinya (tanpa halaman detail).
  url?: string;
  sumber?: string;
  // Media yang juga memberitakan (ditampilkan sebagai tautan di halaman detail)
  sumberLiputan?: { nama: string; url: string };
  // Nama file banner di public/images (default: berita-<slug>.jpg)
  banner?: string;
  // Diisi otomatis untuk berita dari halaman /admin
  gambar?: string; // alamat lengkap foto banner
  dibuat?: string; // waktu terbit (ISO)
};

// Ganti isi berita di sini. Tambah objek baru untuk rilis berikutnya,
// lalu taruh banner-nya di public/images/berita-<slug>.jpg
export const berita: Berita[] = [
  {
    slug: "sc-munas-tetapkan-dini-calon-ketua-umum-kohati",
    kategori: "Penetapan",
    bannerJudul: "Penetapan",
    bannerSub: "Calon Ketua Umum KOHATI PB HMI",
    judul: "SC Munas KOHATI ke-XXVI Resmi Tetapkan Dini Asmiatul Amanah sebagai Calon Ketua Umum KOHATI PB HMI",
    ringkasan:
      "Lolos verifikasi administrasi, rekam kaderisasi, dan dukungan cabang, Dini resmi berstatus Calon Ketua Umum KOHATI PB HMI periode 2027–2029.",
    tanggal: "22 November 2026",
    banner: "berita-penetapan-calon.jpg",
    isi: [
      "Steering Committee (SC) Musyawarah Nasional KOHATI ke-XXVI resmi menetapkan Dini Asmiatul Amanah, M.Pd sebagai Calon Ketua Umum KOHATI PB HMI periode 2027–2029. Penetapan tersebut tertuang dalam Surat Keputusan SC Munas KOHATI PB HMI XXVI tentang Nama-Nama Calon Ketua Umum KOHATI PB HMI pada Munas XXVI, tertanggal 22 November 2026.",
      "Penetapan ini merupakan bagian dari rangkaian tahapan resmi pemilihan. Pendaftaran bakal calon dibuka pada 14–16 November 2026, kemudian SC melakukan verifikasi berkas dalam tiga aspek: kelengkapan administrasi, rekam jejak kaderisasi yang mencakup jenjang training formal dan pengalaman kepemimpinan di KOHATI, serta dukungan cabang sesuai ketentuan Munas.",
      "Dari hasil verifikasi tersebut, Dini dinyatakan memenuhi seluruh persyaratan. Statusnya pun resmi berubah dari bakal calon menjadi calon Ketua Umum.",
      "Selanjutnya, para calon akan mengikuti Musyawarah Nasional KOHATI ke-XXVI di Bandar Lampung pada 28 November hingga 5 Desember 2026. Dalam forum tersebut, utusan KOHATI cabang dan badko dari seluruh Indonesia akan memilih Ketua Umum KOHATI PB HMI yang baru.",
      "Berasal dari Tasikmalaya, Jawa Barat, Dini maju dengan tagline \u201cAmanah KOHATI, untuk Perempuan Indonesia\u201d. Visinya adalah membangun KOHATI yang kuat dalam kaderisasi, tangguh dalam kelembagaan, serta menjadi ruang gerakan kepemimpinan Muslimah yang berkualitas Insan Cita, yang dijalankan melalui tiga misi: Amanah Kaderisasi, Amanah Kepemimpinan, dan Amanah Kelembagaan.",
      "Menurut Dini, kata amanah yang ia usung mencerminkan kepercayaan para kader yang harus dijaga. Ukurannya, kata dia, adalah sejauh mana KOHATI mampu hadir dan memberi manfaat bagi perempuan Indonesia.",
    ],
    sumberLiputan: {
      nama: "Berita Opini",
      url: "https://beritaopini.id/2026/11/22/sc-munas-kohati-ke-xxvi-resmi-tetapkan-dini-asmiatul-amanah-sebagai-calon-ketua-umum-kohati-pb-hmi/",
    },
  },
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
  {
    slug: "perempuan-kepemimpinan-dan-amanah-peradaban",
    kategori: "Opini",
    bannerJudul: "Opini",
    bannerSub: "Refleksi 60 Tahun KOHATI",
    judul: "Perempuan, Kepemimpinan dan Amanah Peradaban",
    ringkasan:
      "Refleksi 60 tahun KOHATI: kepemimpinan perempuan bukan soal siapa, melainkan nilai yang dibawa, kebijakan yang dihadirkan, dan perubahan yang diwariskan.",
    tanggal: "18 September 2026",
    penulis: "Dini Asmiatul Amanah",
    banner: "berita-opini-amanah-peradaban.jpg",
    isi: [
      "Enam puluh tahun KOHATI bukan sekadar legitimasi eksistensi dari berdirinya hingga kini, namun momentum untuk merefleksikan kembali tentang \u201cPerempuan seperti apa yang hendak KOHATI tumbuhkan, dan nilai-nilai kepemimpinan apa yang ingin terus dihidupkan?\u201d",
      "Pertanyaan tersebut menjadi sangat relevan di dunia yang saat ini bergerak sangat cepat dan dinamis. Perkembangan teknologi, kecerdasan artifisial, perubahan sosial, ketimpangan, krisis lingkungan, resiliensi keluarga, hingga kompleksitas permasalahan kemanusiaan menghadirkan tantangan baru bagi peran perempuan dalam kepemimpinan strategis. Sehingga, dalam menjawab tantangan ini, tidak cukup bagi KOHATI untuk sekadar berbicara hanya menyoal kuantitas perempuan dalam ruang-ruang kepemimpinan.",
      "Hal yang lebih penting adalah memastikan bahwa kehadiran perempuan dalam ruang-ruang kepemimpinan memiliki kualitas memimpin dengan nilai dan amanah dalam nilai-nilai yang diperjuangkannya untuk kemaslahatan umat. Pemimpin perempuan harus mampu memikul amanah, mengambil keputusan, menyelesaikan persoalan, dan menjadi cahaya bagi peradaban.",
      "## Kepemimpinan dalam Islam: Amanah untuk Peradaban",
      "Dalam Islam, kepemimpinan bukan semata-mata tentang posisi, kekuasaan, dan pengakuan sosial. Islam memandang kepemimpinan sebagai amanah dan pertanggungjawaban. Sebagai contoh, Nabi Muhammad SAW telah mewariskan kepemimpinan yang amanah, sehingga berhasil menerangi zaman dengan cahaya pengetahuan, kemajuan, dan kemuliaan.",
      "Jejak kepemimpinannya tak terbantahkan oleh dunia di sepanjang zaman. Siapa pun yang menginsafi rekam jejak kepemimpinannya akan mengakui bahwa ia adalah teladan kepemimpinan yang relevan di setiap zaman.",
      "Ada suatu hadis yang patut menjadi renungan bagi kita semua sebagai khalifah fil ardh, yang artinya: \u201cKetahuilah setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya atas yang dipimpin. Penguasa yang memimpin rakyat banyak dia akan dimintai pertanggungjawaban atas yang dipimpinnya, setiap kepala keluarga adalah pemimpin anggota keluarganya dan dia dimintai pertanggungjawaban atas yang dipimpinnya, dan istri pemimpin terhadap keluarga rumah suaminya dan juga anak-anaknya, dan dia akan dimintai pertanggungjawabannya terhadap mereka, dan budak seseorang juga pemimpin terhadap harta tuannya dan akan dimintai pertanggungjawaban terhadapnya. Ketahuilah, setiap kalian adalah bertanggung jawab atas yang dipimpinnya.\u201d (HR al-Bukhari)",
      "Pesan tersebut mengingatkan bahwa setiap manusia adalah pemimpin dan setiap pemimpin akan dimintai pertanggungjawaban atas apa yang dipimpinnya. Dalam hal ini tidak ada diskursus yang memosisikan laki-laki atau perempuan sebagai pemimpin, tetapi siapa pun yang diamanahkan menjadi pemimpin harus memiliki integritas moral dalam kepemimpinannya.",
      "Dalam konteks ini, kiranya kita perlu keluar dari perdebatan yang terlalu sederhana: perempuan versus laki-laki, boleh versus tidak boleh, mampu versus tidak mampu. Perdebatan semacam itu sering kali membuat kita lupa pada substansi kepemimpinan itu sendiri. Kepemimpinan bukan menyoal tentang siapa, tetapi apa nilai yang ia bawa, kebijakan apa yang mampu ia hadirkan, dan perubahan apa yang akan ia wariskan.",
      "## KOHATI dan Tantangan Melahirkan Kepemimpinan Strategis",
      "Sejak berdirinya, KOHATI memiliki napas sebagai pembina dan pendidik tunas muda. Menjadi keniscayaan bagi KOHATI untuk kembali pada tujuannya menghadirkan kepemimpinan strategis yang mampu menjadi lentera bagi peradaban. Kepemimpinan harus dibangun melalui proses panjang: pendidikan, pengalaman, keteguhan nilai, keberanian mengambil risiko, kemampuan membaca zaman, dan kesediaan bertanggung jawab atas keputusan.",
      "Proses tersebut sekaligus menegaskan pentingnya memperbaiki proses pengkaderan hingga ke akarnya, mulai dari tingkatan pengurus besar hingga komisariat.",
      "Dalam konteks ini, KOHATI perlu melakukan transformasi kaderisasi untuk membangun kepemimpinan perempuan yang berintegritas dan mampu menghadirkan perubahan. Kaderisasi yang berorientasi pada leadership capacity dengan berlandaskan nilai-nilai kepemimpinan Islam, seperti siddiq, amanah, tabligh, dan fathanah, dapat menjadi fondasi dalam membentuk karakter dan cara mengambil keputusan.",
      "Pada saat yang sama, KOHATI perlu membangun sistem mentoring lintas generasi dengan melibatkan alumni yang telah berkiprah di berbagai sektor, sekaligus menyiapkan leadership pipeline agar kader mampu mengambil peran strategis di ruang pendidikan, politik, pemerintahan, dunia usaha, masyarakat sipil, teknologi, maupun ruang publik lainnya. Karena, kepemimpinan yang berkualitas tidak dapat lahir dari proses yang instan, melainkan dari proses belajar sepanjang hayat, jalan pengabdian, dan mengisi ruang-ruang yang memberi kemaslahatan untuk umat.",
      "Pada akhirnya, refleksi 60 tahun KOHATI bukan hanya tentang mengenang masa lalu, melainkan tentang mempersiapkan masa depan. Gagasan strategis dan futuristik dari setiap pemimpin yang mampu memimpin dengan nilai, amanah dalam setiap tanggung jawab, dan merawat kaderisasi hingga ke akar adalah prasyarat melahirkan kader-kader KOHATI yang mampu menjadi lentera peradaban. Enam puluh tahun KOHATI adalah momentum yang tepat untuk terus menjaga nyala asa dan berjuang bersama menghadirkan KOHATI sebagai lentera yang bersinar dan menyinari, dijiwai nilai-nilai keislaman, keintelektualan, keperempuanan, dan keindonesiaan.",
      "Layaknya teladan yang ditunjukkan oleh Ummahatul Mukminin, seperti Siti Khadijah r.a., Siti Aisyah r.a., dan Fatimah Azzahra, dengan sifat shiddiq (jujur), thahirah (suci), amanah (dapat dipercaya), taat beragama, dermawan, cerdas, dan penyayang. Mereka adalah muslimah-muslimah hebat yang kiprahnya mampu menjadi cahaya bagi kemajuan peradaban. Peranannya sekaligus menegaskan bahwa setiap kemajuan peradaban tidak dapat dipisahkan dari kehadiran perempuan yang bernilai.",
    ],
    kutipan:
      "Kepemimpinan bukan menyoal tentang siapa, tetapi apa nilai yang ia bawa, kebijakan apa yang mampu ia hadirkan, dan perubahan apa yang akan ia wariskan.",
    sumberLiputan: {
      nama: "RMOL.id (Publika)",
      url: "https://rmol.id/publika/read/2026/09/18/722124/perempuan-kepemimpinan-dan-amanah-peradaban",
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
  { grup: "HMI & KOHATI Cabang Bandung", daftar: ["Ketua Umum KOHATI HMI Cabang Bandung", "Kabid Eksternal KOHATI HMI Cabang Bandung", "Ketua Umum HMI Komisariat FPIPS", "Bendahara Umum HMI Komisariat FPIPS", "Bidang Eksternal KOHATI HMI Komisariat FPIPS"] },
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
export const jumlahGaleri = 11;

export const dukungan = {
  label: "Dukung Dini",
  judul: "Bersama Dini Asmiatul Amanah, Wujudkan Amanah KOHATI untuk Perempuan Indonesia",
  isi: "Dini hadir membawa rekam jejak dari ruang kaderisasi hingga pengabdian di tingkat nasional, serta gagasan yang siap dijalankan. Dukungan Kanda, Yunda, dan seluruh kader di Musyawarah Nasional KOHATI ke-XXVI adalah langkah pertama untuk menjadikan gagasan itu kerja nyata.",
  tagar: "#AmanahKOHATI",
};

// Jadwal resmi tahapan pemilihan Ketua Umum KOHATI PB HMI 2027–2029
export const tahapan = [
  { tanggal: "14–16 November 2026", judul: "Pengambilan Formulir Pendaftaran", ket: "Oleh seluruh bakal calon", fase: "daftar" },
  { tanggal: "17–19 November 2026", judul: "Pengembalian Formulir Pendaftaran", ket: "Oleh seluruh bakal calon", fase: "daftar" },
  { tanggal: "20 November 2026", judul: "Verifikasi Berkas", ket: "Berkas seluruh bakal calon", fase: "seleksi" },
  { tanggal: "21 November 2026", judul: "Fit and Proper Test", ket: "Uji kelayakan bakal calon", fase: "seleksi" },
  { tanggal: "22 November 2026", judul: "Penetapan Calon", ket: "Seluruh bakal calon ditetapkan menjadi calon", fase: "seleksi" },
  { tanggal: "23 November 2026", judul: "Nomor Urut & Debat Kandidat", ket: "Pengambilan nomor urut dan debat kandidat Ketua Umum", fase: "debat" },
  { tanggal: "28 November – 5 Desember 2026", judul: "Munas KOHATI ke-XXVI", ket: "Pelaksanaan Musyawarah Nasional di Bandar Lampung", fase: "munas" },
];
