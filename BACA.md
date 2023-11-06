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
| Fitur | Keyboard Balasan, Keyboard Sebaris, Pengendalian Masalah, Aktivitas Catatan Pengguna |
| Platform | Google Apps Script |
| Kerangka Kerja | Lumpia |
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
   // Masukkan token bot mu di sini
   var token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

8. Klik ``` Terapkan ``` -> ``` Deployment baru ``` -> Pilih jenis: ``` Aplikasi Web ```.
   
9. Isi ``` Deskripsi ``` -> Pada bagian ``` Akses ```, silahkan pilih bagian: ``` siapa saja dapat mengakses ``` -> Terapkan.
   
10. Meninjau izin -> Pilih ``` email anda ``` -> Lanjutkan -> Buka ``` proyek bot anda (tidak aman) ``` -> Izinkan.

11. Salin ``` link web app URL ``` -> Tempelkan link tersebut pada bagian ``` var webAppUrl ``` yang ada di ``` Code.gs ``` seperti berikut :

    ```bash
    // Isi dengan web App URL yang di dapat saat deploy
    var webAppUrl = "https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec";
    ```

12. Klik ``` Jalankan ```.

    Akan dianggap berhasil jika ``` log eksekusi ``` bertuliskan: ``` Info {"ok":true, "result":true, "description":"Webhook was set"} ```.
   
13. Selamat menikmati [Selesai].

<br>

## Pengingat
• Perhatikan penulisan sintaks yang baik dan benar dalam JavaScript karena hal ini sangat mempengaruhi bot yang dikembangkan.

• Pastikan PC/Laptop Anda terhubung ke internet.

• Jika Anda menemukan bahwa proyek tidak bekerja seperti yang Anda harapkan, maka ada dua kemungkinan: kesalahan ada pada ``` sintaks ``` atau kesalahan ada pada ``` library yang sudah kadaluarsa ```, sehingga hal ini dapat menyebabkan Anda harus mencari jalan keluar lain.

<br>

## Sorotan
<img src="https://user-images.githubusercontent.com/54527592/100519999-0ad9c500-31ce-11eb-84f6-8d5450464a8b.jpg" />

<br>

## Demonstrasi Aplikasi
Via Telegram: <a href="http://t.me/KUROKU_bot">@KUROKU</a>

<br>

## Penafian
Aplikasi ini dibuat dengan menyertakan sumber-sumber dari pihak ketiga. Pihak ketiga di sini adalah penyedia layanan, yang layanannya berupa pustaka, kerangka kerja, dan lain-lain. Saya ucapkan terima kasih banyak atas layanannya. Telah terbukti sangat membantu dan dapat diimplementasikan.

<br>

## LISENSI
LISENSI MIT - Hak Cipta (c) 2020 - Devan Cakra Mudra Wijaya

Dengan ini diberikan izin tanpa biaya kepada siapa pun yang mendapatkan salinan perangkat lunak ini dan file dokumentasi terkait perangkat lunak untuk menggunakannya tanpa batasan, termasuk namun tidak terbatas pada hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat Lunak ini, dan mengizinkan orang yang menerima Perangkat Lunak ini untuk dilengkapi dengan persyaratan berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus menyertai semua salinan atau bagian penting dari Perangkat Lunak.

DALAM HAL APAPUN, PENULIS ATAU PEMEGANG HAK CIPTA DI SINI TETAP MEMILIKI HAK KEPEMILIKAN PENUH. PERANGKAT LUNAK INI DISEDIAKAN SEBAGAIMANA ADANYA, TANPA JAMINAN APAPUN, BAIK TERSURAT MAUPUN TERSIRAT, OLEH KARENA ITU JIKA TERJADI KERUSAKAN, KEHILANGAN, ATAU LAINNYA YANG TIMBUL DARI PENGGUNAAN ATAU URUSAN LAIN DALAM PERANGKAT LUNAK INI, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB, KARENA PENGGUNAAN PERANGKAT LUNAK INI TIDAK DIPAKSAKAN SAMA SEKALI, SEHINGGA RISIKO ADALAH MILIK ANDA SENDIRI.
