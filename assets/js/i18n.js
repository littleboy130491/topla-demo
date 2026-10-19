const STORAGE_KEY = "topla.lang";

const dict = {
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.categories": "Kategori",
    "nav.catalog": "Katalog",
    "nav.map": "Peta Distribusi",
    "nav.brands": "Sister Brands",
    "nav.contact": "Kontak",
    "nav.menu": "Menu",
    "nav.close": "Tutup",
    "nav.language": "Ganti bahasa",
    "nav.inquiry": "Buka keranjang inquiry",
    "nav.wa": "Chat WhatsApp",

    "inquiry.title": "Keranjang Inquiry",
    "inquiry.subtitle": "Daftar produk pilihanmu, siap dikirim via WhatsApp.",
    "inquiry.empty": "Keranjang masih kosong",
    "inquiry.emptyHint": "Tambahkan produk dari katalog atau halaman segmen.",
    "inquiry.clear": "Kosongkan",
    "inquiry.send": "Kirim via WhatsApp",
    "inquiry.item": "item",
    "inquiry.qty": "Jumlah",
    "inquiry.remove": "Hapus",
    "inquiry.added": "Ditambahkan ke inquiry",
    "inquiry.removed": "Dihapus dari inquiry",
    "inquiry.cleared": "Inquiry dikosongkan",
    "inquiry.note": "Demo preview — tidak ada transaksi atau pengiriman.",
    "inquiry.browse": "Jelajahi katalog",

    "common.addInquiry": "Tambah",
    "common.from": "Mulai dari",
    "common.all": "Semua",
    "common.school": "School & College",
    "common.office": "Office & Executive",
    "common.segment": "Segmen",
    "common.products": "produk",
    "common.viewAll": "Lihat semua",

    "footer.tagline":
      "Satu katalog untuk dua dunia: ruang kelas yang penuh rasa ingin tahu dan ruang kerja yang tenang.",
    "footer.explore": "Jelajahi",
    "footer.company": "Perusahaan",
    "footer.contact": "Kontak",
    "footer.rights": "Demo preview. Seluruh data adalah contoh.",
    "footer.demo": "Dibuat sebagai purwarupa statis, bukan situs produksi.",

    "home.eyebrow": "Satu katalog, dua dunia",
    "home.title": "Pilih duniamu.",
    "home.sub":
      "Setiap audiens butuh bahasa visual yang berbeda. Produk yang sama, dua pengalaman yang terasa sepenuhnya berbeda.",
    "home.hint": "Pilih segmen untuk mulai menjelajah",
    "home.school.kicker": "Untuk pelajar & kampus",
    "home.school.desc":
      "Warna pastel, bentuk lembut, dan semangat untuk belajar — membuat alat tulis jadi teman yang menyenangkan.",
    "home.school.cta": "Masuk ke School & College",
    "home.school.micro": "4 produk unggulan · 12 produk bertag School",
    "home.office.kicker": "Untuk tim & eksekutif",
    "home.office.desc":
      "Presisi, ruang tenang, dan material yang matang. Kurasi meja kerja untuk fokus yang lebih lama.",
    "home.office.cta": "Masuk ke Office & Executive",
    "home.office.micro": "4 produk unggulan · 12 produk bertag Office",
    "home.continue": "Lanjutkan ke",
    "home.dual.eyebrow": "Studi kasus segmentasi",
    "home.dual.title": "Satu produk, dua wajah.",
    "home.dual.desc":
      "Notebook A5 Cerdas bertag School dan Office. Produknya sama — cara berceritanya yang berbeda.",
    "home.dual.schoolLabel": "Tampilan School",
    "home.dual.officeLabel": "Tampilan Office",
    "home.dual.noteSchool":
      "Sudut membulat, warna mint, dan bahasa yang ringan untuk tas sekolah.",
    "home.dual.noteOffice":
      "Sudut tegas, tone muted, dan penekanan pada presisi untuk meja kerja.",
    "home.teaser.eyebrow": "Lintas segmen",
    "home.teaser.title": "Sedang dicari semua orang.",
    "home.teaser.desc":
      "Beberapa produk paling serbaguna, dipakai dari ruang kelas sampai ruang rapat.",
    "home.teaser.cta": "Lihat semua katalog",
    "home.brands.eyebrow": "Tiga brand, satu ekosistem",
    "home.brands.title": "Keluarga Topla.",
    "home.brands.desc":
      "Setiap brand punya peran, tapi semuanya berbagi standar bahan dan detail yang sama.",
    "home.brands.cta": "Kenali sister brands",
    "home.brands.link": "Lihat brand",

    "school.eyebrow": "Topla untuk School & College",
    "school.title": "Belajar jadi",
    "school.titleAccent": "lebih seru.",
    "school.desc":
      "Alat tulis yang ramah, aman, dan penuh warna — dibuat untuk tangan kecil, ide besar, dan hari-hari di kelas.",
    "school.cta1": "Jelajahi katalog sekolah",
    "school.cta2": "Lihat produk unggulan",
    "school.sticker1": "Siap belajar!",
    "school.sticker2": "Best seller",
    "school.sticker3": "Aman untuk anak",
    "school.marquee": "Belajar · BerkreasI · Bermain · Tumbuh · ",
    "school.featured.eyebrow": "Pilihan untuk kelas",
    "school.featured.title": "Favorit di tas sekolah.",
    "school.featured.desc":
      "Produk bertag School yang paling sering dibawa siswa dan mahasiswa.",
    "school.more.title": "Lengkapi harimu.",
    "school.more.desc":
      "Produk School lain yang bisa masuk ke dalam tas yang sama.",
    "school.why.eyebrow": "Kenapa Topla School",
    "school.why.title": "Dirancang untuk rasa ingin tahu.",
    "school.why1.title": "Bahan aman",
    "school.why1.desc":
      "Material non-toksik dan tepi membulat untuk tangan kecil yang aktif.",
    "school.why2.title": "Warna yang ceria",
    "school.why2.desc":
      "Palet pastel yang lembut di mata, tapi tetap mudah ditemukan di dalam tas.",
    "school.why3.title": "Siap untuk sekolah",
    "school.why3.desc":
      "Ukuran, berat, dan daya tahan disesuaikan dengan ritme hari sekolah.",
    "school.band.title": "Siap memulai tahun ajaran?",
    "school.band.desc":
      "Minta katalog sekolah atau kirim daftar kebutuhan kelasmu lewat WhatsApp.",
    "school.band.cta": "Minta katalog sekolah",
    "school.other": "Cari perlengkapan kantor?",
    "school.otherCta": "Lihat Office & Executive",

    "office.eyebrow": "Topla for Office & Executive",
    "office.title": "Ruang kerja yang",
    "office.titleAccent": "bekerja lebih baik.",
    "office.desc":
      "Kurasi alat tulis dan perlengkapan meja dengan presisi. Tenang, fungsional, dan siap untuk keputusan besar.",
    "office.cta1": "Jelajahi katalog kantor",
    "office.cta2": "Konsultasi pengadaan",
    "office.stat1": "Produk terkurasi",
    "office.stat2": "Titik distribusi",
    "office.stat3": "Brand dalam ekosistem",
    "office.featured.eyebrow": "Kurasi meja kerja",
    "office.featured.title": "Esensial untuk fokus.",
    "office.featured.desc":
      "Produk bertag Office yang membentuk meja kerja fungsional dan tenang.",
    "office.more.title": "Detail kecil, dampak besar.",
    "office.more.desc":
      "Produk Office lain untuk melengkapi ritme kerja harian.",
    "office.why.eyebrow": "Standar kantor",
    "office.why.title": "Dirancang untuk ritme kerja.",
    "office.why1.title": "Presisi",
    "office.why1.desc":
      "Spesifikasi yang jelas, toleransi rapat, dan performa yang konsisten.",
    "office.why2.title": "Tenang secara visual",
    "office.why2.desc":
      "Palet muted dan bentuk tegas yang tidak bersaing dengan pekerjaanmu.",
    "office.why3.title": "Siap untuk skala",
    "office.why3.desc":
      "Katalog yang mudah dijadikan daftar pengadaan untuk tim dan cabang.",
    "office.band.title": "Pengadaan yang lebih tenang.",
    "office.band.desc":
      "Kirim daftar kebutuhan kantor dan tim kami akan menyiapkan penawaran.",
    "office.band.cta": "Minta penawaran",
    "office.other": "Butuh perlengkapan sekolah?",
    "office.otherCta": "Lihat School & College",

    "catalog.eyebrow": "Katalog lengkap",
    "catalog.title": "Satu katalog. Semua kebutuhan.",
    "catalog.desc":
      "16 produk lintas brand dan segmen. Filter berdasarkan kata kunci, brand, kategori, atau segmen.",
    "catalog.search": "Cari produk…",
    "catalog.brand": "Semua brand",
    "catalog.category": "Semua kategori",
    "catalog.segment": "Semua segmen",
    "catalog.sort": "Urutkan",
    "catalog.sort.featured": "Unggulan",
    "catalog.sort.name": "Nama A–Z",
    "catalog.sort.price": "Harga terendah",
    "catalog.reset": "Reset filter",
    "catalog.results": "produk ditemukan",
    "catalog.empty": "Tidak ada produk yang cocok",
    "catalog.emptyDesc": "Coba kata kunci lain atau reset filter.",
    "catalog.emptyCta": "Reset filter",
    "catalog.categories": "Kategori",
    "catalog.brandsLabel": "Brand",
    "catalog.demoNote": "Harga adalah contoh dan tidak termasuk pajak.",

    "product.home": "Katalog",
    "product.notFound": "Produk tidak ditemukan",
    "product.notFoundDesc":
      "Produk yang kamu cari mungkin tidak ada di katalog demo ini.",
    "product.back": "Kembali ke katalog",
    "product.gallery": "Galeri produk",
    "product.specs": "Spesifikasi",
    "product.variant": "Varian",
    "product.qty": "Jumlah",
    "product.add": "Tambah ke inquiry",
    "product.note": "Demo preview — harga dan stok bukan transaksi nyata.",
    "product.segments": "Segmen",
    "product.related": "Kamu mungkin juga suka",
    "product.relatedDesc": "Produk lain dari segmen yang sama.",
    "product.priceFrom": "Mulai dari",
    "product.ask": "Tanya via WhatsApp",
    "product.schoolOnly": "School",
    "product.officeOnly": "Office",
    "product.galleryHint": "Pilih tampilan",

    "map.eyebrow": "Jaringan distribusi",
    "map.title": "Dari pabrik ke mejamu.",
    "map.desc":
      "Delapan titik distribusi menghubungkan pabrik, gudang, dan hub regional. Klik pin untuk melihat detail.",
    "map.legend.hq": "Kantor Pusat",
    "map.legend.factory": "Pabrik",
    "map.legend.warehouse": "Gudang",
    "map.legend.hub": "Hub Distribusi",
    "map.hint": "Klik pin untuk melihat detail lokasi.",
    "map.detail": "Pilih lokasi",
    "map.detailDesc": "Klik salah satu pin pada peta untuk melihat alamat dan kontak.",
    "map.address": "Alamat",
    "map.phone": "Kontak",
    "map.contact": "Hubungi via WhatsApp",
    "map.list": "Semua lokasi",
    "map.visit": "Lihat detail",

    "brands.eyebrow": "Ekosistem Topla",
    "brands.title": "Tiga brand, satu standar.",
    "brands.desc":
      "Topla Cerdas, Topla Cermat, dan Maxximo berbagi rantai pasok dan standar kualitas, dengan bahasa visual yang berbeda.",
    "brands.view": "Lihat produk",
    "brands.role": "Peran",
    "brands.products": "Produk pilihan",

    "about.eyebrow": "Tentang Topla",
    "about.title": "Alat tulis yang mengikuti cara orang bekerja.",
    "about.desc":
      "Topla membuat perlengkapan sekolah dan kantor yang sederhana, tahan lama, dan menyenangkan dipakai setiap hari.",
    "about.storyTitle": "Berawal dari satu rak toko.",
    "about.story1":
      "Topla dimulai sebagai toko alat tulis keluarga pada 2014. Kami mendengarkan guru, siswa, dan tim kantor yang datang setiap minggu — lalu mulai membuat produk yang menjawab kebutuhan mereka.",
    "about.story2":
      "Hari ini, tiga brand kami menjangkau ruang kelas dan ruang rapat di seluruh Indonesia. Prinsipnya tetap: bahan yang baik, detail yang jelas, dan harga yang masuk akal.",
    "about.value1.title": "Berguna dulu",
    "about.value1.desc":
      "Setiap produk harus menyelesaikan satu pekerjaan nyata sebelum memikirkan hal lain.",
    "about.value2.title": "Tenang dipakai",
    "about.value2.desc":
      "Warna, tekstur, dan bentuk dirancang agar tidak mengalihkan perhatian.",
    "about.value3.title": "Bertahan lama",
    "about.value3.desc":
      "Kami memilih material yang tahan terhadap pemakaian harian, bukan tren sesaat.",
    "about.timeline": "Perjalanan singkat",
    "about.t1.year": "2014",
    "about.t1.text": "Toko alat tulis pertama dibuka di Jakarta.",
    "about.t2.year": "2018",
    "about.t2.text": "Topla Cerdas dan Topla Cermat diluncurkan.",
    "about.t3.year": "2021",
    "about.t3.text": "Maxximo hadir untuk segmen kantor dan eksekutif.",
    "about.t4.year": "2026",
    "about.t4.text": "Jaringan distribusi delapan titik di lima pulau.",
    "about.cta": "Lihat katalog",

    "contact.eyebrow": "Kontak",
    "contact.title": "Mari bicara kebutuhanmu.",
    "contact.desc":
      "Untuk pertanyaan produk, pengadaan kantor, atau kerja sama distribusi, tim kami siap membantu.",
    "contact.info": "Informasi kontak",
    "contact.hours": "Jam operasional",
    "contact.formTitle": "Kirim pesan",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.send": "Kirim pesan",
    "contact.demoNote":
      "Form ini hanya demo dan tidak mengirim data. Gunakan WhatsApp untuk respons nyata.",
    "contact.sent": "Terima kasih! Form demo tidak mengirim data — silakan gunakan WhatsApp.",
    "contact.address": "Alamat",
    "contact.phone": "Telepon",
    "contact.emailLabel": "Email",

    "toast.added": "Ditambahkan ke inquiry",
    "toast.demo": "Ini demo preview.",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.categories": "Categories",
    "nav.catalog": "Catalog",
    "nav.map": "Distribution Map",
    "nav.brands": "Sister Brands",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "nav.language": "Change language",
    "nav.inquiry": "Open inquiry basket",
    "nav.wa": "Chat on WhatsApp",

    "inquiry.title": "Inquiry Basket",
    "inquiry.subtitle": "Your shortlist, ready to send via WhatsApp.",
    "inquiry.empty": "Your basket is empty",
    "inquiry.emptyHint": "Add products from the catalog or a segment page.",
    "inquiry.clear": "Clear all",
    "inquiry.send": "Send via WhatsApp",
    "inquiry.item": "items",
    "inquiry.qty": "Quantity",
    "inquiry.remove": "Remove",
    "inquiry.added": "Added to inquiry",
    "inquiry.removed": "Removed from inquiry",
    "inquiry.cleared": "Inquiry cleared",
    "inquiry.note": "Demo preview — no transaction or shipping.",
    "inquiry.browse": "Browse the catalog",

    "common.addInquiry": "Add",
    "common.from": "From",
    "common.all": "All",
    "common.school": "School & College",
    "common.office": "Office & Executive",
    "common.segment": "Segment",
    "common.products": "products",
    "common.viewAll": "View all",

    "footer.tagline":
      "One catalog for two worlds: a curious classroom and a composed workplace.",
    "footer.explore": "Explore",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.rights": "Demo preview. All data is sample content.",
    "footer.demo": "Built as a static prototype, not a production site.",

    "home.eyebrow": "One catalog, two worlds",
    "home.title": "Choose your world.",
    "home.sub":
      "Each audience needs a different visual language. The same products, two experiences that feel entirely their own.",
    "home.hint": "Pick a segment to start exploring",
    "home.school.kicker": "For students & campus",
    "home.school.desc":
      "Pastel colour, soft shapes, and a love of learning make stationery a cheerful companion.",
    "home.school.cta": "Enter School & College",
    "home.school.micro": "4 featured products · 12 tagged School",
    "home.office.kicker": "For teams & executives",
    "home.office.desc":
      "Precision, quiet space, and mature materials. A desk edit built for longer focus.",
    "home.office.cta": "Enter Office & Executive",
    "home.office.micro": "4 featured products · 12 tagged Office",
    "home.continue": "Continue to",
    "home.dual.eyebrow": "Segmentation case study",
    "home.dual.title": "One product, two faces.",
    "home.dual.desc":
      "Notebook A5 Cerdas is tagged both School and Office. The product is the same — the story around it changes.",
    "home.dual.schoolLabel": "School presentation",
    "home.dual.officeLabel": "Office presentation",
    "home.dual.noteSchool":
      "Rounded corners, mint colour, and lighter language for the school bag.",
    "home.dual.noteOffice":
      "Sharp corners, muted tone, and an emphasis on precision for the desk.",
    "home.teaser.eyebrow": "Across segments",
    "home.teaser.title": "The ones everyone reaches for.",
    "home.teaser.desc":
      "Some of the most versatile products, used from the classroom to the boardroom.",
    "home.teaser.cta": "View the full catalog",
    "home.brands.eyebrow": "Three brands, one ecosystem",
    "home.brands.title": "The Topla family.",
    "home.brands.desc":
      "Each brand has a role, yet they share the same material standards and attention to detail.",
    "home.brands.cta": "Meet the sister brands",
    "home.brands.link": "View brand",

    "school.eyebrow": "Topla for School & College",
    "school.title": "Learning feels",
    "school.titleAccent": "more fun.",
    "school.desc":
      "Friendly, safe, and colourful tools — made for small hands, big ideas, and ordinary school days.",
    "school.cta1": "Explore the school catalog",
    "school.cta2": "See featured products",
    "school.sticker1": "Ready to learn!",
    "school.sticker2": "Best seller",
    "school.sticker3": "Kid-friendly",
    "school.marquee": "Learn · Make · Play · Grow · ",
    "school.featured.eyebrow": "Picks for the classroom",
    "school.featured.title": "Favourites in the school bag.",
    "school.featured.desc":
      "The School-tagged products students reach for most.",
    "school.more.title": "Complete the day.",
    "school.more.desc":
      "More School products that fit in the same bag.",
    "school.why.eyebrow": "Why Topla School",
    "school.why.title": "Designed for curiosity.",
    "school.why1.title": "Safe materials",
    "school.why1.desc":
      "Non-toxic materials and rounded edges for busy small hands.",
    "school.why2.title": "Cheerful colour",
    "school.why2.desc":
      "A soft pastel palette that is easy on the eyes and easy to spot in a bag.",
    "school.why3.title": "School-ready",
    "school.why3.desc":
      "Size, weight, and durability matched to the rhythm of a school day.",
    "school.band.title": "Ready for the new school year?",
    "school.band.desc":
      "Request the school catalog or send your class list via WhatsApp.",
    "school.band.cta": "Request the school catalog",
    "school.other": "Looking for office supplies?",
    "school.otherCta": "See Office & Executive",

    "office.eyebrow": "Topla for Office & Executive",
    "office.title": "A workspace that",
    "office.titleAccent": "works better.",
    "office.desc":
      "A precise edit of writing tools and desk essentials. Quiet, functional, and ready for bigger decisions.",
    "office.cta1": "Explore the office catalog",
    "office.cta2": "Procurement consultation",
    "office.stat1": "Curated products",
    "office.stat2": "Distribution points",
    "office.stat3": "Brands in the ecosystem",
    "office.featured.eyebrow": "The desk edit",
    "office.featured.title": "Essentials for focus.",
    "office.featured.desc":
      "Office-tagged products that shape a functional, composed desk.",
    "office.more.title": "Small details, larger impact.",
    "office.more.desc":
      "More Office products for the everyday rhythm of work.",
    "office.why.eyebrow": "The office standard",
    "office.why.title": "Built for the rhythm of work.",
    "office.why1.title": "Precision",
    "office.why1.desc":
      "Clear specifications, tight tolerances, and consistent performance.",
    "office.why2.title": "Visually quiet",
    "office.why2.desc":
      "Muted palettes and firm shapes that do not compete with your work.",
    "office.why3.title": "Ready to scale",
    "office.why3.desc":
      "A catalog that turns into a procurement list for teams and branches.",
    "office.band.title": "A calmer way to procure.",
    "office.band.desc":
      "Send the office list and our team will prepare a quotation.",
    "office.band.cta": "Request a quotation",
    "office.other": "Need school supplies?",
    "office.otherCta": "See School & College",

    "catalog.eyebrow": "The full catalog",
    "catalog.title": "One catalog. Every need.",
    "catalog.desc":
      "16 products across brands and segments. Filter by keyword, brand, category, or segment.",
    "catalog.search": "Search products…",
    "catalog.brand": "All brands",
    "catalog.category": "All categories",
    "catalog.segment": "All segments",
    "catalog.sort": "Sort",
    "catalog.sort.featured": "Featured",
    "catalog.sort.name": "Name A–Z",
    "catalog.sort.price": "Lowest price",
    "catalog.reset": "Reset filters",
    "catalog.results": "products found",
    "catalog.empty": "No matching products",
    "catalog.emptyDesc": "Try another keyword or reset the filters.",
    "catalog.emptyCta": "Reset filters",
    "catalog.categories": "Categories",
    "catalog.brandsLabel": "Brands",
    "catalog.demoNote": "Prices are samples and exclude tax.",

    "product.home": "Catalog",
    "product.notFound": "Product not found",
    "product.notFoundDesc": "The product you are looking for is not in this demo catalog.",
    "product.back": "Back to catalog",
    "product.gallery": "Product gallery",
    "product.specs": "Specifications",
    "product.variant": "Variant",
    "product.qty": "Quantity",
    "product.add": "Add to inquiry",
    "product.note": "Demo preview — prices and stock are not a real transaction.",
    "product.segments": "Segments",
    "product.related": "You might also like",
    "product.relatedDesc": "More products from the same segment.",
    "product.priceFrom": "From",
    "product.ask": "Ask via WhatsApp",
    "product.schoolOnly": "School",
    "product.officeOnly": "Office",
    "product.galleryHint": "Choose a view",

    "map.eyebrow": "Distribution network",
    "map.title": "From the factory to your desk.",
    "map.desc":
      "Eight distribution points connect factories, warehouses, and regional hubs. Click a pin for details.",
    "map.legend.hq": "Headquarters",
    "map.legend.factory": "Factory",
    "map.legend.warehouse": "Warehouse",
    "map.legend.hub": "Distribution Hub",
    "map.hint": "Click a pin to see location details.",
    "map.detail": "Select a location",
    "map.detailDesc": "Click any pin on the map to see its address and contact.",
    "map.address": "Address",
    "map.phone": "Contact",
    "map.contact": "Contact via WhatsApp",
    "map.list": "All locations",
    "map.visit": "View details",

    "brands.eyebrow": "The Topla ecosystem",
    "brands.title": "Three brands, one standard.",
    "brands.desc":
      "Topla Cerdas, Topla Cermat, and Maxximo share a supply chain and quality standard, each with its own visual language.",
    "brands.view": "View products",
    "brands.role": "Role",
    "brands.products": "Selected products",

    "about.eyebrow": "About Topla",
    "about.title": "Stationery that follows how people work.",
    "about.desc":
      "Topla makes school and office essentials that are simple, durable, and pleasant to use every day.",
    "about.storyTitle": "It started with one shop shelf.",
    "about.story1":
      "Topla began as a family stationery shop in 2014. We listened to teachers, students, and office teams who came in every week — then started making products that answered what they needed.",
    "about.story2":
      "Today our three brands reach classrooms and boardrooms across Indonesia. The principle stays the same: good materials, clear detail, and a sensible price.",
    "about.value1.title": "Useful first",
    "about.value1.desc":
      "Every product has to solve one real job before anything else.",
    "about.value2.title": "Calm in use",
    "about.value2.desc":
      "Colour, texture, and form are designed not to pull focus.",
    "about.value3.title": "Made to last",
    "about.value3.desc":
      "We choose materials for daily use, not for a passing trend.",
    "about.timeline": "A short timeline",
    "about.t1.year": "2014",
    "about.t1.text": "The first stationery shop opens in Jakarta.",
    "about.t2.year": "2018",
    "about.t2.text": "Topla Cerdas and Topla Cermat launch.",
    "about.t3.year": "2021",
    "about.t3.text": "Maxximo arrives for the office and executive segment.",
    "about.t4.year": "2026",
    "about.t4.text": "Eight distribution points across five islands.",
    "about.cta": "View the catalog",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about what you need.",
    "contact.desc":
      "For product questions, office procurement, or distribution partnerships, our team is ready to help.",
    "contact.info": "Contact information",
    "contact.hours": "Opening hours",
    "contact.formTitle": "Send a message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.demoNote":
      "This form is a demo and sends no data. Use WhatsApp for a real response.",
    "contact.sent": "Thank you! The demo form sends no data — please use WhatsApp.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.emailLabel": "Email",

    "toast.added": "Added to inquiry",
    "toast.demo": "This is a demo preview.",
  },
};

let lang = "id";
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "id" || saved === "en") lang = saved;
} catch {
  // ignore
}

export function getLang() {
  return lang;
}

export function setLang(next) {
  if (next !== "id" && next !== "en") return;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  location.reload();
}

export function t(key, fallback = "") {
  const value = dict[lang][key] ?? dict.id[key];
  return value ?? fallback ?? key;
}

export function applyI18n(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[lang][el.dataset.i18n] ?? dict.id[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value =
      dict[lang][el.dataset.i18nPlaceholder] ??
      dict.id[el.dataset.i18nPlaceholder];
    if (value != null) el.setAttribute("placeholder", value);
  });
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value =
      dict[lang][el.dataset.i18nAria] ?? dict.id[el.dataset.i18nAria];
    if (value != null) el.setAttribute("aria-label", value);
  });
  document.documentElement.lang = lang;
}
