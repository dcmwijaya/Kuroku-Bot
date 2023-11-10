// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Data akses
  let menu = 'kesehatan';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

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
bot.action('sehat_ikan', ctx => ctx.replyWithHTML('⚠️ Sistem sedang dalam perbaikan...'));


// Kesehatan burung
bot.action('sehat_burung', ctx => ctx.replyWithHTML('⚠️ Sistem sedang dalam perbaikan...'));


// Kesehatan mamalia
bot.action('sehat_mamalia', ctx => ctx.replyWithHTML('⚠️ Sistem sedang dalam perbaikan...'));


// Kesehatan reptil
bot.action('sehat_reptil', ctx => ctx.replyWithHTML('⚠️ Sistem sedang dalam perbaikan...'));


// Kesehatan amfibi
bot.action('sehat_amfibi', ctx => ctx.replyWithHTML('⚠️ Sistem sedang dalam perbaikan...'));