[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Bot-Telegram-Berbasis-JavaScript
<strong>Tugas Pemrograman Website UPN Veteran Jatim</strong><br>
ChatBot berbasis Telegram ini dibangun melalui platform ``` Google App Scripts ```. Bahasa pemrograman dalam pengembangan sistem ini menggunakan ``` Javascript ```.

<br>

## Fitur / Kerangka Kerja / Peralatan
| Bagian | Deskripsi |
| --- | --- |
| Fitur | Keyboard Balasan, Keyboard Sebaris, Pengendalian Masalah, Aktivitas Catatan Pengguna, Pesan Markdown |
| Platform | Google Apps Script |
| Kerangka Kerja | Lumpia.js |
| Kode | JavaScript |

<br>

## Kemampuan Bot
1. Terdapat pilihan menu yang dapat diakses dengan mengklik atau mengetik.

2. Kemampuan lain dari bot ini adalah dapat memberikan notifikasi kepada pemilik bot bahwa ada seseorang yang mengakses menu tertentu, sehingga pemilik bot dapat memantau pergerakan yang terjadi secara langsung.

3. Terdapat kontrol masalah dalam sistem, jika pesan tidak sesuai dengan perintah, maka akan dialihkan ke perintah ``` /help ```.

<br>

## Menjalankan
1. Unduh repositori ini.

2. Buat proyek baru terlebih dahulu di platform: ``` Google apps script ```.
  
3. Tambahan ``` file baru ``` pada platform ``` Google apps script ``` dengan nama ``` index ``` -> Simpan.
  
4. Buka direktori ``` Bot-Telegram-Berbasis-JavaScript ``` lalu ekstrak -> buka file ``` index.js ``` -> Salin & tempelkan seluruh isinya ke ``` index.gs ``` yang ada pada platform ``` Google apps script ```.

5. Masukkan ``` ID Pustaka ``` di bagian ``` Library ``` :
   ```bash
   1Yo6vQRwjG5Gl9jeEF0g2tBTUa0XN5MyT4G_HeDpRr9DvabxhRcSdhPNj
   ```

6. Tambahkan ``` pustaka tersebut ``` -> Selalu pilih ``` versi pustaka yang tertinggi ``` -> Simpan.
  
7. Tempelkan ``` Api bot token telegram ``` yang telah anda peroleh dari ``` @BotFather ``` seperti berikut ini :
   ```bash
   // Token API
   const token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

8. Klik ``` Terapkan ``` -> ``` Deployment baru ``` -> Pilih jenis: ``` Aplikasi Web ```.
   
9. Isi ``` Deskripsi ``` -> Pada bagian ``` Akses ```, silahkan pilih bagian: ``` siapa saja dapat mengakses ``` -> Terapkan.
   
10. Meninjau izin -> Pilih ``` email anda ``` -> Lanjutkan -> Buka ``` proyek bot anda (tidak aman) ``` -> Izinkan.

11. Salin ``` link web app URL ``` -> Tempelkan link tersebut pada bagian ``` let url ``` yang ada di ``` index.gs ``` seperti berikut :

    ```bash
    let url = 'https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec';
    ```

12. Pastikan fungsi yang sedang dijalankan adalah ``` setWebHook ``` -> Klik ``` Jalankan ```.

    Akan dianggap berhasil jika ``` log eksekusi ``` bertuliskan: ``` Info {ok=true, description=Webhook is already set, result=true} ```.
   
13. Selamat menikmati [Selesai].

<br>

## Pengingat
• Perhatikan penulisan sintaks yang baik dan benar dalam JavaScript karena hal ini sangat mempengaruhi bot yang dikembangkan.

• Pastikan PC/Laptop Anda terhubung ke internet.

• Jika Anda menemukan bahwa proyek tidak bekerja seperti yang Anda harapkan, maka ada dua kemungkinan: kesalahan ada pada ``` sintaks ``` atau kesalahan ada pada ``` library yang sudah kadaluarsa ```, sehingga hal ini dapat menyebabkan Anda harus mencari jalan keluar lain.

<br>

## Sorotan
<table>
<tr>
<th colspan="4">Tampilan Interaksi Bot Telegram</th>
</tr>
<tr>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/f1ba7113-1319-40ed-a5ac-360316ff5522" alt="bot-1"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/67976fe8-537e-4a21-a044-00a2fb5669c7" alt="bot-2"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/516885d1-8040-41aa-9e9f-63e866b51115" alt="bot-3"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/56b20c68-ec64-4cf6-8224-97af59d7baae" alt="bot-4"></td>
</tr>
<tr>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/daf9ef2b-6959-4690-b89e-2d2bd29cbf30" alt="bot-5"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/a2af08fa-c09c-4b77-8ee7-fa04fa8c5cc8" alt="bot-6"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/82bd3528-9c1d-433f-9f6a-eec2d17a0eb7" alt="bot-7"></td>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/cc473ae4-8bc1-43c7-a40c-eaabda45569e" alt="bot-8"></td>
</tr>
<tr>
<td width="210"><img src="https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/1f3c90dc-eb2d-496a-9f04-4fe6b1314cc6" alt="bot-9"></td>
<td width="210"><img src="" alt="bot-10"></td>
<td width="210"><img src="" alt="bot-11"></td>
<td width="210"><img src="" alt="bot-12"></td>
</tr>
<tr>
<td width="210"><img src="" alt="bot-13"></td>
<td width="210"><img src="" alt="bot-14"></td>
<td width="210"><img src="" alt="bot-15"></td>
<td width="210"><img src="" alt="bot-16"></td>
</tr>
</table>

<br>

## Demonstrasi Aplikasi
Via Telegram: <a href="http://t.me/kuroku_bot">@kuroku_bot</a>

<br>

## Penafian
Aplikasi ini dibuat dengan menyertakan sumber-sumber dari pihak ketiga. Pihak ketiga di sini adalah penyedia layanan, yang layanannya berupa pustaka, kerangka kerja, dan lain-lain. Saya ucapkan terima kasih banyak atas layanannya. Telah terbukti sangat membantu dan dapat diimplementasikan.

<br>

## LISENSI
LISENSI MIT - Hak Cipta (c) 2020 - Devan Cakra Mudra Wijaya

Dengan ini diberikan izin tanpa biaya kepada siapa pun yang mendapatkan salinan perangkat lunak ini dan file dokumentasi terkait perangkat lunak untuk menggunakannya tanpa batasan, termasuk namun tidak terbatas pada hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat Lunak ini, dan mengizinkan orang yang menerima Perangkat Lunak ini untuk dilengkapi dengan persyaratan berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus menyertai semua salinan atau bagian penting dari Perangkat Lunak.

DALAM HAL APAPUN, PENULIS ATAU PEMEGANG HAK CIPTA DI SINI TETAP MEMILIKI HAK KEPEMILIKAN PENUH. PERANGKAT LUNAK INI DISEDIAKAN SEBAGAIMANA ADANYA, TANPA JAMINAN APAPUN, BAIK TERSURAT MAUPUN TERSIRAT, OLEH KARENA ITU JIKA TERJADI KERUSAKAN, KEHILANGAN, ATAU LAINNYA YANG TIMBUL DARI PENGGUNAAN ATAU URUSAN LAIN DALAM PERANGKAT LUNAK INI, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB, KARENA PENGGUNAAN PERANGKAT LUNAK INI TIDAK DIPAKSAKAN SAMA SEKALI, SEHINGGA RISIKO ADALAH MILIK ANDA SENDIRI.
