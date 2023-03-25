const axios = require('axios');
const fse = require('fs-extra');
const DownLoad = async (url, file, ext) => {
var array = [];
  for (var i = 0; i < url.length; i++) {
const dest = __dirname + `/cache/${file}_${i}.${ext}`; 
await require('image-downloader').image({ url: url[i], dest }); 
 array.push(fse.createReadStream(dest));
//fse.unlinkSync(dest);
  };
return array;
}
const config = {
	name: 'ttgame',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'TáoTpk',
	description: 'Như tên',
	commandCategory: 'THÀNH VIÊN',
	usages: 'Hướng dẫn cách dùng những app có trên bot',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
const UID = sid
  
      const images = ['https://i.imgur.com/Lqj9hPM.jpg',
'https://i.imgur.com/xD5Enyh.jpg',
'https://i.imgur.com/Lqj9hPM.jpg',
'https://i.imgur.com/ynprxI3.jpg',
'https://i.imgur.com/XO9ieTm.jpg',
'https://i.imgur.com/j04wvw2.jpg',
'https://i.imgur.com/5asgNBf.jpg'];
      const pn = args[0][0] + config.name
      api.sendMessage({body: `===『𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲』===\n━━━━━━━━━━━━━━━\n→ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗮́𝗰 𝘁𝗿𝗼̀ 𝗰𝗵𝗼̛𝗶  𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n===== 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 =====\n→ 𝗕𝗮𝘂𝗰𝘂𝗮 + 𝗰𝗮́ , 𝘁𝗼̂𝗺 , 𝗰𝘂𝗮 , 𝗴𝗮̀ , 𝗻𝗮𝗶 , 𝗯𝗮̂̀𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝗯𝗮𝘂𝗰𝘂𝗮 𝗴𝗮̀ 𝟮𝟬𝟬)\n===== 𝗧𝗮̀𝗶 𝗫𝗶̉𝘂 =====\n𝘁𝗮𝗶𝘅𝗶𝘂 + 𝘁𝗮̀𝗶 𝗼𝗿 𝘅𝗶̉𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ${global.config.PREFIX}𝘁𝗮𝗶𝘅𝗶𝘂 𝘁𝗮̀𝗶 𝟮𝟬𝟬)\n→ 𝗧𝗮𝗶𝘅𝗶𝘂 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂 𝗹𝗲̉ 𝟮𝟬𝟬)\n===== 𝗦𝗹𝗼𝘁 =====\n→ 𝘀𝗹𝗼𝘁 + 𝗻𝗵𝗼 , 𝗱𝘂̛𝗮, đ𝗮̀𝗼 , 𝘁𝗮́𝗼 , 𝗱𝗮̂𝘂 , 𝟳 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 (𝘃𝗱: 𝘀𝗹𝗼𝘁 𝗻𝗵𝗼 𝟵𝟵𝟵)\n===== 𝗗𝗛𝗕𝗖 =====\n→ 𝗱𝗵𝗯𝗰𝘃 + 𝗿𝗲𝗽𝗹𝘆 𝗧𝗡 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 (𝗿𝗲𝗽𝗹𝘆 𝗧𝗡 đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́ 𝘃𝗮̀ 𝘃𝗶𝗲̣̂𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀ 𝗻𝗵𝗶̀𝗻 𝗵𝗶̀𝗻𝗵 đ𝗼𝗮́𝗻 𝘃𝗮̣̂𝘁 𝘃𝗮̀ 𝗿𝗲𝗽𝗹𝘆 𝗧𝗡 đ𝗲̂̉ 𝘁𝗿𝗼̛̉ 𝗹𝗼̛̀𝗶 𝗰𝗮̂𝘂 𝗯𝗮̣𝗻 đ𝗼𝗮́𝗻) 𝗻𝗲̂́𝘂 𝗸𝗵𝗼́ 𝗾𝘂𝗮́ 𝘁𝗵𝗶̀ 𝗯𝗮̣𝗻 𝗵𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 𝗧𝗡 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀ 𝗴𝗵𝗶 𝗹𝗮̀ 𝗴𝗼̛̣𝗶 𝘆́ 𝘃𝗮̀ 𝗯𝗼𝘁 𝘀𝗲̃ 𝗴𝗼̛̣𝗶 𝘆́ 𝗰𝗵𝗼 𝗯𝗮̣𝗻\n===== 𝗖𝗮𝗿𝗼 =====\n→ 𝘁𝘁𝘁 + 𝗫 𝗼𝗿 𝗢 𝘁𝘂̀𝘆 𝗯𝗮̣𝗻 𝘀𝗮𝘂 đ𝗼́ 𝗯𝗼𝘁 𝗴𝘂̛̉𝗶 𝗧𝗡 𝘁𝗵𝗶̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆 𝗧𝗡 𝗯𝗼𝘁 đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗼̂ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 đ𝗶\n===== 𝗖𝗟𝗠𝗠 =====\n→ 𝗰𝗹𝗺𝗺 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝘂̛𝗼̛̣𝗰(𝘃𝗱: 𝗰𝗹𝗺𝗺 𝗹𝗲̉ 𝟮𝟬𝟬)\n===== 𝗕𝗼̂́𝗰 𝗧𝗵𝗮̆𝗺 =====\n→ 𝗯𝗼𝗰𝘁𝗵𝗮𝗺 + 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗧𝗡 𝗯𝗼𝘁 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝘁𝘂̛̀ 𝟭 - 𝟲(𝘁𝗿𝗼𝗻𝗴 𝟲 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝘀𝗲̃ 𝗰𝗼́ 𝟲 𝗺𝗲̣̂𝗻𝗵 𝗴𝗶𝗮́ 𝘁𝘂̀𝘆 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻)\n===== 𝗦𝗶𝗲̂𝘂 𝗡𝗵𝗮̂𝗻 =====\n→ 𝘀𝗶𝗲𝘂𝗻𝗵𝗮𝗻 + đ𝗼̉ , 𝘃𝗮̀𝗻𝗴, 𝗯𝗶𝗲̂̉𝗻 , đ𝗲𝗻, 𝗯𝗮̣𝗰 , 𝘁𝗿𝗮̆́𝗻𝗴 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟱𝟬(𝘃𝗱: 𝘀𝗶𝗲𝘂𝗻𝗵𝗮𝗻 đ𝗼̉ 𝟵𝟵𝟵)`, attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}