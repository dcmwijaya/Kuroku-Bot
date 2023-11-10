// Menu Utama
bot.on('message', ctx => {
  const cmd = ctx.message.text;
  if (cmd === '/start' || cmd === '↩️ Menu Utama') {
    // Data akses
    let menu = 'start';
    let user_id = ctx.from.id;
    let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
    let user = ctx.from.username; 

    // Notifikasi pengakses
    let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
    pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';
    
    // Pesan
    let msg = '📢 Selamat datang di <b>'+username_bot+'</b>. Bot ini dapat memberikan edukasi praktis terkait bagaimana cara merawat hewan peliharaan.\n\n👋 Hai <b>'+name+'</b>...\n🚹 Username = @'+user;
    msg += '\n\nSilakan pilih menu dibawah ini ⬇️⬇️⬇️';

    // Inline keyboard
    inline_Keyboard = [
      [button.text('🐈 Jenis', 'me_jenis'), button.text('🍗 Pakan', 'me_pakan')],
      [button.text('🌱 Habitat', 'me_habitat'), button.text('💊 Kesehatan', 'me_kesehatan')],
      [button.text('❓Status Bot', 'me_status')]
    ];

    // Output yang dikirim oleh bot
    ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) & ctx.tg.sendMessage(admin_bot, pvmsg);
  } 
  else if (cmd === '↩️ Menu Jenis') {
    // Data akses
    let menu = 'jenis';
    let user_id = ctx.from.id;
    let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
    let user = ctx.from.username; 

    // Notifikasi pengakses
    let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
    pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';
    
    // Pesan
    let msg = '🐈 Jenis Hewan\n\nJenis hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

    // Inline keyboard
    inline_Keyboard = [
      [button.text('🐟 Ikan', 'sub_ikan'), button.text('🕊️ Burung', 'sub_burung')],
      [button.text('🐇 Mamalia', 'sub_mamalia'), button.text('🐊 Reptil', 'sub_reptil')],
      [button.text('🐸 Amfibi', 'sub_amfibi')]
    ];

    // Custom keyboard
    custom_Keyboard = [
      ['↩️ Menu Utama']
    ];

    // Output yang dikirim oleh bot
    ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) 
    & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
    }
  else {
    ctx.replyWithHTML('⛔ Menu yang anda pilih tidak tersedia, harap periksa kembali..');
  }
});


// Respon status
bot.action('me_status', ctx => ctx.answerCallbackQuery('Sistem sedang berjalan ['+waktu_singkat+']'));
