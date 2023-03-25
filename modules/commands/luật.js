module.exports.config = {
  name: "luật",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vy",
  description: "phổ biến luật bot .",
  commandCategory: "xem luật bot",
  usages: "box chat",
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
"https://i.imgur.com/LoLnIR7.mp4",
      "https://i.imgur.com/KA0jvsR.mp4",
      "https://i.imgur.com/B2rOPLw.mp4",
      "https://i.imgur.com/TllZiwr.mp4",
    "https://i.imgur.com/T8V8kAV.mp4",
    "https://i.imgur.com/jgJeQYN.mp4",
    "https://i.imgur.com/jSbwaxi.mp4",
    "https://i.imgur.com/z3bPZnz.mp4",
    "https://i.imgur.com/1CE9sj3.mp4",
    "https://i.imgur.com/Ws3L323.mp4",
    "https://i.imgur.com/cNY1mvt.mp4",
    "https://i.imgur.com/kEBCYbs.mp4",
    "https://i.imgur.com/bUXaFiA.mp4",
    "https://i.imgur.com/iPQEmcj.mp4"
  ];
  var callback = () => api.sendMessage({body:`💖 𝐋𝐔𝐀̣̂𝐓 𝐒𝐔̛̉ 𝐃𝐔̣𝐍𝐆 𝐁𝐎𝐓 💖 ⚠ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐡𝐚̀𝐧𝐡 𝐧𝐠𝐡𝐢𝐞̂𝐦 𝐜𝐡𝐢̉𝐧𝐡 𝐭𝐫𝐚́𝐧𝐡 𝐛𝐢̣ 𝐛𝐚𝐧\n𝟏: 𝐊𝐡𝐨̂𝐧𝐠 𝐬𝐩𝐚𝐦 𝐥𝐞̣̂𝐧𝐡 𝐛𝐨𝐭, 𝐬𝐩𝐚𝐦 𝐩𝐫𝐞𝐟𝐢𝐱 𝐪𝐮𝐚́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐠𝐚̂𝐲 𝐝𝐢𝐞 𝐛𝐨𝐭, 𝐜𝐡𝐞𝐜𝐤𝐩𝐨𝐢𝐧𝐭 🚫\n𝟐: 𝐊𝐡𝐨̂𝐧𝐠 𝐠𝐚̂𝐲 𝐰𝐚𝐫 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 (𝐬𝐢𝐦, 𝐧𝐢𝐧𝐨) 𝐯𝐢̀ 𝐧𝐨́ 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐭𝐡𝐚̣̂𝐭 !\n𝟑: 𝐊𝐡𝐨̂𝐧𝐠 𝐥𝐚̣𝐦 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐚̀𝐨 𝐲́ 𝐱𝐚̂́𝐮\n𝟒: 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝟗 𝐥𝐚̂̀𝐧/𝟏𝟑𝟎𝐬\n𝟓: 𝐓𝐫𝐮̛𝐨̛̀𝐧𝐠 𝐡𝐨̛̣𝐩 𝐛𝐢̣ 𝐛𝐚𝐧 𝐚𝐝𝐦𝐢𝐧 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐠𝐢𝐚̉𝐢 𝐪𝐮𝐲𝐞̂́𝐭 𝐦𝐨̛̉ 𝐛𝐚𝐧 𝐧𝐡𝐞́.\n𝟔: 𝐂𝐚̂́𝐦 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐝𝐮̛𝐨̛́𝐢 𝐦𝐨̣𝐢 𝐡𝐢̀𝐧𝐡 𝐭𝐡𝐮̛́𝐜, 𝐜𝐡𝐮̛̉𝐢 𝐭𝐡𝐨𝐚̉𝐢 𝐦𝐚́𝐢 𝐧𝐞̂́𝐮 𝐧𝐡𝐮̛ 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐱𝐚̀𝐢 𝐛𝐨𝐭 𝐯𝐚̀ 𝐲́ 𝐭𝐡𝐮̛́𝐜 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐡𝐮̛ 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜\n𝐇𝐚̃𝐲 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐦𝐨̣̂𝐭 𝐜𝐚́𝐜𝐡 𝐭𝐡𝐨̂𝐧𝐠 𝐦𝐢𝐧𝐡 𝐯𝐚̀ 𝐲́ 𝐭𝐡𝐮̛́𝐜 🎀\n🌸💞🌸  𝐁𝐨𝐭•𝐓♡𝐌𝐢𝐤𝐚 🌸💞🌸\n💟 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${client.commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲\n📩 𝐌𝐨̣𝐢 𝐭𝐡𝐚̆́𝐜 𝐦𝐚̆́𝐜 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭\n🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/PTH2506091\n📱 𝐙𝐚𝐥𝐨 : 𝟎𝟑𝟖𝟗𝟏𝟎𝟐𝟕𝟑𝟖\n🔰 𝐃𝐮̀𝐧𝐠 /𝐦𝐞𝐧𝐮 𝐚𝐥𝐥 đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡\n🐳 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 