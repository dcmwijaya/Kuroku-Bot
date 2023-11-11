[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Kuroku-Bot
<strong>Tugas Pemrograman Website UPN Veteran Jatim</strong><br>
ChatBot berbasis Telegram ini dibangun di atas platform ``` Google App Scripts ``` dengan menggunakan bahasa pemrograman ``` Javascript ```. Framework yang digunakan adalah <b><a href="https://lumpia.js.org/">Lumpia.js</a></b>. Tujuan dibuatnya bot ini adalah untuk membantu seseorang memahami lebih jauh terkait jenis, pakan, habitat dan cara menjaga kesehatan dari hewan peliharaannya.

<br>

## Fitur / Kerangka Kerja / Peralatan
| Bagian | Deskripsi |
| --- | --- |
| Fitur | Keyboard Khusus, Keyboard Sebaris, Pengendalian Masalah, Aktivitas Catatan Pengguna, Pesan Markdown |
| Platform | Google Apps Script |
| Kerangka Kerja | Lumpia.js |
| Kode | JavaScript |

<br>

## Kemampuan Bot
1. Terdapat pilihan menu yang dapat diakses dengan mengklik atau mengetik.

2. Kemampuan lain dari bot ini adalah dapat memberikan notifikasi kepada pemilik bot bahwa ada seseorang yang mengakses menu tertentu, sehingga pemilik bot dapat memantau pergerakan yang terjadi secara langsung.

3. Terdapat kontrol masalah dalam sistem.

4. Tampilan yang menarik dan mendidik.

<br>

## Memulai
1. Unduh repositori ini.

2. Buat proyek baru terlebih dahulu di platform: ``` Google apps script ```.
  
3. Tambahkan ``` file baru ``` pada platform ``` Google apps script ``` dan terkait ``` nama file ``` atau ``` jumlah file ``` boleh beda sesuai kreasi masing-masing, sebab hal ini tidak akan memengaruhi kinerja sistem bot -> lalu jangan lupa untuk klik ``` Simpan ```.
  
4. Ekstrak ``` Kuroku-Bot ``` -> Buka seluruh file yang berekstensi ``` Javascript (.js) ``` -> Salin & tempelkan seluruh isinya ke dalam file yang telah tersedia di platform ``` Google apps script ```.

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
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/390824ae-f849-4763-ba49-44cbcaec1cea" alt="bot-1"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/17f73005-3e6a-48ed-a9ea-fc2e858be847" alt="bot-2"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/e9f0f167-5da1-40a5-8c92-5781de70d8af" alt="bot-3"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/150734e6-353c-4672-b646-0b50bfd82341" alt="bot-4"></td>
</tr>
<tr>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/97747aac-4ecd-4f30-a011-997503441d2b" alt="bot-5"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/c1cd6313-c7ce-43d6-aa73-d65933b04590" alt="bot-6"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/e13e90a6-e8e2-43b4-9181-61f7adff7248" alt="bot-7"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/9ba07dfc-96d9-4885-974d-92545c6532c7" alt="bot-8"></td>
</tr>
<tr>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/d75dd770-54da-49fa-adde-98f993d2dfa4" alt="bot-9"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/e2c4c8fe-4700-4a21-8435-85d345c88518" alt="bot-10"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/5b94ecf1-d5a4-425a-8076-34fbc848045c" alt="bot-11"></td>
<td width="210"><img src="https://github.com/devancakra/Kuroku-Bot/assets/54527592/dc8931f5-6e5a-4086-bb43-9e67a465daa7" alt="bot-12"></td>
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
LISENSI MIT - Hak Cipta (c) 2023 - Devan Cakra Mudra Wijaya

Dengan ini diberikan izin tanpa biaya kepada siapa pun yang mendapatkan salinan perangkat lunak ini dan file dokumentasi terkait perangkat lunak untuk menggunakannya tanpa batasan, termasuk namun tidak terbatas pada hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat Lunak ini, dan mengizinkan orang yang menerima Perangkat Lunak ini untuk dilengkapi dengan persyaratan berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus menyertai semua salinan atau bagian penting dari Perangkat Lunak.

DALAM HAL APAPUN, PENULIS ATAU PEMEGANG HAK CIPTA DI SINI TETAP MEMILIKI HAK KEPEMILIKAN PENUH. PERANGKAT LUNAK INI DISEDIAKAN SEBAGAIMANA ADANYA, TANPA JAMINAN APAPUN, BAIK TERSURAT MAUPUN TERSIRAT, OLEH KARENA ITU JIKA TERJADI KERUSAKAN, KEHILANGAN, ATAU LAINNYA YANG TIMBUL DARI PENGGUNAAN ATAU URUSAN LAIN DALAM PERANGKAT LUNAK INI, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB, KARENA PENGGUNAAN PERANGKAT LUNAK INI TIDAK DIPAKSAKAN SAMA SEKALI, SEHINGGA RISIKO ADALAH MILIK ANDA SENDIRI.
