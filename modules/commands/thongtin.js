const fs = require("fs");
module.exports.config = {
	name: "thongtin",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "JRT fix by Hải harin~~", 
	description: "Xem thông tin về Hải Harin",
	commandCategory: "thông tin",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐜𝐡𝐢́𝐧𝐡 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://www.facebook.com/PTH2506091", 
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐩𝐡𝐮̣ ====\n━━━━━━━━━━━━━━━━━━\n➝ https://www.facebook.com/PTHNHMIKA", 
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐛𝐨𝐭 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://www.facebook.com/PTH250609", 
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://instagram.com/pth_mika", 
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐑𝐞𝐩𝐥𝐢𝐭 𝟏 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://replit.com/@Thamthuong1aido", 
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐑𝐞𝐩𝐥𝐢𝐭 𝟐 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://replit.com/@HaiPhung2", 
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐑𝐞𝐩𝐥𝐢𝐭 𝟑 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://replit.com/@HaiTuan3", 
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝟏 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://phungtuanhai.haituan3.repl.co/", 
			}, event.threadID, event.messageID); 
			break;
    case "9":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝟐 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://phungtuanhai.haituan3.repl.co/hai",
			}, event.threadID, event.messageID); 
			break;
    case "10":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐖𝐞𝐛 𝟑 ====\n━━━━━━━━━━━━━━━━━━\n➝ https://phungtuanhai.haituan3.repl.co/pth",
        }, event.threadID, event.messageID); 
			break;
    case "11":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐌𝐚𝐢𝐥 ====\n━━━━━━━━━━━━━━━━━━\n➝ phungtuanhai03@gmail.com",
}, event.threadID, event.messageID); 
			break;
    case "12":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐒𝐃𝐓  ====\n━━━━━━━━━━━━━━━━━━\n➝ 0389102738",
        }, event.threadID, event.messageID); 
			break;
    case "13":
			api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐙𝐚𝐥𝐨  ====\n━━━━━━━━━━━━━━━━━━\n➝ https://i.imgur.com/hr4lBrA.jpg",
			}, event.threadID, event.messageID); 
                break;
    case "14":
                
			api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
				body: "━━━━━━━━━━━━━━━━━━\n==== 𝐕𝐢𝐝𝐞𝐨 𝐠𝐭 𝐜𝐮̉𝐚 𝐀𝐃𝐌𝐈𝐍 (𝐜𝐡𝐢́𝐧𝐡) 𝐧𝐞̀ 𝐛𝐚𝐛𝐲  ====\n━━━━━━━━━━━━━━━━━━\n𝟏 𝐜𝐡𝐮́𝐭 𝐥𝐮̛𝐮 𝐲́ 𝐧𝐡𝐨̉ 𝐥𝐚̀: 𝐀𝐃𝐌𝐈𝐍 (𝐜𝐡𝐢́𝐧𝐡) 𝐡𝐨̛𝐢 đ𝐞̣𝐩 𝐜𝐨𝐧'𝐬 𝐧𝐨́ 𝐳𝐚𝐢 đ𝐨́ 𝐡𝐞𝐧𝐠 𝐚𝐢 𝐜𝐡𝐮̛𝐚 𝐍𝐲 𝐭𝐡𝐢̀ 𝐧𝐡𝐚̀𝐨 𝐯𝐨̂ 𝐭𝐚́𝐧 𝐡𝐞𝐧𝐠",
			attachment: fs.createReadStream(__dirname + "/thongtin/hải.mp4")}, event.threadID, event.messageID); 
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
	return api.sendMessage({ body: "== 🌐 𝐂𝐚́𝐜 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐀𝐃𝐌𝐈𝐍 🛸 ==" +
    "\n\n== 𝐃𝐬 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ==" +
                "\n𝟏. 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐜𝐡𝐢́𝐧𝐡" +
                "\n𝟐. 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐩𝐡𝐮̣" +
                "\n𝟑. 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐛𝐨𝐭" +
    "\n\n== 𝐂𝐚́𝐜 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦  ==" +
                "\n𝟒. 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐜𝐡𝐢́𝐧𝐡" +
     "\n\n== 𝐃𝐬 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐑𝐞𝐩𝐥𝐢𝐭 ==" +
                "\n𝟓. 𝐑𝐞𝐩𝐥𝐢𝐭 𝟏" +
                "\n𝟔. 𝐑𝐞𝐩𝐥𝐢𝐭 𝟐" +
                "\n𝟕. 𝐑𝐞𝐩𝐥𝐢𝐭 𝟑" +
    "\n\n== 𝐃𝐬 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 ==" +
                "\n𝟖. 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝟏" +
                "\n𝟗. 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝟐" +
                "\n𝟏𝟎. 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝟑" +
    "\n\n== 𝐂𝐚́𝐜 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐂𝐚́𝐜 𝐌𝐚𝐢𝐥 ==" +
    "\n𝟏𝟏. 𝐌𝐚𝐢𝐥" +
    "\n\n== 𝐂𝐚́𝐜 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐂𝐚́𝐜 𝐒𝐃𝐓 ==" +
    "\n𝟏𝟐. 𝐒𝐃𝐓" +
    "\n\n== 𝐂𝐚́𝐜 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐙𝐚𝐥𝐨  ==" +
    "\n𝟏𝟑. 𝐙𝐚𝐥𝐨"+
    "\n\n==𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐀𝐃𝐌𝐈𝐍 ( 𝐀𝐃𝐌𝐈𝐍 𝐜𝐡𝐢́𝐧𝐡 )=="+
    "𝟏𝟒.𝐗𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐠𝐭 𝐜𝐮̉𝐚 𝐀𝐃𝐌𝐈𝐍 (𝐜𝐡𝐢́𝐧𝐡)" +
                "\n\n🌈𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐞̂𝐦 𝐯𝐞̂̀ 𝐜𝐚́𝐜 𝐡𝐚̀𝐧𝐡 𝐭𝐢𝐧𝐡 𝐱𝐮𝐧𝐠 𝐪𝐮𝐚𝐧𝐡 𝐜𝐡𝐮́𝐧𝐠 𝐭𝐚 𝐧𝐡𝐞́  ❤"
            ,attachment: fs.createReadStream(__dirname + `/thongtin/thông tin.png`)}, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
  }