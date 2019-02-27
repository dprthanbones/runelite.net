(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{239:function(e,n){e.exports={title:"1.2.16 Release",description:"New puzzle box solver, barrows plugin, and NMZ plugin!",author:"Tomas",__content:'<p>An awesome puzzle box plugin has been finally added to RuneLite thanks to work of\n<a href="https://github.com/UniquePassive">@UniquePassive</a>. Clues are now even easier to do!</p>\n<p><img src="/img/blog/1.2.16-Release/puzzlebox1.png" alt="puzzlebox1"/></p>\n<p><img src="/img/blog/1.2.16-Release/puzzlebox2.png" alt="puzzlebox2"/></p>\n<p>For everyone who likes to AFK, thanks to <a href="https://github.com/Fire-Proof">@Fire-Proof</a>\na Nightmare Zone plugin was added. It shows your current Nightmare Zone points in nice\nRuneLite custom overlay, notifies you when you are low on absorption, and when your\noverload runs out.</p>\n<p><img src="/img/blog/1.2.16-Release/nmz.png" alt="nmz"/></p>\n<p>Barrows helper has been added in a new Barrows plugin by <a href="https://github.com/Sethtroll">@Sethtroll</a>.\nNo more black minimap when in tunnels or finding the correct doors!</p>\n<p><img src="/img/blog/1.2.16-Release/barrows1.png" alt="barrows1"/></p>\n<p><img src="/img/blog/1.2.16-Release/barrows2.png" alt="barrows2"/></p>\n<p>Additionally, abyss rift click boxes are now highlighted thanks to\n<a href="https://github.com/sethtroll">@Sethtroll</a> (again).</p>\n<p><img src="/img/blog/1.2.16-Release/abyss.png" alt="abyss"/></p>\n<p>And new Rogue&#39;s den plugin has been added to RuneLite as well, that shows click boxes\nof the Rogue&#39;s den obstacles. Thanks to <a href="https://github.com/ShaunDreclin">@ShaunDreclin</a>!</p>\n<p><img src="/img/blog/1.2.16-Release/roguesden.png" alt="roguesden"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The zoom plugin is now working again thanks to <a href="https://github.com/Abextm">@Abextm</a></li>\n<li>New option has been added to RuneLite settings that will make your window stay always on top</li>\n<li>Client is now logging the logs to ~/.runelite/logs, so in case you want to report problem,\nyou can also send the logs that would help us with resolving the problem.</li>\n<li>POH icon&#39;s displaying when on the wrong floor was fixed</li>\n<li>Slayer task now do not decrements anymore when your slayer level is decremented\n(for example in God wars or from KBD special attack)</li>\n<li>Title bar buttons are now shown in the info panel when you have custom title bar disabled</li>\n</ul>\n<p>Enjoy the new release!</p>\n<p>~ Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 11 contributors this release!</p>\n<pre><code>Abex (1):\n      Allow titlebar buttons to be moved out of the titlebar\n\nAdam (9):\n      mousehighlight: don&#39;t show tooltip on sliding puzzles\n      timers plugin: respect enabled configuration\n      perspective: add method for checking if world location is in scene\n      fishing plugin: move minimap overlay to own overlay\n      runelite-client: shut down discord service when closed\n      http-service: try to release okhttp resources on shutdown\n      rs2asm: allow multiple newlines after header or instruction\n      item manager: allow getting images with quantity\n      item manager: also allow specifying stackable\n\nMax Weber (6):\n      method984 &gt; runScript\n      Revert &quot;scripts: disable callbacks&quot;\n      injector: copy exceptions on Injected classes\n      Add raw injector to hook the script interpreter\n      Zoom plugin: Relax inner zoom constraint\n      injector: Allow injection of &lt;init&gt; and &lt;clinit&gt;\n\nNickolaj Jepsen (1):\n      Add NMZ plugin\n\nNotFoxtrot (1):\n      Add always on top setting\n\nSeth (8):\n      runecraft plugin: show click boxes of abyss rifts\n      cache: Update ObjectManager to include NULL names\n      runelite-api: redump objectid with null names\n      runelite-api: add getActions, imposterIds, and imposter to ObjectComposition\n      perspective: add getCanvasTextMiniMapLocation\n      Add barrows plugin\n      slayer plugin: add check for cachedXp when xp changes\n      poh plugin: fix icons displaying when changing planes\n\nShaunDreclin (1):\n      Add Rogues&#39; Den plugin\n\nSomeoneWithAnInternetConnection (1):\n      Fix mismapping of MouseWheel\n\nTomas Slusny (2):\n      Fix logging inside info panel plugin\n      Add logback logger that will log to file\n\nTyler Hardy (3):\n      Remove unused Zulrah plugin assets\n      Update ItemID from 160 cache\n      runepouch plugin: use itemmanager to render runepouch item icons\n\nUniquePassive (4):\n      Add puzzle box InventoryID\n      Add puzzle box WidgetInfo\n      Add puzzle solving algorithm\n      Add puzzle solver plugin\n</code></pre>'}}}]);
//# sourceMappingURL=19.1cf22557.chunk.js.map