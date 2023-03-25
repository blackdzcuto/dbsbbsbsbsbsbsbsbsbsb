const fs = require("fs");
module.exports.config = {
	name: "ttbot",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "",//ko bt của ai nhưng fix by Hải harin~~ 
	description: "Xem tất cả thông tin về bot",
	commandCategory: "thông tin",
	usages: "",
    cooldowns: 5
};
module.exports.onLoad = () => {

  const dirMaterial = __dirname + `/thongtin/`;
  if (!fs.existsSync(dirMaterial + "thongtin")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "tt.gif")) request("https://i.imgur.com/rd72qji.gif").pipe(fs.createWriteStream(dirMaterial + "tt.gif"));
}
module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
  const time = process.uptime(),
  hours = Math.floor(time / (60 * 60)),
  minutes = Math.floor((time % (60 * 60)) / 60),
  seconds = Math.floor(time % 60);
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
			attachment: (await axios.get((await axios.get(`https://API-1.haiphung2.repl.co/getLink2`)).data.url, {
                    responseType: 'stream'
                })).data},event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====\n━━━━━━━━━━━━━━━━━━\n🐼 𝗖𝗮́𝗰 𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐼\n\n🌸 𝗱𝘂̀𝗻𝗴 /𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́\n💞 𝗱𝘂̀𝗻𝗴 /𝗰𝗵𝗲𝗰𝗸 𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻\n🌷 𝗱𝘂̀𝗻𝗴 /𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸\n💕 /𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 \n💍 /𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 \n🕊️ /𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿\n☠️ /𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰\n💝 /𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺\n🎥 /𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁\n🎼 /𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀\n👤 /𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n🔗 /𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿\b💗 /𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆\n🌹 /𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻\n💞 𝗾𝗿: 𝗹𝗮̀𝗺 𝗾𝗿\n━━━━━━━━━━━━━━━━━━\n======『 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 𝗣𝗧𝗛 』======", 
			attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/congchua`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗔𝗣𝗜 ] ===\n━━━━━━━━━━━━━━━━━━\n⚠️ 𝗔𝗗𝗠𝗜𝗡 𝗰𝗵𝘂̛𝗮 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗯𝗮̣𝗻 đ𝗼̛̣𝗶 𝗔𝗗𝗠𝗜𝗡 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝗽 𝗹𝗮̣𝗶 𝗿 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮̀ 𝘁𝗵𝗮𝗻𝗸", 
      attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data},  event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━\n=== [ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗔𝗣𝗜 ] ===\n━━━━━━━━━━━━━━━━━━\n🌐 𝗖𝗮́𝗰 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 𝗔𝗗𝗠𝗜𝗡 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ↓\n\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟭: https://cardinfo-harin.thamthuong1aido.repl.co\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟮: https://cardinfo-harin.thamthuong1aido.repl.co/hai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟯: https://cardinfo-harin.thamthuong1aido.repl.co/pth\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟰: https://cardinfo-harin.thamthuong1aido.repl.co/pthai\n→ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟱: https://cardin4-harin.thamthuong1aido.repl.co\n\n⚠️ 𝗖𝗮́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗻𝗵𝗮̂́𝗽 𝘃𝗼̂ 𝗼𝗿 𝗰𝗼𝗽 𝗹𝗶𝗻𝗸 𝗹𝗲̂𝗻 𝘁𝗿𝗶̀𝗻𝗵 𝗱𝘂𝘆𝗲̣̂𝘁 đ𝗲̂̉ 𝘅𝗲𝗺 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗔𝗗 𝗻𝗵𝗮", 
		attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data},  event.threadID, event.messageID); 
				break;
		case "5":
		api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return	api.sendMessage({
				body: `━━━━━━━━━━━━━━━━━\n=== [ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n🥤 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n🥀 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴: ${global.config.PREFIX}\n❄️ 𝗔𝗗𝗠𝗜𝗡 𝘃𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼𝘁: 𝗣𝗵𝘂̀𝗻𝗴 𝗧𝘂𝗮̂́𝗻 𝗛𝗮̉𝗶\n💥 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆\n🔗 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${client.commands.size}\n 🏠 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n👤 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====\n🎮 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲: 𝗠𝗶𝗿𝗮𝗶 𝘃𝟮\n🐳 𝗣𝗿𝗲𝗳𝗶𝘅 : /\n💾 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟮.𝟭𝟰\n🌐 𝗖𝗼𝗻𝘁𝗮𝗰 💻\n☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 𝟬𝟯𝟴𝟵𝟭𝟬𝟮𝟳𝟯𝟴\n→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/PTH2506091\n⚠️𝗡𝗲̂́𝘂 𝘁𝗿𝗼𝗻𝗴 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗴𝗮̣̆𝗽 𝘃𝗮̂́𝗻 đ𝗲̂̀ 𝗴𝗶̀ 𝘁𝗵𝗶̀ 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗔𝗗𝗠𝗜𝗡 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗮̆́𝗰 𝗽𝗵𝘂̣𝗰 𝗻𝗵𝗮`, 
				attachment: (await axios.get((await axios.get(`https://API-HR.maiyeuhtt.repl.co/images/robot`)).data.url, {
                    responseType: 'stream'
                })).data},  event.threadID, event.messageID); 
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
	return api.sendMessage({body: "==== [ 𝗠𝗲𝗻𝘂 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 ] ====\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗔𝗗𝗠𝗜𝗡 ( 𝗔𝗗𝗠𝗜𝗡 𝗖𝗵𝗶́𝗻𝗵 ) 🏆\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 🎉\n𝟯. 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗔𝗣𝗜 🏆\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 🔗\n𝟱. 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗕𝗼𝘁 🥀\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘁𝗿𝗲̂𝗻 𝗻𝗵𝗮"
            ,attachment: fs.createReadStream(__dirname + "/thongtin/tt.gif")}, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
                                                                                                                   }