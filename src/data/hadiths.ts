export interface Stage {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  badge: string;
}

export interface PerbandinganMazhab {
  hanafi: string;
  maliki: string;
  syafii: string;
  hanbali: string;
  khiDanKonteks: string;
}

export interface HadithItem {
  id: string;
  stageId: 'pra-nikah' | 'akad' | 'domestik' | 'finansial' | 'keintiman' | 'konflik' | 'perceraian' | 'pengasuhan';
  theme: string;
  pertemuan?: number;
  title: string;
  rawi: string;
  kitab: string;
  kitabBab: string;
  noHadis: string;
  sanadArab: string;
  matnArab: string;
  terjemahanSanad: string;
  terjemahan: string;
  perbandinganMazhab: PerbandinganMazhab;
  pemaknaanKonvensional: {
    ringkasan: string;
    poin: string[];
  };
  pemaknaanMubadalah: {
    ringkasan: string;
    illatHukum: string;
    poinKesalingan: string[];
    aplikasiHariIni: string[];
  };
  pilarTerkait: ('Mitsaqan Ghalizhan' | 'Zawaj' | "Mu'asyarah bi al-Ma'ruf" | 'Tasyawur' | 'Taradhin')[];
  tags: string[];
  quoteSnippet: string;
}

export const STAGES: Stage[] = [
  {
    id: 'pra-nikah',
    title: '1. Pra-Nikah & Khithbah',
    icon: 'Sparkles',
    tagline: 'Kriteria Pasangan, Kafa\'ah Takwa, Hak Otonomi Memilih & Larangan Kawin Paksa',
    badge: 'Fondasi Awal'
  },
  {
    id: 'akad',
    title: '2. Akad, Mahar & Perjanjian',
    icon: 'ScrollText',
    tagline: 'Mitsaqan Ghalizhan, Filosofi Mahar yang Memudahkan & Keabsahan Syarat Perkawinan',
    badge: 'Ikatan Suci'
  },
  {
    id: 'domestik',
    title: '3. Keseharian & Kerja Domestik',
    icon: 'Home',
    tagline: 'Khidmah al-Bayt: Meneladani Nabi di Rumah, Rekreasi Bersama & Adab Meja Makan',
    badge: 'Keseharian Pasutri'
  },
  {
    id: 'finansial',
    title: '4. Finansial, Nafkah & Harta',
    icon: 'Wallet',
    tagline: 'Kemitraan Ekonomi: Nafkah Bil Ma\'ruf, Apresiasi Istri Bekerja & Larangan Menahan Harta',
    badge: 'Dapur & Rezeki'
  },
  {
    id: 'keintiman',
    title: '5. Keintiman & Hak Reproduksi',
    icon: 'HeartHandshake',
    tagline: 'Mula\'abah: Saling Membahagiakan, Marital Consent & Hak Pengaturan Kehamilan',
    badge: 'Relasi Ranjang'
  },
  {
    id: 'konflik',
    title: '6. Resolusi Konflik & Anti-KDRT',
    icon: 'ShieldAlert',
    tagline: 'Pengendalian Marah, Menolak Kekerasan Fisik-Verbal & Keteladanan Nabi Tanpa Pukulan',
    badge: 'Manajemen Krisis'
  },
  {
    id: 'perceraian',
    title: '7. Perceraian & Gugat Khulu\'',
    icon: 'Scale',
    tagline: 'Tasrihun bi Ihsan: Hak Khulu\' Istri, Larangan Talak saat Haid & Talak Tiga Sekaligus',
    badge: 'Pascaperkawinan'
  },
  {
    id: 'pengasuhan',
    title: '8. Pengasuhan Anak & Hadhanah',
    icon: 'Users',
    tagline: 'Hadhanah Ibu Pasca-Cerai, Kehangatan Figur Ayah & Keadilan Gender Antaranak',
    badge: 'Amanah Generasi'
  }
];

export const HADITHS_DATA: HadithItem[] = [
  // ==========================================
  // KLASTER 1: PRA-NIKAH & KHITHBAH
  // ==========================================
  {
    id: 'hadis-empat-kriteria',
    stageId: 'pra-nikah',
    theme: 'Kriteria Memilih Pasangan & Kafa\'ah Takwa',
    pertemuan: 5,
    title: 'Empat Kriteria Memilih Pasangan: Menjadikan Karakter Agama Sebagai Fondasi',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari',
    kitabBab: 'Kitab an-Nikah, Bab al-Akfa\' fid Din (Bab Kesepadanan dalam Agama)',
    noHadis: 'No. 5090 (dan No. 5146)',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا يَحْيَى، عَنْ عُبَيْدِ اللَّهِ، قَالَ حَدَّثَنِي سَعِيدُ بْنُ أَبِي سَعِيدٍ، عَنْ أَبِيهِ، عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ، تَرِبَتْ يَدَاكَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Yahya, dari Ubaidullah, ia berkata: telah menceritakan kepadaku Sa\'id bin Abi Sa\'id, dari ayahnya (Abu Sa\'id Kaysan), dari Abu Hurairah رضي الله عنه, dari Nabi ﷺ, beliau bersabda:',
    terjemahan: 'Perempuan biasanya dinikahi karena empat perkara: karena hartanya, karena kedudukan nasabnya, karena kecantikannya, dan karena agamanya. Maka pilihlah perempuan yang memiliki komitmen agama (akhlak), niscaya engkau akan beruntung.',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi memandang kafa\'ah (kesepadanan) mencakup nasab, kemerdekaan, harta, ketaatan agama, dan profesi. Namun, kafa\'ah adalah hak perempuan dan walinya, bukan syarat sah akad nikah.',
      maliki: 'Mazhab Maliki membatasi kafa\'ah secara ketat hanya pada dua hal: komitmen agama (ad-din) dan terbebasnya diri dari cacat fisik yang menghalangi pernikahan.',
      syafii: 'Mazhab Syafi\'i memasukkan nasab, agama, kemerdekaan, dan pekerjaan dalam kafa\'ah sebagai ukuran kelayakan hidup bersama, namun ketidaksepadanan dapat digugurkan dengan kerelaan perempuan dan wali.',
      hanbali: 'Mazhab Hanbali menempatkan kafa\'ah dalam agama dan nasab sebagai hak wali dan istri. Jika mereka rela menikah dengan yang tidak sekufu, akad tetap sah.',
      khiDanKonteks: 'Kompilasi Hukum Islam (KHI) Pasal 61 menyempitkan kafa\'ah secara progresif: "Ketidakseimbangan tidak dapat dijadikan alasan untuk mencegah perkawinan, kecuali ketidakseimbangan dalam agama." Hal ini membebaskan masyarakat dari diskriminasi kasta sosial/nasab.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dipahami satu arah hanya sebagai instruksi bagi laki-laki dalam menilai calon istri. Kata "din" sering disempitkan sekadar performa ibadah ritual lahiriah (busana, hafalan, kesalehan simbolik).',
      poin: [
        'Laki-laki diposisikan sebagai subjek yang memilih, perempuan sebagai objek yang diperiksa.',
        'Mengesankan harta dan nasab sebagai anjuran, padahal redaksinya deskriptif tentang kebiasaan umum manusia.',
        'Jarang ditarik sebagai hak setara bagi perempuan dalam memilih calon suami.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kriteria ini berlaku resiprokal: sebagaimana laki-laki mencari istri dengan karakter akhlak yang baik (dzatu din/khuluq), perempuan pun berhak mencari suami yang berakhlak mulia (dzu din/khuluq) yang mampu memperlakukan pasangan secara bermartabat.',
      illatHukum: 'Kelanggengan hubungan ditopang oleh kualitas karakter dan kedewasaan relasi, bukan fisik atau materi yang fana.',
      poinKesalingan: [
        'Hak memilih dan menimbang calon berlaku setara bagi laki-laki dan perempuan.',
        '"Din" bukan sekadar simbol ritual, melainkan bagaimana seseorang mengelola emosi dan menghormati sesama.',
        'Keluarga berperan sebagai ruang tasyawur (musyawarah), bukan pemaksa kehendak.'
      ],
      aplikasiHariIni: [
        'Periksa bagaimana calon pasangan memperlakukan ibunya, pekerja rumah tangga, dan orang yang tidak berkuasa atas dirinya.',
        'Lakukan pertukaran informasi dua arah secara jujur: riwayat kesehatan, visi keluarga, dan rencana pembagian peran.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Taradhin', 'Tasyawur'],
    tags: ['Kriteria Pasangan', 'Pra-Nikah', 'Kesepadanan Takwa', 'Taaruf'],
    quoteSnippet: 'Agama yang sejati dalam pernikahan bukan sekadar simbol kesalehan lahiriah, melainkan kematangan akhlak dalam memperlakukan pasangan hidup secara bermartabat.'
  },
  {
    id: 'hadis-khansa-tolak-nikah-paksa',
    stageId: 'pra-nikah',
    theme: 'Hak Persetujuan Perempuan & Menolak Kawin Paksa',
    pertemuan: 5,
    title: 'Pembatalan Nikah Paksa Khansa binti Khidzam: Hak Prerogatif Persetujuan Mempelai',
    rawi: 'Khansa binti Khidzam al-Anshariyyah ra',
    kitab: 'Sahih al-Bukhari',
    kitabBab: 'Kitab an-Nikah, Bab Idza Zawwajar Rajulu Ibnatahu wa Hiya Karihatun Fanikahuhu Mardud (Pernikahan yang Dipaksa Ayah Ditolak)',
    noHadis: 'No. 5138',
    sanadArab: 'حَدَّثَنَا إِسْحَاقُ بْنُ مَنْصُورٍ، حَدَّثَنَا حُسَيْنٌ الجُعْفِيُّ، عَنْ زَائِدَةَ، عَنْ عَبْدِ المَلِكِ بْنِ عُمَيْرٍ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ أَبِي لَيْلَى، حَدَّثَنَا خَنْسَاءُ بِنْتُ خِذَامٍ الأَنْصَارِيَّةُ:',
    matnArab: '«أَنَّ أَبَاهَا زَوَّجَهَا وَهِيَ ثَيِّبٌ فَكَرِهَتْ ذَلِكَ، فَأَتَتْ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَرَدَّ نِكَاحَهُ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Ishaq bin Manshur, telah menceritakan kepada kami Husain al-Ju\'fi, dari Zaidah, dari Abdul Malik bin Umair, telah menceritakan kepada kami Abdurrahman bin Abi Laila, telah menceritakan kepada kami Khansa binti Khidzam al-Anshariyyah:',
    terjemahan: 'Bahwa ayahnya telah menikahkan dirinya (dengan seorang laki-laki), padahal ia berstatus janda dan ia membenci pernikahan tersebut. Maka ia mendatangi Rasulullah ﷺ, lalu beliau membatalkan (memfasakh) akad pernikahan tersebut.',
    perbandinganMazhab: {
      hanafi: 'Imam Abu Hanifah menetapkan bahwa perempuan yang telah baligh dan berakal sehat (baik gadis maupun janda) memiliki kedaulatan hukum penuh untuk menikahkan dirinya sendiri tanpa hak paksa dari wali mana pun.',
      maliki: 'Imam Malik membedakan antara gadis dan janda: janda tidak boleh dinikahkan tanpa persetujuan tegasnya, sedangkan gadis masih tunduk pada hak ijbar ayah.',
      syafii: 'Imam Syafi\'i sepakat bahwa pernikahan janda yang dipaksa adalah batal (*mardud*). Namun untuk anak gadis perawan, Syafi\'i mempertahankan konsep wali mujbir, meski tetap mensyaratkan tidak adanya permusuhan nyata antara ayah dan anak.',
      hanbali: 'Imam Ahmad bin Hanbal berpandangan sejalan dengan hadis ini bahwa persetujuan perempuan adalah rukun kerelaan; jika perempuan menolak secara tegas, pernikahan tidak boleh dipaksakan.',
      khiDanKonteks: 'Hukum Positif Indonesia (UU No. 1/1974 Pasal 6 & KHI Pasal 16) menegaskan bahwa perkawinan harus didasarkan atas persetujuan kedua calon mempelai tanpa adanya paksaan dari pihak mana pun.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sebagian ulama membatasi hak penolakan ini hanya untuk janda (tsayyib), sementara perawan (bikr) dianggap masih boleh dipaksa oleh wali mujbir (ayah/kakek).',
      poin: [
        'Mempertahankan konsep hak paksa wali (ijbar) atas anak gadis.',
        'Memandang perempuan muda belum cakap menentukan masa depannya sendiri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Preseden pembatalan nikah oleh Nabi ﷺ menegaskan bahwa akad nikah adalah perjanjian suci (mitsaqan ghalizhan) yang menuntut kerelaan penuh (taradhin) dari kedua mempelai yang akan menjalaninya. Pemaksaan dari siapa pun, termasuk orang tua, membatalkan esensi kerelaan akad.',
      illatHukum: 'Pernikahan yang dibangun di atas paksaan bertentangan dengan tujuan mawaddah wa rahmah.',
      poinKesalingan: [
        'Hak menentukan pasangan hidup berada di tangan yang bersangkutan, baik laki-laki maupun perempuan, janda maupun perawan.',
        'Wali bertindak sebagai pelindung dan pendamping musyawarah, bukan pemilik tubuh anak.'
      ],
      aplikasiHariIni: [
        'Hentikan segala bentuk perjodohan paksa atau pernikahan di bawah tekanan keluarga.',
        'Dengarkan secara saksama suara dan kerelaan anak perempuan sebelum menetapkan lamaran.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Mitsaqan Ghalizhan', 'Tasyawur'],
    tags: ['Nikah Paksa', 'Hak Perempuan', 'Wali Mujbir', 'Persetujuan Mempelai'],
    quoteSnippet: 'Rasulullah ﷺ membatalkan pernikahan yang dipaksakan orang tua, menegaskan bahwa kerelaan mempelai adalah kunci sahnya ikatan perkawinan.'
  },
  {
    id: 'hadis-izin-gadis-janda',
    stageId: 'pra-nikah',
    theme: 'Izin dan Konfirmasi Persetujuan Calon Mempelai',
    title: 'Konfirmasi Persetujuan Calon Mempelai: Larangan Menikahkan Tanpa Izin Terbuka',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nikah, Bab La Yunzahu al-Bikru hatta Tusta\'dzan; Muslim: Kitab an-Nikah No. 1419',
    noHadis: 'Bukhari No. 5136, Muslim No. 1419',
    sanadArab: 'حَدَّثَنَا مُعَاذُ بْنُ فَضَالَةَ، حَدَّثَنَا هِشَامٌ، عَنْ يَحْيَى، عَنْ أَبِي سَلَمَةَ، أَنَّ أَبَا هُرَيْرَةَ حَدَّثَهُمْ أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«لَا تُنْكَحُ الأَيِّمُ حَتَّى تُسْتَأْمَرَ، وَلَا تُنْكَحُ البِكْرُ حَتَّى تُسْتَأْذَنَ. قَالُوا: يَا رَسُولَ اللَّهِ، وَكَيْفَ إِذْنُهَا؟ قَالَ: أَنْ تَسْكُتَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Mu\'adz bin Fadhalah, telah menceritakan kepada kami Hisyam, dari Yahya bin Abi Katsir, dari Abu Salamah, bahwa Abu Hurairah menceritakan kepada mereka bahwa Nabi ﷺ bersabda:',
    terjemahan: 'Janganlah seorang janda dinikahkan sampai ia dimintai perintahnya (persetujuan tegasnya), dan janganlah seorang gadis dinikahkan sampai dimintai izinnya. Para sahabat bertanya: "Wahai Rasulullah, bagaimana bentuk izinnya?" Beliau menjawab: "Jika ia diam (karena sifat malunya, namun tidak menolak)."',
    perbandinganMazhab: {
      hanafi: 'Hanafi memandang diamnya gadis berlaku jika ia dimintai izin oleh wali kerabat dekatnya. Namun hak akad tetap berada pada si gadis setelah baligh.',
      maliki: 'Maliki mensyaratkan izin lisan untuk janda, sedangkan gadis yang belum pernah menikah cukup diamnya selama tidak menunjukkan tanda penolakan nyata (seperti menangis menolak).',
      syafii: 'Syafi\'i memandang diamnya perawan sebagai izin karena faktor rasa malu (*haya\'*). Namun bila sang gadis secara eksplisit berkata "saya tidak mau", maka wali haram menikahkannya.',
      hanbali: 'Hanbali menetapkan bahwa jika seorang gadis telah berumur 9 tahun ke atas, izinnya wajib dimintakan secara nyata dan tidak boleh diabaikan.',
      khiDanKonteks: 'KHI Pasal 17 ayat (1): "Sebelum perkawinan dilangsungkan, Pegawai Pencatat Nikah menanyakan lebih dahulu persetujuan calon mempelai di hadapan dua orang saksi nikah." Diam tidak lagi otomatis dianggap setuju tanpa konfirmasi verbal/tertulis.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Diamnya gadis dipahami sebagai persetujuan otomatis, sehingga jika seorang gadis menangis atau diam karena tertekan, tetap dianggap telah menyetujui.',
      poin: [
        'Mengabaikan tekanan psikologis di mana gadis diam karena rasa takut pada keluarga.',
        'Menempatkan persetujuan sebatas formalitas tanpa dialog mendalam.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengajarkan kehati-hatian tertinggi agar perempuan tidak dikorbankan. Diam hanya menjadi tanda izin jika suasana bebas dari intimidasi dan keterpaksaan. Jika ada keraguan atau penolakan lisan, diam tersebut gugur dan tidak dapat dijadikan dasar akad.',
      illatHukum: 'Kepastian persetujuan sukarela (taradhin) sebelum ikatan suci diresmikan.',
      poinKesalingan: [
        'Mempelai laki-laki dan perempuan sama-sama harus menyatakan kesediaannya secara merdeka.',
        'Masyarakat modern menuntut izin yang lugas, tertulis, dan bebas manipulasi di hadapan penghulu/KUA.'
      ],
      aplikasiHariIni: [
        'Pastikan calon pengantin perempuan ditanya secara privat tanpa intervensi pihak luar yang menekannya.',
        'Bangun keterbukaan sejak dini antara orang tua dan anak dalam mendiskusikan calon pasangan.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Tasyawur'],
    tags: ['Izin Menikah', 'Persetujuan Mempelai', 'Hak Perempuan'],
    quoteSnippet: 'Tidak sah menikahkan seseorang sebelum meminta kerelaannya; pernikahan suci berdiri di atas persetujuan yang merdeka, bukan kepatuhan yang dipaksakan.'
  },
  {
    id: 'hadis-barirah-mughits',
    stageId: 'pra-nikah',
    theme: 'Hak Otonomi Memilih & Menolak Cinta Pasangan',
    title: 'Kisah Barirah & Mughits: Nabi ﷺ Tidak Memaksakan Cinta yang Tidak Diridhai',
    rawi: 'Ibnu Abbas ra',
    kitab: 'Sahih al-Bukhari',
    kitabBab: 'Kitab at-Thalaq, Bab Syafa\'atun Nabi fi Zauji Barirah',
    noHadis: 'No. 5283',
    sanadArab: 'حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الوَهَّابِ، حَدَّثَنَا خَالِدٌ، عَنْ عِكْرِمَةَ، عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا:',
    matnArab: '«فَقَالَ لَهَا النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: لَوْ رَاجَعْتِهِ؟ قَالَتْ: يَا رَسُولَ اللَّهِ، تَأْمُرُنِي؟ قَالَ: إِنَّمَا أَنَا أَشْفَعُ. قَالَتْ: لَا حَاجَةَ لِي فِيهِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Muhammad bin Basyar, telah menceritakan kepada kami Abdul Wahhab, telah menceritakan kepada kami Khalid al-Haddza\', dari Ikrimah, dari Ibnu Abbas رضي الله عنهما:',
    terjemahan: 'Nabi ﷺ berkata kepada Barirah (yang memilih berpisah setelah merdeka, sementara mantan suaminya Mughits berjalan di belakangnya sambil menangis memohon): "Seandainya engkau mau rujuk kepadanya?" Barirah bertanya: "Wahai Rasulullah, apakah engkau memerintahkanku (sebagai kewajiban wahyu)?" Nabi menjawab: "Aku hanya memberi syafaat (saran manusiawi)." Barirah menjawab tegas: "Aku tidak membutuhkan dirinya lagi."',
    perbandinganMazhab: {
      hanafi: 'Hanafi menetapkan khiyar \'itq (hak pilih kemerdekaan budak) hanya berlaku jika budak perempuan merdeka sementara suaminya masih budak.',
      maliki: 'Maliki sepakat bahwa hak pilih ada di tangan perempuan untuk melanjutkan ikatan perkawinan atau memfasakhnya.',
      syafii: 'Syafi\'i menggunakan riwayat ini sebagai dalil sahnya pemutusan akad atas kehendak perempuan merdeka serta bukti bahwa rekomendasi pemimpin/hakim tidak bersifat memaksa hak privat seseorang.',
      hanbali: 'Hanbali menegaskan bahwa kebebasan memilih pasangan hidup adalah hak murni individu yang tidak boleh diintervensi bahkan oleh otoritas kenabian jika sifatnya saran.',
      khiDanKonteks: 'Menjadi pijakan etis dan yuridis bahwa kelangsungan hubungan suami istri tidak dapat dipaksakan oleh lembaga mana pun apabila salah satu pihak telah mengalami kebencian atau ketidakcocokan mendalam.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Kerap dikaji sebatas bab fiqh khiyar kemerdekaan budak (khiyarul \'itq) tanpa melihat dimensi hak otonomi cinta seorang perempuan.',
      poin: [
        'Dianggap sebagai kasus khusus budak perempuan yang dimerdekakan.',
        'Jarang ditarik sebagai prinsip bahwa cinta dan kelangsungan pernikahan tidak boleh dipaksakan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ membedakan secara tegas antara perintah syariat yang mengikat dan anjuran empati manusiawi. Ketika Barirah menolak rujuk karena sudah tidak memiliki kecocokan rasa hati, Nabi ﷺ menghormati keputusannya dan tidak memaksakannya.',
      illatHukum: 'Pernikahan tidak dapat dipaksakan berjalan jika salah satu pihak mengalami ketidaknyamanan batin yang mendalam.',
      poinKesalingan: [
        'Hak menolak dan hak memilih pasangan adalah hak asasi perempuan yang diakui syariat.',
        'Rasa cinta dan kenyamanan psikologis tidak bisa dituntut dengan ancaman dosa.',
        'Bahkan seorang Nabi tidak memaksakan hak asasi perempuan dalam urusan jodoh.'
      ],
      aplikasiHariIni: [
        'Hormati hak seseorang untuk mengakhiri ta\'aruf atau menolak lamaran tanpa perlu menyudutkan atau mempermalukannya.',
        'Sadari bahwa ikatan rumah tangga tanpa kenyamanan rasa hati berpotensi melahirkan kezaliman harian.'
      ]
    },
    pilarTerkait: ['Taradhin', 'Zawaj'],
    tags: ['Barirah', 'Hak Menolak', 'Otonomi Perempuan', 'Khiyar'],
    quoteSnippet: 'Ketika Barirah menolak kembali kepada suaminya, Rasulullah ﷺ menghormati keputusannya, menegaskan bahwa cinta dan pernikahan tidak boleh dipaksakan.'
  },
  {
    id: 'hadis-mulaabah-jabir',
    stageId: 'pra-nikah',
    theme: 'Konsep Saling Membahagiakan',
    pertemuan: 5,
    title: 'Konsep Mula\'abah: Saling Menyenangkan Sejak Awal Niat Menikah',
    rawi: 'Jabir bin Abdillah ra',
    kitab: 'Sahih Muslim',
    kitabBab: 'Kitab ar-Radha\', Bab Istihbab Nikah al-Bikr No. 715 (lihat juga Bukhari No. 5079)',
    noHadis: 'Muslim No. 715 (Bukhari No. 5079)',
    sanadArab: 'حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُعَاذٍ، حَدَّثَنَا أَبِي، حَدَّثَنَا شُعْبَةُ، عَنْ سَيَّارٍ، عَنِ الشَّعْبِيِّ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ:',
    matnArab: '«قَالَ لِي رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَفَلَا تَزَوَّجْتَ بِكْرًا تُلاَعِبُكَ وَتُلاَعِبُهَا؟»',
    terjemahanSanad: 'Telah menceritakan kepada kami Ubaidullah bin Mu\'adz, telah menceritakan kepada kami ayahku, telah menceritakan kepada kami Syu\'bah, dari Sayyar, dari Asy-Sya\'bi, dari Jabir bin Abdillah رضي الله عنهما, ia berkata:',
    terjemahan: 'Rasulullah ﷺ berkata kepadaku: "Mengapa tidak menikahi perawan saja, sehingga ia bisa bersenang-senang denganmu (tula\'ibuka) dan engkau pun bisa bersenang-senang dengannya (tula\'ibuha)?"',
    perbandinganMazhab: {
      hanafi: 'Menyukai anjuran menikahi gadis demi keharmonisan awal, namun membolehkan dan memuji pernikahan dengan janda jika mengandung kemaslahatan pengasuhan.',
      maliki: 'Menilai anjuran ini bersifat irsyad (petunjuk praktis), bukan keharusan syar\'i; terbukti Nabi menyetujui alasan Jabir.',
      syafii: 'Menyatakan sunnah menikahi perawan sebagai keutamaan umum, tetapi preferensi ini dapat bergeser menjadi lebih utama menikahi janda jika ada maslahat keluarga sebagaimana dialami Jabir.',
      hanbali: 'Memandang anjuran mula\'abah sebagai tujuan sah pernikahan untuk saling menghalalkan dan memuaskan kebutuhan fitrah kedua pasangan secara halal.',
      khiDanKonteks: 'Hukum perkawinan Indonesia tidak membedakan status perawan atau janda, perjaka atau duda; yang dinilai adalah kecakapan hukum dan ketiadaan halangan perkawinan.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipotong sepihak untuk menganjurkan menikahi perawan dan mendiskreditkan janda, dengan fokus semata pada kepuasan seksual laki-laki.',
      poin: [
        'Kerap diterjemahkan sepotong ("agar ia menyenangkanmu") tanpa menerjemahkan "dan kamu menyenangkannya".',
        'Mengabaikan konteks jawaban Jabir yang kemudian diterima Nabi: Jabir memilih janda demi mengasuh adik-adiknya yang yatim.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Redaksi "tula\'ibuka wa tula\'ibuha" membuktikan bahwa kesenangan dalam pernikahan bersifat resiprokal sejak awal: pasutri dituntut saling membahagiakan, bukan satu pihak melayani dan pihak lain hanya dilayani.',
      illatHukum: 'Tujuan pernikahan adalah mewujudkan kebahagiaan bersama (mula\'abah) dan sakinah, bukan hierarki status sosial.',
      poinKesalingan: [
        'Nabi ﷺ sendiri menikahi Khadijah ra yang berstatus janda dan lebih tua 15 tahun sebagai cinta paling mendalam sepanjang hayat beliau.',
        'Status perawan/janda atau perjaka/duda bukan penentu kemuliaan seseorang; yang utama adalah kapasitas membangun cinta dan kemaslahatan rumah tangga.'
      ],
      aplikasiHariIni: [
        'Menghilangkan stigma terhadap perempuan atau laki-laki yang berstatus janda atau duda.',
        'Fokus menilai kecocokan visi hidup, selera humor yang tidak merendahkan, dan kesiapan saling mendukung.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Taradhin'],
    tags: ['Mulaabah', 'Kesetaraan Pasangan', 'Status Pernikahan'],
    quoteSnippet: 'Kebahagiaan pernikahan terwujud saat kedua insan saling berikhtiar membahagiakan satu sama lain: ia bersenang-senang denganmu, dan kamu pun bersenang-senang dengannya.'
  },

  // ==========================================
  // KLASTER 2: AKAD, MAHAR & PERJANJIAN
  // ==========================================
  {
    id: 'hadis-syarat-akad',
    stageId: 'akad',
    theme: 'Perjanjian Perkawinan (Prenuptial Agreement)',
    pertemuan: 6,
    title: 'Pemenuhan Syarat Akad: Kewajiban Mengikat Janji Pernikahan',
    rawi: 'Uqbah bin Amir ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nikah, Bab asy-Syuruth fil Mahri No. 2721 & 5151; Muslim No. 1418',
    noHadis: 'Bukhari No. 2721 (Muslim No. 1418)',
    sanadArab: 'حَدَّثَنَا عَلِيُّ بْنُ عَبْدِ اللَّهِ، حَدَّثَنَا سُفْيَانُ، حَدَّثَنَا الزُّهْرِيُّ، عَنْ عُرْوَةَ، عَنْ عُقْبَةَ بْنِ عَامِرٍ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«أَحَقُّ الشُّرُوطِ أَنْ تُوفُوا بِهِ مَا اسْتَحْلَلْتُمْ بِهِ الْفُرُوجَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Ali bin Abdullah, telah menceritakan kepada kami Sufyan, telah menceritakan kepada kami Az-Zuhri, dari Urwah, dari Uqbah bin Amir رضي الله عنه, dari Nabi ﷺ, beliau bersabda:',
    terjemahan: 'Syarat-syarat yang paling berhak untuk kalian penuhi adalah syarat-syarat yang dengannya kalian menghalalkan hubungan pernikahan.',
    perbandinganMazhab: {
      hanafi: 'Membatasi keabsahan syarat: syarat yang bertentangan dengan konsekuensi akad (seperti syarat tidak mau dimadu atau syarat tidak mau dinafkahi) dianggap batal, namun akad nikahnya tetap sah.',
      maliki: 'Memandang syarat yang bermanfaat bagi istri hukumnya makruh atau tidak mengikat kecuali jika dipertegas dalam akad, namun tidak membatalkan akad.',
      syafii: 'Syafi\'i membedakan: syarat yang sesuai tuntutan akad (seperti menggauli dengan baik) wajib dipenuhi; syarat yang bertentangan dengan esensi akad batal; syarat yang memberi maslahat tambahan diperselisihkan keharusan pemenuhannya.',
      hanbali: 'Imam Ahmad bin Hanbal adalah mazhab paling progresif dalam bab ini: seluruh syarat yang diajukan istri (seperti syarat agar suami tidak berpoligami, tidak membawanya pindah kota, atau izin bekerja) adalah SAH dan WAJIB dipenuhi. Jika suami melanggar, istri berhak menuntut fasakh.',
      khiDanKonteks: 'KHI Pasal 45–52 mengadopsi pandangan Hanbali: calon mempelai dapat mengadakan perjanjian perkawinan tertulis mengenai pemisahan harta, izin karier, dan klausul taklik talak.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Kerap dipersempit hanya seputar keabsahan syarat teknis rukun akad (ijab-qabul, mahar, saksi) tanpa memberi ruang kesepakatan tertulis bagi perempuan.',
      poin: [
        'Dipandang tabu jika calon istri mengajukan syarat-syarat tertulis menjelang akad.',
        'Dianggap bahwa seluruh hak berada di tangan suami setelah ijab kabul selesai.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini adalah dasar legal syariat bagi keabsahan perjanjian perkawinan (syuruth an-nikah). Syarat yang disepakati bersama bersifat mengikat secara hukum bagi kedua mempelai.',
      illatHukum: 'Menjaga kepastian komitmen dan melindungi hak-hak rentan agar tidak terzalimi setelah berlangsungnya ikatan akad.',
      poinKesalingan: [
        'Calon istri dan calon suami sama-sama berhak merumuskan poin perjanjian pra-nikah (komitmen tidak poligami, izin studi/karier, pembagian harta).',
        'Pelanggaran atas syarat pernikahan adalah pengkhianatan atas nama Allah yang dengannya hubungan itu dihalalkan.',
        'Mazhab Hanbali mewajibkan seluruh syarat yang disepakati untuk dipenuhi selama tidak menghalalkan yang haram.'
      ],
      aplikasiHariIni: [
        'Membuat perjanjian perkawinan di hadapan Notaris/KUA untuk meneguhkan kejelasan hak nafkah, pembagian harta bersama, dan komitmen anti-kekerasan.',
        'Menjadikan musyawarah pra-akad sebagai sarana menguji komitmen integritas calon pasangan.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', 'Tasyawur', 'Taradhin'],
    tags: ['Perjanjian Kawin', 'Akad Nikah', 'Syarat Sah', 'Komitmen'],
    quoteSnippet: 'Perjanjian yang paling suci dan wajib ditepati adalah janji yang diucapkan saat menghalalkan ikatan cinta perkawinan.'
  },
  {
    id: 'hadis-mahar-berkah',
    stageId: 'akad',
    theme: 'Filosofi Mahar Memudahkan Perkawinan',
    title: 'Mahar yang Membawa Berkah: Larangan Memberatkan & Mengomersialisasikan Perkawinan',
    rawi: 'Aisyah ra',
    kitab: 'Musnad Ahmad',
    kitabBab: 'Baqi Musnad al-Anshar, Musnad Aisyah ra',
    noHadis: 'No. 24595',
    sanadArab: 'حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنِ ابْنِ جُرَيْجٍ، عَنْ أَبِي الزُّبَيْرِ، عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«إِنَّ أَعْظَمَ النِّكَاحِ بَرَكَةً أَيْسَرُهُ مَئُونَةً»',
    terjemahanSanad: 'Telah menceritakan kepada kami Yahya bin Sa\'id, dari Ibnu Juraij, dari Abu az-Zubair, dari Aisyah رضي الله عنها, dari Nabi ﷺ, beliau bersabda:',
    terjemahan: 'Sesungguhnya pernikahan yang paling agung keberkahannya adalah yang paling mudah (ringan) biayanya (maharnya).',
    perbandinganMazhab: {
      hanafi: 'Menetapkan batas minimal mahar sebesar 10 dirham perak; mahar di bawah nominal tersebut tidak sah dan harus digenapkan menjadi 10 dirham.',
      maliki: 'Menetapkan batas minimal mahar seperempat dinar emas atau tiga dirham perak timbangan.',
      syafii: 'Tidak menetapkan batas minimal maupun maksimal bagi mahar; apa saja yang bernilai harta (*muttamawwal*) sah dijadikan mahar, namun disunnahkan tidak berlebih-lebihan.',
      hanbali: 'Sependapat dengan Syafi\'i bahwa mahar tidak memiliki batas minimal, dan makruh hukumnya membebankan mahar di luar kewajaran kemampuan suami.',
      khiDanKonteks: 'KHI Pasal 31: "Penentuan mahar diserahkan pada persetujuan kedua belah pihak dengan mengutamakan kesederhanaan dan kemudahan yang dianjurkan oleh ajaran Islam."'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipakai untuk menekan pihak perempuan agar menerima mahar serendah mungkin tanpa menimbang hak perlindungan ekonominya.',
      poin: [
        'Membaca hadis hanya sebagai tuntutan kepada calon istri.',
        'Tidak mengimbangi dengan anjuran bagi calon suami untuk bersikap dermawan sesuai kelapangan hartanya.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Esensi hadis ini adalah penolakan atas budaya gengsi, komersialisasi jodoh, dan adat yang memberatkan anak muda untuk menikah. Mahar adalah simbol penghormatan cinta, bukan harga beli (*tsaman*) atas tubuh perempuan.',
      illatHukum: 'Menghilangkan hambatan sosial-finansial agar pernikahan yang sah dan sehat mudah terlaksana.',
      poinKesalingan: [
        'Pihak keluarga tidak boleh membebankan mahar/hantaran yang melampaui kemampuan calon pengantin.',
        'Pria yang berkecukupan tetap dianjurkan memberi mahar yang pantas dan memuliakan calon istrinya.',
        'Mahar adalah hak milik mutlak istri, bukan milik orang tua atau keluarga.'
      ],
      aplikasiHariIni: [
        'Sepakati mahar yang bermakna dan terjangkau tanpa terjebak persaingan gengsi adat atau status sosial.',
        'Fokuskan dana pernikahan pada tabungan kehidupan nyata setelah perkawinan, bukan kemewahan sehari.'
      ]
    },
    pilarTerkait: ['Taradhin', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Mahar Berkah', 'Akad Nikah', 'Pernikahan Sederhana', 'Kemudahan Syariat'],
    quoteSnippet: 'Keberkahan pernikahan tidak diukur dari mahalnya pesta, melainkan dari kemudahan dan ketulusan komitmen untuk saling memuliakan.'
  },
  {
    id: 'hadis-mahar-cincin-besi-quran',
    stageId: 'akad',
    theme: 'Mahar Non-Materiil & Edukatif',
    title: 'Mahar Cincin Besi & Hafalan Surah: Menghargai Nilai Pengetahuan & Integritas',
    rawi: 'Sahl bin Sa\'ad ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nikah, Bab Tazwij al-Mu\'sir alladzi ma\'ahu al-Qur\'an No. 5087; Muslim No. 1425',
    noHadis: 'Bukhari No. 5087 (Muslim No. 1425)',
    sanadArab: 'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، أَخْبَرَنَا مَالِكٌ، عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللَّهُ عَنْهُ، أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ لِلرَّجُلِ:',
    matnArab: '«الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ... قَالَ: مَعِي سُورَةُ كَذَا وَسُورَةُ كَذَا، قَالَ: قَدْ مَلَّكْتُكَهَا بِمَا مَعَكَ مِنَ القُرْآنِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abdullah bin Yusuf, telah mengabarkan kepada kami Malik, dari Abu Hazim, dari Sahl bin Sa\'ad as-Sa\'idi رضي الله عنه, bahwa Nabi ﷺ bersabda kepada pria yang hendak menikah:',
    terjemahan: '"Carilah mahar walau hanya cincin dari besi." Ketika ia tetap tidak memilikinya, Nabi bertanya: "Surah Al-Qur\'an apa yang kau hafal?" Ia menjawab: "Surah ini dan itu." Nabi bersabda: "Aku telah nikahkan engkau dengannya dengan mahar mengajarkan surah Al-Qur\'an yang engkau miliki."',
    perbandinganMazhab: {
      hanafi: 'Menolak jasa pengajaran Al-Qur\'an sebagai mahar karena mahar menurut Hanafi wajib berupa harta benda (*mal*). Suami yang demikian wajib membayar mahar mitsil berupa uang.',
      maliki: 'Membolehkan pengajaran Al-Qur\'an sebagai mahar hanya dalam kondisi darurat kemiskinan seperti pada masa sahabat tersebut.',
      syafii: 'Membolehkan secara mutlak mahar berupa jasa pengajaran Al-Qur\'an atau ilmu yang bermanfaat, karena manfaat jasa (*manfa\'ah*) setara dengan harta.',
      hanbali: 'Membolehkan jasa pengajaran Al-Qur\'an dan ilmu sebagai mahar yang sah dan mengikat.',
      khiDanKonteks: 'KHI Pasal 30: "Calon mempelai pria wajib membayar mahar kepada calon mempelai wanita yang jumlah, bentuk dan jenisnya disepakati oleh kedua belah pihak." Membuka ruang mahar jasa/edukatif.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dijadikan dalil fiqh tentang bolehnya mahar berupa jasa pengajaran Al-Qur\'an ketika uang tidak tersedia.',
      poin: [
        'Fokus pada hukum sah/batalnya mahar non-materi.',
        'Jarang ditarik sebagai komitmen pendidikan berkelanjutan dalam keluarga.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ membuktikan bahwa kekurangan modal materiil tidak menghalangi seseorang menikah jika ia memiliki kekayaan karakter, ilmu, dan komitmen mendidik. Mahar berupa pengajaran Al-Qur\'an menempatkan relasi pasutri sebagai majelis belajar bersama.',
      illatHukum: 'Mahar sebagai ikrar kesiapan membimbing dan mendampingi pasangan menuju kebaikan dunia-akhirat.',
      poinKesalingan: [
        'Investasi ilmu dan kebaikan akhlak lebih bernilai tinggi daripada harta benda.',
        'Suami dan istri saling mengedukasi dan bertumbuh dalam kecerdasan spiritual bersama.'
      ],
      aplikasiHariIni: [
        'Jadikan komitmen saling mengajarkan kebaikan dan ilmu sebagai bagian dari janji kehidupan rumah tangga.',
        'Jangan membatalkan niat baik pernikahan semata-mata karena keterbatasan nominal materiil di awal.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', 'Zawaj'],
    tags: ['Mahar Quran', 'Akad Nikah', 'Pendidikan Pasutri', 'Integritas'],
    quoteSnippet: 'Ketika harta tiada, Nabi ﷺ menikahkan sahabat dengan mahar ilmu Al-Qur\'an: menegaskan bahwa nilai tertinggi manusia terletak pada pengetahuan dan integritasnya.'
  },

  // ==========================================
  // KLASTER 3: KESEHARIAN & KHIDMAH DOMESTIK
  // ==========================================
  {
    id: 'hadis-khidmah-ahlihi',
    stageId: 'domestik',
    theme: 'Pembagian Kerja Rumah Tangga (Khidmah al-Bayt)',
    title: 'Keteladanan Nabi ﷺ: Menjahit Baju dan Melayani Keperluan Rumah Tangga',
    rawi: 'Aisyah ra (dituturkan kepada Al-Aswad bin Yazid)',
    kitab: 'Sahih al-Bukhari & Musnad Ahmad',
    kitabBab: 'Bukhari: Kitab al-Adab, Bab Kaifa Yakunur Rajulu fi Ahlihi No. 676 & 6039; Ahmad No. 24902',
    noHadis: 'Bukhari No. 676 (Ahmad No. 24902)',
    sanadArab: 'حَدَّثَنَا مُحَمَّدُ بْنُ عَرْعَرَةَ، حَدَّثَنَا شُعْبَةُ، عَنِ الحَكَمِ، عَنْ إِبْرَاهِيمَ، عَنِ الأَسْوَدِ بْنِ يَزِيدَ، سَأَلْتُ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا: مَا كَانَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَصْنَعُ فِي بَيْتِهِ؟ قَالَتْ:',
    matnArab: '«كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ - تَعْنِي خِدْمَةَ أَهْلِهِ - فَإِذَا حَضَرَتِ الصَّلَاةُ خَرَجَ إِلَى الصَّلَاةِ... يَخْصِفُ نَعْلَهُ، وَيُرَقِّعُ ثَوْبَهُ، وَيَحْلِبُ شَاتَهُ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Muhammad bin Ar\'arah, telah menceritakan kepada kami Syu\'bah, dari Al-Hakam, dari Ibrahim, dari Al-Aswad bin Yazid: Aku bertanya kepada Aisyah رضي الله عنها: Apa yang biasa dikerjakan Nabi ﷺ di rumahnya? Aisyah menjawab:',
    terjemahan: 'Nabi ﷺ biasa membantu pekerjaan keluarganya — yakni melayani kebutuhan keluarganya. Maka apabila telah masuk waktu shalat, beliau bergegas keluar untuk shalat... Beliau memperbaiki sandalnya sendiri, menambal bajunya, dan memerah susu kambingnya sendiri.',
    perbandinganMazhab: {
      hanafi: 'Mayoritas fuqaha Hanafi memandang pekerjaan rumah tangga sebagai kewajiban religius-kekerabatan (*diyanatan*), namun bukan kewajiban hukum yang dapat dituntut di pengadilan (*qadha\'an*).',
      maliki: 'Mewajibkan istri melayani urusan rumah tangga ringan jika suaminya miskin dan istri terbiasa melayani urusan rumah tangga di keluarganya. Jika istri dari kalangan bangsawan/kaya, suami wajib menyediakan asisten rumah tangga.',
      syafii: 'Secara tegas menetapkan bahwa pekerjaan domestik (memasak, mencuci, membersihkan rumah) BUKAN kewajiban hukum bagi istri. Suami berkewajiban menyediakan makanan yang siap santap dan pakaian yang bersih.',
      hanbali: 'Sepakat dengan Syafi\'i bahwa akad nikah adalah akad kebersamaan (*istimta\'*), bukan akad sewa tenaga kerja (*ijarah*). Istri tidak berdosa secara hukum jika menolak memasak dan mencuci.',
      khiDanKonteks: 'KHI Pasal 77 ayat (2): "Suami istri memikul kewajiban yang luhur untuk menegakkan rumah tangga yang sakinah, mawaddah dan rahmah." Kemitraan domestik menjadi kunci menghindarkan beban ganda pada istri.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Hanya dibaca sebagai akhlak kesunahan/zuhud pribadi Nabi, namun dalam fatwa fiqh praktis pekerjaan domestik tetap dipaksakan sebagai tugas kodrati istri.',
      poin: [
        'Laki-laki yang mengerjakan urusan dapur atau mencuci sering dianggap "takut istri" atau direndahkan maskulinitasnya.',
        'Mengabaikan fakta bahwa mayoritas fuqaha (Syafi\'i & Hanbali) justru tidak mewajibkan istri mencuci baju dan memasak.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kerja domestik adalah ruang kemitraan (musyarakah) dan tolong-menolong (ta\'awun). Nabi ﷺ sebagai manusia termulia dan pemimpin umat mempraktikkan langsung khidmah al-bayt tanpa merasa gengsi.',
      illatHukum: 'Rumah tangga adalah ruang hidup bersama; kenyamanan dan kebersihannya adalah tanggung jawab bersama sesuai kelapangan waktu masing-masing.',
      poinKesalingan: [
        'Tidak ada jenis kelamin dalam pekerjaan rumah: menyapu, mencuci, dan memasak adalah keterampilan hidup dasar manusia.',
        'Suami yang membantu istri di rumah sedang mengamalkan sunnah fi\'liyyah Nabi ﷺ secara nyata.',
        'Ketika istri ikut lelah bekerja mencari nafkah, pembagian kerja domestik menjadi kewajiban etis yang tak terelakkan.'
      ],
      aplikasiHariIni: [
        'Buat pembagian tugas rumah tangga yang adil dan disepakati bersama pasangan (giliran mencuci piring, menjaga anak, merapikan rumah).',
        'Hentikan ejekan budaya yang menertawakan suami yang cekatan mengerjakan pekerjaan rumah tangga.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Tasyawur'],
    tags: ['Kerja Domestik', 'Khidmah al-Bayt', 'Sunnah Nabi di Rumah', 'Kemitraan'],
    quoteSnippet: 'Bekerja membersihkan rumah dan melayani keluarga bukanlah tanda kelemahan, melainkan kemuliaan akhlak yang dicontohkan langsung oleh Rasulullah ﷺ.'
  },
  {
    id: 'hadis-tidak-mencela-makanan',
    stageId: 'domestik',
    theme: 'Etika Menghargai Upaya Pasangan',
    title: 'Adab Berkeluarga: Menahan Diri dari Mencela Masakan & Jerih Payah Pasangan',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab al-Ath\'imah, Bab Ma \'Aba an-Nabiyyu Tha\'aman Qatthu No. 5409; Muslim No. 2064',
    noHadis: 'Bukhari No. 5409 (Muslim No. 2064)',
    sanadArab: 'حَدَّثَنَا عَلِيُّ بْنُ عَبْدِ اللَّهِ، حَدَّثَنَا سُفْيَانُ، عَنْ مُحَمَّدِ بْنِ المُنْكَدِرِ، عَنْ سَعِيدِ بْنِ الحَارِثِ، عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ:',
    matnArab: '«مَا عَابَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ طَعَامًا قَطُّ، إِنِ اشْتَهَاهُ أَكَلَهُ، وَإِنْ كَرِهَهُ تَرَكَهُ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Ali bin Abdullah, telah menceritakan kepada kami Sufyan, dari Muhammad bin al-Munkadir, dari Sa\'id bin al-Harits, dari Abu Hurairah رضي الله عنه, ia berkata:',
    terjemahan: 'Nabi ﷺ sama sekali tidak pernah mencela makanan. Jika beliau menyukainya, beliau memakannya; dan jika beliau tidak menyukainya, beliau meninggalkannya (tanpa mencela atau menggerutu).',
    perbandinganMazhab: {
      hanafi: 'Memandang adab ini sebagai sunnah muakkadah dalam menjaga kehormatan orang yang menyiapkan hidangan.',
      maliki: 'Menilai mencela makanan yang disajikan keluarga sebagai perbuatan makruh yang merusak mu\'asyarah bil ma\'ruf.',
      syafii: 'Imam an-Nawawi (Syarah Muslim) menjelaskan bahwa mencela makanan termasuk menyakiti hati pembuatnya; menahan lisan adalah wujud akhlak kenabian.',
      hanbali: 'Menempatkan adab ini sebagai bagian dari kewajiban bergaul dengan cara yang ma\'ruf kepada istri.',
      khiDanKonteks: 'Konflik rumah tangga kerap dipicu oleh kekerasan verbal atas hal sepele; adab kenabian ini adalah pencegahan dini atas KDRT emosional di meja makan.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Ditempatkan hanya dalam bab adab makan pribadi secara umum agar tidak menghina rezeki Allah.',
      poin: [
        'Jarang ditarik ke dalam dinamika psikologis relasi pasutri di meja makan.',
        'Banyak suami menganggap sah memarahi istri jika hidangan tidak sesuai selera.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Prinsip kaff al-adza (menahan diri dari menyakiti) berlaku pada komentar lisan di ranah domestik. Menghargai jerih payah pasangan yang sudah lelah menyiapkan hidangan adalah pilar keharmonisan.',
      illatHukum: 'Menjaga kehormatan dan perasaan pasangan; celaan atas kerja rumah tangga adalah benih kekerasan verbal.',
      poinKesalingan: [
        'Jika tidak berselera, tahan lisan dari kata-kata yang menjatuhkan martabat pasangan.',
        'Saling memuji dan berterima kasih atas setiap usaha pasangan merawat rumah tangga.',
        'Berlaku dua arah: istri pun menahan diri dari mencela nafkah atau pemberian suami yang sedang terbatas.'
      ],
      aplikasiHariIni: [
        'Ucapkan terima kasih dan puji pasangan atas makanan atau bantuan yang telah disiapkannya.',
        'Bicarakan preferensi selera secara santai dan penuh kelembutan di waktu yang tenang.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Apresiasi Pasangan', 'Adab Lisan', 'Kaff al-Adza'],
    quoteSnippet: 'Menahan lisan dari celaan dan menghargai jerih payah pasangan adalah sedekah akhlak yang menjaga kehangatan rumah tangga.'
  },
  {
    id: 'hadis-lomba-lari-aisyah',
    stageId: 'domestik',
    theme: 'Keakraban, Rekreasi & Humor Pasutri',
    title: 'Lomba Lari Nabi & Aisyah: Menumbuhkan Canda, Kesenangan & Rekreasi Bersama',
    rawi: 'Aisyah ra',
    kitab: 'Sunan Abu Dawud & Musnad Ahmad',
    kitabBab: 'Abu Dawud: Kitab al-Jihad, Bab fis Sabaq \'alar Rijil No. 2578; Ahmad No. 24164',
    noHadis: 'Abu Dawud No. 2578 (Ahmad No. 24164)',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا عِيسَى بْنُ يُونُسَ، حَدَّثَنَا هِشَامُ بْنُ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا:',
    matnArab: '«سَابَقَنِي النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَسَبَقْتُهُ، فَلَمَّا رَهِقَنِي اللَّحْمُ سَابَقَنِي فَسَبَقَنِي، فَقَالَ: هَذِهِ بِتِلْكَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Isa bin Yunus, telah menceritakan kepada kami Hisyam bin Urwah, dari ayahnya, dari Aisyah رضي الله عنها:',
    terjemahan: 'Nabi ﷺ pernah mengajakku berlomba lari, dan aku berhasil mengalahkan beliau. Selang beberapa tahun ketika tubuhku sudah lebih berisi, beliau mengajakku berlomba lari kembali dan beliau mengalahkanku. Beliau tersenyum seraya berkata: "Kemenangan ini adalah balasan atas kekalahanku yang dahulu!"',
    perbandinganMazhab: {
      hanafi: 'Menganjurkan senda gurau halal antara suami dan istri sebagai sarana menjaga keharmonisan rumah tangga.',
      maliki: 'Menilai rekreasi dan olahraga santai bersama keluarga sebagai hal yang dianjurkan (mustahab).',
      syafii: 'Menjadikan hadis ini sebagai dalil sunnahnya bersikap lemah lembut (*husnul khuluq*), berolahraga, dan mencairkan suasana kaku dalam relasi suami istri.',
      hanbali: 'Memandang bahwa menyenangkan hati istri dengan perlombaan mubah termasuk amalan yang mendatangkan pahala.',
      khiDanKonteks: 'Mendukung terciptanya pilar keluarga sakinah di mana rumah tangga bukan sekadar urusan hukum formal, melainkan ruang psikologis yang membahagiakan.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dikutip sebatas bukti kelembutan dan keramahan pribadi Nabi terhadap istrinya yang masih muda.',
      poin: [
        'Jarang dijadikan pedoman fiqh keluarga tentang pentingnya alokasi waktu hiburan bersama.',
        'Agama kerap dicitrakan kaku dan melarang tawa di dalam rumah tangga.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mencontohkan bahwa pernikahan yang sehat membutuhkan keakraban emosional, olahraga, rekreasi, dan humor yang sehat. Pasutri bukan sekadar mitra kerja formal hak-kewajiban, melainkan sahabat karib yang saling menikmati waktu bersama.',
      illatHukum: 'Merawat cinta (mawaddah) dan menghindarkan kejenuhan rutinitas rumah tangga.',
      poinKesalingan: [
        'Kedua belah pihak berhak atas waktu bersenang-senang dan rekreasi yang menyegarkan jiwa.',
        'Pemimpin rumah tangga tidak boleh bersikap feodal, kaku, atau dingin kepada pasangannya.'
      ],
      aplikasiHariIni: [
        'Jadwalkan kencan atau aktivitas santai berdua tanpa gangguan gawai untuk menyegarkan hubungan.',
        'Bangun budaya bercanda dan tertawa bersama di rumah tanpa merendahkan kekurangan fisik pasangan.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Keakraban Pasutri', 'Humor Rumah Tangga', 'Rekreasi', 'Mawaddah'],
    quoteSnippet: 'Rasulullah ﷺ berlomba lari dan bercanda dengan istrinya: membuktikan bahwa kehangatan tawa dan rekreasi bersama adalah pilar penting ketenteraman rumah tangga.'
  },

  // ==========================================
  // KLASTER 4: FINANSIAL & NAFKAH
  // ==========================================
  {
    id: 'hadis-hindun-nafkah',
    stageId: 'finansial',
    theme: 'Standar Kecukupan Nafkah (Kisah Hindun)',
    title: 'Nafkah Bil Ma\'ruf: Hak Kecukupan Hidup dan Larangan Kekikiran Pasangan',
    rawi: 'Aisyah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nafaqat, Bab Idza lam Yunfiq ar-Rajulu fa li Zaujatihi an Ta\'khudza bi Ghairi Idznihi No. 5364; Muslim No. 1714',
    noHadis: 'Bukhari No. 5364 (Muslim No. 1714)',
    sanadArab: 'حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى، حَدَّثَنَا عَبْدُ الْوَهَّابِ، حَدَّثَنَا هِشَامٌ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا:',
    matnArab: '«قَالَتْ هِنْدُ: يَا رَسُولَ اللَّهِ، إِنَّ أَبَا سُفْيَانَ رَجُلٌ شَحِيحٌ، وَلَيْسَ يُعْطِينِي مَا يَكْفِينِي وَوَلَدِي إِلَّا مَا أَخَذْتُ مِنْهُ وَهُوَ لَا يَعْلَمُ، فَقَالَ: خُذِي مَا يَكْفِيكِ وَوَلَدَكِ بِالْمَعْرُوفِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Muhammad bin al-Mutsanna, telah menceritakan kepada kami Abdul Wahhab, telah menceritakan kepada kami Hisyam, dari ayahnya (Urwah), dari Aisyah رضي الله عنها:',
    terjemahan: 'Hindun binti \'Utbah berkata: "Wahai Rasulullah, Abu Sufyan adalah laki-laki yang kikir; ia tidak memberiku nafkah yang mencukupi aku dan anakku, kecuali apa yang kuambil tanpa sepengetahuannya." Maka Nabi ﷺ bersabda: "Ambillah dari hartanya apa yang mencukupi dirimu dan anakmu secara ma\'ruf (patut dan wajar)."',
    perbandinganMazhab: {
      hanafi: 'Kadar nafkah diukur dengan menimbang kondisi kemampuan suami dan kebutuhan istri (*bi hasabi halihima*).',
      maliki: 'Nafkah diukur berdasarkan kemampuan suami dan standar kepatutan hidup istri di lingkungan sosialnya (*al-ma\'ruf*).',
      syafii: 'Menentukan ukuran takaran pasti berdasarkan kemampuan ekonomi suami (suami kaya 2 mud/hari, sedang 1.5 mud, miskin 1 mud), ditambah pakaian dan tempat tinggal.',
      hanbali: 'Ukuran nafkah merujuk pada standar kelayakan masyarakat (*bi qadri al-kifayah bil ma\'ruf*). Hadis Hindun menjadi dalil bolehnya istri mengambil haknya tanpa izin jika suami menahan hak tersebut.',
      khiDanKonteks: 'KHI Pasal 80 ayat (4): "Suami sesuai dengan penghasilannya menanggung nafkah, kiswah dan tempat kediaman bagi istri, biaya rumah tangga, biaya perawatan dan pengobatan, serta biaya pendidikan anak."'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Hanya dijadikan dalil fiqh kebolehan istri mengambil uang suami yang pelit secara diam-diam sebatas kebutuhan makan pokok.',
      poin: [
        'Tidak menelaah akar masalah penelantaran finansial sebagai salah satu bentuk kezaliman.',
        'Nafkah sering dipahami sebatas uang saku sepihak, bukan instrumen kecukupan hidup bermartabat.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nafkah adalah hak perlindungan dan kecukupan yang patut (bil ma\'ruf), bukan instrumen dominasi. Suami yang menahan nafkah padahal mampu sedang berbuat zalim, dan syariat melindungi pihak yang rentan.',
      illatHukum: 'Jaminan keberlangsungan hidup dan martabat anggota keluarga adalah amanah yang wajib ditunaikan.',
      poinKesalingan: [
        'Standar nafkah harus proporsional sesuai kelapangan rezeki dan kebutuhan nyata keluarga.',
        'Istri berhak menuntut transparansi keuangan demi kecukupan gizi dan pendidikan anak.',
        'Prinsip "bil ma\'ruf" menuntut kejujuran: tidak mengambil berlebihan secara boros, dan tidak menahan secara kikir.'
      ],
      aplikasiHariIni: [
        'Buka dialog anggaran keluarga yang transparan: pemasukan, pengeluaran rutin, dan tabungan masa depan.',
        'Pahami bahwa menahan nafkah secara sengaja untuk mengendalikan pasangan adalah bentuk kekerasan ekonomi.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan', 'Taradhin'],
    tags: ['Nafkah Wajib', 'Kekerasan Ekonomi', 'Kecukupan Hidup', 'Bil Maruf'],
    quoteSnippet: 'Nafkah dalam Islam adalah instrumen kasih sayang dan perlindungan martabat, bukan alat transaksi untuk membeli kepatuhan.'
  },
  {
    id: 'hadis-zainab-istri-bekerja',
    stageId: 'finansial',
    theme: 'Kontribusi Finansial Istri & Kepemilikan Harta Mandiri',
    title: 'Hadis Zainab ats-Tsaqafiyah: Apresiasi Dua Pahala bagi Istri yang Menafkahi Keluarga',
    rawi: 'Zainab istri Ibnu Mas\'ud ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab az-Zakah, Bab az-Zakah \'alaz Zauji wal Aitam No. 1466; Muslim No. 1000',
    noHadis: 'Bukhari No. 1466 (Muslim No. 1000)',
    sanadArab: 'حَدَّثَنَا عُمَرُ بْنُ حَفْصٍ، حَدَّثَنَا أَبِي، حَدَّثَنَا الأَعْمَشُ، حَدَّثَنَا شَقِيقٌ، عَنْ عَمْرِو بْنِ الحَارِثِ، عَنْ زَيْنَبَ امْرَأَةِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا:',
    matnArab: '«أَنَّهَا سَأَلَتِ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَيُجْزِئُ عَنِّي أَنْ أُنْفِقَ عَلَى زَوْجِي وَأَيْتَامٍ فِي حِجْرِي؟ فَقَالَ النَّبِيُّ ﷺ: لَهَا أَجْرَانِ: أَجْرُ القَرَابَةِ وَأَجْرُ الصَّدَقَةِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Umar bin Hafsh, telah menceritakan kepada kami ayahku, telah menceritakan kepada kami Al-A\'masy, telah menceritakan kepada kami Syaqiq, dari Amr bin al-Harits, dari Zainab istri Abdullah bin Mas\'ud رضي الله عنهما:',
    terjemahan: 'Zainab bertanya kepada Nabi ﷺ: "Apakah mencukupi bagiku (berpahala sedekah) jika aku menafkahkan hartaku untuk suamiku (Ibnu Mas\'ud yang kekurangan) dan anak-anak yatim dalam asuhanku?" Nabi ﷺ bersabda: "Bagi perempuan itu dua pahala: pahala hubungan kekerabatan dan pahala sedekah."',
    perbandinganMazhab: {
      hanafi: 'Membolehkan istri memberikan sedekah/zakat mal kepada suaminya yang fakir menurut Abu Yusuf dan Muhammad bin al-Hasan (berbeda dengan pendapat awal Abu Hanifah).',
      maliki: 'Membolehkan sedekah sunnah istri kepada suami, tetapi untuk zakat wajib terdapat perbedaan pendapat.',
      syafii: 'Membolehkan secara mutlak zakat maupun sedekah sunnah istri diberikan kepada suaminya yang miskin, karena istri tidak berkewajiban menafkahi suami secara hukum.',
      hanbali: 'Membolehkan sedekah dan zakat istri kepada suami yang membutuhkan, menegaskan kemandirian finansial penuh istri.',
      khiDanKonteks: 'KHI mengakui pemisahan harta bawaan dan harta bersama. Kontribusi finansial istri bekerja tidak menggugurkan hak nafkahnya dari suami, melainkan bentuk ta\'awun luhur.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dipahami sebatas hukum bolehnya istri kaya bersedekah kepada kerabat dan suaminya yang tidak mampu.',
      poin: [
        'Jarang dihubungkan dengan realitas istri pekerja dan pencari nafkah di zaman sekarang.',
        'Kadang suami merasa gengsi atau justru menyepelekan penghasilan istri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Islam mengakui kemandirian finansial perempuan sejak abad ke-7. Ketika istri ikut menafkahi keluarga, ia adalah mitra mulia dengan pahala berlipat, dan suami wajib menghormatinya secara penuh.',
      illatHukum: 'Apresiasi atas kerjasama (ta\'awun) dalam menanggung beban kehidupan rumah tangga bersama.',
      poinKesalingan: [
        'Harta hasil kerja istri adalah miliknya sendiri secara penuh; suami tidak berhak mengambilnya tanpa kerelaan.',
        'Jika istri menyumbangkan uangnya untuk rumah tangga, posisinya adalah kemitraan yang menuntut suami mengganti kontribusi itu dengan bantuan domestik yang setara.',
        'Menghapus anggapan bahwa harga diri suami jatuh ketika istri berpenghasilan lebih besar.'
      ],
      aplikasiHariIni: [
        'Apresiasi dan dukung karier atau usaha mandiri pasangan.',
        'Bangun komunikasi keuangan berbasis sinergi, bukan kompetisi gengsi pendapatan.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf", 'Taradhin'],
    tags: ['Istri Bekerja', 'Kemandirian Finansial', 'Pahala Sedekah', 'Kerjasama Pasutri'],
    quoteSnippet: 'Ketika seorang istri turut menopang perekonomian rumah tangga, ia bukan sekadar penolong, melainkan mitra mulia yang dianugerahi ganjaran cinta dan sedekah berlipat.'
  },
  {
    id: 'hadis-suapan-makanan-sedekah',
    stageId: 'finansial',
    theme: 'Nafkah Sebagai Ibadah & Apresiasi Domestik',
    pertemuan: 8,
    title: 'Suapan Nafkah Sebagai Sedekah: Nilai Ibadah Tertinggi dalam Memenuhi Kebutuhan Pasangan',
    rawi: 'Sa\'ad bin Abi Waqqash ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Kitab an-Nafaqat, Bab Fadhl an-Nafaqah \'alal Ahli wal \'Iyal',
    noHadis: 'Bukhari No. 56 & Muslim No. 1628',
    sanadArab: 'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، أَخْبَرَنَا مَالِكٌ، عَنِ ابْنِ شِهَابٍ، عَنْ عَامِرِ بْنِ سَعْدِ بْنِ أَبِي وَقَّاصٍ، عَنْ أَبِيهِ رَضِيَ اللَّهُ عَنْهُ، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«وَإِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فِي امْرَأَتِكَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abdullah bin Yusuf, telah mengabarkan kepada kami Malik, dari Ibnu Syihab (az-Zuhri), dari Amir bin Sa\'ad bin Abi Waqqash, dari ayahnya (Sa\'ad bin Abi Waqqash) رضي الله عنه, bahwa Rasulullah ﷺ bersabda:',
    terjemahan: 'Dan sesungguhnya tidaklah engkau menafkahkan suatu nafkah yang engkau niatkan semata-mata mencari ridha Allah, melainkan engkau pasti diberi pahala atasnya, bahkan hingga suapan makanan yang engkau letakkan ke dalam mulut istrimu.',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi menegaskan nafkah adalah kewajiban yang bersifat mu\'awadhah (imbalan atas komitmen perkawinan), namun hadis ini mengangkat transaksi tersebut menjadi bernilai ibadah qurbah bila didasari niat tulus mencari keridhaan Allah.',
      maliki: 'Mazhab Maliki memandang nafkah sebagai kewajiban qadha\'iyyah (hukum) sekaligus diyanah (spiritual). Pemenuhan kebutuhan sandang pangan keluarga diprioritaskan sebelum sedekah sunnah kepada pihak luar.',
      syafii: 'Mazhab Syafi\'i menetapkan bahwa nafkah wajib diukur berdasarkan kemampuan suami (mu\'sir, mutawassith, musir) dan menjadi utang yang tidak gugur oleh berlalunya waktu. Riwayat ini menguatkan bahwa kewajiban hukum tersebut bernilai ganjaran ukhrawi tertinggi.',
      hanbali: 'Mazhab Hanbali menekankan bahwa nafkah keluarga merupakan sedekah paling utama (afdhalus shadaqat), mengungguli infak jihad tatkala keluarga inti sedang membutuhkan sokongan nafkah.',
      khiDanKonteks: 'KHI Pasal 80 ayat (4) mewajibkan suami menanggung nafkah, kiswah, dan tempat kediaman bagi istri. Dalam konteks Indonesia, hadis ini membongkar anggapan nafkah sebagai beban materiil belaka, mentransformasikannya menjadi wujud ibadah kemitraan yang penuh kasih sayang.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering kali dipahami sebatas kewajiban searah di mana suami menafkahi istri untuk menuntut kepatuhan mutlak (tamkin), memandang suapan makanan sekadar kiasan paternalistik.',
      poin: [
        'Menempatkan nafkah sebagai alat kontrol sepihak atas ketaatan istri.',
        'Mengabaikan dimensi emosional dan apresiasi timbal-balik dalam interaksi domestik.',
        'Jarang ditarik hikmahnya bahwa kelelahan ekonomi rumah tangga adalah investasi amal bersama.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Menyuapkan makanan adalah lambang pemenuhan kebutuhan lahiriah yang dibalut kehangatan afeksi batiniah secara resiprokal. Harta yang dikeluarkan untuk kesejahteraan pasangan dan keluarga memiliki kedudukan spiritual tertinggi melampaui sedekah kepada orang lain.',
      illatHukum: 'Pemenuhan hak primer keluarga yang diiringi ketulusan cinta dan pemuliaan martabat pasangan adalah inti ibadah muamalah.',
      poinKesalingan: [
        'Sebagaimana suami beroleh pahala atas nafkah yang ia curahkan, istri pun beroleh pahala serupa tatkala mengelola, merawat, dan menyokong rezeki keluarga.',
        'Nafkah tidak boleh dijadikan instrumen arogansi atau menzalimi hak otonomi pasangan.',
        'Keintiman psikologis ("menyuapkan makanan") harus menyertai pemenuhan nafkah fisik agar tidak menjadi transaksi kering.'
      ],
      aplikasiHariIni: [
        'Jadikan nafkah sebagai wujud syukur dan cinta, bukan ajang perhitungan untung-rugi dalam rumah tangga.',
        'Selipkan kehangatan komunikasi dan apresiasi di meja makan sebagai ruang dialog yang menenangkan hati pasangan.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Taradhin'],
    tags: ['Nafkah', 'Finansial', 'Kasih Sayang', 'Sedekah Keluarga', 'Apresiasi Pasangan'],
    quoteSnippet: 'Harta yang kau curahkan demi kesejahteraan pasanganmu bukanlah sekadar kewajiban materiil, melainkan sedekah yang paling mulia dan diridhai di sisi Allah.'
  },
  {
    id: 'hadis-suami-mu-sir-bangkrut',
    stageId: 'finansial',
    theme: 'Krisis Ekonomi, Opsi Nafkah & Perlindungan Hak Istri',
    pertemuan: 8,
    title: 'Penyikapan Suami yang Tidak Mampu Menafkahi: Antara Kemitraan Sabar dan Opsi Fasakh Demi Kesejahteraan',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sunan ad-Daruquthni & Sunan al-Baihaqi',
    kitabBab: 'Kitab an-Nafaqat, Bab Nafaqat al-Mu\'sir wa Khiyar al-Mar\'ah',
    noHadis: 'Ad-Daruquthni No. 3943 & Al-Baihaqi No. 15418',
    sanadArab: 'حَدَّثَنَا أَبُو بَكْرٍ النَّيْسَابُورِيُّ، حَدَّثَنَا مُحَمَّدُ بْنُ يَحْيَى، حَدَّثَنَا سَعِيدُ بْنُ أَبِي مَرْيَمَ، أَنْبَأَنَا ابْنُ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ الْحَارِثِ، عَنْ عِكْرِمَةَ، عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ فِي الرَّجُلِ لَا يَجِدُ مَا يُنْفِقُ عَلَى امْرَأَتِهِ:',
    matnArab: '«قَالَ: يُفَرَّقُ بَيْنَهُمَا»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abu Bakr an-Naisaburi, telah menceritakan kepada kami Muhammad bin Yahya, telah menceritakan kepada kami Sa\'id bin Abi Maryam, telah memberitakan kepada kami Ibnu Abi az-Zinad, dari Abdurrahman bin al-Harits, dari Ikrimah, dari Abu Hurairah رضي الله عنه, bahwa Nabi ﷺ bersabda mengenai seorang laki-laki (suami) yang tidak memiliki sesuatu untuk dinafkahkan kepada istrinya:',
    terjemahan: 'Beliau (Nabi ﷺ) bersabda: "Keduanya dipisahkan (diberi hak fasakh/perpisahan bila istri menuntutnya demi menolak bahaya penelantaran)."',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi berpendapat bahwa suami yang jatuh miskin (mu\'sir) tidak boleh langsung dipisahkan dari istrinya, melainkan istri diperintahkan untuk berutang atas nama suami dan suami menanggungnya kelak saat telah lapang.',
      maliki: 'Mazhab Maliki memberikan masa tenggang (ajal) bagi suami yang mu\'sir (antara 1 hingga 2 bulan). Bila suami tetap tidak mampu memberikan nafkah pokok dan istri tidak rela, hakim memfasakh pernikahan demi menolak bahaya (dharar).',
      syafii: 'Mazhab Syafi\'i secara tegas memberikan hak pilih (khiyar) kepada istri: jika ia memilih bersabar dan menyokong suaminya maka akad berlanjut, namun bila ia tidak mampu menanggung derita kelaparan, ia berhak memohon fasakh kepada hakim setelah masa penantian 3 hari.',
      hanbali: 'Mazhab Hanbali sepakat dengan Syafi\'iyyah bahwa ketidakmampuan memberi nafkah pokok sandang pangan memberi hak bagi istri untuk fasakh, sebab kelangsungan hidup dan keselamatan jiwa diutamakan di atas kelanjutan akad.',
      khiDanKonteks: 'KHI Pasal 116 huruf (g) mengakomodasi hadis ini secara bijak: suami yang melanggar sighat taklik-talak karena tidak memberi nafkah wajib lahir batin selama beberapa bulan dapat menjadi alasan perceraian di Pengadilan Agama jika istri tidak ridha.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering disalahartikan seolah Islam meremehkan ikatan perkawinan dengan memutus cerai hanya karena kemiskinan, atau sebaliknya memaksa perempuan bertahan dalam kemelaratan ekstrem atas nama takdir.',
      poin: [
        'Menganggap kesabaran istri sebagai kewajiban mutlak tanpa batas waktu meski kelaparan.',
        'Menafsirkan pemisahan (yufarraqu bainahuma) sebagai pemaksaan sepihak bukan sebagai perlindungan hak asasi perempuan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Islam menyeimbangkan antara komitmen moral saling menyokong di masa sulit dengan perlindungan hak hidup. Jika istri memilih bersabar mendampingi suami yang bangkrut, hal itu adalah ihsan mulia; namun bila situasi mengancam keselamatan dan hak dasarnya, syariat menyediakan pintu keluar terhormat tanpa celaan.',
      illatHukum: 'Menolak bahaya kelaparan/penelantaran (daf\'u adh-dharar) dan menjamin kelangsungan hidup yang layak bagi pasangan.',
      poinKesalingan: [
        'Perkawinan dibangun di atas kemitraan saling melindungi, bukan perbudakan yang mengorbankan kelangsungan hidup satu pihak.',
        'Suami tidak boleh memaksakan kesabaran istrinya secara manipulatif tatkala ia abai atau gagal berikhtiar mencari rezeki.',
        'Keterbukaan kondisi finansial sejak awal adalah wujud amanah agar musyawarah dapat mengambil langkah terbaik.'
      ],
      aplikasiHariIni: [
        'Ketika keluarga mengalami krisis ekonomi, kedepankan dialog jujur, transparansi keuangan, dan pemetaan ikhtiar bersama.',
        'Hargai kontribusi istri yang ikut bekerja menopang ekonomi keluarga sebagai pahlawan rumah tangga, bukan menuntut pelayanan sepihak.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf", 'Tasyawur'],
    tags: ['Krisis Finansial', 'Hak Nafkah', 'Fasakh', 'Perlindungan Perempuan', 'Kemitraan Pasutri'],
    quoteSnippet: 'Syariat memuliakan kesabaran istri dalam mendampingi ujian suami, namun syariat juga mengharamkan penelantaran ekonomi yang membahayakan kelangsungan hidupnya.'
  },

  // ==========================================
  // KLASTER 5: KEINTIMAN & HAK REPRODUKSI
  // ==========================================
  {
    id: 'hadis-ajakan-ranjang-mubadalah',
    stageId: 'keintiman',
    theme: 'Etika Hubungan Ranjang & Kerelaan Seksual',
    title: 'Pembacaan Kritis Hadis "Ajakan Ranjang": Meluruskan Pemahaman Marital Consent',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nikah, Bab Idza Batat al-Mar\'atu Muhajiratan Firasya Zaujiha No. 5193; Muslim No. 1436',
    noHadis: 'Bukhari No. 5193 (Muslim No. 1436)',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا مُعْتَمِرٌ، عَنْ أَبِيهِ، عَنْ أَبِي عُثْمَانَ، عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«إِذَا دَعَا الرَّجُلُ امْرَأَتَهُ إِلَى فِرَاشِهِ فَأَبَتْ أَنْ تَجِيءَ فَبَاتَ غَضْبَانَ عَلَيْهَا لَعَنَتْهَا المَلَائِكَةُ حَتَّى تُصْبِحَ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Mu\'tamar, dari ayahnya, dari Abu Utsman, dari Abu Hurairah رضي الله عنه, dari Nabi ﷺ, beliau bersabda:',
    terjemahan: 'Apabila seorang laki-laki mengajak istrinya ke tempat tidur lalu sang istri enggan untuk datang hingga suaminya tidur dalam keadaan marah, maka para malaikat melaknatnya sampai pagi.',
    perbandinganMazhab: {
      hanafi: 'Menyatakan pemenuhan kebutuhan biologis suami adalah kewajiban istri selama tidak ada halangan syar\'i (haid, nifas, sakit, atau puasa wajib).',
      maliki: 'Menilai penolakan tanpa udzur sebagai bentuk nusyuz yang dapat menggugurkan hak nafkah hari tersebut.',
      syafii: 'Para pensyarah Syafi\'i (seperti Ibnu Hajar al-Asqalani dalam Fathul Bari) menegaskan bahwa laknat malaikat ini terbatas pada penolakan tanpa udzur yang sah; jika istri sakit, kelelahan, atau terganggu secara fisik/mental, laknat tersebut gugur.',
      hanbali: 'Menetapkan bahwa hak jimak adalah hak timbal balik kedua belah pihak; suami juga diharamkan meninggalkan ranjang istrinya tanpa udzur melebihi batas waktu tertentu.',
      khiDanKonteks: 'Hukum modern dan UU PKDRT (No. 23/2004) melarang pemaksaan seksual dalam perkawinan. Hubungan intim harus selalu dilandasi prinsip taradhin (kerelaan bersama) dan menolak segala bentuk kekerasan fisik maupun psikis.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipahami secara tekstual dan menakut-nakuti: istri wajib melayani suami kapan pun dan dalam kondisi apa pun, bahkan saat sakit atau trauma, melegitimasi pemaksaan seksual.',
      poin: [
        'Memosisikan tubuh perempuan sebagai objek pemuas hasrat sepihak.',
        'Mengabaikan kondisi fisik istri (kelelahan kerja domestik/kantor, haid, sakit fisik, atau depresi mental).',
        'Tidak membahas kewajiban suami memenuhi kebutuhan biologis istri secara setara.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kecaman dalam hadis ini berlaku pada penolakan tanpa udzur yang didasari niat menghukum/memeras pasangan saat hubungan normal. Hubungan intim harus dilandasi pilar taradhin (saling rela) dan kaidah la dharara wa la dhirar (tidak boleh membahayakan/menyakiti).',
      illatHukum: 'Larangan menggunakan keintiman sebagai alat manipulasi jahat; namun memaksakan seks saat pasangan tidak siap secara fisik/psikis adalah kezaliman nyata.',
      poinKesalingan: [
        'Nafkah batin adalah hak timbal balik: suami juga berdosa besar jika menelantarkan hasrat biologis istrinya (seperti dalam kasus ilā\').',
        'Jika pasangan sedang sakit, sangat lelah, atau tidak nyaman, pasangan lain wajib berempati dan menahan diri.',
        'Seksualitas dalam Islam adalah ibadah yang harus dinikmati bersama, bukan ajang penaklukan kekuasaan tubuh.'
      ],
      aplikasiHariIni: [
        'Komunikasikan keinginan dan batasan keintiman secara terbuka dan santun tanpa rasa takut.',
        'Pahami bahwa keintiman yang berkualitas bermula dari kelembutan hati dan suasana emosional yang terjaga sepanjang hari.'
      ]
    },
    pilarTerkait: ['Taradhin', "Mu'asyarah bi al-Ma'ruf", 'Zawaj'],
    tags: ['Keintiman', 'Marital Consent', 'Hak Seksual', 'Taradhin'],
    quoteSnippet: 'Keintiman dalam ikatan suci pernikahan adalah anugerah kasih sayang untuk dinikmati bersama dengan kerelaan, bukan penaklukan sepihak atas tubuh pasangan.'
  },
  {
    id: 'hadis-rahasia-ranjang',
    stageId: 'keintiman',
    theme: 'Menjaga Privasi & Kehormatan Pasangan',
    title: 'Amanah Ranjang: Larangan Keras Mengumbar Rahasia dan Aib Pasangan',
    rawi: 'Abu Sa\'id al-Khudri ra',
    kitab: 'Sahih Muslim',
    kitabBab: 'Kitab an-Nikah, Bab Tahrim Ifsya\' Sirr al-Mar\'ah No. 1437',
    noHadis: 'Muslim No. 1437',
    sanadArab: 'حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا مَرْوَانُ بْنُ مُعَاوِيَةَ، عَنْ عُمَرَ بْنِ حَمْزَةَ العُمَرِيِّ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ سَعْدٍ، عَنْ أَبِي سَعِيدٍ الخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ:',
    matnArab: '«إِنَّ مِنْ أَشَرِّ النَّاسِ عِنْدَ اللَّهِ مَنْزِلَةً يَوْمَ الْقِيَامَةِ، الرَّجُلَ يُفْضِي إِلَى امْرَأَتِهِ وَتُفْضِي إِلَيْهِ، ثُمَّ يَنْشُرُ سِرَّهَا»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abu Bakr bin Abi Syaibah, telah menceritakan kepada kami Marwan bin Mu\'awiyah, dari Umar bin Hamzah al-Umari, telah menceritakan kepada kami Abdurrahman bin Sa\'ad, dari Abu Sa\'id al-Khudri رضي الله عنه, ia berkata: Rasulullah ﷺ bersabda:',
    terjemahan: 'Sesungguhnya manusia yang paling buruk kedudukannya di sisi Allah pada hari kiamat adalah laki-laki yang bergaul intim dengan istrinya dan istri bergaul intim dengannya, kemudian salah satunya menyebarkan rahasia pasangannya.',
    perbandinganMazhab: {
      hanafi: 'Menyatakan haram hukumnya menceritakan detail hubungan intim dan rincian fisik pasangan kepada siapa pun.',
      maliki: 'Menilai penyebaran rahasia ranjang sebagai dosa besar dan mencederai sifat muru\'ah (kehormatan diri).',
      syafii: 'Imam an-Nawawi menegaskan keharaman menceritakan detail jimak, gaya percumbuan, dan kata-kata mesra yang terjadi di ranjang privat.',
      hanbali: 'Mengharamkan pembocoran aib tubuh dan rahasia ranjang kecuali jika ada kebutuhan medis atau persidangan hakim pengadilan.',
      khiDanKonteks: 'Sangat relevan di era digital: menjaga privasi pasangan dari fenomena oversharing di media sosial dan revenge porn.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Larangan menceritakan detail hubungan seks suami-istri kepada orang luar.',
      poin: [
        'Fokus pada aib hubungan badan semata.',
        'Kerap luput menyadari relevansinya di era media sosial dan oversharing digital saat ini.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Redaksi hadis ini menggunakan struktur resiprokal simetris: "yufdhi ilaiha wa tufdhi ilaihi". Keduanya sama-sama bersatu dalam privasi, maka keduanya memikul amanah mutlak saling menjaga rahasia tubuh, kekurangan, dan aib pasangannya.',
      illatHukum: 'Menjaga kemuliaan mitsaqan ghalizhan dan melindungi privasi martabat kemanusiaan pasangan.',
      poinKesalingan: [
        'Suami dan istri adalah "pakaian" satu sama lain (QS. Al-Baqarah: 187): pakaian berfungsi menutup aurat dan menghangatkan.',
        'Dosa terburuk di sisi Allah adalah meruntuhkan kehormatan pasangan sendiri di depan teman tongkrongan atau di media sosial.',
        'Berlaku setara: istri dilarang mencela fisik/kekurangan suami, suami dilarang membocorkan rahasia istri.'
      ],
      aplikasiHariIni: [
        'Jangan pernah menjadikan kekurangan fisik atau dinamika ranjang pasangan sebagai bahan lelucon di ruang publik/grup chat.',
        'Selesaikan ketidakpuasan intim melalui komunikasi berdua atau konselor profesional bersertifikat, bukan dengan curhat di media sosial.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Privasi', 'Amanah', 'Menjaga Aib', 'Etika Ranjang'],
    quoteSnippet: 'Pasangan sejati adalah pelindung rahasia yang saling menutupi kekurangan, bukan pembocor aib yang meruntuhkan martabat pasangannya di hadapan dunia.'
  },

  // ==========================================
  // KLASTER 6: RESOLUSI KONFLIK & ANTI-KDRT
  // ==========================================
  {
    id: 'hadis-larangan-mencambuk-istri',
    stageId: 'konflik',
    theme: 'Anti-Kekerasan Dalam Rumah Tangga (KDRT)',
    title: 'Kecaman Hipokrisi KDRT: Larangan Menyakiti Pasangan yang Digauli',
    rawi: 'Abdullah bin Zam\'ah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab an-Nikah, Bab Ma Yukrahu min Dharbin Nisa\' No. 5204; Muslim No. 2855',
    noHadis: 'Bukhari No. 5204 (Muslim No. 2855)',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا يَحْيَى، عَنْ سُفْيَانَ، حَدَّثَنِي هِشَامُ بْنُ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَبْدِ اللَّهِ بْنِ زَمْعَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«لَا يَجْلِدُ أَحَدُكُمُ امْرَأَتَهُ جَلْدَ الْعَبْدِ، ثُمَّ لَعَلَّهُ يُعَانِقُهَا فِي آخِرِ الْيَوْمِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Yahya, dari Sufyan, telah menceritakan kepadaku Hisyam bin Urwah, dari ayahnya, dari Abdullah bin Zam\'ah رضي الله عنه, dari Nabi ﷺ, beliau bersabda:',
    terjemahan: 'Janganlah salah seorang di antara kalian mencambuk (memukul) istrinya seperti mencambuk budak, lalu bisa jadi di penghujung hari ia merangkul (menggauli) istrinya tersebut!',
    perbandinganMazhab: {
      hanafi: 'Memandang pemukulan sebagai opsi pendisiplinan darurat terakhir yang sangat terbatas, dan mencela keras kekerasan yang menimbulkan bekas atau rasa sakit mendalam.',
      maliki: 'Jika suami memukul istri hingga melukai atau berulang kali menyakitinya, istri berhak menuntut cerai ta\'zir dan ganti rugi di hadapan qadhi.',
      syafii: 'Menganjurkan untuk meninggalkan pemukulan sama sekali (*al-afdhlu tarkudhdharb*); memukul dipandang makruh tanzih dan bertentangan dengan standar kesempurnaan akhlak.',
      hanbali: 'Memukul yang melukai atau mematahkan tulang haram mutlak dan pelakunya dikenai sanksi qishash/diyat.',
      khiDanKonteks: 'UU No. 23 Tahun 2004 tentang Penghapusan KDRT mengkriminalisasi segala bentuk kekerasan fisik dalam rumah tangga. Hadis ini menjadi landasan moral kenabian atas hukum anti-kekerasan tersebut.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipahami permisif: seolah-olah memukul itu boleh asalkan "tidak sekeras mencambuk budak" atau menggunakan batasan "pukulan yang tidak melukai" (ghairu mubarrih).',
      poin: [
        'Memberi celah legitimasi kekerasan fisik ringan atas nama mendidik istri.',
        'Mengabaikan rasa trauma psikologis mendalam yang dialami korban pemukulan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengecam keras kontradiksi dan hipokrisi perlakuan: bagaimana mungkin seseorang menyakiti tubuh pasangannya di siang hari, lalu mengharapkan cinta dan kehangatan dari tubuh yang sama di malam hari? Pemukulan adalah pengingkaran atas cinta.',
      illatHukum: 'Penolakan mutlak atas dehumanisasi dan kekerasan dalam ikatan perkawinan.',
      poinKesalingan: [
        'Istri bukan hamba sahaya, melainkan syaqaiq (belahan yang setara).',
        'Kekerasan fisik, caci maki verbal, dan ancaman psikologis menghancurkan rasa aman yang menjadi syarat utama sakinah.',
        'Mubadalah menuntut penyelesaian perselisihan dengan kepala dingin dan ishlah, bukan dengan kekerasan.'
      ],
      aplikasiHariIni: [
        'Pahami bahwa KDRT dalam bentuk apa pun adalah pelanggaran syariat dan hukum positif (UU PKDRT).',
        'Ambil jeda (time-out) ketika emosi sedang memuncak; jangan mengambil tindakan fisik atau menjatuhkan kata-kata talak saat marah.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan', 'Zawaj'],
    tags: ['Anti-KDRT', 'Pencegahan Kekerasan', 'Keadilan Pasutri', 'Komunikasi Damai'],
    quoteSnippet: 'Bagaimana mungkin seseorang menyakiti tubuh orang yang dicintainya, lalu mengharapkan kehangatan dan ketulusan dari raga yang sama?'
  },
  {
    id: 'hadis-nabi-tidak-pernah-memukul',
    stageId: 'konflik',
    theme: 'Teladan Nabi Tanpa Kekerasan',
    title: 'Kesaksian Aisyah ra: Teladan Tertinggi Nabi ﷺ Sama Sekali Tidak Pernah Memukul',
    rawi: 'Aisyah ra',
    kitab: 'Sahih Muslim',
    kitabBab: 'Kitab al-Fadhail, Bab Ba\'du Nabiyyi \'an Kulli Ma Yustaqbahu No. 2328',
    noHadis: 'Muslim No. 2328',
    sanadArab: 'حَدَّثَنَا أَبُو كُرَيْبٍ، حَدَّثَنَا أَبُو أُسَامَةَ، عَنْ هِشَامٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ:',
    matnArab: '«مَا ضَرَبَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ شَيْئًا قَطُّ بِيَدِهِ، وَلَا امْرَأَةً، وَلَا خَادِمًا، إِلَّا أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abu Kuraib, telah menceritakan kepada kami Abu Usamah, dari Hisyam bin Urwah, dari ayahnya, dari Aisyah رضي الله عنها, ia berkata:',
    terjemahan: 'Rasulullah ﷺ sama sekali tidak pernah memukul apa pun dengan tangannya: tidak pernah memukul perempuan (istri), dan tidak pula memukul pelayan, kecuali ketika berjihad di jalan Allah.',
    perbandinganMazhab: {
      hanafi: 'Menjadikan sunnah fi\'liyyah Nabi ini sebagai bukti bahwa meninggalkan pemukulan adalah jalan yang paling mulia.',
      maliki: 'Ibnul Faras al-Maliki menyatakan bahwa hadis ini menafsirkan bahwa memukul bukan anjuran, melainkan rukhshah darurat masa lalu yang sebaiknya dihindari.',
      syafii: 'Imam asy-Syafi\'i menegaskan dalam kitab Al-Umm: "Memukul itu mubah secara teks, namun meninggalkannya lebih utama karena Nabi ﷺ tidak pernah memukul."',
      hanbali: 'Menjadikan keteladanan Nabi sebagai standar akhlak tertinggi seorang mukmin sejati.',
      khiDanKonteks: 'Mempertegas asas anti-kekerasan dalam UU KDRT bahwa mendidik keluarga harus dilakukan dengan dialog, teladan, dan nasihat bijak (*mau\'izhah hasanah*).'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dipandang sebatas keutamaan pribadi Nabi (fadhail), sementara norma hukum fiqh tetap mempertahankan opsi memukul istri yang nusyuz.',
      poin: [
        'Memisahkan akhlak kenabian dari kaidah operasional hukum keluarga.',
        'Membiarkan tradisi pemukulan terus dinormalisasi di masyarakat.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Praktik hidup Nabi ﷺ adalah penafsir tertinggi atas Al-Qur\'an. Fakta bahwa beliau seumur hidup tidak pernah memukul membuktikan bahwa jalan terbaik seorang mukmin adalah menolak kekerasan sepenuhnya.',
      illatHukum: 'Meneladani Nabi ﷺ adalah standar tertinggi kesempurnaan iman; orang yang memukul bukan orang yang terbaik.',
      poinKesalingan: [
        'Rasulullah bersabda tegas: "Kalian tidak akan mendapati orang-orang yang suka memukul itu sebagai orang terbaik di antara kalian" (HR. Abu Dawud No. 2146).',
        'Menyelesaikan perselisihan keluarga menuntut kedewasaan akal dan dialog (tasyawur), bukan tangan besi.'
      ],
      aplikasiHariIni: [
        'Jadikan aturan tegas dalam rumah tangga: tidak boleh ada kontak fisik agresif dalam bentuk apa pun saat bertengkar.',
        'Libatkan penengah yang adil (hakam) atau konselor pernikahan jika konflik menemui jalan buntu.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Tasyawur', 'Zawaj'],
    tags: ['Akhlak Kenabian', 'Anti-Kekerasan', 'Keteladanan Rasul', 'Kedamaian Rumah'],
    quoteSnippet: 'Teladan Rasulullah ﷺ yang paling nyata di rumah adalah tidak pernah mengayunkan tangan untuk menyakiti perempuan atau siapa pun yang berada di dekatnya.'
  },
  {
    id: 'hadis-aduan-istri-bukan-orang-terbaik',
    stageId: 'konflik',
    theme: 'Anti-KDRT & Gugurnya Klaim Lelaki Terbaik Bagi Pelaku Kekerasan',
    pertemuan: 11,
    title: 'Aduan Kekerasan Rumah Tangga: Teguran Keras Nabi Bahwa Pemukul Istri Bukanlah Orang yang Terbaik',
    rawi: 'Iyas bin Abdillah bin Abi Dzubab ra',
    kitab: 'Sunan Abi Dawud & Sunan Ibni Majah',
    kitabBab: 'Kitab an-Nikah, Bab fi Dharbin Nisa\' (Bab Hukum Memukul Perempuan)',
    noHadis: 'Abu Dawud No. 2146 & Ibnu Majah No. 1985',
    sanadArab: 'حَدَّثَنَا مُحَمَّدُ بْنُ كَثِيرٍ، أَخْبَرَنَا سُفْيَانُ، عَنْ عَبْدِ اللَّهِ بْنِ حَسَنٍ، عَنْ إِيَاسِ بْنِ عَبْدِ اللَّهِ بْنِ أَبِي ذُبَابٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَا تَضْرِبُوا إِمَاءَ اللَّهِ»، فَجَاءَ عُمَرُ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: ذَئِرْنَ النِّسَاءُ عَلَى أَزْوَاجِهِنَّ، فَرَخَّصَ فِي ضَرْبِهِنَّ، فَأَطَافَ بِآلِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نِسَاءٌ كَثِيرٌ يَشْكُونَ أَزْوَاجَهُنَّ، فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:',
    matnArab: '«لَقَدْ طَافَ بِآلِ مُحَمَّدٍ نِسَاءٌ كَثِيرٌ يَشْكُونَ أَزْوَاجَهُنَّ، لَيْسَ أُولَئِكَ بِخِيَارِكُمْ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Muhammad bin Katsir, telah mengabarkan kepada kami Sufyan (ats-Tsauri), dari Abdullah bin Hasan, dari Iyas bin Abdillah bin Abi Dzubab رضي الله عنه, ia berkata: Rasulullah ﷺ bersabda: "Janganlah kalian memukul hamba-hamba perempuan Allah!" Lalu Umar datang mengadu kepada Rasulullah ﷺ: "Para istri menjadi berani membangkang terhadap suaminya," maka beliau memberi rukhshah (kelonggaran terbatas simbolis). Setelah itu, berbondong-bondonglah banyak perempuan mendatangi keluarga Rasulullah ﷺ mengadukan perlakuan kasar para suami mereka. Maka Nabi ﷺ bersabda dengan tegas:',
    terjemahan: 'Sungguh, banyak perempuan telah mendatangi keluarga Muhammad untuk mengadukan perlakuan (kasar) para suami mereka. Mereka (para suami yang memukul istrinya itu) sama sekali bukanlah orang-orang yang terbaik di antara kalian!',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi membatasi bahwa pukulan ta\'dib hanyalah simbolik dan bersyarat ketat; bila pemukulan menimbulkan luka, lebam, atau patah tulang, suami dikenai hukum qishash/diyat dan istri berhak meminta pemisahan melalui hakim.',
      maliki: 'Mazhab Maliki sangat protektif terhadap istri yang mengalami kekerasan (syiqaq). Kesaksian adanya pengaduan kekerasan fisik cukup menjadi dasar kuat bagi hakim untuk menceraikan (fasakh dharar) dan menjatuhkan sanksi ta\'zir kepada suami.',
      syafii: 'Imam Syafi\'i dalam kitab Al-Umm menyatakan bahwa meninggalkan pukulan adalah sunnah mutlak yang lebih utama mengikuti teladan Nabi ﷺ. Suami yang memukul telah merusak predikat "khiyarukum" (orang terbaik).',
      hanbali: 'Mazhab Hanbali menegaskan bahwa jika pemukulan melampaui batas kewajaran, suami menanggung ganti rugi fisik, dan kekerasan berulang memberikan hak mutlak bagi istri untuk fasakh peradilan.',
      khiDanKonteks: 'Selaras dengan UU No. 23 Tahun 2004 tentang Penghapusan KDRT (PKDRT) dan KHI Pasal 116 huruf (d). Hadis ini menegaskan secara moral dan hukum bahwa kekerasan dalam rumah tangga tidak memiliki tempat dalam standar keimanan seorang Muslim.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering disempitkan hanya membaca riwayat rukhshah di tengah hadis untuk melegitimasi pemukulan istri, sementara mengabaikan pernyataan vonis Nabi ﷺ di akhir hadis yang mencabut predikat orang beriman terbaik dari pelaku pemukulan.',
      poin: [
        'Menjadikan ayat pemukulan sebagai dalil kuasa fisik laki-laki atas perempuan.',
        'Mengabaikan konteks sejarah sosiologis masyarakat patriarkis Arab saat itu.',
        'Mengaburkan teguran murka Nabi ﷺ atas pengaduan massal perempuan Madinah.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini memperlihatkan dinamika progresif menuju penghapusan kekerasan: Nabi ﷺ mengawali dengan larangan mutlak («Lā tadhribū imā’allāh»), dan menutupnya dengan vonis moral tegas («Laisa ulā’ika bi-khiyārikum»). Standar martabat seorang suami diukur dari ketiadaan kekerasan dalam sikapnya.',
      illatHukum: 'Pemuliaan martabat manusia (karamah insaniyyah) dan penghapusan segala bentuk intimidasi fisik maupun verbal dalam ikatan pernikahan.',
      poinKesalingan: [
        'Kediaman Nabi ﷺ menjadi safe house (ruang aman pengaduan) pertama bagi para korban kekerasan rumah tangga.',
        'Kekuatan fisik tidak boleh dijadikan alat menyelesaikan friksi komunikasi antar-pasangan.',
        'Laki-laki yang paling mulia adalah yang paling lembut, beradab, dan menahan diri dari menyakiti pasangannya.'
      ],
      aplikasiHariIni: [
        'Tolak segala bentuk justifikasi KDRT atas nama agama; kekerasan fisik dan verbal adalah tindak pidana dan dosa besar.',
        'Bila terjadi perselisihan, gunakan komunikasi asertif, konseling pernikahan, atau mediasi profesional, bukan agresi fisik.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Mitsaqan Ghalizhan', 'Taradhin'],
    tags: ['Anti-KDRT', 'Manajemen Konflik', 'Perlindungan Perempuan', 'Akhlak Nabi', 'Safe House'],
    quoteSnippet: 'Para suami yang memukul istrinya sama sekali bukanlah orang yang terbaik di antara kalian; kemuliaan iman seorang pria diukur dari kelembutannya terhadap pasangan.'
  },
  {
    id: 'hadis-menahan-amarah-kekuatan-sejati',
    stageId: 'konflik',
    theme: 'Regulasi Emosi & Resolusi Sengketa Rumah Tangga',
    pertemuan: 11,
    title: 'Kekuatan Sejati dalam Mengelola Konflik: Menahan Amarah dan Menolak Eskalasi Kekerasan',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Kitab al-Adab, Bab al-Hadzar min al-Ghadhab (Bab Waspada Terhadap Amarah)',
    noHadis: 'Bukhari No. 6114 & Muslim No. 2609',
    sanadArab: 'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، أَخْبَرَنَا مَالِكٌ، عَنِ ابْنِ شِهَابٍ، عَنْ حُمَيْدِ بْنِ عَبْدِ الرَّحْمَنِ، عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:',
    matnArab: '«لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abdullah bin Yusuf, telah mengabarkan kepada kami Malik, dari Ibnu Syihab (az-Zuhri), dari Humaid bin Abdirrahman, dari Abu Hurairah رضي الله عنه, bahwa Rasulullah ﷺ bersabda:',
    terjemahan: 'Orang yang kuat itu bukanlah orang yang jago bergulat (menang dalam adu fisik), melainkan orang yang kuat adalah orang yang mampu mengendalikan dirinya tatkala amarah sedang memuncak.',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi menerapkan prinsip hadis ini dalam hukum talak: ucapan talak atau tindakan yang diucapkan saat amarah hilang kendali (madh-hur / ighlaq) tidak jatuh demi menjaga keutuhan ikatan suci pernikahan.',
      maliki: 'Mazhab Maliki menilai pengendalian diri sebagai rukun keluhuran moral dalam kepemimpinan rumah tangga. Suami yang emosional dan bertindak kasar kehilangan kelayakan memimpin dan dapat digugat cerai.',
      syafii: 'Mazhab Syafi\'i menekankan bahwa emosi kemarahan adalah celah setan yang merusak musyawarah (tasyawur). Menahan amarah adalah prasyarat tercapainya pergaulan yang makruf (mu\'asyarah bil ma\'ruf).',
      hanbali: 'Mazhab Hanbali sejalan dengan hadis ini bahwa kekuatan sejati terletak pada daya tahan menahan diri dari membanting, memukul, atau mengeluarkan kata-kata keji kepada pasangan.',
      khiDanKonteks: 'KHI Pasal 77 ayat (2) menggariskan suami-istri memikul kewajiban luhur menegakkan rumah tangga sakinah. Dalam konteks pencegahan sengketa pasutri, kecerdasan emosional dan pengekangan amarah adalah kunci utama mencegah perceraian.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering diajarkan sebatas nasihat akhlak umum di mimbar tanpa dihubungkan secara kontekstual dengan relasi kuasa dan letupan emosi dalam bilik rumah tangga.',
      poin: [
        'Jarang dikaitkan dengan fenomena KDRT yang berakar dari kegagalan suami mengontrol amarah.',
        'Menilai maskulinitas dari dominasi dan ketakutan pasangan atas kemarahannya.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini mendefinisikan ulang makna maskulinitas dan kekuatan sejati: kejantanan bukan diukur dari siapa yang bersuara paling keras atau sanggup memukul lawan, melainkan siapa yang mampu menjinakkan egonya sendiri demi melindungi pasangannya dari marabahaya emosinya.',
      illatHukum: 'Mencegah kehancuran relasi dan melindungi keselamatan jiwa serta martabat sesama pasangan dari agresi amarah.',
      poinKesalingan: [
        'Prinsip menahan amarah berlaku simetris bagi suami dan istri tatkala terjadi silang pendapat.',
        'Kekuatan sejati diuji saat pasangan sedang berselisih: memilih mendengarkan daripada menyerang.',
        'Kedewasaan perkawinan ditandai dengan kemampuan memutus siklus bentakan dan kata-kata menyakitkan.'
      ],
      aplikasiHariIni: [
        'Terapkan aturan jeda (time-out) 20–30 menit ketika tensi pertengkaran meningkat untuk menenangkan sistem saraf sebelum kembali berdialog.',
        'Ubah nada komunikasi dari saling menyalahkan (you-statement) menjadi ungkapan perasaan yang jujur dan asertif (I-statement).'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Tasyawur', 'Mitsaqan Ghalizhan'],
    tags: ['Manajemen Amarah', 'Kecerdasan Emosional', 'Resolusi Konflik', 'Anti-Kekerasan', 'Komunikasi Pasutri'],
    quoteSnippet: 'Kekuatan sejati seorang pria bukanlah pada kemampuannya menundukkan pasangan dengan amarah, melainkan pada kebesarannya menundukkan egonya sendiri.'
  },
  {
    id: 'hadis-memaafkan-pasangan-tujuh-puluh-kali',
    stageId: 'konflik',
    theme: 'Pemaafan Berkelanjutan & Pemulihan Kehangatan Relasi',
    pertemuan: 11,
    title: 'Pemaafan Tanpa Batas: Meneladani Karakter Nabi dalam Memaafkan Kekhilafan Domestik Berulang Kali',
    rawi: 'Abdullah bin Umar ra',
    kitab: 'Sunan Abi Dawud & Sunan at-Tirmidzi',
    kitabBab: 'Kitab al-Adab, Bab fi al-\'Afwi \'an al-Khadim (Bab Anjuran Memaafkan Pembantu & Orang Rumah)',
    noHadis: 'Abu Dawud No. 5164 & Tirmidzi No. 1949',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا يَحْيَى، عَنْ عُثْمَانَ بْنِ غِيَاثٍ، حَدَّثَنَا عَبْدُ اللَّهِ بْنُ عُمَرَ قَالَ: جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللَّهِ، كَمْ نَعْفُو عَنِ الْخَادِمِ؟ فَصَمَتَ، ثُمَّ أَعَادَ عَلَيْهِ الْكَلَامَ فَصَمَتَ، فَلَمَّا كَانَ فِي الثَّالِثَةِ قَالَ:',
    matnArab: '«اعْفُ عَنْهُ فِي كُلِّ يَوْمٍ سَبْعِينَ مَرَّةً»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Yahya (al-Qatthan), dari Utsman bin Ghiyats, telah menceritakan kepada kami Abdullah bin Umar رضي الله عنهما, ia berkata: Datang seorang laki-laki kepada Nabi ﷺ seraya bertanya: "Wahai Rasulullah, berapa kali kami harus memaafkan pelayan/orang yang membantu kami?" Beliau terdiam. Orang itu mengulangi pertanyaannya, dan beliau tetap terdiam. Ketika ia bertanya untuk ketiga kalinya, beliau ﷺ bersabda:',
    terjemahan: 'Maafkanlah kekhilafannya pada setiap hari sebanyak tujuh puluh kali!',
    perbandinganMazhab: {
      hanafi: 'Mazhab Hanafi menggarisbawahi bahwa angka 70 bukanlah batasan matematis harfiah, melainkan ungkapan hiperbola bahasa Arab (mubalaghah) untuk menunjukkan kelapangan hati yang tiada batas dalam pergaulan sehari-hari.',
      maliki: 'Mazhab Maliki menilai pemaafan dan mengabaikan kesalahan kecil (at-taghaful) sebagai salah satu pilar keselamatan rumah tangga. Mencatat setiap kesalahan kecil pasangan adalah aib moral.',
      syafii: 'Mazhab Syafi\'i menetapkan bahwa jika terhadap pekerja domestik saja dianjurkan memaafkan 70 kali sehari, maka terhadap pasangan hidup—yang terikat janji agung mitsaqan ghalizhan—keutamaan memaafkan jauh lebih berlipat ganda.',
      hanbali: 'Mazhab Hanbali menekankan pemaafan sebagai penolak permusuhan menahun. Nabi ﷺ mendidik umatnya untuk tidak cepat menaruh dendam atas kekeliruan manusiawi di dalam rumah.',
      khiDanKonteks: 'KHI Pasal 77 ayat (1) menegaskan suami istri wajib saling mencintai, menghormati, setia, dan memberi bantuan lahir batin. Sikap pemaaf dan lapang dada adalah benteng utama pencegah keretakan rumah tangga yang berujung ke pengadilan.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sering dipahami sempit hanya berlaku bagi budak/pembantu masa lampau, tidak ditarik relevansinya sebagai prinsip dasar komunikasi interpersonal antar-pasangan.',
      poin: [
        'Menafsirkan teks secara kaku dan terfragmentasi.',
        'Membiarkan suami merasa berhak menghukum dan mendendam saat istri berbuat salah kecil.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Dengan metode qiyas al-aula (analogi prioritas): jika orang luar dan pekerja rumah tangga saja wajib dimaafkan hingga 70 kali dalam sehari, betapa lebih utamanya lagi pemaafan itu dicurahkan kepada pasangan hidup yang menjadi belahan jiwa dan teman berbagi kehidupan.',
      illatHukum: 'Menumbuhkan budaya welas asih (rahmah), menghapus bibit dendam, dan memberi ruang bagi pasangan untuk memperbaiki diri secara terhormat.',
      poinKesalingan: [
        'Kesalahan manusiawi adalah keniscayaan dalam keseharian rumah tangga; keduanya harus saling memberi ampunan.',
        'Memaafkan bukan berarti membiarkan kezaliman, melainkan tidak menyimpan kepahitan dan memberi kesempatan bertumbuh bersama.',
        'Suami maupun istri sama-sama berkewajiban meredakan ego untuk meminta maaf dan memberi maaf.'
      ],
      aplikasiHariIni: [
        'Terapkan seni taghaful (pura-pura tidak melihat kekhilafan kecil pasangan yang tidak melanggar syariat), seperti lupa menaruh barang atau masakan kurang pas.',
        'Jangan tidur dalam keadaan memendam amarah; selesaikan hari dengan saling berjabat tangan dan mengikhlaskan kekhilafan.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj', 'Taradhin'],
    tags: ['Pemaafan', 'Kelapangan Hati', 'Manajemen Konflik', 'Taghaful', 'Keharmonisan Keluarga'],
    quoteSnippet: 'Jika kepada orang lain kita dianjurkan memaafkan tujuh puluh kali sehari, betapa lebih luasnya lagi pintu maaf yang selayaknya kita hamparkan bagi pasangan hidup tercinta.'
  },

  // ==========================================
  // KLASTER 7: PERCERAIAN & GUGAT KHULU'
  // ==========================================
  {
    id: 'hadis-khulu-jamilah-tsabit',
    stageId: 'perceraian',
    theme: 'Gugat Cerai Istri (Khulu\') Tanpa Perlu Menuduh Aib',
    title: 'Khulu\' Jamilah binti Abdillah: Hak Gugat Cerai Istri yang Tidak Lagi Merasa Bahagia',
    rawi: 'Ibnu Abbas ra',
    kitab: 'Sahih al-Bukhari',
    kitabBab: 'Kitab at-Thalaq, Bab al-Khul\' wa Kaifa at-Thalaqu fihi No. 5273',
    noHadis: 'Bukhari No. 5273',
    sanadArab: 'حَدَّثَنَا أَزْهَرُ بْنُ جَمِيلٍ، حَدَّثَنَا عَبْدُ الوَهَّابِ الثَّقَفِيُّ، حَدَّثَنَا خَالِدٌ، عَنْ عِكْرِمَةَ، عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا:',
    matnArab: '«أَنَّ امْرَأَةَ ثَابِتِ بْنِ قَيْسٍ أَتَتِ النَّبِيَّ ﷺ فَقَالَتْ: يَا رَسُولَ اللَّهِ، ثَابِتُ بْنُ قَيْسٍ مَا أَعْتِبُ عَلَيْهِ فِي خُلُقٍ وَلَا دِينٍ، وَلَكِنِّي أَكْرَهُ الكُفْرَ فِي الإِسْلَامِ. فَقَالَ: أَتَرُدِّينَ عَلَيْهِ حَدِيقَتَهُ؟ قَالَتْ: نَعَمْ. قَالَ: اقْبَلِ الحَدِيقَةَ وَطَلِّقْهَا تَطْلِيقَةً»',
    terjemahanSanad: 'Telah menceritakan kepada kami Azhar bin Jamil, telah menceritakan kepada kami Abdul Wahhab ats-Tsaqafi, dari Khalid al-Haddza\', dari Ikrimah, dari Ibnu Abbas رضي الله عنهما:',
    terjemahan: 'Istri Tsabit bin Qais (Jamilah binti Abdillah) mendatangi Nabi ﷺ lalu berkata: "Wahai Rasulullah, aku tidak mencela Tsabit bin Qais dalam hal akhlak maupun agamanya, tetapi aku khawatir kufur nikmat dalam Islam (karena tidak mampu mencintainya)." Nabi bertanya: "Maukah engkau mengembalikan kebun yang ia berikan kepadamu (sebagai mahar)?" Ia menjawab: "Ya." Maka Nabi ﷺ bersabda kepada Tsabit: "Terimalah kebun itu, dan ceraikanlah ia satu kali talak."',
    perbandinganMazhab: {
      hanafi: 'Khulu\' diposisikan sebagai transaksi tebusan (*mu\'awadhah*); berstatus talak ba\'in sughra di mana suami tidak berhak rujuk tanpa akad dan mahar baru.',
      maliki: 'Khulu\' sah dilakukan dengan tebusan harta dan berstatus talak ba\'in; suami dilarang memeras istri dengan meminta tebusan melebihi mahar yang dahulu diberikan.',
      syafii: 'Khulu\' dipandang sebagai fasakh atau talak ba\'in tergantung lafalnya; hakikatnya adalah perlindungan agar perempuan tidak terikat dalam pernikahan yang membahayakannya.',
      hanbali: 'Memandang khulu\' sebagai fasakh (bukan talak), sehingga tidak mengurangi kuota talak tiga. Khulu\' adalah hak murni istri yang wajib dikabulkan qadhi jika istri membenci suaminya.',
      khiDanKonteks: 'KHI Pasal 124–128 mengatur gugatan perceraian dengan uang tebusan (khulu\') melalui pemeriksaan Pengadilan Agama untuk menjamin keadilan kedua belah pihak.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Sebagian kalangan menganggap gugat cerai perempuan sebagai tindakan tabu dan aib, serta mengancam perempuan dengan hadis ancaman bau surga tanpa konteks.',
      poin: [
        'Membuat perempuan merasa berdosa besar ketika ingin keluar dari pernikahan yang menyiksa batinnya.',
        'Mengabaikan kebijaksanaan Nabi yang mempermudah proses khulu\'.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Hadis ini adalah tonggak agung keadilan hukum Islam bagi perempuan. Tsabit adalah sahabat saleh tanpa cela moral, namun ketika sang istri merasa tidak ada lagi getaran cinta dan kenyamanan psikologis, Nabi ﷺ mengabulkan perceraian tersebut tanpa mencela atau menghakimi sang istri.',
      illatHukum: 'Melindungi perempuan dari keterpaksaan hidup bersama pasangan yang tidak mampu ia cintai, demi mencegah kezaliman batin.',
      poinKesalingan: [
        'Sebagaimana laki-laki memiliki hak talak, perempuan memiliki instrumen hak gugat cerai (khulu\' & fasakh).',
        'Pemberian tebusan (iwadh/pengembalian mahar) diselesaikan secara adil tanpa memeras pihak perempuan.',
        'Dalam KHI dan Peradilan Agama di Indonesia, gugat cerai istri adalah instrumen sah yang dilindungi hukum.'
      ],
      aplikasiHariIni: [
        'Hentikan stigma buruk terhadap perempuan yang mengajukan cerai gugat di Pengadilan Agama.',
        'Selesaikan perpisahan secara ksatria dan bermartabat tanpa dendam (*tasrihun bi ihsan*).'
      ]
    },
    pilarTerkait: ['Taradhin', 'Zawaj'],
    tags: ['Khulu', 'Gugat Cerai', 'Hak Perempuan', 'Tasrih bi Ihsan', 'Peradilan Agama'],
    quoteSnippet: 'Rasulullah ﷺ mengabulkan gugat cerai istri Tsabit tanpa mencelanya: membuktikan bahwa Islam tidak membiarkan perempuan terkurung dalam pernikahan yang menyiksa jiwanya.'
  },
  {
    id: 'hadis-talak-saat-haid-ibnu-umar',
    stageId: 'perceraian',
    theme: 'Larangan Talak Bida\'i (Mentalak saat Haid)',
    title: 'Kasus Ibnu Umar: Larangan Menjatuhkan Talak Saat Istri Haid Demi Menjaga Kestabilan Jiwa',
    rawi: 'Abdullah bin Umar ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab at-Thalaq, Bab Idza Thulliqat al-Ha\'idh Ta\'taddu bi Dzalik No. 5251; Muslim No. 1471',
    noHadis: 'Bukhari No. 5251 (Muslim No. 1471)',
    sanadArab: 'حَدَّثَنَا يَحْيَى بْنُ بُكَيْرٍ، حَدَّثَنَا اللَّيْثُ، عَنْ عُقَيْلٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَالِمٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا:',
    matnArab: '«أَنَّهُ طَلَّقَ امْرَأَتَهُ وَهِيَ حَائِضٌ، فَسَأَلَ عُمَرُ النَّبِيَّ ﷺ فَقَالَ: مُرْهُ فَلْيُرَاجِعْهَا، ثُمَّ لِيُمْسِكْهَا حَتَّى تَطْهُرَ، ثُمَّ تَحِيضَ، ثُمَّ تَطْهُرَ، ثُمَّ إِنْ شَاءَ أَمْسَكَ بَعْدُ، وَإِنْ شَاءَ طَلَّقَ قَبْلَ أَنْ يَمَسَّ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Yahya bin Bukair, telah menceritakan kepada kami Al-Laits, dari Uqail, dari Ibnu Syihab az-Zuhri, dari Salim, bahwa Abdullah bin Umar رضي الله عنهما:',
    terjemahan: 'Bahwa ia telah mentalak istrinya saat sedang haid. Maka Umar menanyakan hal itu kepada Nabi ﷺ, lalu beliau bersabda: "Perintahkan dia agar merujuknya kembali, lalu menahannya hingga ia suci, lalu haid lagi, lalu suci kembali. Setelah itu jika ia ingin mempertahankannya silakan, dan jika ingin mentalaknya, talaklah dalam keadaan suci sebelum digauli."',
    perbandinganMazhab: {
      hanafi: 'Talak saat haid haram hukumnya (talak bida\'i), pelakunya berdosa, namun talaknya tetap jatuh dan suami diwajibkan merujuknya.',
      maliki: 'Haram mentalak saat haid; jika terjadi, hakim berhak memaksa suami untuk merujuk istrinya.',
      syafii: 'Talak bida\'i berdosa dan haram, tetapi talak tetap terhitung jatuh menurut mayoritas Syafi\'iyyah, dan disunnahkan merujuknya.',
      hanbali: 'Sebagian ulama Hanbali (termasuk Ibnu Taimiyyah dan Ibnul Qayyim) berpendapat bahwa talak bida\'i saat haid adalah BATAL dan tidak jatuh sama sekali karena bertentangan dengan perintah Rasulullah ﷺ.',
      khiDanKonteks: 'KHI Pasal 122: Talak bida\'i dilarang dalam hukum Islam. Di Indonesia, talak di luar sidang Pengadilan Agama tidak memiliki akibat hukum, sehingga emosi talak sembarangan dicegah oleh sistem peradilan.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dianalisis sebatas teknis fiqh pembagian talak sunni dan talak bida\'i, serta perdebatan apakah talak saat haid itu sah atau batal.',
      poin: [
        'Fokus pada hukum sah/jatuhnya talak.',
        'Kurang mendalami alasan psikologis dan perlindungan perempuan di balik larangan tersebut.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ melarang talak dijatuhkan saat istri haid karena masa haid adalah masa di mana kondisi hormonal dan psikologis perempuan sedang rentan, serta masa iddahnya akan bertambah panjang dan merugikannya. Perintah merujuk dan menunggu memberi jeda waktu panjang agar suami berpikir jernih dan amarahnya mereda.',
      illatHukum: 'Mencegah talak tergesa-gesa dan melindungi perempuan dari beban psikologis masa iddah yang berlarut-larut.',
      poinKesalingan: [
        'Laki-laki tidak boleh menggunakan hak talak secara sembarangan atau seenak hatinya.',
        'Syariat memberikan mekanisme penundaan agar peluang ishlah (damai kembali) tetap terbuka lebar.'
      ],
      aplikasiHariIni: [
        'Pahami bahwa talak bukan urusan sepele yang bisa diucapkan saat emosi memuncak.',
        'Dalam hukum Indonesia, perceraian hanya sah jika diikrarkan di depan sidang Pengadilan Agama setelah upaya mediasi gagal.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Talak Bidai', 'Haid', 'Perlindungan Perempuan', 'Masa Iddah'],
    quoteSnippet: 'Nabi ﷺ melarang keras mentalak istri di masa haid: syariat melindungi kestabilan psikologis perempuan dan mencegah keputusan cerai yang didorong emosi sesaat.'
  },
  {
    id: 'hadis-talak-tiga-sekaligus',
    stageId: 'perceraian',
    theme: 'Kecaman Talak Tiga Sekaligus',
    title: 'Kemarahan Nabi ﷺ atas Talak Tiga Sekaligus: Larangan Mempermainkan Kitabullah',
    rawi: 'Mahmud bin Labid ra',
    kitab: 'Sunan an-Nasa\'i',
    kitabBab: 'Kitab at-Thalaq, Bab ats-Thalats al-Majmu\'ah No. 3401',
    noHadis: 'Nasa\'i No. 3401',
    sanadArab: 'أَخْبَرَنَا سُلَيْمَانُ بْنُ دَاوُدَ، عَنِ ابْنِ وَهْبٍ، حَدَّثَنِي مَخْرَمَةُ بْنُ بُكَيْرٍ، عَنْ أَبِيهِ، عَنْ مَحْمُودِ بْنِ لَبِيدٍ رَضِيَ اللَّهُ عَنْهُ قَالَ:',
    matnArab: '«أُخْبِرَ رَسُولُ اللَّهِ ﷺ عَنْ رَجُلٍ طَلَّقَ امْرَأَتَهُ ثَلَاثَ تَطْلِيقَاتٍ جَمِيعًا، فَقَامَ غَضْبَانَ ثُمَّ قَالَ: أَيُلْعَبُ بِكِتَابِ اللَّهِ وَأَنَا بَيْنَ أَظْهُرِكُمْ؟»',
    terjemahanSanad: 'Telah mengabarkan kepada kami Sulaiman bin Dawud, dari Ibnu Wahb, telah menceritakan kepadaku Makhramah bin Bukair, dari ayahnya, dari Mahmud bin Labid رضي الله عنه, ia berkata:',
    terjemahan: 'Diberitahukan kepada Rasulullah ﷺ tentang seorang laki-laki yang mentalak istrinya tiga talak sekaligus dalam satu majelis. Maka beliau berdiri dalam keadaan sangat marah lalu bersabda: "Apakah Kitabullah (hukum Allah) dipermainkan, padahal aku masih berada di antara kalian?!"',
    perbandinganMazhab: {
      hanafi: 'Jumhur fuqaha Hanafi klasik menyatakan talak tiga sekaligus jatuh tiga dan haram rujuk kecuali setelah muhallil, meski pelakunya berdosa besar.',
      maliki: 'Sependapat bahwa talaknya jatuh tiga dan pelakunya berdosa karena melanggar sunnah Nabi.',
      syafii: 'Jumhur Syafi\'iyyah klasik menghitungnya jatuh tiga, namun sebagian ulama muta\'akhirin mengkaji ulang demi kemaslahatan anak dan keluarga.',
      hanbali: 'Pendapat resmi yang dipilih Ibnu Taimiyyah dan Ibnul Qayyim (berdasarkan hadis Sahih Muslim dari Ibnu Abbas): talak tiga dalam satu majelis hanya jatuh talak satu.',
      khiDanKonteks: 'Hukum Positif Indonesia mengadopsi fatwa Ibnu Taimiyyah dalam KHI: ucapan talak tiga sekaligus dalam satu waktu dihitung satu kali talak raj\'i, demi memberi kesempatan pasangan rujuk dan menjaga keutuhan anak-anak.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Perdebatan tajam fiqh klasik: apakah talak tiga sekaligus jatuh tiga (pendapat jumhur mazhab klasik) atau jatuh satu (pendapat Ibnu Taimiyyah dan diadopsi KHI Indonesia).',
      poin: [
        'Perdebatan sering mengabaikan kemarahan moral Nabi atas arogansi suami.',
        'Sebagian pihak masih menganggap sah melontarkan "talak 3" dalam sekali ucap.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Kemarahan Nabi ﷺ membuktikan bahwa syariat murka terhadap arogansi patriarkal yang mempermainkan hukum pernikahan untuk meneror dan membuang istri dalam sekejap. Al-Qur\'an mengatur talak terjadi bertahap (marratan) untuk membuka ruang refleksi dan rekonsiliasi.',
      illatHukum: 'Menolak kekerasan verbal dan memastikan proses perpisahan berjalan secara adil dan bermartabat.',
      poinKesalingan: [
        'Hukum Indonesia (KHI Pasal 115) sejalan dengan semangat hadis ini: ucapan talak di luar sidang pengadilan tidak memiliki akibat hukum pembubaran perkawinan.',
        'Kedua belah pihak wajib menghormati proses hukum resmi dan tidak bertindak sewenang-wenang.'
      ],
      aplikasiHariIni: [
        'Jangan pernah menjadikan kata talak sebagai senjata ancaman dalam pertengkaran rumah tangga.',
        'Selesaikan persoalan perceraian melalui jalur mediasi resmi di Pengadilan Agama.'
      ]
    },
    pilarTerkait: ['Mitsaqan Ghalizhan', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Talak Tiga', 'Anti-Arogansi', 'Hukum Perceraian', 'KHI'],
    quoteSnippet: 'Rasulullah ﷺ bangkit dengan penuh amarah terhadap orang yang menjatuhkan talak tiga sekaligus: "Apakah Kitabullah dipermainkan?!" — kecaman atas arogansi dalam rumah tangga.'
  },

  // ==========================================
  // KLASTER 8: PENGASUHAN ANAK & HADHANAH
  // ==========================================
  {
    id: 'hadis-hak-asuh-ibu',
    stageId: 'pengasuhan',
    theme: 'Hak Asuh Anak Pasca-Perceraian (Hadhanah)',
    title: 'Hak Asuh Ibu Pasca-Cerai: Perlindungan Ikatan Kelekatan Ibu & Anak',
    rawi: 'Abdullah bin Amr ra',
    kitab: 'Sunan Abu Dawud & Musnad Ahmad',
    kitabBab: 'Abu Dawud: Kitab at-Thalaq, Bab Man Ahaqqu bil Walad No. 2276; Ahmad No. 6707',
    noHadis: 'Abu Dawud No. 2276 (Ahmad No. 6707)',
    sanadArab: 'حَدَّثَنَا مَحْمُودُ بْنُ خَالِدٍ، حَدَّثَنَا عُمَرُ بْنُ عَبْدِ الوَاحِدِ، عَنِ الأَوْزَاعِيِّ، عَنْ عَمْرِو بْنِ شُعَيْبٍ، عَنْ أَبِيهِ، عَنْ جَدِّهِ (عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا):',
    matnArab: '«أَنَّ امْرَأَةً قَالَتْ: يَا رَسُولَ اللَّهِ، إِنَّ ابْنِي هَذَا كَانَ بَطْنِي لَهُ وِعَاءً، وَثَدْيِي لَهُ سِقَاءً، وَحِجْرِي لَهُ حِوَاءً، وَإِنَّ أَبَاهُ طَلَّقَنِي وَأَرَادَ أَنْ يَنْتَزِعَهُ مِنِّي، فَقَالَ: أَنْتِ أَحَقُّ بِهِ مَا لَمْ تَنْكِحِي»',
    terjemahanSanad: 'Telah menceritakan kepada kami Mahmud bin Khalid, telah menceritakan kepada kami Umar bin Abdil Wahid, dari Al-Auza\'i, dari Amr bin Syu\'aib, dari ayahnya, dari kakeknya (Abdullah bin Amr رضي الله عنهما):',
    terjemahan: 'Seorang perempuan berkata: "Wahai Rasulullah, anakku ini dahulu perutkulah wadahnya, air susukulah minumannya, dan pangkuankulah tempat perlindungannya. Namun ayahnya telah menceraikanku dan hendak merampas anak ini dariku." Maka Rasulullah ﷺ bersabda kepadanya: "Engkau lebih berhak atas hak asuhnya selama engkau belum menikah lagi."',
    perbandinganMazhab: {
      hanafi: 'Hak hadhanah berada pada ibu kandung sampai anak laki-laki berusia 7 tahun dan anak perempuan berusia 9 tahun, lalu berpindah ke ayah.',
      maliki: 'Hak hadhanah ibu berlanjut hingga anak laki-laki mencapai usia baligh dan anak perempuan sampai menikah dan digauli suaminya.',
      syafii: 'Ibu berhak atas hadhanah anak yang belum mumayyiz; setelah mumayyiz (sekitar 7-8 tahun), anak diberi hak memilih (*takhyir*) antara tinggal bersama ayah atau ibunya.',
      hanbali: 'Sependapat dengan Syafi\'i tentang hak asuh ibu dan opsi takhyir setelah usia 7 tahun, dengan syarat pengasuh amanah dan mampu menjaga agama anak.',
      khiDanKonteks: 'KHI Pasal 105: Pemeliharaan anak yang belum mumayyiz (di bawah 12 tahun) adalah hak ibunya; setelah 12 tahun anak memilih sendiri; dan seluruh biaya pemeliharaan tetap ditanggung oleh ayahnya.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Dijadikan dalil fiqh bahwa hak asuh anak kecil (mumayyiz) berada pada ibu, namun gugur jika ibu menikah lagi.',
      poin: [
        'Kerap diinterpretasikan kaku bahwa pernikahan baru ibu otomatis menggugurkan hak asuh tanpa menimbang kemaslahatan anak.',
        'Sering dijadikan alat mantan suami untuk menekan mantan istri.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ mengakui kelelahan reproduktif dan kelekatan emosional ibu yang tak tertandingi (rahim, menyusui, merawat). Prinsip utama hadhanah adalah kepentingan terbaik bagi anak (the best interest of the child); anak tidak boleh dirampas sebagai objek sengketa dendam mantan pasangan.',
      illatHukum: 'Menjamin stabilitas psikologis dan perlindungan anak usia dini di bawah asuhan sosok yang paling telaten.',
      poinKesalingan: [
        'Meskipun hak asuh berada pada ibu, kewajiban nafkah pemeliharaan anak tetap berada di pundak ayah.',
        'Ayah tidak boleh menggunakan nafkah sebagai senjata untuk menyandera anak atau menyakiti mantan istrinya.',
        'KHI Pasal 105 menetapkan pemeliharaan anak yang belum mumayyiz adalah hak ibunya.'
      ],
      aplikasiHariIni: [
        'Jauhkan anak dari perselisihan pascaperceraian; terapkan pola asuh bersama (*co-parenting*) yang damai.',
        'Penuhi nafkah anak secara rutin tanpa harus ditagih berulang kali oleh mantan istri.'
      ]
    },
    pilarTerkait: ["Mu'asyarah bi al-Ma'ruf", 'Zawaj'],
    tags: ['Hak Asuh', 'Hadhanah', 'Ibu & Anak', 'Nafkah Anak', 'Co-Parenting'],
    quoteSnippet: 'Perutkulah wadahnya, air susukulah minumannya, dan pangkuankulah perlindungannya: Nabi ﷺ melarang anak dirampas paksa dari pelukan kasih sayang ibunya.'
  },
  {
    id: 'hadis-kehangatan-ayah',
    stageId: 'pengasuhan',
    theme: 'Kelekatan Emosional Ayah & Anak',
    title: 'Kehangatan Figur Ayah: Mencium Anak sebagai Cerminan Rahmat Allah',
    rawi: 'Abu Hurairah ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab al-Adab, Bab Rahmatul Walad wa Taqbiluhu No. 5997; Muslim No. 2318',
    noHadis: 'Bukhari No. 5997 (Muslim No. 2318)',
    sanadArab: 'حَدَّثَنَا أَبُو الْيَمَانِ، أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، حَدَّثَنَا أَبُو سَلَمَةَ بْنُ عَبْدِ الرَّحْمَنِ، أَنَّ أَبَا هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ:',
    matnArab: '«قَبَّلَ رَسُولُ اللَّهِ ﷺ الحَسَنَ بْنَ عَلِيٍّ وَعِنْدَهُ الأَقْرَعُ بْنُ حَابِسٍ، فَقَالَ الأَقْرَعُ: إِنَّ لِي عَشَرَةً مِنَ الوَلَدِ مَا قَبَّلْتُ مِنْهُمْ أَحَدًا، فَنَظَرَ إِلَيْهِ رَسُولُ اللَّهِ ﷺ ثُمَّ قَالَ: مَنْ لَا يَرْحَمُ لَا يُرْحَمُ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Abu al-Yaman, telah mengabarkan kepada kami Syu\'aib, dari Az-Zuhri, telah menceritakan kepada kami Abu Salamah bin Abdurrahman, bahwa Abu Hurairah رضي الله عنه berkata:',
    terjemahan: 'Rasulullah ﷺ mencium cucunya (Hasan bin Ali), di dekat beliau ada Al-Aqra\' bin Habis. Al-Aqra\' berkata: "Sesungguhnya aku memiliki sepuluh orang anak, namun tak seorang pun yang pernah kucium." Maka Rasulullah ﷺ memandangnya lalu bersabda: "Barangsiapa yang tidak menyayangi, niscaya ia tidak akan disayangi."',
    perbandinganMazhab: {
      hanafi: 'Menyatakan sunnah mencium dan mengekspresikan kasih sayang kepada anak kecil sebagai bagian dari adab fitrah Islam.',
      maliki: 'Memandang kelembutan orang tua kepada anak sebagai kewajiban tarbiyah yang menjaga kesehatan akal dan jiwa anak.',
      syafii: 'Imam an-Nawawi menjelaskan bahwa mencium anak kandung dengan rasa kasih sayang adalah sunnah yang bernilai pahala besar di sisi Allah.',
      hanbali: 'Menegaskan bahwa kekasaran terhadap anak bertentangan dengan petunjuk sunnah nabawiyyah.',
      khiDanKonteks: 'Konsep pengasuhan modern (positive parenting) sejalan dengan hadis ini: kehadiran ayah yang hangat secara emosional mencegah father hunger (kehilangan figur ayah) pada anak.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Anjuran bersikap lembut kepada balita secara umum.',
      poin: [
        'Sering mengabaikan kritik Nabi terhadap konsep maskulinitas dingin dan berjarak.',
        'Budaya kerap menganggap tugas mengasihi dan memeluk anak adalah urusan ibu semata.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Nabi ﷺ merombak total paradigma kebapakan: kehangatan fisik, pelukan, dan ciuman kasih sayang dari ayah adalah kebutuhan dasar jiwa anak, bukan tanda kelemahan pria.',
      illatHukum: 'Menumbuhkan kesehatan mental generasi melalui ekspresi cinta kasih (rahmah) yang seimbang dari ayah dan ibu.',
      poinKesalingan: [
        'Pengasuhan anak adalah proyek kemitraan berdua: ayah hadir bukan hanya sebagai pencari nafkah, tetapi sebagai pelindung emosional.',
        'Seorang ayah yang dingin dan kaku sedang memutus rantai rahmat Allah dalam keluarganya.',
        'Kerjasama mengasuh anak meringankan beban psikologis ibu dan mempererat ikatan pasutri.'
      ],
      aplikasiHariIni: [
        'Luangkan waktu berkualitas setiap hari untuk bermain, memeluk, dan mendengarkan cerita anak.',
        'Hilangkan gengsi maskulinitas: peluk anak laki-laki maupun perempuan Anda dengan penuh kasih.'
      ]
    },
    pilarTerkait: ['Zawaj', "Mu'asyarah bi al-Ma'ruf"],
    tags: ['Parenting', 'Peran Ayah', 'Kasih Sayang Anak', 'Kesehatan Mental'],
    quoteSnippet: 'Kelembutan seorang ayah dalam memeluk dan mencium anaknya adalah pintu turunnya rahmat dan kasih sayang Allah ke dalam rumah.'
  },
  {
    id: 'hadis-keadilan-anak',
    stageId: 'pengasuhan',
    theme: 'Keadilan Tanpa Diskriminasi Gender Anak',
    title: 'Keadilan Orang Tua: Perintah Tegas Memperlakukan Semua Anak secara Setara',
    rawi: 'An-Nu\'man bin Basyir ra',
    kitab: 'Sahih al-Bukhari & Sahih Muslim',
    kitabBab: 'Bukhari: Kitab al-Hibah, Bab al-Hibah lil Walad No. 2587; Muslim No. 1623',
    noHadis: 'Bukhari No. 2587 (Muslim No. 1623)',
    sanadArab: 'حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا إِسْمَاعِيلُ، حَدَّثَنَا دَاوُدُ بْنُ أَبِي هِنْدٍ، عَنِ الشَّعْبِيِّ، عَنِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَعْطَانِي أَبِي عَطِيَّةً...',
    matnArab: '«فَقَالَ رَسُولُ اللَّهِ ﷺ: أَكُلَّ وَلَدِكَ أَعْطَيْتَهُ هَذَا؟ قَالَ: لَا، قَالَ: فَاتَّقُوا اللَّهَ وَاعْدِلُوا بَيْنَ أَوْلَادِكُمْ»',
    terjemahanSanad: 'Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Isma\'il, telah menceritakan kepada kami Dawud bin Abi Hind, dari Asy-Sya\'bi, dari Nu\'man bin Basyir رضي الله عنهما, ia berkata: Ayahku memberiku suatu hadiah harta...',
    terjemahan: 'Lalu Rasulullah ﷺ bertanya kepadanya: "Apakah semua anakmu engkau beri pemberian seperti ini?" Ayahku menjawab: "Tidak." Maka beliau bersabda: "Bertakwalah kepada Allah, dan berlaku adillah di antara anak-anak kalian!"',
    perbandinganMazhab: {
      hanafi: 'Memandang keadilan pemberian materi kepada anak-anak sebagai sunnah; melebihkan salah satu anak sah secara hukum tetapi makruh jika memicu kedengkian.',
      maliki: 'Menilai melebihkan hibah kepada sebagian anak makruh kecuali jika ada alasan kebutuhan khusus (seperti cacat atau sakit).',
      syafii: 'Menyatakan sunnah menyamakan pemberian kepada semua anak; membeda-bedakan hibah hukumnya makruh namun akad hibahnya tetap sah secara qadha\'.',
      hanbali: 'Imam Ahmad bin Hanbal berpendapat tegas: WAJIB menyamakan pemberian kepada anak-anak dan HARAM melebihkan salah satunya tanpa alasan darurat syar\'i.',
      khiDanKonteks: 'KHI Pasal 211: "Orang tua dapat menghibahkan harta bendanya kepada anaknya... dengan memperhatikan keadilan antaranak." Keadilan afeksi dan pendidikan juga menjadi hak mutlak setiap anak.'
    },
    pemaknaanKonvensional: {
      ringkasan: 'Kewajiban adil dalam pemberian hibah harta kepada anak-anak agar tidak iri hati.',
      poin: [
        'Kerap dibatasi pada aspek materi uang dan tanah warisan semata.',
        'Kurang dikaitkan dengan keadilan afeksi emosional dan kesempatan pendidikan.'
      ]
    },
    pemaknaanMubadalah: {
      ringkasan: 'Perintah keadilan ini bersifat komprehensif: adil dalam fasilitas, kasih sayang, dan kesempatan hidup tanpa membedakan anak laki-laki atau anak perempuan, anak sulung atau anak bungsu.',
      illatHukum: 'Mencegah luka batin, kecemburuan toksik, dan diskriminasi gender sejak dalam keluarga.',
      poinKesalingan: [
        'Ayah dan ibu bermusyawarah dalam setiap keputusan penting yang menyangkut masa depan anak.',
        'Menghapus tradisi mengutamakan pendidikan anak laki-laki di atas anak perempuan.',
        'Membiasakan budaya kesetaraan sejak dini agar anak kelak menjadi pasangan hidup yang adil.'
      ],
      aplikasiHariIni: [
        'Beri kesempatan pendidikan dan dukungan cita-cita yang setara kepada anak perempuan dan laki-laki.',
        'Hindari membanding-bandingkan kepintaran atau karakter antaranak di dalam rumah.'
      ]
    },
    pilarTerkait: ['Zawaj', 'Tasyawur'],
    tags: ['Keadilan Anak', 'Kesetaraan Gender Anak', 'Parenting Islami'],
    quoteSnippet: 'Berlaku adil kepada setiap anak dalam kasih sayang dan kesempatan adalah fondasi melahirkan generasi yang berjiwa damai dan berintegritas.'
  }
];

export interface PilarSakinahItem {
  title: string;
  shortLabel: string;
  subtitle: string;
  arabic: string;
  ayatArab: string;
  terjemahanAyat: string;
  surah: string;
  meaning: string;
  implementasi: string[];
  relatedStageId: HadithItem['stageId'];
}

export const POPULAR_TAGS: string[] = [
  'Hak Perempuan',
  'Persetujuan Mempelai',
  'Akad Nikah',
  'Perjanjian Kawin',
  'Kerja Domestik',
  'Nafkah Wajib',
  'Istri Bekerja',
  'Marital Consent',
  'Anti-KDRT',
  'Khulu',
  'Hak Asuh',
  'Peran Ayah'
];

export const PILAR_SAKINAH: PilarSakinahItem[] = [
  {
    title: 'Mitsaqan Ghalizhan',
    shortLabel: 'Mitsaqan',
    subtitle: '(Ikatan yang Kokoh)',
    arabic: 'مِيثَاقًا غَلِيظًا',
    ayatArab: 'وَأَخَذْنَ مِنكُم مِّيثَاقًا غَلِيظًا',
    terjemahanAyat: '"Dan mereka (istri-istrimu) telah mengambil dari kamu perjanjian yang kuat."',
    surah: 'QS. An-Nisa: 21',
    meaning: 'Pernikahan adalah ikatan perjanjian yang kokoh dan suci di hadapan Allah, menuntut amanah serta komitmen saling menjaga sepanjang hayat.',
    implementasi: [
      'Menepati seluruh syarat dan komitmen yang disepakati saat akad pernikahan.',
      'Tidak menjadikan ancaman talak sebagai senjata saat terjadi perbedaan pendapat.',
      'Menjaga kehormatan, privasi, dan rahasia pasangan baik di dalam maupun di luar rumah.'
    ],
    relatedStageId: 'akad'
  },
  {
    title: 'Zawaj',
    shortLabel: 'Zawaj',
    subtitle: '(Berpasangan & Setara)',
    arabic: 'زَوْج',
    ayatArab: 'هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ',
    terjemahanAyat: '"Mereka adalah pakaian bagimu, dan kamu pun adalah pakaian bagi mereka."',
    surah: 'QS. Al-Baqarah: 187 & QS. Ar-Rum: 21',
    meaning: 'Prinsip berpasangan dan kebermitraan yang setara; suami dan istri saling melindungi, menghangatkan, dan melengkapi tanpa relasi atasan-bawahan.',
    implementasi: [
      'Bahu-membahu mengurus pekerjaan domestik (khidmah al-bayt) sebagaimana teladan Nabi ﷺ.',
      'Saling mendukung pengembangan ilmu, kesehatan mental, dan kemaslahatan pasangan.',
      'Menempatkan pasangan sebagai sahabat sejajar dalam suka maupun duka.'
    ],
    relatedStageId: 'domestik'
  },
  {
    title: "Mu'asyarah bi al-Ma'ruf",
    shortLabel: "Mu'asyarah",
    subtitle: '(Perlakuan Bermartabat)',
    arabic: 'مُعَاشَرَةٌ بِالْمَعْرُوفِ',
    ayatArab: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ',
    terjemahanAyat: '"Dan bergaullah dengan mereka secara patut (bermartabat dan penuh kebaikan)."',
    surah: 'QS. An-Nisa: 19',
    meaning: 'Saling memperlakukan dengan baik, patut, santun, dan bermartabat dalam tutur kata, pemenuhan nafkah, apresiasi harian, hingga keintiman.',
    implementasi: [
      'Menghargai masakan dan jerih payah pasangan serta tidak pernah mencela kekurangannya.',
      'Menolak mutlak segala bentuk kekerasan fisik, verbal, psikis, maupun penelantaran ekonomi.',
      'Memberikan nafkah secara layak dan transparan sesuai kesanggupan tanpa mengungkit-ungkit.'
    ],
    relatedStageId: 'konflik'
  },
  {
    title: 'Tasyawur',
    shortLabel: 'Tasyawur',
    subtitle: '(Musyawarah Terbuka)',
    arabic: 'تَشَاوُر',
    ayatArab: 'فَإِنْ أَرَادَا فِصَالًا عَن تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ فَلَا جُنَاحَ عَلَيْهِمَا',
    terjemahanAyat: '"Apabila keduanya ingin menyapih (anaknya) berdasarkan kerelaan dan permusyawaratan antara keduanya, maka tidak ada dosa atas keduanya."',
    surah: 'QS. Al-Baqarah: 233',
    meaning: 'Kebiasaan saling bermusyawarah dan berdialog secara terbuka dalam mengambil segala keputusan penting rumah tangga dan pengasuhan anak.',
    implementasi: [
      'Merencanakan anggaran keuangan keluarga, tabungan, dan kebutuhan rumah tangga secara bersama.',
      'Berdiskusi setara terkait jarak kehamilan, pola asuh, dan pendidikan anak laki-laki maupun perempuan.',
      'Mendengarkan pendapat pasangan dengan empati tanpa mendominasi percakapan.'
    ],
    relatedStageId: 'pengasuhan'
  },
  {
    title: 'Taradhin',
    shortLabel: 'Taradhin',
    subtitle: '(Kerelaan Timbal Balik)',
    arabic: 'تَرَاضٍ',
    ayatArab: 'عَن تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ',
    terjemahanAyat: '"...berdasarkan kerelaan yang tulus dan permusyawaratan di antara keduanya."',
    surah: 'QS. Al-Baqarah: 233',
    meaning: 'Saling memberi kenyamanan dan kerelaan tulus dari kedua belah pihak dalam setiap urusan pernikahan; menolak segala bentuk paksaan atau manipulasi.',
    implementasi: [
      'Memastikan persetujuan sukarela kedua mempelai sejak proses khithbah dan akad nikah.',
      'Menjaga prinsip marital consent: memperhatikan kesiapan fisik dan batin pasangan dalam hubungan intim.',
      'Menghormati otonomi harta pribadi serta kontribusi ekonomi pasangan dengan penuh keridhaan.'
    ],
    relatedStageId: 'keintiman'
  }
];
