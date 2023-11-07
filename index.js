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
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu;

  // Ucapan selamat datang
  let msg = '📢 Selamat datang di 🐶'+username_bot+'. Bot ini dapat memberikan edukasi praktis terkait bagaimana cara merawat hewan peliharaan.\n\n👋 Hai '+nama+'...\n🚹 Username = @'+user;
  msg += '\n\nSilakan pilih menu dibawah ini..';

  // Opsi keyboard baris-1
  keyboard[0] = [
    button.url('🐈Jenis', 'me_jenis'),
    button.url('🍗Pakan', 'me_pakan')
  ];

  // Opsi keyboard baris-2
  keyboard[1] = [
    button.url('🌱Habitat', 'me_habitat'),
    button.url('💊Kesehatan', 'me_kesehatan')
  ];

  // Opsi keyboard baris-3
  keyboard[2] = [
    button.text('❓Bantuan', 'me_bantuan')
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
})

// Aksi Bot Telegram pada Menu Utama
bot.action('me_jenis', ctx => ctx.replyWithHTML('Ini balasan menu Jenis.'));
bot.action('me_pakan', ctx => ctx.replyWithHTML('Ini balasan menu Pakan.'));
bot.action('me_habitat', ctx => ctx.replyWithHTML('Ini balasan menu Habitat.'));
bot.action('me_kesehatan', ctx => ctx.replyWithHTML('Ini balasan menu Kesehatan.'));
bot.action('me_bantuan', ctx => ctx.replyWithHTML('Menu yang tersedia di bot saat ini ada 5 yaitu: 1.Jenis, 2.Pakan, 3.Habitat, 4.Kesehatan, 5.Bantuan.'));
