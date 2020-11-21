// Token Bot Telegram
var token = 'MASUKKAN_TOKEN_ANDA';

// Objek baru -> tg
var tg = new telegram.daftar(token);

// Fungsi buat handle hanya menerima pesan berupa POST, kalau GET keluarkan pesan error
function doGet(e) {
  return HtmlService.createHtmlOutput("Hanya data POST yang kita proses yak!");
}

// Fungsi buat handle pesan POST
function doPost(e) {

  // Memastikan pesan yang diterima hanya dalam format JSON  
  if(e.postData.type == "application/json") {
    
    // Kita parsing data yang masuk
    var update = JSON.parse(e.postData.contents);
    
    // Jika data pesan update valid, kita proses
    if (update) {
      prosesPesan(update);
    }
  } 
}

// Fungsi utama kita buat handle segala pesan
function prosesPesan(update) {
  
  // Deteksi klo ada pesan dari user
  if (update.message) { 

    // Penyederhanaan variable
    var msg = update.message;
  
    // Jika ada pesan berupa text
    if (msg.text) {

      // Setting menu
      let menu = msg.text;
      
      // Setting waktu
      let d = new Date(); 
      let timeStamp = d.getTime();
      
      // Setting nama & username
      let nama = msg.from.first_name;
      let user = msg.from.username;
      if (msg.from.last_name) { 
        nama += " " + msg.from.last_name;
      }
      
      // Notifikasi pengakses
      msg.message_id = "ID_PEMILIK_BOT";
      let chat = "⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : <code>"+msg.from.id+" </code>"+"\n👤 Nama : "+nama;
      chat += "\n🚹 Username : @"+user+"\n📁 Akses menu : "+menu+"\n⏰ Date : <code>"+timeConverter(msg.date, true)+" </code>";
      
      // Menu
      let keyboard = [ 
        ['📬 TestBot', '♻️ About'],
        ['⏰ Time']
      ]
      
      // Pesan saat klik Start
      if ( menu == /^\/start$/i.exec(msg.text) ){
        let pesan = "📢 Selamat datang di BOT KUROKU.\n\n👋 Hai "+nama+"...\n🚹 Username = @"+user;
        pesan += "\n🆔 ID = <code>"+msg.from.id+"</code>";
        pesan += "\n\nSilakan pilih menu dibawah ini..";
               
        //Call function
        return sendMsgKeyboard(msg.chat.id, pesan, keyboard) & tg.kirimPesan(msg.message_id, chat, 'HTML');
      }
      
      // TestBot
      if ( menu == /^📬 TestBot$/i.exec(msg.text) || menu == /^\/testbot$/i.exec(msg.text) ){
        let pesan = "Status bot aktif!"
        return sendMsgKeyboard(msg.chat.id, pesan, keyboard) & tg.kirimPesan(msg.message_id, chat, 'HTML');
      }
      
      // Fungsi Menu  
      if ( menu == /^⏰ Time$/i.exec(msg.text) || menu == /^\/time$/i.exec(msg.text) ){
        let pesan = "\n\nWaktu saat ini :\n<code>";
        pesan += timeConverter(timeStamp) + '</code>';
        return sendMsgKeyboard(msg.chat.id, pesan, keyboard) & tg.kirimPesan(msg.message_id, chat, 'HTML');
      }
       
      if ( menu == /^♻️ About$/i.exec(msg.text) || menu == /^\/about$/i.exec(msg.text) ){
        let pesan = "🤖 Bot ini dibuat oleh <a href='https://t.me/USERNAME_TELEGRAM'>NAMA_ANDA</a>\nSebagai Pemenuhan Tugas Mata Kuliah Pemrograman Web Pararel B";
        let pesan_lanjutan = "Selain anda dapat klik menu, anda juga dapat menggantikan perintah klik dengan :\n1. Start = /start\n2. TestBot = /testbot\n3. Time = /time\n4. About = /about";
      
        let inkeyboard = 
          [
            [ 
              { "text": "✅ Whatsapp", "url": "URL_WHATSAPP_ANDA" }, 
              { "text": "✅ Instagram", "url": "URL_INSTAGRAM_ANDA" }
            ],
            [
              { "text": "🌐 Web Profile", "url": "URL_WEBSITE_ANDA" }, 
            ]
          ];
      
        return sendMsgKeyboardInline(msg.chat.id, pesan, inkeyboard) & sendMsgKeyboard(msg.chat.id, pesan_lanjutan, keyboard) & tg.kirimPesan(msg.message_id, chat, 'HTML');
      }
      
  // Akhir deteksi pesan text
  }
            
 }

}



// Membuat fungsi kirim keyboard
function sendMsgKeyboard(chatid, pesan, keyboard) {
  let data = {
        chat_id : chatid,
        text: pesan,
        parse_mode : 'HTML',
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: keyboard
        }
      }
 let r = tg.request('sendMessage', data);
 return r;  
}

// fungsi untuk mengirim pesan dengan keyboard inline
function sendMsgKeyboardInline(chatid, pesan, keyboard) {
  let data = {
        chat_id : chatid,
        text: pesan,
        parse_mode : 'HTML',
        reply_markup: {
            inline_keyboard: keyboard
        }
      }
 let r = tg.request('sendMessage', data);
 return r;  
}

// Fungsi timeConverter, untuk merubah timestamp ke waktu yang bisa dibaca manusia
// Kadang perlu di x1000 dari timestamp biasa (timestampnya telegram)

// Jika timeConverter(UNIX_timestamp) berarti timestamp biasa yang akan di x1000
// Jika timeConverter(UNIX_timestamp, true) berarti akan dikali ribuan 

function timeConverter(UNIX_timestamp, ribuan){
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }
 
  // Buat index bulan
  var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

  // Ambil pecahan waktu masing-masing
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  // Gabungkan ke dalam variable time
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


// Isi dengan web App URL yang di dapat saat deploy
var webAppUrl = "URL_WEB_DEPLOY_GOOGLE_SCRIPT_APPS";

function setWebHook() {
  var result = tg.request('setWebhook', {
    url: webAppUrl
  });
  Logger.log(result);
}
