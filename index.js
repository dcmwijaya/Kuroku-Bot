// Token API
const token = '1322332711:AAEnv0oBO3ecSHQSJBmrkD2q0sKTCxTEz_0';


// Bot telegram
const bot = new lumpia.init(token);


// Handle komunikasi via POST dari Telegram ke (webhook) GAS
function doPost(e) {
  bot.doPost(e);
}


// Bagian ini untuk mengatur WebHook
function setWebHook() {
  let url = 'WEB URL DEPLOY ANDA';
  let result = bot.tg.setWebhook(url);
  Logger.log(result);
}


// Mode production: OFF
lumpia.verbose = false;


// Chat id admin bot
const admin_bot = 'CHAT ID TELEGRAM ANDA';


// Username bot
const username_bot = 'kuroku_bot';


// Keyboard
const button = lumpia.button;
const markup = lumpia.markup;
let keyboard_start = [];
keyboard_start = [
  [button.text('🐈 Jenis', 'me_jenis'), button.text('🍗 Pakan', 'me_pakan')],
  [button.text('🌱 Habitat', 'me_habitat'), button.text('💊 Kesehatan', 'me_kesehatan')],
  [button.text('❓Status Bot', 'me_status')]
];
let keyboard_jenis = [];
keyboard_jenis = [
  [button.text('🐟 Ikan', 'sub_ikan'), button.text('🕊️ Burung', 'sub_burung')],
  [button.text('🐇 Mamalia', 'sub_mamalia'), button.text('🐊 Reptil', 'sub_reptil')],
  [button.text('🐸 Amfibi', 'sub_amfibi')]
];
let keyboard_back = [
  [button.text('↩️ Kembali', 'kembali')]
];


// Pewaktuan
let date = new Date();
let waktu_singkat = Utilities.formatDate(date, 'Asia/Jakarta', 'yyyy/MM/dd');
let waktu_lengkap = Utilities.formatDate(date, 'Asia/Jakarta', 'yyyy/MM/dd , HH:mm:ss');
