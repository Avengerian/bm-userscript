## About This Repository
This is simple userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things. Having 100 users on a table with varying info can make parsing rather hard, this makes it easy.
Note this code is intended for the BattleMetrics RCON product, used by server admins. Not to be confused with the standard BattleMetrics server list. 

![how the results look](https://github.com/TempusOwl/bm-userscript/blob/main/result.png?raw=true)
## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!
## Installing TamperMonkey
https://www.tampermonkey.net/ (I recommend Stable)
## Triggers I Use
You click the URL, then scroll down to the bottom and create trigger. Do not modify them.

Note: These only apply to the game Squad, and may not work for at all in other games.
* https://www.battlemetrics.com/rcon/triggers/add?trigger=%7B%22types%22%3A%5B%22squad%3AteamKill%22%5D%2C%22personal%22%3Atrue%2C%22condition%22%3A%7B%22and%22%3A%5B%7B%22operand%22%3A%22player.online%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%2C%22rateLimits%22%3Anull%2C%22inputs%22%3A%5B%5D%2C%22logCondition%22%3Atrue%2C%22actions%22%3A%5B%7B%22id%22%3A%22O63D4Hy24Q%22%2C%22command%22%3A%22tagMessage%22%2C%22gameId%22%3Anull%2C%22options%22%3A%7B%22tag%22%3A%22Teamkill%22%2C%22color%22%3A%22%23f500ff%22%7D%2C%22order%22%3A0%2C%22condition%22%3Anull%2C%22showResult%22%3Afalse%7D%5D%2C%22actionIds%22%3A%5B%22O63D4Hy24Q%22%5D%7D
* https://www.battlemetrics.com/rcon/triggers/add?trigger=%7B%22types%22%3A%5B%22playerMessage%22%5D%2C%22personal%22%3Atrue%2C%22condition%22%3A%7B%22and%22%3A%5B%7B%22operand%22%3A%22msg.body%22%2C%22operator%22%3A%22match%22%2C%22value%22%3A%22admin%22%7D%5D%7D%2C%22rateLimits%22%3Anull%2C%22inputs%22%3A%5B%5D%2C%22logCondition%22%3Atrue%2C%22actions%22%3A%5B%7B%22id%22%3A%22At5MI5oL5%22%2C%22command%22%3A%22tagMessage%22%2C%22gameId%22%3Anull%2C%22options%22%3A%7B%22tag%22%3A%22admin%22%2C%22color%22%3A%22%2300ff1c%22%7D%2C%22order%22%3A0%2C%22condition%22%3Anull%2C%22showResult%22%3Afalse%7D%5D%2C%22actionIds%22%3A%5B%22At5MI5oL5%22%5D%7D

## Add The Script
Once you downloaded the extension to your browser, locate it at the upper right of your browser and right click it. Create a new script, this will open new tab. Replace EVERYTHING within it, with the userscript.js found here, then press CTRL+S. Then go the BM website and it should show as a red +1 next to TamperMonkey icon, if the script is working. If you see no +1 in Red, you may need to toggle the script on, head back to the browser icon for TamperMonkey and check that your script is enabled.

## Understanding The Code
  * The top of the code makes use of the triggers you can create within battlemetrics, it modifies the “Tag” you can place on certain lines. In my case it will show teamkills as purple. It does this by expanding the size of the small little 2px colored tag, and makes it full width. If you can’t apply a tag to a trigger, your trigger may not support tagging messages in rcon (check BattleMetrics discord).
  * The second part “runSquadLead” checks for any user containing “Squad Leader” in the “small text-muted'” class. If it sees it, it turns the text element gold. 
  * The third part “runAdmin” checks the class “css-18s4qom” for containing the word “Admin” and turns them green. This helps see admins at a glance. 
  * The four part “runClan” checks the class “css-mjpog7” for containing our clan tag (change it yours) and changes the color of the name within rcon. If you clan only has one tag, you can remove the else if section. 
  * Important: The classes may change as battlemetrics gets updated. Your classes (may) be different than mine. You can use inspect element to find the classes and replace mine to have the code function as you want. 
  
