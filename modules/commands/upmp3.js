module.exports.config = {
	name: "upmp3",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "",
	commandCategory: "Tiện ích",
	usages: "getLink",
	cooldowns: 5,
	dependencies: {
		"tinyurl": ""
	}
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios')
	let { messageReply, threadID } = event;
  const { API } = global.config
	if (event.type !== "message_reply") return api.sendMessage("→ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("→ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	else {
            let num = 0
            let msg = `⚙️==== [ 𝗨𝗣𝗟𝗢𝗔𝗗 𝗟𝗜𝗡𝗞 ] ====⚙️
━━━━━━━━━━━━━━━━━
✅ 𝗨𝗽 𝗹𝗼𝗮𝗱 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮̉𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗹𝗶𝗻𝗸
💓 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘂𝗽 đ𝘂̛𝗼̛̣𝗰: ${messageReply.attachments.length}\n━━━━━━━━━━━━━━━━━━
→ 𝗟𝗶𝗻𝗸 𝘃𝘂̛̀𝗮 𝘁𝗮̉𝗶\n`
          for (var i = 0; i < messageReply.attachments.length; i++) {
				var shortLink = await axios.post('https://API-1.last-namename.repl.co/uploads', 
        {
              url: messageReply.attachments[i].url
        });
            //api.sendMessage(messageReply.attachments[i].url,threadID);
				num +=1;
        msg += `${shortLink.data.url}\n`;
    	}
        api.sendMessage(msg,threadID);
        }
  }