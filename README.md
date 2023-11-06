[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Bot-Telegram-Berbasis-JavaScript
<strong>UPN Veteran Jatim Website Programming Assignment</strong><br>
This Telegram-based ChatBot was built through the Google App Scripts platform. The programming language in the development of this system uses Javascript.

<br>
[SEDANG UPDATE REPO, HARAP SABAR.....]
<br><br><br>

## Features / Framework / Tools
| Part | Description |
| --- | --- |
| Features | Reply Keyboard, Inline Keyboard, Error Handling, User Log Activity |
| Platform | Google Apps Script |
| Code | JavaScript |

<br>

## Bot Capabilities
1. There are menu options that can be accessed by clicking or typing.

2. Another ability of this bot is that it can provide notification to the bot owner that someone has accessed a certain menu, so that the bot owner can monitor the movements that occur directly.

3. There is problem control in the system, if the message does not match the command it will be redirected to the /help command.

<br>

## Running
1. Unduh repositori ini.

2. Buat proyek baru terlebih dahulu di platform: ``` Google apps script ```.
  
3. Tambahan ``` file baru ``` pada platform ``` Google apps script ``` dengan nama ``` index ``` -> Simpan.
  
4. Buka direktori ``` Bot-Telegram-Berbasis-JavaScript ``` lalu ekstrak -> buka file ``` index.js ``` -> Salin & tempelkan seluruh isinya ke ``` index.gs ``` yang ada pada platform ``` Google apps script ```.

5. Masukkan ``` ID Pustaka ``` di bagian ``` Library ``` :
   ```bash
   MHczUHrzvBLV1HsUn5XkOIfvg_do21SJR
   ```

6. Tambahkan ``` pustaka tersebut ``` -> Selalu pilih ``` versi pustaka yang tertinggi ``` -> Simpan.
  
7. Masukkan ``` Api bot token telegram ``` seperti berikut ini :
   ```bash
   // masukkan token bot mu di sini
   var token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

8. Klik ``` Terapkan ``` -> ``` Deployment baru ``` -> Pilih jenis: ``` Aplikasi Web ```.
   
9. Isi ``` Deskripsi ``` -> Akses pilih bagian: ``` siapa saja dapat mengakses ``` -> Terapkan.
   
10. Meninjau izin -> Pilih ``` email anda ``` -> Lanjutkan -> Buka ``` proyek bot anda (tidak aman) ``` -> Izinkan.

11. Klik ``` Terapkan ``` -> ``` Kelola Deployment ``` -> Pilih ``` Deployment yang sudah anda buat ``` tadi lalu atur versinya menjadi yang terbaru ``` (catatan: hanya sekali saja) ```.
    
12. Salin ``` link web app URL ``` -> Tempelkan link tersebut pada bagian ``` var webAppUrl ``` yang ada di ``` Code.gs ``` seperti berikut :

    ```bash
    // Isi dengan web App URL yang di dapat saat deploy
    var webAppUrl = "https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec";
    ```

13. Klik ``` Jalankan ``` (Catatan: akan dianggap berhasil jika ``` log eksekusi ``` bertuliskan ``` Webhook is already set ```).
   
14. Enjoy [Done].

<br>

## Reminder
• Pay attention to writing good and correct syntax in JavaScript because it greatly affects the bot that is developed.

• Make sure your PC/Laptop is connected to the internet.

<br>

## Highlights
<img src="https://user-images.githubusercontent.com/54527592/100519999-0ad9c500-31ce-11eb-84f6-8d5450464a8b.jpg" />

<br>

## Demonstration of Application
Via Telegram: <a href="http://t.me/KUROKU_bot">@KUROKU</a>

<br>

## LICENSE
MIT License - Copyright (c) 2020 - Devan Cakra Mudra Wijaya

Permission is hereby granted without charge to any person obtaining a copy of this software and the software-related documentation files to deal in them without restriction, including without limitation the right to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons receiving the Software to be furnished therewith on the following terms:

The above copyright notice and this permission notice must accompany all copies or substantial portions of the Software.

IN ANY EVENT, THE AUTHOR OR COPYRIGHT HOLDER HEREIN RETAINS FULL OWNERSHIP RIGHTS. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, THEREFORE IF ANY DAMAGE, LOSS, OR OTHERWISE ARISES FROM THE USE OR OTHER DEALINGS IN THE SOFTWARE, THE AUTHOR OR COPYRIGHT HOLDER SHALL NOT BE LIABLE, AS THE USE OF THE SOFTWARE IS NOT COMPELLED AT ALL, SO THE RISK IS YOUR OWN.
