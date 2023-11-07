// Disini tempat untuk semua inisialisasi diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Token API
const token = '1322332711:AAEnv0oBO3ecSHQSJBmrkD2q0sKTCxTEz_0';

// Bot telegram
const bot = new lumpia.init(token);

// Chat id admin bot
const admin_bot = 'CHAT ID TELEGRAM ANDA';

// Username bot
const username_bot = 'kuroku_bot';

// Inline keyboard
let keyboard = [];
const button = lumpia.button;
const markup = lumpia.markup;

// Penunjukkan waktu
let date = new Date();
let tanggal = Utilities.formatDate(date, "Asia/Jakarta", "yyyy/MM/dd");
let waktu_lengkap = Utilities.formatDate(date, "Asia/Jakarta", "yyyy/MM/dd , HH:mm:ss");




// Disini tempat untuk semua fungsi diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Handle komunikasi via POST dari Telegram ke (webhook) GAS
function doPost(e) {
  bot.doPost(e);
}

// Bagian ini untuk mengatur WebHook
function setWebHook() {
  let url = 'WEB URL DEPLOY ANDA';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}




// Disini tempat untuk semua perintah dan fungsi pendukung diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Menu yang pertama kali muncul ketika bot dibuka
bot.start(ctx => {  
  
  // Menu
  let menu = 'start';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Ucapan selamat datang
  let msg = '📢 Selamat datang di <b>'+username_bot+'</b>. Bot ini dapat memberikan edukasi praktis terkait bagaimana cara merawat hewan peliharaan.\n\n👋 Hai <b>'+nama+'</b>...\n🚹 Username = @'+user;
  msg += '\n\nSilakan pilih menu dibawah ini ⬇️⬇️⬇️';

  // Opsi keyboard baris-1
  keyboard[0] = [
    button.text('🐈 Jenis', 'me_jenis'),
    button.text('🍗 Pakan', 'me_pakan')
  ];

  // Opsi keyboard baris-2
  keyboard[1] = [
    button.text('🌱 Habitat', 'me_habitat'),
    button.text('💊 Kesehatan', 'me_kesehatan')
  ];

  // Opsi keyboard baris-3
  keyboard[2] = [
    button.text('❓Status Bot', 'me_status')
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
})




// Aksi Bot Telegram pada Menu Utama
// <<<<<<<<<< ------------------------------------------------------------------------------ >>>>>>>>>>
// Respon jenis
bot.action('me_jenis', ctx => { 
  // Menu
  let menu = 'jenis';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🐈 Jenis Hewan\n\nJenis hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

  // Opsi keyboard baris-1
  keyboard[0] = [
    button.text('🐟 Ikan', 'sub_ikan'),
    button.text('🕊️ Burung', 'sub_burung')
  ];

  // Opsi keyboard baris-2
  keyboard[1] = [
    button.text('🐇 Mamalia', 'sub_mamalia'),
    button.text('🐊 Reptil', 'sub_reptil')
  ];

  // Opsi keyboard baris-3
  keyboard[2] = [
    button.text('🐸 Amfibi', 'sub_amfibi')
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon pakan
bot.action('me_pakan', ctx => { 
  // Menu
  let menu = 'pakan';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Pakan.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon habitat
bot.action('me_habitat', ctx => { 
  // Menu
  let menu = 'habitat';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Habitat.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Menu
  let menu = 'kesehatan';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Kesehatan.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon status
bot.action('me_status', ctx => ctx.answerCallbackQuery('Sistem sedang berjalan ['+tanggal+']'));


// Aksi Bot Telegram pada Sub Menu: Jenis
// <<<<<<<<<< ------------------------------------------------------------------------------ >>>>>>>>>>
// Respon ikan
bot.action('sub_ikan', ctx => { 
  // Menu
  let menu = 'jenis ikan';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🐟 Kelas Ikan (Pisces)\n\nHewan kelas ini seluruh anggota tubuhnya hidup di dalam air, baik itu di air tawar maupun air laut. Ikan hias merupakan hewan yang umum dipelihara oleh masyarakat di berbagai belahan dunia. Ikan hias diantaranya yaitu: ikan arwarna, ikan koi, ikan koki, ikan channa, ikan badut, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@hajatraJeT">@hajatraJeT</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=10RhIvoPLaw">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon burung
bot.action('sub_burung', ctx => { 
  // Menu
  let menu = 'jenis burung';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🕊️ Kelas Burung (Aves)\n\nHewan kelas ini seluruh anggota tubuhnya tertutup oleh bulu yang berasal dari epidermis. Selain itu, hewan kelas aves umumnya memiliki alat gerak berupa sayap untuk terbang. Contoh hewan kelas aves adalah burung Elang, burung Kakaktua, burung Kolibri, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=LYbXeEIugtk&t=8s">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon mamalia
bot.action('sub_mamalia', ctx => { 
  // Menu
  let menu = 'jenis mamalia';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🐇 Kelas Mamalia\n\nHewan kelas ini memiliki kelenjar susu pada hewan betinanya. Contoh hewan kelas mamalia adalah kucing, sapi, kambing, beruang, monyet, harimau, anjing, kanguru, gajah, kelinci, badak, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=fs9OoKv9Jts">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon reptil
bot.action('sub_reptil', ctx => { 
  // Menu
  let menu = 'jenis reptil';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🐊 Kelas Reptil\n\nHewan kelas ini bergerak dengan cara melata dan cenderung beradaptasi dengan kehidupan darat dan perairan. Contoh hewan kelas ini adalah kadal, tokek, buaya, kura-kura, ular, dan cecak.\n\n▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=vuQjs_ERFyU">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});

// Respon amfibi
bot.action('sub_amfibi', ctx => { 
  // Menu
  let menu = 'jenis amfibi';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Keterangan jenis
  let msg = '🐸 Kelas Amfibi\n\nHewan kelas ini dapat hidup di dua alam, yakni darat dan air tawar, tetapi tidak hidup di air laut. Contoh hewan vertebrata kelas amphibia adalah katak dan salamander.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=AKN0Z1rIcMo">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
});


// Aksi Bot Telegram pada Sub Menu: Pakan
// <<<<<<<<<< ------------------------------------------------------------------------------ >>>>>>>>>>
