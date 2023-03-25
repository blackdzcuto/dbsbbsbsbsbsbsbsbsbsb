module.exports.config = {
  name: "uptime",	
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
function byte2mb(bytes) {
  const units = ['𝗕𝘆𝘁𝗲𝘀', '𝗞𝗕', '𝗠𝗕', '𝗚𝗕', '𝗧𝗕', '𝗣𝗕', '𝗘𝗕', '𝗭𝗕', '𝗬𝗕'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const request = require('request');
  const res = await axios.get(`https://API-HR.maiyeuhtt.repl.co/thinh`);
  var poem = res.data.data;
const moment = require("moment-timezone");var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const timeStart = Date.now();
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  if (body.toLowerCase() == "upt") {
       api.sendMessage({body: `=====「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」=====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 ${global.config.BOTNAME} đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${client.commands.size}\n💻 𝗖𝗣𝗨 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${pidusage.cpu.toFixed(1)}\n📈 𝗥𝗮𝗺 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${byte2mb(pidusage.memory)}\n⚙️ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart} 𝗠𝘀\n=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====\n🎮 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲: 𝗠𝗶𝗿𝗮𝗶 𝘃𝟮\n🐳 𝗣𝗿𝗲𝗳𝗶𝘅 : /\n💾 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟏.𝟐.𝟏𝟒\n━━━━━━━━━━━━━━━━━━\n====『 ${gio} || ${thu} 』====`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/robot`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
  if (body.toLowerCase() == "h") {
       api.sendMessage({body: `=====「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」=====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 ${global.config.BOTNAME} đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${client.commands.size}\n💻 𝗖𝗣𝗨 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${pidusage.cpu.toFixed(1)}\n📈 𝗥𝗮𝗺 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${byte2mb(pidusage.memory)}\n⚙️ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart} 𝗠𝘀\n=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====\n🎮 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: 𝗠𝗶𝗿𝗮𝗶 𝘃𝟮\n🐳 𝗣𝗿𝗲𝗳𝗶𝘅 : /\n💾 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟏.𝟐.𝟏𝟒\n━━━━━━━━━━━━━━━━━━\n====『 ${gio} || ${thu} 』====`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/robot`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
  if (body.toLowerCase() == "hải") {
       api.sendMessage({body: `=====「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」=====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 ${global.config.BOTNAME} đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${client.commands.size}\n💻 𝗖𝗣𝗨 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${pidusage.cpu.toFixed(1)}\n📈 𝗥𝗮𝗺 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 : ${byte2mb(pidusage.memory)}\n⚙️ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart} 𝗠𝘀\n=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====\n🎮 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: 𝗠𝗶𝗿𝗮𝗶 𝘃𝟮\n🐳 𝗣𝗿𝗲𝗳𝗶𝘅 : /\n💾 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟏.𝟐.𝟏𝟒\n━━━━━━━━━━━━━━━━━━\n====『 ${gio} || ${thu} 』====`, attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/robot`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
}
module.exports.run = async ({ api, event, args, Threads }) => {
  global.client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID
		})
    }