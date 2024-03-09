[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?logo=github&color=%23F7DF1E)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Kuroku-Bot
<strong>UPN Veteran Jatim Website Programming Assignment</strong><br><br>
This Telegram-based ChatBot is built on the ``` Google App Scripts ``` platform using ``` Javascript ``` as the programming language. The framework used is <b><a href="https://lumpia.js.org/">Lumpia.js</a></b>. The purpose of making this bot is to help someone understand more about the type, food, habitat and how to maintain the health of their pets.

<br><br>

## Project Requirements
| Part | Description |
| --- | --- |
| Features | Custom Keyboard, Inline Keyboard, Error Handling, User Log Activity, Markdown Message |
| Platform | Google Apps Script |
| Framework | Lumpia.js |
| Code | JavaScript |

<br><br>

## Bot Capabilities
1. There are menu options that can be accessed by clicking or typing.<br><br>

2. Another ability of this bot is that it can provide notification to the bot owner that someone has accessed a certain menu, so that the bot owner can monitor the movements that occur directly.<br><br>

3. There is problem control in the system.<br><br>

4. Attractive and educational display.

<br><br>

## Get Started
1. Download this repository.<br><br>

2. Create a new project first on the platform: ``` Google apps script ```.<br><br>
  
3. Add ``` new file ``` on the platform ``` Google apps script ``` and regarding ``` file name ``` or ``` number of files ``` can be different according to your own creation, because this will not affect the performance of the bot system -> then don't forget to click ``` Save ```.<br><br>
  
4. Extract ``` Kuroku-Bot ``` -> Open the entire file with the extension ``` Javascript (.js) ``` -> Copy & paste the entire contents into the file available on the platform ``` Google apps script ```.<br><br>

5. Enter the ``` Library ID ``` in the ``` Library ``` section:

   <table><tr><td width="810">
     
   ```js
   1Yo6vQRwjG5Gl9jeEF0g2tBTUa0XN5MyT4G_HeDpRr9DvabxhRcSdhPNj
   ```

   </td></tr></table><br>

6. Add ``` the library ``` -> Always select ``` the highest version of the library ``` -> Save.<br><br>
  
7. Paste the ``` API bot token telegram ``` that you have obtained from ``` @BotFather ``` as follows :

   <table><tr><td width="810">
     
   ```js
   // Token API
   const token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

   </td></tr></table><br>

8. Click ``` Apply ``` -> ``` New deployment ``` -> Select type: ``` Web Application ```.<br><br>
   
9. Contents ``` Description ``` -> In the ``` Access ``` section, please select the section: ``` anyone can access ``` -> Apply.<br><br>
   
10. Review permissions -> Select ``` your email ``` -> Continue -> Open ``` your bot project (not secure) ``` -> Allow.<br><br>

11. Copy the ``` web app URL link ``` -> Paste the link into the ``` let url ``` section in ``` config.gs ``` as follows:

    <table><tr><td width="810">

    ```js
    let url = 'https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec';
    ```

    </td></tr></table><br>

12. Make sure the function being executed is ``` setWebHook ``` -> Click ``` Run ```.

    Will be considered successful if the ``` execution log ``` reads: ``` Info {ok=true, description=Webhook is already set, result=true} ```.<br><br>
   
13. Enjoy [Done].

<br><br>

## Highlights
<table>
<tr>
<th colspan="4">Telegram Bot Interaction View</th>
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

<br><br>

## Reminder
<table><tr><td width="840">
  
• Pay attention to writing good and correct syntax in JavaScript because it greatly affects the bot that is developed.<br><br>

• Make sure your PC/Laptop is connected to the internet.<br><br>

• If you find that the project is not working as you expected, then there are two possibilities: either the error is in the ``` syntax ``` or the error is in an ``` outdated library ```, so this may cause you to have to find another way out.

</td></tr></table>

<br><br>

## Demonstration of Application
Via Telegram: <a href="http://t.me/kuroku_bot">@kuroku_bot</a>

<br><br>

## Appreciation
If you find this work useful, please support it as a token of appreciation to the author by clicking the ``` ⭐Star ``` button.

<br><br>

## Disclaimer
This application has been created by including third-party sources. Third parties here are service providers, whose services are in the form of libraries, frameworks, and others. I thank you very much for the service. It has proven to be very helpful and implementable.

<br><br>

## LICENSE
MIT License - Copyright © 2023 - Devan Cakra Mudra Wijaya

Permission is hereby granted without charge to any person obtaining a copy of this software and the software-related documentation files to deal in them without restriction, including without limitation the right to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons receiving the Software to be furnished therewith on the following terms:

The above copyright notice and this permission notice must accompany all copies or substantial portions of the Software.

IN ANY EVENT, THE AUTHOR OR COPYRIGHT HOLDER HEREIN RETAINS FULL OWNERSHIP RIGHTS. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, THEREFORE IF ANY DAMAGE, LOSS, OR OTHERWISE ARISES FROM THE USE OR OTHER DEALINGS IN THE SOFTWARE, THE AUTHOR OR COPYRIGHT HOLDER SHALL NOT BE LIABLE, AS THE USE OF THE SOFTWARE IS NOT COMPELLED AT ALL, SO THE RISK IS YOUR OWN.
