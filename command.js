// Disini tempat semua command diletakkan

// Inisiasi inline keyboard
const button = lumpia.button;
const markup = lumpia.markup;
const helper = lumpia.helper;

// Mulai dengan keyboard inline
bot.start(ctx => {  
  // Menu
  let menu = "start";

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let admin_id = ctx.message_id; admin_id = "1000064401";
  let pvmsg = "⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : "+ctx.from.id+"\n👤 Nama : "+nama;
  pvmsg += "\n🚹 Username : @"+user+"\n📁 Akses menu : "+menu;

  // Ucapan selamat datang
  let msg = "📢 Selamat datang di BOT KUROKU.\n\n👋 Hai "+nama+"...\n🚹 Username = @"+user;
  msg += "\n🆔 ID = <code>"+ctx.from.id+"</code>";
  msg += "\n\nSilakan pilih menu dibawah ini..";

  // Menu keyboard inline
  let keyboard = [];

  // Baris pertama
  // Diawali dengan index 0
  keyboard[0] = [
    button.url('🎓 Scholar', 'https://bit.ly/GSDevan'),
    button.url('🤖 @KUROKU', 'https://t.me/KUROKU_bot')
  ];

  keyboard[1] = [
    button.text('👻 Halo Human?', 'me_halo'),
    button.text('😸 Apa Kabar?', 'me_kabar')
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{
    reply_markup: markup.inlineKeyboard(keyboard)
  }) & bot.telegram.sendMessage(admin_id, pvmsg);
})

// Callback action dari inline keyboard
bot.action('me_halo', ctx => ctx.reply('ya, saya.'));
bot.action('me_kabar', ctx => ctx.answerCallbackQuery('Semangat ya!'));

// Banyak jenis kata tapi 1 respon
bot.hears(['hai','hi','hallo','hei','hello'], ctx => ctx.reply('Hai Juga!'));

// Deteksi kata dengan regex
bot.hears(/ass?alamu'ala[yi]+ku+m/i, ctx => ctx.replyIt("wa'alaikumussalam"));