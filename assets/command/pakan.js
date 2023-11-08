// Respon pakan ikan
bot.action('me_pakan', (ctx, next) => {
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nPakan ikan terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing; ikan hidup; invertebrata akuatik, seperti daphnia atau artemia; larva serangga seperti bloodworm, jentik nyamuk, infusoria, rotifera, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet ikan. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/2459da6a-ae1d-41d4-a886-3faf001517e5';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'markdown'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan burung
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🕊️ Burung (Aves)\n------------------------------------------------------------\n\nPakan burung terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu biji-bijian, kroto (larva semut), jangkrik, ulat, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet burung. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/18e435c5-5db5-4cbe-86e9-d42bc12900ce';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'markdown'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan mamalia
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐇 Mamalia\n------------------------------------------------------------\n\nPakan mamalia terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu rerumputan, buah-buahan, dedaunan, biji-bijian, umbi-umbian, daging-dagingan, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kelinci, pelet anjing, pelet kucing, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/18c114cf-ff84-45d2-94c7-cfefe804c831';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'markdown'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan reptil
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐊 Reptil\n------------------------------------------------------------\n\nPakan reptil terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu tikus, serangga, siput, cacing, dedaunan, buah-buahan, biji-bijian, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kura-kura, pelet kadal, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/e97473f4-86d1-411c-9bed-d755289977a5';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'markdown'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan amfibi
bot.action('me_pakan', (ctx, next) => { 
  // Data akses
  let menu = 'pakan';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐸 Amfibi\n------------------------------------------------------------\n\nPakan amfibi terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing, ikan, belatung, ulat, lalat, jangkrik, kumbang, belalang, laba-laba, siput, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet salamander, pelet katak, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/bca8464d-ddda-47bb-a2c4-bd539b80515d';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'markdown'}) & ctx.tg.sendMessage(admin_bot, pvmsg);
});