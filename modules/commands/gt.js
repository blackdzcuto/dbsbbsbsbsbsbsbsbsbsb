module.exports.config = {
  name: "gt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vy",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "giới thiệu về Hải Harin",
  usages: "thông tin AD",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/ok6mM97.mp4",
"https://i.imgur.com/c8mEtUu.mp4",
"https://i.imgur.com/ehfoz8o.mp4",
"https://i.imgur.com/erjaE6w.mp4",
"https://i.imgur.com/gnWAQTJ.mp4",
"https://i.imgur.com/UNd7YFG.mp4"
  ];
  var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━
=== [ 𝗚𝗧 𝗩𝗘̂̀ 𝗔𝗗𝗠𝗜𝗡 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧
🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟔+
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟐𝟓/𝟎𝟔/𝟐𝟎𝟎𝟔
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: Đ𝐚̃ 𝐜𝐨́ 𝐜𝐡𝐮̉
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐇𝐚̀ 𝐍𝐨̣̂𝐢
🏠 𝗡𝗼̛𝗶 𝗼̛̉: Đ𝐚𝐦 𝐑𝐨̂𝐧𝐠, 𝐋𝐚̂𝐦 Đ𝐨̂̀𝐧𝐠 
💞 𝗖𝘂𝗻𝗴: 𝐂𝐮̛̣ 𝐆𝐢𝐚̉𝐢 
💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧 
🌐 𝗖𝗮́𝗰 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 𝗔𝗗𝗠𝗜𝗡 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ↓
→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟭: https://cardinfo-harin.thamthuong1aido.repl.co\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟮: https://cardinfo-harin.thamthuong1aido.repl.co/hai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟯: https://cardinfo-harin.thamthuong1aido.repl.co/pth\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟰: https://cardinfo-harin.thamthuong1aido.repl.co/pthai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟱: https://cardin4-harin.thamthuong1aido.repl.co
💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻
☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟑𝟖𝟗𝟏𝟎𝟐𝟕𝟑𝟖
→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝟭: https://www.facebook.com/PTH250609 
→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝟮: https://www.facebook.com/PTH2506091
----𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧  ----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 