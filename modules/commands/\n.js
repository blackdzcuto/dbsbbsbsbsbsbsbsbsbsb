module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "cc",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":""
  }
};
const request = require('request');
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
	const res = await axios.get(`https://API-HR.maiyeuhtt.repl.co/thinh`);
var thinh = res.data.data;
const moment = require("moment-timezone");
  var gio =
moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
 if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
 const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
	api.sendMessage({body: `◆━━━◆『 𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧 』◆━━━━◆\n『⏰』 → 𝐓𝐢𝐦𝐞: ${gio} || ${thu} 💓\n『💌』 → 𝐓𝐡𝐢́𝐧𝐡 : ${thinh} \n『💿』 → 𝐇𝐚̃𝐲 𝐜𝐮̀𝐧𝐠 𝐭𝐨̂𝐢 𝐧𝐠𝐡𝐞 𝐛𝐚̉𝐧 𝐧𝐡𝐚̣𝐜 𝐧𝐚̀𝐲 𝐧𝐡𝐚 🎧\n『📌』 → 𝐍𝐨́ 𝐬𝐞̃ 𝐤𝐡𝐢𝐞̂́𝐧 𝐛𝐚̣𝐧 𝐯𝐮𝐢 𝐡𝐨̛𝐧 đ𝐚̂́𝐲 🎶\n『🎊』 → 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢 𝐜𝐡𝐨 𝐭𝐞̂́𝐭 𝐚̂𝐦: ${days} 𝐧𝐠𝐚̀𝐲 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n『🥀』 → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 ${h} 𝐠𝐢𝐨̛̀ ${p} 𝐩𝐡𝐮́𝐭 ${s} 𝐠𝐢𝐚̂𝐲\n『🥤』 → 𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 "🥀" 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐛𝐨𝐭`, attachment: (await axios.get((await axios.get(`https://api-hr.maiyeuhtt.repl.co/mp3`)).data.url,  {
                    responseType: 'stream'
                })).data},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🥀") return;
 api.unsendMessage(handleReaction.messageID);
        //var msg = `===== [ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗕𝗢𝗧 ] =====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 ${global.config.BOTNAME} đ𝗮̃ 𝗼𝗻𝗹 đ𝘂̛𝗼̛̣𝗰 ${h} 𝗚𝗶𝗼̛̀ ${p} 𝗣𝗵𝘂́𝘁 ${s} 𝗚𝗶𝗮̂𝘆\n⚙️ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁: ${global.config.version}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${client.commands.size}\n🖨️ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́: ${client.events.size} 𝗹𝗲̣̂𝗻𝗵 𝘀𝘂̛̣ 𝗸𝗶𝗲̣̂𝗻\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n💓 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${global.config.PREFIX}`
    var msg =`==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====\n━━━━━━━━━━━━━━━━━━\n🐼 𝗖𝗮́𝗰 𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐼\n\n🌸 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́\n💞 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸 𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻\n🌷 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸\n💕 ${global.config.PREFIX}𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 \n💍 ${global.config.PREFIX}𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 \n🕊️ ${global.config.PREFIX}𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿\n☠️ ${global.config.PREFIX}𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰\n💝 ${global.config.PREFIX}𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺\n🎥 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁\n🎼 ${global.config.PREFIX} 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀\n👤 ${global.config.PREFIX}𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n🔗 ${global.config.PREFIX}𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿\n🌹 ${global.config.PREFIX}𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻\n💞 ${global.config.PREFIX}𝗾𝗿: 𝗹𝗮̀𝗺 𝗾𝗿\n━━━━━━━━━━━━━━━━━━\n======『 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 𝗣𝗧𝗛 』======`
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://api-hr.maiyeuhtt.repl.co/images/robot`)).data.url,  {
                    responseType: 'stream'
                })).data},event.threadID); 
                                                               }