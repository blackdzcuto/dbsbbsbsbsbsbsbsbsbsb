module.exports.config = {
    name: "bye2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Hải harin",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
const moment = require("moment-timezone");var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `[ 𝐆𝐨𝐨𝐝 𝐏𝐚𝐢𝐢𝐢 ]
👋 𝐏𝐚𝐢𝐢 𝐏𝐚𝐢𝐢𝐢 ${name} 👋
❤ 𝒃𝒐𝒕 𝒄𝒖̉𝒂 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 𝒄𝒉𝒖́𝒄 𝒄ậ𝒖 𝒓𝒂 đ𝒊 𝒎𝒂̣𝒏𝒉 𝒌𝒉𝒐ẻ🥰\n𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio} ${thu}\n`,
    mentions: [
      {
        tag: name,
        id: event.senderID
      }
] 
            }
    if (event.body.toLowerCase() == "pp"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "pai paii"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "pai pai"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bai"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
if (event.body.toLowerCase() == "baii"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "tạm biệt"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
if (event.body.toLowerCase() == "good bye"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "pai pai"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bye"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }