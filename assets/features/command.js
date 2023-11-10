// Bagian yang menangani keseluruhan menu
bot.on('message', ctx => {
  // Data akses
  let user_id = ctx.from.id; let user = ctx.from.username;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  
  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name+'\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap;

  // Command text
  let cmd = ctx.message.text;

  // Menu start
  if (cmd === '/start' || cmd === '↩️ Menu Utama') {    
    // Keterangan menu
    let menu = 'start'; pvmsg += '\n📁 Akses menu : '+menu;

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
  else if (cmd === '↩️ Menu Jenis') { // Menu jenis
    // Keterangan menu
    let menu = 'jenis'; pvmsg += '\n📁 Akses menu : '+menu;

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
  }
  else if (cmd === '↩️ Menu Kesehatan') { // Menu kesehatan
    // Keterangan menu
    let menu = 'kesehatan'; pvmsg += '\n📁 Akses menu : '+menu;

    // Pesan
    let msg = '🐈 Jenis Hewan\n\nJenis hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

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
  }
  else { // Control handling menu
    ctx.replyWithHTML('⛔ Menu yang anda pilih tidak tersedia, harap periksa kembali..');
  }
});