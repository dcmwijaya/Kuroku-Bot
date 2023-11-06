const token = 'API TOKEN BOT TELEGRAM ANDA';
const bot = new lumpia.init(token);

// handle komunikasi via POST dari Telegram ke (webhook) GAS
function doPost(e) {
  bot.doPost(e);
}

function setWebHook() {
  let url = 'WEB URL DEPLOY ANDA';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}