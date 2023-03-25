module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async function({ api, event, Users, Threads }) {
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮𝐨̂̉𝐢 𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" : getHours < 12 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐫𝐮̛𝐚" : getHours < 17 ? "𝐛𝐮𝐨̂̉𝐢 𝐜𝐡𝐢𝐞̂̀𝐮" : getHours < 23 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢" : "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚"}`
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝟐'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝟑'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝟒'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝟓'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝟔'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝟕'
var author = await Users.getNameUser(event.author)
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const uid = (event.logMessageData.leftParticipantFbId);
  	const type = (event.author == event.logMessageData.leftParticipantFbId) ? `đ𝐚̃ 𝐭𝐮̛̣ 𝐭𝐚𝐲 𝐨𝐮𝐭 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 ` : `𝐯𝐢̀ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐧𝐞̂𝐧 𝐛𝐢̣ ${author} đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦`;
	const path = join(__dirname, "cache", "joinGif", "randomgif");
	const gifPath = join(path, `join.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });
	(typeof data.customLeave == "undefined") ? msg = "⎔ 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 ⎔\n━━━━━━━━━━━━━━━━━━\n➾ 𝐕𝐚̀𝐨 𝐋𝐮́𝐜: {gio} || {thu} || {buoi}\n➾ 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐎𝐮𝐭 𝐍𝐡𝐨́𝐦 𝐋𝐚̀ {name} {type}\n▭▭▭▭ [ 𝐈𝐍𝐅𝐎 ] ▭▭▭▭\n⋄ 𝐋𝐢𝐧𝐤 𝐅𝐁 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐊𝐢𝐜𝐤: https://www.facebook.com/{uidAuthor}\n⋄ 𝐋𝐢𝐧𝐤 𝐅𝐁 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐁𝐢̣ 𝐊𝐢𝐜𝐤: \nhttps://www.facebook.com/{uid}\n⋄ 𝐋𝐢𝐧𝐤 𝐌𝐞𝐬𝐬𝐚𝐠𝐞: m.me/{uid}\n⋄ 𝐓𝐚̣𝐦 𝐁𝐢𝐞̣̂𝐭: {name}\n━━━━━━━━━━━━━━━━━━\n⋄ 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐕𝐚̀ 𝐊𝐡𝐨̂𝐧𝐠 𝐁𝐚𝐨 𝐆𝐢𝐨̛̀ 𝐆𝐚̣̆𝐩 𝐋𝐚̣𝐢 \n⋄ 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝐒𝐨̛́𝐦 𝐓𝐢̀𝐦 Đ𝐮̛𝐨̛̣𝐜 𝐆𝐫𝐨𝐮𝐩 𝐏𝐡𝐮̀ 𝐇𝐨̛̣𝐩 𝐇𝐨̛𝐧 😼" : msg = data.customLeave;
   var nameAuthor = await Users.getNameUser(event.author)
	msg = msg.replace(/\{name}/g, name) .replace(/\{type}/g, type).replace(/\{buoi}/g, session).replace(/\{thu}/g, thu).replace(/\{gio}/g, gio).replace(/\{author}/g, nameAuthor).replace(/\{uidAuthor}/g, event.author).replace(/\{uid}/g, uid);

	const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.lenth != 0) {
		const pathRandom = join(__dirname, "cache", "joinGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}