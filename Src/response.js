// Respon status
bot.action('me_status', ctx => ctx.answerCallbackQuery('Sistem sedang berjalan ['+waktu_singkat+']'));


// Respon jenis
bot.action('me_jenis', ctx => { 
  // Data akses
  let menu = 'jenis'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;
  
  // Pesan
  let msg = '🐈 Jenis Hewan\n\nJenis hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

  // Inline keyboard
  inline_Keyboard = [
    [button.text('🐟 Ikan', 'jenis_ikan'), button.text('🕊️ Burung', 'jenis_burung')],
    [button.text('🐇 Mamalia', 'jenis_mamalia'), button.text('🐊 Reptil', 'jenis_reptil')],
    [button.text('🐸 Amfibi', 'jenis_amfibi')]
  ];

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});
  

// Respon ikan
bot.action('jenis_ikan', ctx => { 
  // Data akses
  let menu = 'jenis ikan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐟 Kelas Ikan (Pisces)\n\nHewan kelas ini seluruh anggota tubuhnya hidup di dalam air, baik itu di air tawar maupun air laut. Ikan hias merupakan hewan yang umum dipelihara oleh masyarakat di berbagai belahan dunia. Ikan hias diantaranya yaitu: ikan arwarna, ikan koi, ikan koki, ikan channa, ikan badut, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@hajatraJeT">@hajatraJeT</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=10RhIvoPLaw">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon burung
bot.action('jenis_burung', ctx => { 
  // Data akses
  let menu = 'jenis burung'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🕊️ Kelas Burung (Aves)\n\nHewan kelas ini seluruh anggota tubuhnya tertutup oleh bulu yang berasal dari epidermis. Selain itu, hewan kelas aves umumnya memiliki alat gerak berupa sayap untuk terbang. Contoh hewan kelas aves adalah burung Elang, burung Kakaktua, burung Kolibri, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=LYbXeEIugtk&t=8s">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon mamalia
bot.action('jenis_mamalia', ctx => { 
  // Data akses
  let menu = 'jenis mamalia'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐇 Kelas Mamalia\n\nHewan kelas ini memiliki kelenjar susu pada hewan betinanya. Contoh hewan kelas mamalia adalah kucing, sapi, kambing, beruang, monyet, harimau, anjing, kanguru, gajah, kelinci, badak, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=fs9OoKv9Jts">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon reptil
bot.action('jenis_reptil', ctx => { 
  // Data akses
  let menu = 'jenis reptil'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐊 Kelas Reptil\n\nHewan kelas ini bergerak dengan cara melata dan cenderung beradaptasi dengan kehidupan darat dan perairan. Contoh hewan kelas ini adalah kadal, tokek, buaya, kura-kura, ular, dan cecak.\n\n▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=vuQjs_ERFyU">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon amfibi
bot.action('jenis_amfibi', ctx => { 
  // Data akses
  let menu = 'jenis amfibi'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; } 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐸 Kelas Amfibi\n\nHewan kelas ini dapat hidup di dua alam, yakni darat dan air tawar, tetapi tidak hidup di air laut. Contoh hewan vertebrata kelas amphibia adalah katak dan salamander.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=AKN0Z1rIcMo">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon pakan ikan
bot.action('me_pakan', (ctx, next) => {
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nPakan ikan terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing; ikan hidup; invertebrata akuatik, seperti daphnia atau artemia; larva serangga seperti bloodworm, jentik nyamuk, infusoria, rotifera, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet ikan. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG1.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan burung
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🕊️ Burung (Aves)\n------------------------------------------------------------\n\nPakan burung terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu biji-bijian, kroto (larva semut), jangkrik, ulat, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet burung. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG2.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan mamalia
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐇 Mamalia\n------------------------------------------------------------\n\nPakan mamalia terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu rerumputan, buah-buahan, dedaunan, biji-bijian, umbi-umbian, daging-dagingan, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kelinci, pelet anjing, pelet kucing, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG3.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan reptil
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐊 Reptil\n------------------------------------------------------------\n\nPakan reptil terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu tikus, serangga, siput, cacing, dedaunan, buah-buahan, biji-bijian, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kura-kura, pelet kadal, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG4.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan amfibi
bot.action('me_pakan', (ctx, next) => { 
  // Data akses
  let menu = 'pakan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐸 Amfibi\n------------------------------------------------------------\n\nPakan amfibi terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing, ikan, belatung, ulat, lalat, jangkrik, kumbang, belalang, laba-laba, siput, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet salamander, pelet katak, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG5.jpg';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'}) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon habitat ikan
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nIkan dapat ditemukan hampir di semua perairan yang berukuran besar baik air tawar, air payau, maupun air asin (laut). Pada habitat aslinya, ikan dapat hidup bervariasi, mulai dari yang dekat permukaan hingga beberapa ribu meter di bawah permukaan.\n\n▶️ Sumber: <a href="https://www.youtube.com/@TankTested">@TankTested</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=ICRQfGjdS6o">Klik Disini</a></strong>';

  // Foto habitat ikan
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG6.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat burung
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🕊️ Burung (Aves)\n------------------------------------------------------------\n\nHabitat burung terbentang mulai dari tepi pantai hingga ke puncak gunung. Burung yang memiliki habitat khusus di tepi pantai tidak dapat hidup di pegunungan dan sebaliknya. Namun ada pula spesies burung-burung umum yang dapat dijumpai di beberapa habitat.\n\n▶️ Sumber: <a href="https://www.youtube.com/@cornell_lab">@cornell_lab</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=UmPXtsJeu5M&t=134s">Klik Disini</a></strong>';

  // Foto habitat burung
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG7.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat mamalia
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐇 Mamalia\n------------------------------------------------------------\n\nMamalia hidup pada habitat yang berbeda dan tersebar luas baik di gurun, Arktik, lautan, hutan, gunung, tundra, padang rumput, dan sabana. Mamalia pun lazim dibandingkan dengan reptil dan amfibi karena habitatnya tersebut.\n\n▶️ Sumber: <a href="https://www.youtube.com/@SLNacademy">@SLNacademy</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=9cfRj1TcscI">Klik Disini</a></strong>';

  // Foto habitat mamalia
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG8.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat reptil
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐊 Reptil\n------------------------------------------------------------\n\nKeberadaan reptil bisa ditemukan hampir di seluruh bagian dunia, kecuali benua Antartika. Reptil hidup di daratan, daerah perairan, atau bisa juga keduanya. Karena itu, persebaran reptil bisa ditemukan di berbagai tempat yang umum dikunjungi ataupun tidak bisa dikunjung manusia.\n\n▶️ Sumber: <a href="https://www.youtube.com/@ARCTrust">@ARCTrust</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=iX93jNAFKtM">Klik Disini</a></strong>';

  // Foto habitat reptil
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG9.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat amfibi
bot.action('me_habitat', ctx => { 
  // Data akses
  let menu = 'habitat'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐸 Amfibi\n------------------------------------------------------------\n\nHabitat utama amfibi adalah hutan primer, hutan sekunder, hutan rawa, sungai besar, sungai sedang, anak sungai, kolam dan danau. Umumnya amfibi dijumpai pada malam hari atau pada musim penghujan.\n\n▶️ Sumber: <a href="https://www.youtube.com/@NGScience">@NGScience</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=YM9ZytyxYBU">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Foto habitat amfibi
  let url_foto = 'https://github.com/cakraawijaya/Kuroku-Bot/blob/master/Assets/IMG10.jpg';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'}) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Data akses
  let menu = 'kesehatan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;
  
  // Pesan
  let msg = '💊 Kesehatan\n\nKesehatan hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

  // Inline keyboard
  inline_Keyboard = [
    [button.text('🐟 Ikan', 'sehat_ikan'), button.text('🕊️ Burung', 'sehat_burung')],
    [button.text('🐇 Mamalia', 'sehat_mamalia'), button.text('🐊 Reptil', 'sehat_reptil')],
    [button.text('🐸 Amfibi', 'sehat_amfibi')]
  ];

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan ikan
bot.action('sehat_ikan', ctx => {
  // Data akses
  let menu = 'kesehatan ikan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n💊 Kesehatan: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas ikan, antara lain :\n\n\n<b>• Menyesuaikan jenis dan habitat</b>\n\nJenis ikan sangat beragam, misalnya ikan air tawar, ikan air asin, dan ikan air payau. Ikan air tawar adalah ikan yang hidup di air tawar seperti di sungai, rawa, kolam, dan danau. Sedangkan ikan air asin adalah ikan yang hidup di air laut. Kemudian ikan air payau adalah ikan yang hidup di air laut dan air tawar. Dalam hal ini, ketidaksesuaian habitat juga akan berpengaruh terhadap psikis ikan, bahkan pada kondisi terburuk dapat mengakibatkan kematian pada ikan. Oleh karena itu, anda harus mengetahui terlebih dahulu jenis ikan apa yang anda pelihara dan bagaimana habitatnya. Anda juga harus membatasi jumlah ikan dan meningkatkan harmonisasi ikan, agar jumlah ikan tidak melebihi kapasitas dan mencegah adanya perkelahian antar jenis ikan hias yang memang tidak dapat hidup berdampingan.\n\n\n<b>• Memilih media yang tepat</b>\n\nMedia ini sangat beragam, umumnya masyarakat lebih menyukai akuarium. Sebaiknya pilihlah ukuran media yang sesuai dengan kebutuhan ikan hias di rumah. Kemudian anda dapat menambahkan beberapa komponen yang menyerupai habitat alami ikan yang anda pelihara, misalnya tanaman air. Pastikan komponen tambahan yang anda pakai tidak terkontaminasi dengan zat kimia. Anda juga dapat menambahkan filter dan pompa agar sirkulasi air tetap terjaga. Media yang anda gunakan untuk merawat ikan pastikan berada pada lokasi dengan pencahayaan yang cukup.\n\n\n<b>• Memantau kondisi air</b>\n\nJenis air di rumah beberapa memiliki sifat asam yang berbeda. Penting untuk memastikan kadar pH yang tepat agar ikan dapat hidup dengan baik. Anda bisa membeli alat untuk menguji pH air. Ikan hias biasanya dapat hidup sehat dengan tingkat pH yang berada di antara 6,8 hingga 7,5. Kadar pH tersebut membuat ikan hias dapat hidup dengan nyaman sehingga terhindar dari berbagai gangguan kesehatan. Selain kadar pH, jangan lupa untuk memastikan suhu air berada di suhu normal. Ikan hias dapat hidup nyaman dengan suhu di antara 22 – 27 derajat Celcius. Lalu pastikan air yang anda gunakan tidak terkontaminasi dengan zat kimia.\n\n\n<b>• Memberikan pakan</b>\n\nSebaiknya cari tahu jenis pakan apa yang dikonsumsi oleh ikan hias anda. Berikan pakan sesuai dengan jenis ikan. Selain itu, hindari memberikan pakan ikan terlalu banyak. Kondisi ini membuat media yang dipakai untuk merawat ikan menjadi lebih cepat kotor dan dapat memicu berbagai penyakit pada ikan, salah satunya infeksi jamur dan bakteri. Jangan jadikan ukuran media sebagai acuan banyaknya pakan yang diberikan, namun pastikan sesuai dengan jumlah ikan yang ada.\n\n\n<b>• Memberikan treatment</b>\n\nPerawatan ini meliputi pembersihan komponen, pompa, filter; penggantian air; dan pemberian obat atau suplemen untuk ikan yang mengalami gejala tidak normal atau terindikasi sakit. Hal ini perlu dilakukan secara berkala dan menyesuaikan kondisi yang ada.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@KGTropicals">@KGTropicals</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=9IkwXIMFXMY">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});

// Kesehatan burung
bot.action('sehat_burung', ctx => {
  // Data akses
  let menu = 'kesehatan burung'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🕊️ Burung\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas burung, antara lain :\n\n\n<b>• Memberikan kandang yang baik</b>\n\nSediakan kandang dari material yang kuat dan pastikan memiliki ventilasi udara yang cukup. Kandang harus memiliki lebar minimal dua kali rentang sayap burung. Penting bagi beberapa spesies untuk bisa terbang dalam jarak pendek di dalam kandang agar ia tetap memiliki ruang atau habitat hidup yang sehat. Jangan pernah mengandangkan lebih dari satu ekor burung dalam kandang kecil. Burung membutuhkan ruang untuk menenangkan diri, mencari makan, terbang, dan menjauh dari burung lain; makin banyak burung yang anda ingin kandangkan, makin besar ukuran kandang yang harus digunakan. Usahakan memiliki kandang yang besar agar burung dapat leluasa terbang kemanapun ia mau. Meskipun kandang burung yang lebih besar biasanya lebih sulit dibersihkan dan lebih mahal, ukuran kandang menjadi aspek penting, terutama saat anda jarang berada di rumah atau tidak memiliki banyak waktu untuk mengeluarkan burung dari kandangnya dan bermain/berlatih. Kandang yang lebih kecil sering memicu masalah perilaku pada burung. Kemudian, jarak antar jeruji kandang tidak boleh terlalu kecil. Cakar burung dapat tersangkut jika kawat jeruji atau bilah kandang terlalu kecil. Di sisi lain, jarak antara bilah atau jeruji juga tidak boleh terlalu besar sehingga berisiko membuat kepala burung tertahan, atau burung peliharaan anda justru bisa menyelinap dan kabur. Lalu berikan pasir atau koran di bawah kandang untuk menyimpan kotoran burung.\n\n\n<b>• Memberikan makanan & suplemen</b>\n\nBurung membutuhkan makanan dan suplemen yang bergizi. Oleh karena itu, berikanlah beragam jenis makanan setiap hari untuk keperluan burung anda. Makanan sehat bagi sebagian besar spesies burung mencakup 75% pelet dan 25% makanan manusia. Pastikan burung anda makan secara berkala pada jam yang sama setiap hari. Pastikan jenis makanan sesuai dengan spesies burung yang anda pelihara. Pelet burung, remah-remah, atau nugget dapat menjadi bahan yang tepat untuk memastikan burung mendapatkan asupan nutrisi yang cukup. Biasanya, jenis makanan ini mencakup biji-bijian sehat, sayuran, buah-buahan, dan gandum agar burung bisa mendapatkan makanan bergizi seimbang. Selain itu, untuk menambah variasi makanan, anda perlu menyiapkan biji-bijian baru setiap hari. Berikanlah burung anda buah-buahan dan sayuran segar setiap 1-2 hari sekali. Selain itu, anda juga harus menyediakan wadah air dalam ukuran yang besar dan pendek karena burung sering kali kesulitan minum dari wadah yang terlalu tinggi. Lalu, isilah wadah itu setiap hari dengan air bersuhu sedang. Ganti air minumnya setiap hari untuk memastikan kesegaran air. Dehidrasi bisa terjadi dengan cepat pada burung (dalam 1-2 hari) jika ia tidak bisa mendapatkan air minum. Tempatkan wadah air di sisi yang berseberangan dari wadah makan burung anda. Dengan demikian, burung akan bergerak dan menjadi aktif saat ingin makan dan minum. Kemudian, wadah air dan wadah makanan harus diposisikan di tempat atau tenggeran yang lebih tinggi karena biasanya burung tidak sengaja menjatuhkan kotoran ke dalam makanan sehingga kebersihan makanan terganggu. Jika burung memakan sendiri kotorannya, ia akan sakit. Oleh sebab itu, maka anda harus rutin membersihkan wadah makan dan wadah minumnya setiap hari agar makanan dan minuman yang tersedia selalu segar dan bersih.\n\n\n<b>• Melakukan treatment</b>\n\nPerawatan ini meliputi pemeriksaan kesehatan burung; penyediaan fasilitas mandi, makan, dan minum; pembersihan kandang burung; pemberian obat; dan lain-lain.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@FlyingFids">@FlyingFids</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=IPG_Obzl2cw">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan mamalia
bot.action('sehat_mamalia', ctx => { 
  // Data akses
  let menu = 'kesehatan mamalia'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐇 Mamalia\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas mamalia, antara lain :\n\n\n<b>• Menyesuaikan jenis dan habitat</b>\n\nJika dilihat dari habitatnya, jenis mamalia terbagi menjadi 2 macam, yaitu mamalia darat dan mamalia air. Mamalia air umumnya dikelola oleh pemerintah melalui suaka margasatwa atau kebun binatang, sedangkan yang umum dipelihara oleh masyarakat adalah jenis mamalia darat. Contoh mamalia darat misalnya kelinci, kucing, anjing, hamster, dan landak mini. \n\n\n<b>• Memberikan kandang yang sesuai</b>\n\nSediakan kandang dari material yang kuat dan pastikan memiliki ventilasi udara yang cukup. Kandang sebaiknya berukuran lebih besar dari hewan yang anda pelihara, harapannya hewan dapat tidur dan beraktivitas dengan nyaman. Perhatikan kapasitas kandang jika ingin memelihara lebih dari 1 hewan. Kandang yang lebih kecil sering memicu masalah perilaku pada hewan kelas mamalia. Lalu berikan pasir atau koran untuk tempat menyimpan kotoran hewan.\n\n\n<b>• Memberikan pakan yang sehat</b>\n\nBelilah makanan dengan kualitas yang tinggi. Lalu, berikan makan secara teratur agar hewan tidak mengalami gangguan pencernaan. Untuk menentukan seberapa takaran pakan yang pas untuk diberikan selanjutnya, maka anda harus mengamati secara berkala terkait nafsu makan dari hewan peliharaan anda. Hewan peliharaan akan cepat bosan jika memakan makanan yang sama terus (monoton). Selain makanan, anda juga perlu menyediakan minuman yang cukup agar hewan peliharaan tidak mengalami dehidrasi. Hindari memberikan makanan yang bukan makanannya, misalnya anjing yang tidak boleh makan coklat. Pada dasarnya, coklat adalah makanan beracun bagi anjing. Anjing yang mengonsumsi coklat bisa keracunan dan gejalanya biasanya akan muncul dalam waktu 6 sampai 12 jam. Hal itu disebabkan karena coklat memiliki kandungan methylxanthines, yaitu kafein dan theobromine. Sebaiknya melakukan riset terlebih dahulu jika anda ingin memberikan makanan baru kepada hewan peliharaan anda.\n\n\n<b>• Mengajak bermain</b>\n\nHewan mamalia cukup senang diajak bermain karena pada dasarnya mamalia adalah makhluk yang sosial. Selain mengajak bermain, anda juga dapat mengajak hewan peliharaan anda untuk jalan-jalan keluar. Hal ini diperlukan agar hewan peliharaan anda tidak mudah stress.\n\n\n<b>• Memberikan treatment</b>\n\nPerawatan ini meliputi pembersihan kandang, wadah makanan, wadah minuman; pemberian makanan serta minuman; dan pemberian obat atau suplemen bagi hewan yang terindikasi sakit.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@BRIGHTSIDEOFFICIAL">@BRIGHTSIDEOFFICIAL</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=kUBIPULlKMk">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan reptil
bot.action('sehat_reptil', ctx => { 
  // Data akses
  let menu = 'kesehatan reptil'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐊 Reptil\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas reptil, antara lain :\n\n\n<b>• Menyediakan kandang yang aman</b>\n\nSetelah menentukan reptil apa yang akan dipelihara, anda perlu menyediakan kandang yang cocok dengan ukuran tubuh dan habitatnya. Reptil biasanya ditempatkan di vivarium yakni sebuah tempat buatan yang dibentuk sesuai dengan habitat asli hewan. Hewan reptil juga membutuhkan suhu yang hangat untuk membantunya dalam proses pencernaan makanan dan mengatur suhu tubuhnya. Jadi, anda perlu menambahkan lampu untuk menghangatkan tubuhnya sebagai ganti sinar matahari langsung. Selain itu, anda juga perlu membuatkan tempat berteduh bagi reptil agar dapat bersembunyi dan dapat menghilangkan kelebihan panas. Lalu, pastikan ada ruang kecil untuk reptil bernapas. Mengingat reptil cukup agresif, maka sebaiknya kandang diberi keamanan berlapis.\n\n\n<b>• Memberikan pakan sesuai jenis</b>\n\nReptil ini ada yang karnivora dan ada juga yang omnivora, sehingga anda harus menyesuaikan dulu antara pakan dan jenis reptil apa yang anda pelihara, pastikan cocok baru setelah itu berikanlah pakan. Misalnya, ular yang suka memakan tikus atau kura-kura yang suka memakan sayuran hijau segar seperti selada.\n\n\n<b>• Memberikan treatment</b>\n\nPerawatan ini meliputi pemeriksaan kesehatan rutin pada reptil; pemberian obat pada reptil; pembersihan kandang; dan lain-lain.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=VTyXeRS1hss&t=2s">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan amfibi
bot.action('sehat_amfibi', ctx => { 
  // Data akses
  let menu = 'kesehatan amfibi'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐸 Amfibi\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas amfibi, antara lain :\n\n\n<b>• Menentukan media yang tepat</b>\n\nDapatkan wadah plastik atau kaca. Wadah yang pendek dan lebar lebih baik daripada wadah yang tinggi dan sempit. Jangan menggunakan wadah yang berbahan dasar logam. Setelah menemukan wadah yang tepat, maka langkah anda selanjutnya yaitu menambahkan beberapa komponen penting seperti bebatuan, pasir, tanaman, serta air yang bersih. Kemudian sediakan juga sinar ultraungu jika diperlukan. Media yang anda gunakan pastikan telah dilengkapi dengan tutup yang rapat, hal ini untuk mencegah hewan amfibi melarikan diri. Kemudian pastikan kebutuhan udara pada hewan peliharaan anda tercukupi dengan baik. Anda dapat menambahkan aerator jika dibutuhkan. Selain itu, sediakan substrat yang cocok seperti serutan kayu atau serat kelapa yang dapat menyerap kelembaban dengan baik.\n\n\n<b>• Memberikan pakan yang sehat</b>\n\nKebutuhan pakan bagi hewan amfibi itu tergantung pada jenisnya, misalnya berudu yang lebih menyukai sari-sari makanan, sedangkan katak dan salamander lebih menyukai makanan hidup seperti serangga, cacing, ulat hongkong, dan lain-lain. Pemberian pelet bahkan suplemen pun dianjurkan oleh dokter, namun perlu diperhatikan juga aturannya agar dapat mencapai gizi yang seimbang. Jika pemberian pakan tidak mengikuti kaidah yang benar, maka hewan amfibi anda akan mengalami gangguan pencernaan bahkan di kasus tertentu dapat mengakibatkan kematian.\n\n\n<b>• Memantau suhu</b>\n\nDalam mempertahankan hidupnya, hewan ini akan terus mengikuti suhu yang ada di sekitar habitatnya, jika habitatnya panas maka suhu badannya juga panas dan begitu pula sebaliknya. Suhu ideal untuk merawat hewan amfibi berada pada kisaran 16 derajat Celsius hingga 24 derajat Celsius.\n\n\n<b>• Memberikan treatment</b>\n\nPerawatan ini meliputi pemberian obat; penggatian air; pembersihan wadah, dan lain-lain.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@monkeysee">@monkeysee</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=33wINBQS-I0">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});
