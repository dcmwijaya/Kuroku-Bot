// Respon habitat ikan
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '--------------------------------------------------------------\n🌱 Habitat: 🐟 Ikan (Pisces)\n--------------------------------------------------------------\n\nIkan dapat ditemukan hampir di semua perairan yang berukuran besar baik air tawar, air payau, maupun air asin (laut). Pada habitat aslinya, ikan dapat hidup bervariasi, mulai dari yang dekat permukaan hingga beberapa ribu meter di bawah permukaan.';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg);

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat burung
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '--------------------------------------------------------------\n🌱 Habitat: 🕊️ Burung (Aves)\n--------------------------------------------------------------\n\nHabitat burung terbentang mulai dari tepi pantai hingga ke puncak gunung. Burung yang memiliki habitat khusus di tepi pantai tidak dapat hidup di pegunungan dan sebaliknya. Namun ada pula spesies burung-burung umum yang dapat dijumpai di beberapa habitat.';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg);

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat mamalia
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '--------------------------------------------------------------\n🌱 Habitat: 🐇 Mamalia\n--------------------------------------------------------------\n\nMamalia hidup pada habitat yang berbeda dan tersebar luas baik di gurun, Arktik, lautan, hutan, gunung, tundra, padang rumput, dan sabana. Mamalia pun lazim dibandingkan dengan reptil dan amfibi karena habitatnya tersebut.';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg);

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat reptil
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '--------------------------------------------------------------\n🌱 Habitat: 🐊 Reptil\n--------------------------------------------------------------\n\nKeberadaan reptil bisa ditemukan hampir di seluruh bagian dunia, kecuali benua Antartika. Reptil hidup di daratan, daerah perairan, atau bisa juga keduanya. Karena itu, persebaran reptil bisa ditemukan di berbagai tempat yang umum dikunjungi ataupun tidak bisa dikunjung manusia.';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg);

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat amfibi
bot.action('me_habitat', ctx => { 
  // Data akses
  let menu = 'habitat';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '--------------------------------------------------------------\n🌱 Habitat: 🐸 Amfibi\n--------------------------------------------------------------\n\nHabitat utama amfibi adalah hutan primer, hutan sekunder, hutan rawa, sungai besar, sungai sedang, anak sungai, kolam dan danau. Umumnya amfibi dijumpai pada malam hari atau pada musim penghujan.';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg);
});