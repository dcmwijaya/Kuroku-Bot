[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?logo=github&color=%23F7DF1E)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/dcmwijaya/Kuroku-Bot?logo=Codeforces&logoColor=white&color=%23F7DF1E)
![Project](https://img.shields.io/badge/Project-Multi-%2DPlatform-light.svg?style=flat&logo=googlechrome&logoColor=white&color=%23F7DF1E)
![Type](https://img.shields.io/badge/Type-Campus%20Assignment-light.svg?style=flat&logo=gitbook&logoColor=white&color=%23F7DF1E)

# Kuroku-Bot
<strong>Tugas Pemrograman Website UPN Veteran Jatim</strong><br><br>
ChatBot berbasis Telegram ini dibangun di atas platform ``` Google App Scripts ``` dengan menggunakan bahasa pemrograman ``` Javascript ```. Framework yang digunakan adalah <b><a href="https://lumpia.js.org/">Lumpia.js</a></b>. Tujuan dibuatnya bot ini adalah untuk membantu seseorang memahami lebih jauh terkait jenis, pakan, habitat dan cara menjaga kesehatan dari hewan peliharaannya.

<br><br>

## Kebutuhan Proyek
| Bagian | Deskripsi |
| --- | --- |
| Fitur | Keyboard Balasan, Keyboard Sebaris, Pengendalian Masalah, Aktivitas Catatan Pengguna, Pesan Markdown |
| Platform | Google Apps Script |
| Kerangka Kerja | Lumpia.js |
| Kode | JavaScript |

<br><br>

## Kemampuan Bot
1. Terdapat pilihan menu yang dapat diakses dengan mengklik atau mengetik.<br><br>

2. Kemampuan lain dari bot ini adalah dapat memberikan notifikasi kepada pemilik bot bahwa ada seseorang yang mengakses menu tertentu, sehingga pemilik bot dapat memantau pergerakan yang terjadi secara langsung.<br><br>

3. Terdapat kontrol masalah dalam sistem.<br><br>

4. Tampilan yang menarik dan mendidik.

<br><br>

## Memulai
1. Unduh repositori ini.<br><br>

2. Buat proyek baru terlebih dahulu di platform: ``` Google apps script ```.<br><br>
  
3. Tambahkan ``` file baru ``` pada platform ``` Google apps script ``` dan terkait ``` nama file ``` atau ``` jumlah file ``` boleh beda sesuai kreasi masing-masing, sebab hal ini tidak akan memengaruhi kinerja sistem bot -> lalu jangan lupa untuk klik ``` Simpan ```.<br><br>
  
4. Ekstrak ``` Kuroku-Bot ``` -> Buka seluruh file yang berekstensi ``` Javascript (.js) ``` -> Salin & tempelkan seluruh isinya ke dalam file yang telah tersedia di platform ``` Google apps script ```.<br><br>

5. Masukkan ``` ID Pustaka ``` di bagian ``` Library ``` :

   <table><tr><td width="810">
     
   ```js
   1Yo6vQRwjG5Gl9jeEF0g2tBTUa0XN5MyT4G_HeDpRr9DvabxhRcSdhPNj
   ```

   </td></tr></table><br>

6. Tambahkan ``` pustaka tersebut ``` -> Selalu pilih ``` versi pustaka yang tertinggi ``` -> Simpan.<br><br>
  
7. Tempelkan ``` Api bot token telegram ``` yang telah anda peroleh dari ``` @BotFather ``` seperti berikut ini :

   <table><tr><td width="810">
     
   ```js
   // Token API
   const token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

   </td></tr></table><br>

8. Klik ``` Terapkan ``` -> ``` Deployment baru ``` -> Pilih jenis: ``` Aplikasi Web ```.<br><br>
   
9. Isi ``` Deskripsi ``` -> Pada bagian ``` Akses ```, silahkan pilih bagian: ``` siapa saja dapat mengakses ``` -> Terapkan.<br><br>
   
10. Meninjau izin -> Pilih ``` email anda ``` -> Lanjutkan -> Buka ``` proyek bot anda (tidak aman) ``` -> Izinkan.<br><br>

11. Salin ``` link web app URL ``` -> Tempelkan link tersebut pada bagian ``` let url ``` yang ada di ``` config.gs ``` seperti berikut :

    <table><tr><td width="810">

    ```js
    let url = 'https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec';
    ```

    </td></tr></table><br>

12. Pastikan fungsi yang sedang dijalankan adalah ``` setWebHook ``` -> Klik ``` Jalankan ```.

    Akan dianggap berhasil jika ``` log eksekusi ``` bertuliskan: ``` Info {ok=true, description=Webhook is already set, result=true} ```.<br><br>
   
13. Selamat menikmati [Selesai].

<br><br>

## Sorotan
<table>
<tr>
<th colspan="4">Tampilan Interaksi Bot Telegram</th>
</tr>
<tr>
<td width="210"><img src="Documentation/Telegram Bot View-1.jpg" alt="telegram-bot-1"></td>
<td width="210"><img src="Documentation/Telegram Bot View-2.jpg" alt="telegram-bot-2"></td>
<td width="210"><img src="Documentation/Telegram Bot View-3.jpg" alt="telegram-bot-3"></td>
<td width="210"><img src="Documentation/Telegram Bot View-4.jpg" alt="telegram-bot-4"></td>
</tr>
<tr>
<td width="210"><img src="Documentation/Telegram Bot View-5.jpg" alt="telegram-bot-5"></td>
<td width="210"><img src="Documentation/Telegram Bot View-6.jpg" alt="telegram-bot-6"></td>
<td width="210"><img src="Documentation/Telegram Bot View-7.jpg" alt="telegram-bot-7"></td>
<td width="210"><img src="Documentation/Telegram Bot View-8.jpg" alt="telegram-bot-8"></td>
</tr>
<tr>
<td width="210"><img src="Documentation/Telegram Bot View-9.jpg" alt="telegram-bot-9"></td>
<td width="210"><img src="Documentation/Telegram Bot View-10.jpg" alt="telegram-bot-10"></td>
<td width="210"><img src="Documentation/Telegram Bot View-11.jpg" alt="telegram-bot-11"></td>
<td width="210"><img src="Documentation/Telegram Bot View-12.jpg" alt="telegram-bot-12"></td>
</tr>
</table>

<br><br>

## Pengingat
<table><tr><td width="840">

• Perhatikan penulisan sintaks yang baik dan benar dalam JavaScript karena hal ini sangat mempengaruhi bot yang dikembangkan.<br><br>

• Pastikan PC/Laptop anda terhubung ke internet.<br><br>

• Jika anda menemukan bahwa proyek tidak bekerja seperti yang anda harapkan, maka ada dua kemungkinan: kesalahan ada pada ``` sintaks ``` atau kesalahan ada pada ``` library yang sudah kadaluarsa ```, sehingga hal ini dapat menyebabkan anda harus mencari jalan keluar lain.

</td></tr></table>

<br><br>

## Demonstrasi Aplikasi
Via Telegram: <a href="http://t.me/kuroku_bot">@kuroku_bot</a>

<br><br>

## Apresiasi
Jika karya ini bermanfaat bagi anda, maka dukunglah karya ini sebagai bentuk apresiasi kepada penulis dengan mengklik tombol ``` ⭐Bintang ``` di bagian atas repositori.

<br><br>

## Penafian
Aplikasi ini merupakan hasil karya saya sendiri dan bukan merupakan hasil plagiat dari penelitian atau karya orang lain, kecuali yang berkaitan dengan layanan pihak ketiga yang meliputi: pustaka, kerangka kerja, dan lain sebagainya.

<br><br>

## LISENSI
LISENSI MIT - Hak Cipta © 2021 - Devan C. M. Wijaya

Dengan ini diberikan izin tanpa biaya kepada siapa pun yang mendapatkan salinan perangkat lunak ini dan file dokumentasi terkait perangkat lunak untuk menggunakannya tanpa batasan, termasuk namun tidak terbatas pada hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat Lunak ini, dan mengizinkan orang yang menerima Perangkat Lunak ini untuk dilengkapi dengan persyaratan berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus menyertai semua salinan atau bagian penting dari Perangkat Lunak.

DALAM HAL APAPUN, PENULIS ATAU PEMEGANG HAK CIPTA DI SINI TETAP MEMILIKI HAK KEPEMILIKAN PENUH. PERANGKAT LUNAK INI DISEDIAKAN SEBAGAIMANA ADANYA, TANPA JAMINAN APAPUN, BAIK TERSURAT MAUPUN TERSIRAT, OLEH KARENA ITU JIKA TERJADI KERUSAKAN, KEHILANGAN, ATAU LAINNYA YANG TIMBUL DARI PENGGUNAAN ATAU URUSAN LAIN DALAM PERANGKAT LUNAK INI, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB, KARENA PENGGUNAAN PERANGKAT LUNAK INI TIDAK DIPAKSAKAN SAMA SEKALI, SEHINGGA RISIKO ADALAH MILIK ANDA SENDIRI.
