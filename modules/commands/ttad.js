const fs = require("fs");
module.exports.config = {
	name: "ttad",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "",//ko bt của ai nhưng fix by Hải harin~~ 
	description: "Xem thông tin về Hải Harin",
	commandCategory: "thông tin",
	usages: "",
    cooldowns: 5, 
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const dirMaterial = __dirname + `/thongtin/`;
  if (!fs.existsSync(dirMaterial + "thongtin")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "thành.mp4")) request("https://i.imgur.com/DFrkGMA.mp4").pipe(fs.createWriteStream(dirMaterial + "thành.mp4"));
  if (!fs.existsSync(dirMaterial + "hải.mp4")) request("https://i.imgur.com/tGkexTn.mp4").pipe(fs.createWriteStream(dirMaterial + "hải.mp4"));
if (!fs.existsSync(dirMaterial + "tân.mp4")) request("https://i.imgur.com/VvFGuZ0.mp4").pipe(fs.createWriteStream(dirMaterial + "tân.mp4"));
  if (!fs.existsSync(dirMaterial + "tài.mp4")) request("https://i.imgur.com/lm6t4KR.mp4").pipe(fs.createWriteStream(dirMaterial + "toàn.mp4"));
  if (!fs.existsSync(dirMaterial + "khánh.mp4")) request("https://i.imgur.com/M0ealjd.mp4").pipe(fs.createWriteStream(dirMaterial + "khánh.mp4"));
  if (!fs.existsSync(dirMaterial + "ad.gif")) request("https://i.imgur.com/35dUpMj.gif").pipe(fs.createWriteStream(dirMaterial + "ad.gif"));
}
module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
  const {
    resolve
  } = require("path");
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢\n🎟️ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵:  𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧\n🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟕+\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵:  𝐍𝐚𝐦\n🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟐𝟓/𝟎𝟔/𝟐𝟎𝟎𝟔\n🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 \n💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: Đ𝐚̃ 𝐜𝐨́ 𝐜𝐡𝐮̉\n🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐇𝐚̀ 𝐍𝐨̣̂𝐢\n🏠 𝗡𝗼̛𝗶 𝗼̛̉: Đ𝐚𝐦 𝐑𝐨̂𝐧𝐠, 𝐋𝐚̂𝐦 Đ𝐨̂̀𝐧𝐠 \n💞 𝗖𝘂𝗻𝗴: 𝐂𝐮̛̣ 𝐆𝐢𝐚̉𝐢 \n💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...\n🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧 \n🌐 𝗖𝗮́𝗰 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 𝗔𝗗𝗠𝗜𝗡 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ↓\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟭: https://cardinfo-harin.thamthuong1aido.repl.co\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟮: https://cardinfo-harin.thamthuong1aido.repl.co/hai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟯: https://cardinfo-harin.thamthuong1aido.repl.co/pth\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟰: https://cardinfo-harin.thamthuong1aido.repl.co/pthai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟱: https://cardin4-harin.thamthuong1aido.repl.co\n💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟑𝟖𝟗𝟏𝟎𝟐𝟕𝟑𝟖\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝟭: https://www.facebook.com/PTH250609\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝟮: https://www.facebook.com/PTH2506091\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: \n➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁\n➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́\n➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅\n➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><\n➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵\n=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́", 
			attachment: fs.createReadStream(__dirname + "/thongtin/hải.mp4")
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: 𝗧𝗿𝗶𝗲̣̂𝘂 𝗧𝗮̀𝗶 𝗧𝗮̂𝗻\n🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟖+\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦\n🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟏𝟏/𝟎𝟕/𝟐𝟎𝟎𝟓\n🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 \n💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: Đ𝐚̃ 𝐜𝐨́ 𝐜𝐡𝐮̉\n🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: Đ𝐚̆𝐤 𝐋𝐚̆́𝐤\n🏠 𝗡𝗼̛𝗶 𝗼̛̉: Đ𝐚̆𝐤 𝐋𝐚̆́𝐤 \n💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...\n🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧\n💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟗𝟒𝟒𝟒𝟏𝟗𝟗𝟓𝟖\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/x.profiletrieutaitan.x\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: \n➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁\n➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́\n➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅\n➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><\n➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵\n=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́", 
			attachment: fs.createReadStream(__dirname + "/thongtin/tân.mp4")
			}, event.threadID, event.messageID);
			break;
		case "3":
                api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: 𝗛𝗮̀ Đ𝘂̛́𝗰 𝗧𝗼𝗮̀𝗻\n🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟕+\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦\n🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟏𝟏/𝟒/𝟐𝟎𝟎𝟕\n🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 \n💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡\n🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐓𝐡𝐚𝐧𝐡 𝐇𝐨𝐚́\n🏠 𝗡𝗼̛𝗶 𝗼̛̉: Đ𝐚̆𝐤 𝐋𝐚̆𝐤  \n💞 𝗖𝘂𝗻𝗴: 𝐂𝐮̛̣ 𝐆𝐢𝐚̉𝐢 \n💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...\n🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧\n💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟖𝟐𝟐𝟕𝟎𝟗𝟑𝟒𝟓\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/100000315391718\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: \n➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁\n➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́\n➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅\n➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><\n➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵\n=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́", 
      attachment: fs.createReadStream(__dirname + "/thongtin/toàn.mp4")
			}, event.threadID, event.messageID); 
			break;
		case "4":
                api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: 𝐇𝐨𝐚̀𝐧𝐠 𝐗𝐮𝐚̂𝐧 𝐓𝐡𝐚̀𝐧𝐡 \n🌹 𝗧𝘂𝗼̂̉𝗶: 𝟐𝟎+\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦\n🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟐𝟎/𝟏𝟎/𝟐𝟎𝟎𝟑\n🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 \n💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡\n🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐇𝐚̀ 𝐍𝐨̣̂𝐢\n🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐇𝐚̀ 𝐍𝐨̣̂𝐢\n💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...\n🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧\n💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟖𝟔𝟕𝟒𝟕𝟎𝟖𝟐𝟖\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/thanhthongthai2oo3\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: \n➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁\n➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́\n➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅\n➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><\n➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵\n=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́", 
			attachment: fs.createReadStream(__dirname + "/thongtin/thành.mp4")
			}, event.threadID, event.messageID); 
                
			break;
		case "5":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: 𝐓𝐫𝐮̛𝐨̛𝐧𝐠 𝐌𝐢𝐧𝐡 𝐊𝐡𝐚́𝐧𝐡\n🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟔+\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦\n🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟎𝟖/𝟎𝟕/𝟐𝟎𝟎𝟕\n🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 \n💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡\n🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐓𝐫𝐚̀ 𝐕𝐢𝐧𝐡\n🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐓𝐏𝐇𝐂𝐌\n💐 𝗚𝘂: 𝐃𝐞𝐭𝐡𝐰𝐰 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀, 𝐍𝐠𝐨𝐚𝐧...\n🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐡𝐨𝐚̀ đ𝐨̂̀𝐧𝐠,𝐯𝐮𝐢 𝐯𝐞̉,𝐥𝐚̂𝐮 𝐥𝐚̂𝐮 𝐡𝐨̛𝐢 𝐜𝐨̣𝐜,𝐡𝐢𝐞̂̀𝐧 \n💻 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟎𝟗𝟑𝟖𝟑𝟒𝟖𝟓𝟔𝟗\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/khanh.jon.39\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: \n➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁\n➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́\n➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅\n➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><\n➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵\n=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́", 
			attachment: fs.createReadStream(__dirname + "/thongtin/khánh.mp4")
			}, event.threadID, event.messageID); 
						break;
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("💟 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 12 || choose < 1) return api.sendMessage("🔰 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	const fs = require("fs");
	const { threadID, messageID, senderID } = event;
  const {
    resolve
  } = require("path");
	return api.sendMessage({body: "==== [ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗣𝗵𝘂̀𝗻𝗴 𝗧𝘂𝗮̂́𝗻 𝗛𝗮̉𝗶 ( 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵 ) 💓\n𝟮. 𝗧𝗿𝗶𝗲̣̂𝘂 𝗧𝗮̀𝗶 𝗧𝗮̂𝗻 🎉\n𝟯. 𝗛𝗮̀ Đ𝘂̛́𝗰 𝗧𝗼𝗮̀𝗻 🏆\n𝟰. 𝗛𝗼𝗮̀𝗻 𝗫𝘂𝗮̂𝗻 𝗧𝗵𝗮̀𝗻𝗵 🔥\n𝟱. 𝗧𝗿𝘂̛𝗼̛𝗻𝗴 𝗠𝗶𝗻𝗵 𝗞𝗵𝗮́𝗻𝗵 🥀\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺"
            ,attachment: fs.createReadStream(__dirname + "/thongtin/ad.gif")}, event.threadID, (error, info) => {
global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
        }