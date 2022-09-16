## About This Repository
This is simple userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things. Having 100 users on a table with varying info can make parsing rather hard, this makes it easy.
Note this code is intended for the BattleMetrics RCON product, used by server admins. Not to be confused with the standard BattleMetrics server list. 
## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!
## Installing TamperMonkey
https://www.tampermonkey.net/ (I recommend Stable)
## Understanding The Code
  The top of the code makes use of the triggers you can create within battlemetrics, it modifies the “Tag” you can place on certain lines. In my case it will show teamkills as purple. It does this by expands the size of the small little 2px colored tag, and makes it full width. If you can’t apply a tag to a trigger, your trigger may not support tagging messages in rcon (check BattleMetrics discord).
  
  The second part “runSquadLead” checks for any user containing “Squad Leader” in the “small text-muted'” class. If it sees it, it turns the text element gold. 
  
  The third part “runAdmin” checks the class “css-18s4qom” for containing the word “Admin” and turns them green. This helps see admins at a glance.
  
  The four part “runClan” checks the class “css-mjpog7” for containing our clan tag (change it yours) and changes the color of the name within rcon. If you clan only has one tag, you can remove the else if section. 
  
  Important: The classes may change as battlemetrics gets updated. Your classes (may) be different than mine. You can use inspect element to find the classes and replace mine to have the code function as you want. 
  
