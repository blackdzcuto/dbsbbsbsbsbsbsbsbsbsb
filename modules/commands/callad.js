module.exports.config = {
	name: "callad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "",
	description: "Thông báo lỗi của bot đến admin hoặc góp ý",
	commandCategory: "Dành cho người dùng",
	usages: "[lỗi gặp phải hoặc ý kiến]",
	cooldowns: 15
}, module.exports.handleReply = async function({
	api: e,
	args: n,
	event: a,
	Users: s,
	handleReply: o
}) {
	var i = await s.getNameUser(a.senderID);
	switch (o.type) {
		case "reply":
			var t = global.config.ADMINBOT;
			for (let n of t) e.sendMessage({
				body: "𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐮̛̀ " + i + ":\n" + a.body,
				mentions: [{
					id: a.senderID,
					tag: i
				}]
			}, n, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				messageID: n.messageID,
				messID: a.messageID,
				author: a.senderID,
				id: a.threadID,
				type: "calladmin"
			})));
			break;
		case "calladmin":
			e.sendMessage({
				body: `• 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐮̛̀ 𝐚𝐝𝐦𝐢𝐧 ${i} Đ𝐞̂́𝐧 𝐛𝐚̣𝐧:\n--------\n${a.body}\n--------\n• 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐠𝐮̛̉𝐢 𝐛𝐚́𝐨 𝐜𝐚́𝐨 𝐯𝐞̂̀ 𝐚𝐝𝐦𝐢𝐧`,
				mentions: [{
					tag: i,
					id: a.senderID
				}]
			}, o.id, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				author: a.senderID,
				messageID: n.messageID,
				type: "reply"
			})), o.messID)
	}
}, module.exports.run = async function({
	api: e,
	event: n,
	args: a,
	Users: s,
	Threads: o
}) {
	if (!a[0]) return e.sendMessage("Bạn chưa nhập nội dung cần báo cáo", n.threadID, n.messageID);
	let i = await s.getNameUser(n.senderID);
	var t = n.senderID,
		d = n.threadID;
	let r = (await o.getData(n.threadID)).threadInfo;
	var l = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	e.sendMessage(`Vào lúc: ${l}\nĐã gửi báo cáo của bạn đến các admin bot`, n.threadID, (() => {
		var s = global.config.ADMINBOT;
		for (let o of s) {
			let s = r.threadName;
			e.sendMessage(`‎📱====[ 𝐂𝐀𝐋𝐋 𝐀𝐃𝐌𝐈𝐍 ]====📱\n[👤] 𝗕𝗮́𝗼 𝗰𝗮́𝗼 𝘁𝘂̛̀: ${i}\n[❗] 𝗜𝗗 𝗨𝘀𝗲𝗿: ${t}\n[👨‍👩‍👧‍👧] 𝗕𝗢𝗫: ${s}\n[🔰] 𝗜𝗗 𝗕𝗢𝗫: ${d}\n[💌] 𝗜𝗻𝗯𝗼𝘅: ${a.join(" ")}\n[⏰] 𝗧𝗶𝗺𝗲: ${l}`, o, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				messageID: a.messageID,
				author: n.senderID,
				messID: n.messageID,
				id: d,
				type: "calladmin"
			})))
		}
	}))
};