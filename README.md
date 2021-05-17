[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Bot-Telegram-JS-Sederhana
Bot ini dibangun dengan Google App Scripts yang menggunakan bahasa pemrograman Javascript

<br>
<br>

## Dokumentasi
<img src="https://user-images.githubusercontent.com/54527592/100519999-0ad9c500-31ce-11eb-84f6-8d5450464a8b.jpg" />

<br>
<br>

## Tools / Framework / Other
| Bagian | Tools yang digunakan |
| --- | --- |
| Vendor | Google Apps Script |
| Language | Javascript |

<br>
<br>

## Kemampuan Bot
1. Dapat memberikan notifikasi kepada pemilik bot terkait aktivitas pengakses bot.
2. Terdapat pilihan menu inline keyboard dan custom keyboard.
3. Dapat menyapa user.

<br>
<br>

## Langkah2 Pembuatan Bot
1. Fork / Download repositori ini.
2. Buka telegram anda -> @BotFather -> ketik "/newbot" -> isikan nama bot anda (terserah anda/bebas) -> isikan username bot anda (terserah anda/bebas)_bot.
3. Buat project di Google apps script -> copas seluruh isi file index.gs yang telah didownload dari repositori ini -> save project -> beri nama project.
4. Masukkan ID Pustaka :

```bash
MHczUHrzvBLV1HsUn5XkOIfvg_do21SJR
```

5. Add -> Pilih versi tertinggi, saat ditulis ini sudah versi 9. Mungkin ke depan akan nambah lagi versinya, karena ada update -> Save.
6. Masukkan api telegram bot anda. Contohnya sebagai berikut :

```bash
// masukkan token bot mu di sini
var token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
```

7. Publikasikan -> Terapkan sebagai aplikasi web.
8. Pastikan project version new, lalu untuk Exucute the app as pilih sesuai email anda, kemudian Who has access to the app pilih Anyone, even anonymous.
9. Setelah itu pilih Review permissions -> pilih email anda -> lanjutkan -> buka bot project anda (tidak aman) -> izinkan.
10. Copy link web app URL -> Pastekan link tersebut pada function Web app url. Contohnya sebagai berikut :

```bash
// Isi dengan web App URL yang di dapat saat deploy
var webAppUrl = "https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec";

function setWebHook() {
  var result = tg.request('setWebhook', {
    url: webAppUrl
  });
  Logger.log(result);
}
```

11. Selanjutnya pilih fungsi setWebhook -> klik icon Run -> Berhasil (jika status bot menjadi "Webhook is already set").
12. Selesai! Silahkan dicoba ^^

<br>
<br>

## Catatan
- Perhatikan cara penulisan sintaks javascript yang baik dan benar karena sangat berpengaruh pada saat pengembangan bot.
- Pastikan PC/Laptop anda telah terkoneksi dengan internet
