module.exports.config = {
	name: "di",
		version: "9.9.9",
		hasPermssion: 0,
		credits: "Nhí Badboiz",
		description: "cho",
		commandCategory: "noprefix",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("đĩ")==0 || (event.body.indexOf("đĩ")==0)) {
			var msg = {
					body: "cái mặt mi mới đĩ đó ở đó mà chửi người khác",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`đĩ cái lòn bàn tơ 🤡`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	const fs = global.nodemodule["fs-extra"];
if (event.body.indexOf("tớ tvm")==0 || (event.body.indexOf("mình là tvm")==0|| (event.body.indexOf("em là tvm")==0 ))){
			var msg = {
					body: "dạ bot chào tvm nha, chúc bạn 1 ngày tốt lành",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`mình là tvm nha mọi người ❤️`, event.threadID, event.senderID);
}

    }