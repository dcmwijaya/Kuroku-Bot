// Menu jenis
bot.command(/🐈 Jenis/i, ctx => { 
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

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard_jenis) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon jenis
bot.action('me_jenis', ctx => { 
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

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard_jenis) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});
  

// Menu ikan
bot.command(/🐟 Ikan/i, ctx => { 
  // Data akses
  let menu = 'jenis ikan';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐟 Kelas Ikan (Pisces)\n\nHewan kelas ini seluruh anggota tubuhnya hidup di dalam air, baik itu di air tawar maupun air laut. Ikan hias merupakan hewan yang umum dipelihara oleh masyarakat di berbagai belahan dunia. Ikan hias diantaranya yaitu: ikan arwarna, ikan koi, ikan koki, ikan channa, ikan badut, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@hajatraJeT">@hajatraJeT</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=10RhIvoPLaw">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon ikan
bot.action('sub_ikan', ctx => { 
  // Data akses
  let menu = 'jenis ikan';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐟 Kelas Ikan (Pisces)\n\nHewan kelas ini seluruh anggota tubuhnya hidup di dalam air, baik itu di air tawar maupun air laut. Ikan hias merupakan hewan yang umum dipelihara oleh masyarakat di berbagai belahan dunia. Ikan hias diantaranya yaitu: ikan arwarna, ikan koi, ikan koki, ikan channa, ikan badut, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@hajatraJeT">@hajatraJeT</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=10RhIvoPLaw">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Menu burung
bot.command(/🕊️ Burung/i, ctx => { 
  // Data akses
  let menu = 'jenis burung';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🕊️ Kelas Burung (Aves)\n\nHewan kelas ini seluruh anggota tubuhnya tertutup oleh bulu yang berasal dari epidermis. Selain itu, hewan kelas aves umumnya memiliki alat gerak berupa sayap untuk terbang. Contoh hewan kelas aves adalah burung Elang, burung Kakaktua, burung Kolibri, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=LYbXeEIugtk&t=8s">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon burung
bot.action('sub_burung', ctx => { 
  // Data akses
  let menu = 'jenis burung';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🕊️ Kelas Burung (Aves)\n\nHewan kelas ini seluruh anggota tubuhnya tertutup oleh bulu yang berasal dari epidermis. Selain itu, hewan kelas aves umumnya memiliki alat gerak berupa sayap untuk terbang. Contoh hewan kelas aves adalah burung Elang, burung Kakaktua, burung Kolibri, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=LYbXeEIugtk&t=8s">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Menu mamalia
bot.command(/🐇 Mamalia/i, ctx => { 
  // Data akses
  let menu = 'jenis mamalia';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐇 Kelas Mamalia\n\nHewan kelas ini memiliki kelenjar susu pada hewan betinanya. Contoh hewan kelas mamalia adalah kucing, sapi, kambing, beruang, monyet, harimau, anjing, kanguru, gajah, kelinci, badak, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=fs9OoKv9Jts">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon mamalia
bot.action('sub_mamalia', ctx => { 
  // Data akses
  let menu = 'jenis mamalia';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐇 Kelas Mamalia\n\nHewan kelas ini memiliki kelenjar susu pada hewan betinanya. Contoh hewan kelas mamalia adalah kucing, sapi, kambing, beruang, monyet, harimau, anjing, kanguru, gajah, kelinci, badak, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=fs9OoKv9Jts">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Menu reptil
bot.command(/🐊 Reptil/i, ctx => { 
  // Data akses
  let menu = 'jenis reptil';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐊 Kelas Reptil\n\nHewan kelas ini bergerak dengan cara melata dan cenderung beradaptasi dengan kehidupan darat dan perairan. Contoh hewan kelas ini adalah kadal, tokek, buaya, kura-kura, ular, dan cecak.\n\n▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=vuQjs_ERFyU">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon reptil
bot.action('sub_reptil', ctx => { 
  // Data akses
  let menu = 'jenis reptil';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐊 Kelas Reptil\n\nHewan kelas ini bergerak dengan cara melata dan cenderung beradaptasi dengan kehidupan darat dan perairan. Contoh hewan kelas ini adalah kadal, tokek, buaya, kura-kura, ular, dan cecak.\n\n▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=vuQjs_ERFyU">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Menu amfibi
bot.command(/🐸 Amfibi/i, ctx => { 
  // Data akses
  let menu = 'jenis amfibi';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐸 Kelas Amfibi\n\nHewan kelas ini dapat hidup di dua alam, yakni darat dan air tawar, tetapi tidak hidup di air laut. Contoh hewan vertebrata kelas amphibia adalah katak dan salamander.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=AKN0Z1rIcMo">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});


// Respon amfibi
bot.action('sub_amfibi', ctx => { 
  // Data akses
  let menu = 'jenis amfibi';
  let user_id = ctx.from.id;
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }
  let user = ctx.from.username; 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+'\n⏰ Date : '+waktu_lengkap+'.';

  // Pesan
  let msg = '🐸 Kelas Amfibi\n\nHewan kelas ini dapat hidup di dua alam, yakni darat dan air tawar, tetapi tidak hidup di air laut. Contoh hewan vertebrata kelas amphibia adalah katak dan salamander.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=AKN0Z1rIcMo">Klik Disini</a></strong>';

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(keyboard_back).resize() });
});
