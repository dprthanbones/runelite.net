(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{102:function(e,t,i){"use strict";var n=i(1),a=i(100),r=i(0),s=i(22),o=function(){return Object(r.c)("div",null,Object(r.c)("hr",null),"Developed with ",Object(r.c)("i",{class:"fas fa-heart"})," and ",Object(r.c)("i",{class:"fas fa-coffee"})," ","using ",Object(r.c)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(r.c)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(r.c)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(r.c)("a",{href:"".concat(Object(s.b)(),"/atom.xml"),class:"float-right"},Object(r.c)("i",{class:"fas fa-rss"})," Subscribe via RSS"))};t.a=function(e){var t=e.children,i=e.fullWidth,s=Object(a.a)(e,["children","fullWidth"]);return s.class=s.class?"container "+s.class:"container",s.style=Object(n.a)({},s.style||{},{maxWidth:i?"100%":""}),Object(r.c)("div",Object.assign({},s,{id:"layout"}),t,Object(r.c)(o,null))}},110:function(e,t,i){"use strict";var n=i(28),a=i(29),r=i(32),s=i(30),o=i(31),l=i(0);t.a=function(e){return function(t){return function(i){function c(){return Object(n.a)(this,c),Object(r.a)(this,Object(s.a)(c).apply(this,arguments))}return Object(o.a)(c,i),Object(a.a)(c,[{key:"componentDidMount",value:function(){e(this.props)}},{key:"render",value:function(e){return Object(l.c)(t,e)}}]),c}(l.a)}}},120:function(e,t,i){"use strict";i.d(t,"b",function(){return u}),i.d(t,"c",function(){return m});var n=i(2),a=i.n(n),r=i(4),s=i(1),o=i(121),l=i.n(o),c=i(122).keys().sort().reverse().reduce(function(e,t){var n=l()(t);return e.set(n.id.toLowerCase(),function(){return i(190)("./".concat(n.file,".md")).then(function(e){return Object(s.a)({id:n.id,date:n.date,body:e.__content},e)})})},new Map),u=function(e){var t=c.get(e.toLowerCase());return t?t():Promise.resolve({})},m=function(){var e=Object(r.a)(a.a.mark(function e(){var t,i,n,r,s,o,l,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=c.values(),i=!0,n=!1,r=void 0,e.prev=4,s=t[Symbol.iterator]();case 6:if(i=(o=s.next()).done){e.next=17;break}return l=o.value,e.next=10,l();case 10:if(!(u=e.sent).hasOwnProperty("skip")||!u.skip){e.next=13;break}return e.abrupt("continue",14);case 13:return e.abrupt("return",u);case 14:i=!0,e.next=6;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),n=!0,r=e.t0;case 23:e.prev=23,e.prev=24,i||null==s.return||s.return();case 26:if(e.prev=26,!n){e.next=29;break}throw r;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.abrupt("return",{});case 32:case"end":return e.stop()}},e,null,[[4,19,23,31],[24,,26,30]])}));return function(){return e.apply(this,arguments)}}();t.a=c},121:function(e,t){e.exports=function(e){var t=(e=e.match(/([\w\d-.]+)\.md/)[1]).match(/^(\d{4}-\d{2}-\d{2})-(\d{2}-\d{2})(.*)/);if(!t&&!t[1]&&!t[2]&&!t[3])throw new Error("no ^YYYY-MM-DD-HH-mm date in blog filename");var i=t[1],n=t[2],a=i+t[3],r=(i+"-"+n).split("-");return{date:new Date(Date.UTC(parseInt(r[0],10),parseInt(r[1],10)-1,parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10))),id:a,file:e}}},122:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":123,"./2017-12-21-00-00-1.2.10-Release.md":124,"./2018-01-12-00-00-1.2.11-Release.md":125,"./2018-01-18-00-00-1.2.12-Release.md":126,"./2018-01-25-00-00-1.2.13-Release.md":127,"./2018-02-01-00-00-1.2.14-Release.md":128,"./2018-02-08-00-00-1.2.15-Release.md":129,"./2018-02-15-00-00-1.2.16-Release.md":130,"./2018-02-22-00-00-1.2.17-Release.md":131,"./2018-03-01-00-00-1.2.18-Release.md":132,"./2018-03-08-00-00-1.2.19-Release.md":133,"./2018-03-15-00-00-1.3.0-Release.md":134,"./2018-03-22-00-00-1.3.1-Release.md":135,"./2018-03-29-00-00-1.3.2-Release.md":136,"./2018-04-05-00-00-1.3.3-Release.md":137,"./2018-04-12-00-00-1.3.4-Release.md":138,"./2018-04-19-00-00-1.3.5-Release.md":139,"./2018-04-26-00-00-1.3.6-Release.md":140,"./2018-05-03-00-00-1.3.7-Release.md":141,"./2018-05-10-00-00-1.3.8-Release.md":142,"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":143,"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":144,"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":145,"./2018-05-18-00-00-1.3.9-Release.md":146,"./2018-05-24-00-00-1.4.0-Release.md":147,"./2018-05-25-23-00-Phishing-Attempts.md":148,"./2018-05-31-07-00-1.4.1-Release.md":149,"./2018-06-07-07-00-1.4.2-Release.md":150,"./2018-06-14-07-00-1.4.3-Release.md":151,"./2018-06-21-07-00-1.4.4-Release.md":152,"./2018-06-28-07-00-1.4.5-Release.md":153,"./2018-07-05-07-00-1.4.6-Release.md":154,"./2018-07-12-07-00-1.4.7-Release.md":155,"./2018-07-19-07-00-1.4.8-Release.md":156,"./2018-07-26-07-00-1.4.9-Release.md":157,"./2018-08-02-10-00-1.4.10-Release.md":158,"./2018-08-09-10-00-1.4.11-Release.md":159,"./2018-08-16-10-00-1.4.12-Release.md":160,"./2018-08-23-10-00-1.4.13-Release.md":161,"./2018-08-30-10-00-1.4.15-Release.md":162,"./2018-09-06-10-00-1.4.16-Release.md":163,"./2018-09-13-10-00-1.4.17-Release.md":164,"./2018-09-18-21-00-Worldhopper-disabled.md":165,"./2018-09-20-10-00-1.4.18-Release.md":166,"./2018-09-27-10-00-1.4.19-Release.md":167,"./2018-10-04-10-00-1.4.20-Release.md":168,"./2018-10-11-10-00-1.4.21-Release.md":169,"./2018-10-18-10-00-1.4.22-Release.md":170,"./2018-10-25-10-00-1.4.23-Release.md":171,"./2018-11-01-10-00-1.4.24-Release.md":172,"./2018-11-08-10-00-1.4.25-Release.md":173,"./2018-11-15-10-00-1.4.26-Release.md":174,"./2018-11-16-12-00-1.5.0-Release.md":175,"./2018-11-22-10-00-1.5.1-Release.md":176,"./2018-11-29-10-00-1.5.2-Release.md":177,"./2018-12-06-10-00-1.5.3-Release.md":178,"./2018-12-13-10-00-1.5.4-Release.md":179,"./2018-12-20-10-00-1.5.5-Release.md":180,"./2019-01-03-10-00-1.5.6-Release.md":181,"./2019-01-10-10-00-1.5.7-Release.md":182,"./2019-01-17-10-00-1.5.8-Release.md":183,"./2019-01-24-10-00-1.5.9-Release.md":184,"./2019-01-31-10-00-1.5.10-Release.md":185,"./2019-02-07-10-00-1.5.11-Release.md":186,"./2019-02-14-10-00-1.5.12-Release.md":187,"./2019-02-16-16-00-Launcher-1.6.2-Release.md":188,"./2019-02-21-10-00-1.5.13-Release.md":189};function a(e){var t=r(e);return i(t)}function r(e){var t=n[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=122},123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},132:function(e,t){},133:function(e,t){},134:function(e,t){},135:function(e,t){},136:function(e,t){},137:function(e,t){},138:function(e,t){},139:function(e,t){},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},150:function(e,t){},151:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},155:function(e,t){},156:function(e,t){},157:function(e,t){},158:function(e,t){},159:function(e,t){},160:function(e,t){},161:function(e,t){},162:function(e,t){},163:function(e,t){},164:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},172:function(e,t){},173:function(e,t){},174:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t){},182:function(e,t){},183:function(e,t){},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":[232,12],"./2017-12-21-00-00-1.2.10-Release.md":[233,13],"./2018-01-12-00-00-1.2.11-Release.md":[234,14],"./2018-01-18-00-00-1.2.12-Release.md":[235,15],"./2018-01-25-00-00-1.2.13-Release.md":[236,16],"./2018-02-01-00-00-1.2.14-Release.md":[237,17],"./2018-02-08-00-00-1.2.15-Release.md":[238,18],"./2018-02-15-00-00-1.2.16-Release.md":[239,19],"./2018-02-22-00-00-1.2.17-Release.md":[240,20],"./2018-03-01-00-00-1.2.18-Release.md":[241,21],"./2018-03-08-00-00-1.2.19-Release.md":[242,22],"./2018-03-15-00-00-1.3.0-Release.md":[243,23],"./2018-03-22-00-00-1.3.1-Release.md":[244,24],"./2018-03-29-00-00-1.3.2-Release.md":[245,25],"./2018-04-05-00-00-1.3.3-Release.md":[246,26],"./2018-04-12-00-00-1.3.4-Release.md":[247,27],"./2018-04-19-00-00-1.3.5-Release.md":[248,28],"./2018-04-26-00-00-1.3.6-Release.md":[249,29],"./2018-05-03-00-00-1.3.7-Release.md":[250,30],"./2018-05-10-00-00-1.3.8-Release.md":[251,31],"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":[252,32],"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":[253,33],"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":[254,34],"./2018-05-18-00-00-1.3.9-Release.md":[255,35],"./2018-05-24-00-00-1.4.0-Release.md":[256,36],"./2018-05-25-23-00-Phishing-Attempts.md":[257,37],"./2018-05-31-07-00-1.4.1-Release.md":[258,38],"./2018-06-07-07-00-1.4.2-Release.md":[259,39],"./2018-06-14-07-00-1.4.3-Release.md":[260,40],"./2018-06-21-07-00-1.4.4-Release.md":[261,41],"./2018-06-28-07-00-1.4.5-Release.md":[262,42],"./2018-07-05-07-00-1.4.6-Release.md":[263,43],"./2018-07-12-07-00-1.4.7-Release.md":[264,44],"./2018-07-19-07-00-1.4.8-Release.md":[265,45],"./2018-07-26-07-00-1.4.9-Release.md":[266,46],"./2018-08-02-10-00-1.4.10-Release.md":[267,47],"./2018-08-09-10-00-1.4.11-Release.md":[268,48],"./2018-08-16-10-00-1.4.12-Release.md":[269,49],"./2018-08-23-10-00-1.4.13-Release.md":[270,50],"./2018-08-30-10-00-1.4.15-Release.md":[271,51],"./2018-09-06-10-00-1.4.16-Release.md":[272,52],"./2018-09-13-10-00-1.4.17-Release.md":[273,53],"./2018-09-18-21-00-Worldhopper-disabled.md":[274,54],"./2018-09-20-10-00-1.4.18-Release.md":[275,55],"./2018-09-27-10-00-1.4.19-Release.md":[276,56],"./2018-10-04-10-00-1.4.20-Release.md":[277,57],"./2018-10-11-10-00-1.4.21-Release.md":[278,58],"./2018-10-18-10-00-1.4.22-Release.md":[279,59],"./2018-10-25-10-00-1.4.23-Release.md":[280,60],"./2018-11-01-10-00-1.4.24-Release.md":[281,61],"./2018-11-08-10-00-1.4.25-Release.md":[282,62],"./2018-11-15-10-00-1.4.26-Release.md":[283,63],"./2018-11-16-12-00-1.5.0-Release.md":[284,64],"./2018-11-22-10-00-1.5.1-Release.md":[285,65],"./2018-11-29-10-00-1.5.2-Release.md":[286,66],"./2018-12-06-10-00-1.5.3-Release.md":[287,67],"./2018-12-13-10-00-1.5.4-Release.md":[288,68],"./2018-12-20-10-00-1.5.5-Release.md":[289,69],"./2019-01-03-10-00-1.5.6-Release.md":[290,70],"./2019-01-10-10-00-1.5.7-Release.md":[291,71],"./2019-01-17-10-00-1.5.8-Release.md":[292,72],"./2019-01-24-10-00-1.5.9-Release.md":[293,73],"./2019-01-31-10-00-1.5.10-Release.md":[294,74],"./2019-02-07-10-00-1.5.11-Release.md":[295,75],"./2019-02-14-10-00-1.5.12-Release.md":[296,76],"./2019-02-16-16-00-Launcher-1.6.2-Release.md":[297,77],"./2019-02-21-10-00-1.5.13-Release.md":[298,78]};function a(e){var t=n[e];return t?i.e(t[1]).then(function(){var e=t[0];return i.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(n)},a.id=190,e.exports=a},207:function(e,t,i){"use strict";var n=i(0);t.a=function(e){var t=e.image,i=e.title,a=e.description,r=e.link;return Object(n.c)("div",{class:"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12",style:{marginBottom:15}},Object(n.c)("div",{class:"card"},Object(n.c)("img",{class:"card-img-top",alt:i,src:t}),Object(n.c)("div",{class:"card-body"},Object(n.c)("h5",{class:"card-title"},r?Object(n.c)("a",{href:r,alt:"View on Wiki"},i):i),Object(n.c)("p",{class:"card-text"},a))))}},208:function(e,t,i){"use strict";t.a=[{image:"/img/features/attackstyles.png",title:"Attack style",description:"Indicates your attack style and hides unwanted styles.",link:"https://github.com/runelite/runelite/wiki/Attack-Styles"},{image:"/img/features/grounditems.png",title:"Ground items",description:"Hides, highlights, and adds filterable price colors to dropped items.",link:"https://github.com/runelite/runelite/wiki/Ground-Items"},{image:"/img/features/boosts.png",title:"Status widgets",description:"Shows boost timers, enemy HP, and other useful overlays.",home:!0},{image:"/img/features/mousehighlight.png",title:"Action tooltips",description:"Displays tooltips for actions under your mouse cursor.",link:"https://github.com/runelite/runelite/wiki/Mouse-Tooltips"},{image:"/img/features/hunter.png",title:"Hunter",description:"Adds timers to hunter traps.",link:"https://github.com/runelite/runelite/wiki/Hunter"},{image:"/img/features/runepouch.png",title:"Rune pouch",description:"Shows what runes are currently in your rune pouch.",link:"https://github.com/runelite/runelite/wiki/Rune-Pouch"},{image:"/img/features/cluescroll.png",title:"Clue scroll helper",description:"Gives answers to clue scroll riddles/anagrams/ciphers/cryptic clues.",link:"https://github.com/runelite/runelite/wiki/Clue-Scrolls"},{image:"/img/features/imp.png",title:"Impling finder",description:"Highlights nearby implings on the minimap and on-screen.",link:"https://github.com/runelite/runelite/wiki/Implings"},{image:"/img/features/playerindicators.png",title:"Player indicators",description:"Draws the names of friends, clan mates and yourself overhead.",link:"https://github.com/runelite/runelite/wiki/Player-Indicators"},{image:"/img/features/fishing.png",title:"Fishing",description:"Highlights fishing spots and tracks fishing stats.",link:"https://github.com/runelite/runelite/wiki/Fishing"},{image:"/img/features/globes.png",title:"XP globes",description:"Displays skill globes when you gain XP, with more detailed stats on hover.",link:"https://github.com/runelite/runelite/wiki/XP-Globes"},{image:"/img/features/idle.png",title:"Idle notifications",description:"Sends system tray alerts when idle or about to be logged out.",link:"https://github.com/runelite/runelite/wiki/Idle-Notifier"},{image:"/img/features/teamcape.png",title:"Team cape overlay",description:"Displays team cape wearer counts.",link:"https://github.com/runelite/runelite/wiki/Team-Capes"},{image:"/img/features/abyss.png",title:"Runecraft",description:"Displays minimap icons and clickboxes for abyssal rifts.",link:"https://github.com/runelite/runelite/wiki/Runecraft"},{image:"/img/features/agility.png",title:"Agility",description:"Displays clickboxes for agility courses, and counts the number of laps you have done.",link:"https://github.com/runelite/runelite/wiki/Agility"},{image:"/img/features/barbassault.png",title:"Barbarian Assault",description:"Displays a timer for the next change of horn commands.",link:"https://github.com/runelite/runelite/wiki/Barbarian-Assault"},{image:"/img/features/cannon.png",title:"Dwarf multicannon",description:"Displays the number of cannonballs left in your cannon, along with common cannon spots.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/chatcommands.png",title:"Chat commands",description:"Allows easy lookup of !level(s) and !price(s) from the chat box.",link:"https://github.com/runelite/runelite/wiki/Chat-Commands"},{image:"/img/features/clanchat.png",title:"Clan chat",description:"Adds the sender's rank to clan chat messages.",link:"https://github.com/runelite/runelite/wiki/Clan-Chat"},{image:"/img/features/discord.png",title:"Discord integration",description:"Integrates with Discord's Rich Presence to display what you're doing in the game.",link:"https://github.com/runelite/runelite/wiki/Discord",home:!0},{image:"/img/features/itemstats.png",title:"Item stats",description:"Displays information about food and potion effects.",link:"https://github.com/runelite/runelite/wiki/Item-Stats"},{image:"/img/features/jewellerycount.png",title:"Jewellery charges",description:"Displays the number of charges that your jewellery has.",link:"https://github.com/runelite/runelite/wiki/Jewellery-Count"},{image:"/img/features/lowdetail.png",title:"Low detail mode",description:"Enables low detail mode, removing some of the game's eye candy.",link:"https://github.com/runelite/runelite/wiki/Low-Detail"},{image:"/img/features/mlm.png",title:"Motherlode Mine",description:"Marks veins and rock obstacles in the Motherlode Mine.",link:"https://github.com/runelite/runelite/wiki/Motherload-Mine"},{image:"/img/features/poh.png",title:"Player-owned houses",description:"Displays minimap icons and marks unlit/lit burners.",link:"https://github.com/runelite/runelite/wiki/Player-owned-House"},{image:"/img/features/tileindicators.png",title:"Tile indicator",description:"Marks the tile you last clicked on.",link:"https://github.com/runelite/runelite/wiki/Tile-Indicators"},{image:"/img/features/wcing.png",title:"Woodcutting",description:"Displays information about the logs you are cutting.",link:"https://github.com/runelite/runelite/wiki/Woodcutting"},{image:"/img/features/zoom.png",title:"Zoom unlimiter",description:"Allows you to zoom past the default camera distance limits.",link:"https://github.com/runelite/runelite/wiki/Camera-Zoom"},{image:"/img/features/barrows.png",title:"Barrows",description:"Displays minimap information for the tunnel and marks the location of brothers.",link:"https://github.com/runelite/runelite/wiki/Barrows-Brothers"},{image:"/img/features/nmz.png",title:"Nightmare Zone",description:"Displays NMZ points/absorption and notifies you about expiring potions.",link:"https://github.com/runelite/runelite/wiki/Nightmare-Zone"},{image:"/img/features/puzzlebox.png",title:"Puzzle box solver",description:"Shows you where to click to solve puzzle boxes.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver",home:!0},{image:"/img/features/roguesden.png",title:"Rogues' Den",description:"Marks tiles and clickboxes to help you traverse the maze.",link:"https://github.com/runelite/runelite/wiki/Rogues%27-Den"},{image:"/img/features/raids.png",title:"Raid scouter",description:"Displays the current layout of raids and tracks the raid duration.",link:"https://github.com/runelite/runelite/wiki/Chambers-of-Xeric"},{image:"/img/features/blastfurnace.png",title:"Blast Furnace",description:"Shows your current bars/ores and marks the clickbox of the conveyor belt.",link:"https://github.com/runelite/runelite/wiki/Blast-Furnace"},{image:"/img/features/minimapdots.png",title:"Minimap dot customizer",description:"Customizes the color of minimap dots.",link:"https://github.com/runelite/runelite/wiki/Minimap"},{image:"/img/features/kourend.png",title:"Arceuus Library",description:"Shows you where books are in the Arceuus Library.",link:"https://github.com/runelite/runelite/wiki/Kourend-Library"},{image:"/img/features/ge.png",title:"Grand Exchange offers",description:"Lists your current Grand Exchange offers.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/cannontiles.png",title:"Cannon double hit spots",description:"Shows you where to position enemies for double cannonball hits.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/gesearch.png",title:"Grand Exchange lookup",description:"Quickly price-check any item on the Grand Exchange.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/newsfeed.png",title:"News feed",description:"Displays the latest RuneLite blog posts, OldSchool RuneScape news, and a Twitter feed of JMods.",link:"https://github.com/runelite/runelite/wiki/News-Feed"},{image:"/img/features/stretchedfixed.png",title:"Stretched fixed mode",description:"Stretches the game to the size of your window while in fixed mode.",link:"https://github.com/runelite/runelite/wiki/Stretched-Fixed-Mode"},{image:"/img/features/regen.png",title:"Regen timers",description:"Tracks and displays the hitpoints & special attack regen timers.",link:"https://github.com/runelite/runelite/wiki/Regeneration-Meter"},{image:"/img/features/menuswap.png",title:"Menu entry swapping",description:"Swaps the left-click actions of certain objects.",link:"https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper"},{image:"/img/features/bankeval.png",title:"Bank evaluator",description:"Displays your bank's total value based on GE and alch prices.",link:"https://github.com/runelite/runelite/wiki/Bank-Value"},{image:"/img/features/npctag.png",title:"NPC tagging",description:"Tags and keeps track of an NPC.",link:"https://github.com/runelite/runelite/wiki/NPC-Indicators"},{image:"/img/features/herbiboar.png",title:"Herbiboar",description:"Highlights the path and objects to search at the end of the trail.",link:"https://github.com/runelite/runelite/wiki/Herbiboar"},{image:"/img/features/prayerorder.png",title:"Prayer reordering",description:"Allows you to drag-and-drop prayers in your prayer book.",link:"https://github.com/runelite/runelite/wiki/Reorder-Prayers"},{image:"/img/features/tithefarm.png",title:"Tithe Farm",description:"Displays timers for the farming patches within the Tithe farm minigame.",link:"https://github.com/runelite/runelite/wiki/Tithe-Farm"},{image:"/img/features/moveableoverlay.png",title:"Custom overlay position",description:"Allows you to move RuneLite overlays to any position on the screen."},{image:"/img/features/daily.png",title:"Daily task indicators",description:"Notifies you on login what daily tasks you are able to complete.",link:"https://github.com/runelite/runelite/wiki/Daily-Task-Indicator"},{image:"/img/features/favor.png",title:"Miscellania favor",description:"Displays your current favor and treasury in the Kingdom of Miscellania.",link:"https://github.com/runelite/runelite/wiki/Kingdom-of-Miscellania"},{image:"/img/features/shiftclick.png",title:"Shift click configuration",description:"Allows you to change/set shift click actions on items.",link:"https://github.com/runelite/runelite/wiki/Shift-Click-Configuration"},{image:"/img/features/banktags.png",title:"Bank tags",description:"Allows you to set searchable tags on items for your bank.",link:"https://github.com/runelite/runelite/wiki/Bank-Tags",home:!0},{image:"/img/features/farmingtracker.png",title:"Farming Tracker",description:"Displays current farming patches and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"},{image:"/img/features/tearsofguthix.png",title:"Tears of Guthix",description:"Displays the remaining time for streams of tears.",link:"https://github.com/runelite/runelite/wiki/Tears-Of-Guthix"},{image:"/img/features/deathlocation.png",title:"Death Indicator",description:"Displays your last death location and on which world.",link:"https://github.com/runelite/runelite/wiki/Death-Indicator"},{image:"/img/features/fairyringsearch.png",title:"Fairy Ring Filter",description:"Allows you to filter the fairy ring destination menu.",link:"https://github.com/runelite/runelite/wiki/Fairy-Rings"},{image:"/img/features/inventorytags.png",title:"Inventory Tags",description:"Allows you to assign group tags to inventory items.",link:"https://github.com/runelite/runelite/wiki/Inventory-Tags"},{image:"/img/features/inventoryviewer.png",title:"Inventory Viewer",description:"Displays an overlay of your current inventory.",link:"https://github.com/runelite/runelite/wiki/Inventory-Viewer"},{image:"/img/features/lightboxsolver.png",title:"Light Box Puzzle Solver",description:"Solves light box puzzles during clue scrolls.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver"},{image:"/img/features/prayerbar.png",title:"Prayer Bar",description:"Displays a prayer bar underneath your hitpoints bar.",link:"https://github.com/runelite/runelite/wiki/Prayer"},{image:"/img/features/birdhouses.png",title:"Birdhouse Timers",description:"Displays birdhouses and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"}]},518:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i.n(n),r=i(4),s=i(0),o=i(37),l=i(207),c=i(102),u=i(28),m=i(29),d=i(32),p=i(30),h=i(31),g=i(59),f=i(347),b=i.n(f),k=i(499),y=i(500),w=i(519),R=i(10),v=i(57),O=i(25),j=i(114),x=i.n(j),D=function(e){var t=e.url,i=e.message,n=e.author,a=e.date;return t?Object(s.c)("div",null,Object(s.c)("b",null,"Latest commit:")," ",Object(s.c)("a",{href:t,style:{color:"cyan"}},i)," ","by"," ",Object(s.c)("a",{href:n.url?n.url:t,style:{color:"cyan"}},n.avatar?Object(s.c)("span",null,Object(s.c)("img",{src:n.avatar,alt:"Avatar",class:"rounded icon"})," "):Object(s.c)("noscript",null),n.name)," ",Object(s.c)("span",{class:"text-muted"},x()(a))):Object(s.c)("noscript",null)};var S=function(e){function t(e){var i;return Object(u.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleScroll=i.handleScroll.bind(Object(g.a)(Object(g.a)(i))),i.state={interval:0},i}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleScroll",value:function(){var e=document.getElementById("jumbo"),t=e.offsetTop+e.offsetHeight-document.getElementsByClassName("navbar")[0].offsetHeight,i=window.scrollY||window.pageYOffset||document.body.scrollTop;this.props.navbarDark?i>t&&this.props.makeNavbarDefault():i<=t&&this.props.makeNavbarDark()}},{key:"componentDidMount",value:function(){var e=this;this.setState({interval:setInterval(function(){return e.props.nextHeroImage(e.props.images.length)},8e3)}),this.handleScroll(),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval),this.props.makeNavbarDefault(),document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(e){var t=e.title,i=e.description,n=e.buttons,a=e.release,r=e.commit,o=e.playing,l=e.heroImage,c=Object(k.a)(function(e){return!e.dropdown})(n),u=Object(k.a)(function(e){return e.dropdown})(n),m=Object(y.a)(function(e){return"all"===e.os})(u),d=Object(y.a)(function(e){return function(e){if(!b.a.os.family)return!1;var t=b.a.os.architecture,i=b.a.os.family.toLowerCase();return-1!==i.indexOf("os x")||-1!==i.indexOf("mac")?"macOS"===e:-1!==i.indexOf("win")?"Windows32"===e:-1!==i.indexOf("linux")?e===(64===t?"Linux64":"Linux32"):e===i}(e.os)})(u)||m;return m!==d&&(c=Object(w.a)(m)(c)),Object(s.c)("div",{class:"jumbotron jumbotron-fluid",style:{backgroundImage:"url(".concat(Object(v.a)(this.props.images[l]),")")},id:"jumbo"},Object(s.c)("div",{class:"jumbotron-cell"},Object(s.c)("div",{class:"jumbotron-body"},Object(s.c)("h1",{class:"display-2"},t),Object(s.c)("p",{class:"lead"},i),Object(s.c)("p",{class:"lead"},Object(s.c)("div",{class:"btn-group dropdown"},Object(s.c)("a",{class:"btn btn-"+d.color,href:d.link},Object(s.c)("i",{class:d.icon})," ",d.text),Object(s.c)("button",{class:"btn dropdown-toggle dropdown-toggle-split btn-"+d.color},Object(s.c)("span",{class:"sr-only"},"Toggle Dropdown")),Object(s.c)("div",{class:"dropdown-menu",style:{textShadow:"none"}},u.map(function(e){var t=e.link,i=e.icon,n=e.text;return Object(s.c)("a",{class:"dropdown-item",href:t,native:!0},Object(s.c)("i",{class:i})," ",n)}))),c.map(function(e){var t=e.link,i=e.color,n=e.icon,a=e.text;return Object(s.c)("span",{key:t}," ",Object(s.c)("a",{class:"btn btn-"+i,href:t},Object(s.c)("i",{class:n})," ",a),Object(s.c)("br",{style:{marginBottom:10},class:"d-md-none"}))})),Object(s.c)("div",{class:"small"},Object(s.c)(D,r),Object(s.c)("b",null,"Latest release:")," ",Object(s.c)("a",{href:"#news",style:{color:"cyan"}},a||"unknown"),Object(s.c)("br",null),Object(s.c)("b",null,"Players online:")," ",o||"unknown"))))}}]),t}(s.a),C=Object(o.b)(function(e){return{navbarDark:e.app.navbarDark,heroImage:e.app.heroImage}},function(e){return Object(R.b)({makeNavbarDark:O.b,makeNavbarDefault:O.c,nextHeroImage:O.d},e)})(S),I=i(120),L=i(5),M=i(36),T=i.n(M),P=i(208),z=i(61),A=i(51),N=i(12),B=i(11),E=i(110),F=function(){var e=Object(r.a)(a.a.mark(function e(t){var i,n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.fetchCommits,t.fetchRepository,n=t.fetchReleases,r=t.fetchSessionCount,i(),e.next=4,n();case 4:return e.next=6,r();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(o.b)(function(e,t){return{commit:Object(L.e)(e,t),release:Object(L.f)(e,t),sessionCount:Object(z.c)(e,t)}},function(e){return Object(R.b)({fetchCommits:L.b,fetchReleases:L.c,fetchRepository:L.d,fetchSessionCount:z.b},e)})(Object(E.a)(F)(function(e){var t=e.commit,i=e.release,n=e.sessionCount;return Object(s.c)("div",{style:{height:"inherit"}},Object(s.c)(A.a,{title:"".concat(T.a.title," - Open Source Old School RuneScape Client"),description:T.a.description}),Object(s.c)(C,Object.assign({},T.a,{release:i.name,commit:t,playing:n})),Object(s.c)(c.a,null,Object(s.c)("h1",null,"Features"," ",Object(s.c)(N.a,{href:"/features",style:{fontSize:18}},"See all features...")),Object(s.c)("hr",null),Object(s.c)("div",{class:"row"},P.a.filter(function(e){return e.home}).map(function(e){return Object(s.c)(l.a,Object.assign({key:e.title},e))})),Object(s.c)("h1",{id:"news"},"Latest news"," ",Object(s.c)(N.a,{href:"/blog",style:{fontSize:18}},"See all news...")),Object(s.c)("hr",null),Object(s.c)(B.a,{getComponent:function(){return Object(I.c)().then(function(e){var t=e.body;return Object(s.c)("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:t}})})}})))}))}}]);
//# sourceMappingURL=1.39a9fd8d.chunk.js.map