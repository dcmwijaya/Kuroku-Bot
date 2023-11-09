// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Data akses
  let menu = 'kesehatan';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML('<b>Catatan:</b> Dalam proses perbaikan...') & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});
