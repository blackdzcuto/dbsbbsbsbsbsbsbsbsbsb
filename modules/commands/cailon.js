module.exports.config = {
	name: "cailon",
		version: "9.9.9.9.9.9",
		hasPermssion: 0,
		credits: "Nhí Badboiz",
		description: "cailon",
		commandCategory: "game",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("cái lồn")==0 || (event.body.indexOf("Cái lồn")==0)) {
			var msg = {
					body: "mày đó thằng mặt lồn mặt cặc",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`thằng chó ăn cứt này mất dạy 💩`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
    }