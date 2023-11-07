[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/devancakra/Bot-Telegram-JS-Sederhana)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)

# Bot-Telegram-Berbasis-JavaScript
<strong>UPN Veteran Jatim Website Programming Assignment</strong><br>
This Telegram-based ChatBot was built through the ``` Google App Scripts ``` platform. The programming language in the development of this system uses ``` Javascript ```.

<br>

## Features / Framework / Tools
| Part | Description |
| --- | --- |
| Features | Reply Keyboard, Inline Keyboard, Error Handling, User Log Activity |
| Platform | Google Apps Script |
| Framework | Lumpia.js |
| Code | JavaScript |

<br>

## Bot Capabilities
1. There are menu options that can be accessed by clicking or typing.

2. Another ability of this bot is that it can provide notification to the bot owner that someone has accessed a certain menu, so that the bot owner can monitor the movements that occur directly.

3. There is problem control in the system, if the message does not match the command it will be redirected to the ``` /help ``` command.

<br>

## Running
1. Download this repository.

2. Create a new project first on the platform: ``` Google apps script ```.
  
3. Add ``` new file ``` on the platform ``` Google apps script ``` with the name ``` index ``` -> Save.
  
4. Open the ``` Bot-Telegram-Based-JavaScript ``` directory then extract -> open the ``` index.js ``` file -> Copy & paste the entire contents into the ``` index.gs ``` on the ``` Google apps script ``` platform.

5. Enter the ``` Library ID ``` in the ``` Library ``` section:
   ```bash
   1Yo6vQRwjG5Gl9jeEF0g2tBTUa0XN5MyT4G_HeDpRr9DvabxhRcSdhPNj
   ```

6. Add ``` the library ``` -> Always select ``` the highest version of the library ``` -> Save.
  
7. Paste the ``` API bot token telegram ``` that you have obtained from ``` @BotFather ``` as follows :
   ```bash
   // Token API
   const token = '1264610746:AAF3HuLDWCPKIGcinRY5Uf-qTpsWWw_jN0K';
   ```

8. Click ``` Apply ``` -> ``` New deployment ``` -> Select type: ``` Web Application ```.
   
9. Contents ``` Description ``` -> In the ``` Access ``` section, please select the section: ``` anyone can access ``` -> Apply.
   
10. Review permissions -> Select ``` your email ``` -> Continue -> Open ``` your bot project (not secure) ``` -> Allow.

11. Copy the ``` web app URL link ``` -> Paste the link into the ``` let url ``` section in ``` index.gs ``` as follows:

    ```bash
    let url = 'https://api.telegram.org/bot1164101112:AA1BC1DI/setwebhook?url=https://script.google.com/macros/s/AKfycbyKodePanjang/exec';
    ```

12. Make sure the function being executed is ``` setWebHook ``` -> Click ``` Run ```.

    Will be considered successful if the ``` execution log ``` reads: ``` Info {ok=true, description=Webhook is already set, result=true} ```.
   
13. Enjoy [Done].

<br>

## Reminder
• Pay attention to writing good and correct syntax in JavaScript because it greatly affects the bot that is developed.

• Make sure your PC/Laptop is connected to the internet.

• If you find that the project is not working as you expected, then there are two possibilities: either the error is in the ``` syntax ``` or the error is in an ``` outdated library ```, so this may cause you to have to find another way out.

<br>

## Highlights
<img src="https://user-images.githubusercontent.com/54527592/100519999-0ad9c500-31ce-11eb-84f6-8d5450464a8b.jpg" />

<br>

## Demonstration of Application
Via Telegram: <a href="http://t.me/KUROKU_bot">@KUROKU</a>

<br>

## Disclaimer
This application has been created by including third-party sources. Third parties here are service providers, whose services are in the form of libraries, frameworks, and others. I thank you very much for the service. It has proven to be very helpful and implementable.

<br>

## LICENSE
MIT License - Copyright (c) 2020 - Devan Cakra Mudra Wijaya

Permission is hereby granted without charge to any person obtaining a copy of this software and the software-related documentation files to deal in them without restriction, including without limitation the right to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons receiving the Software to be furnished therewith on the following terms:

The above copyright notice and this permission notice must accompany all copies or substantial portions of the Software.

IN ANY EVENT, THE AUTHOR OR COPYRIGHT HOLDER HEREIN RETAINS FULL OWNERSHIP RIGHTS. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, THEREFORE IF ANY DAMAGE, LOSS, OR OTHERWISE ARISES FROM THE USE OR OTHER DEALINGS IN THE SOFTWARE, THE AUTHOR OR COPYRIGHT HOLDER SHALL NOT BE LIABLE, AS THE USE OF THE SOFTWARE IS NOT COMPELLED AT ALL, SO THE RISK IS YOUR OWN.
