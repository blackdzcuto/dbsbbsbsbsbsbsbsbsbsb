module.exports.config = {
  name: "prefix",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Hải harin",
  description: "sos", 
  commandCategory: "Không cần dấu lệnh",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const request = require('request');
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "prefix") {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n[❤️]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗹𝗮̀: ${prefix}\n[🎀]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n[🌐]→ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n[💥]→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 \n[🛸]→ 𝗧𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n[👥] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n[🏘️] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[⏰] 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} (${thu})`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
      if (body.toLowerCase() == "dùng sao") {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n[❤️]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗹𝗮̀: ${prefix}\n[🎀]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n[🌐]→ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n[💥]→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 \n[🛸]→ 𝗧𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n[👥] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n[🏘️] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[⏰] 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} (${thu})`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
      }
if (body.toLowerCase() == "quên prefix r") {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n[❤️]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗹𝗮̀: ${prefix}\n[🎀]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n[🌐]→ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n[💥]→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 \n[🛸]→ 𝗧𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n[👥] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n[🏘️] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[⏰] 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} (${thu})`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
}
if (body.toLowerCase() == "prefix bot là gì") {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n[❤️]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗹𝗮̀: ${prefix}\n[🎀]→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n[🌐]→ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n[💥]→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 \n[🛸]→ 𝗧𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n[👥] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n[🏘️] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[⏰] 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} (${thu})`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
}
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
	event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
                          }