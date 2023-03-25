const fs = require("fs");
module.exports.config = {
    name: "autocamxucv3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Minami Tatsuo",
    description: "Auto reaction made by Minami Tatsuo",
    commandCategory: "Hệ Thống",
    usages: "noprefix",
    cooldowns: 0,
};

module.exports.handleEvent = function ({
    api,
    event,
    client,
    __GLOBAL
}) {
    let haha = event.body.toLowerCase();
    if (this.config.credits != 'Minami Tatsuo') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Credits has been changed! Stop Now!' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] STOP CHANGING CREDIT\g IDIOT ', event.threadID, event.messageID);
    }
    if (haha.includes("sao") || haha.includes("xin") || haha.includes("nhanh") || haha.includes("B") || haha.includes("việc") || haha.includes("C") || haha.includes("đi") || haha.includes("yêu") || haha.includes("vào") || haha.includes(":((") || haha.includes("tát") || haha.includes("bận")) {
        const allIcon2 = ['😋','🐸','😀','🙂','😁','🚽','🧻','🧺','🧹','🌡','🩺']; //
const icon2 = allIcon2[Math.floor(Math.random()*allIcon2.length)];
        return api.setMessageReaction(icon2, event.messageID, (err) => {}, true)
    }
    if (haha.includes("đấm") || haha.includes("đá") || haha.includes("ôm") || haha.includes("G") || haha.includes("làm việc") || haha.includes("C") || haha.includes("khó") || haha.includes("F") || haha.includes("ngủ") || haha.includes("cười")) {
        const allIcon3 = ['😳','🤯','😼','🛁','👍','🚿','🚰','🦠','🧬']; //
const icon3 = allIcon3[Math.floor(Math.random()*allIcon3.length)];
        return api.setMessageReaction(icon3, event.messageID, (err) => {}, true)
    }
    if (haha.includes("à") || haha.includes("ồ") || haha.includes("hàng") || haha.includes("waifu") || haha.includes("gái alime") || haha.includes("mày") || haha.includes("đá") || haha.includes("em") || haha.includes("bú") || haha.includes("chuyện") || haha.includes("học")) {
const allIcon = ['🎉','😎','😍','🐧','🐊','🥕','🧄','🗣','👅','👂','🥢','🥛']; //

const icon = allIcon[Math.floor(Math.random()*allIcon.length)];
        return api.setMessageReaction(icon, event.messageID, (err) => {}, true)
    }
   if (haha.includes("đỉnh") || haha.includes("giỏi") || haha.includes("chất") || haha.includes("dậy") || haha.includes("chơi") || haha.includes("chỉ") || haha.includes("với") || haha.includes("chết") || haha.includes("mắt") || haha.includes("chà") || haha.includes("ảo thuật")) {
        return api.setMessageReaction("😏", event.messageID, (err) => {}, true)
       }
    if (haha.includes("Q") || haha.includes("p") || haha.includes("l") || haha.includes("G") || haha.includes("k") || haha.includes("C") || haha.includes("t") || haha.includes("F") || haha.includes("v") || haha.includes("e")) {
        const allIcon3 = ['😳','🤯','😼','😱','👍','🧊','🍼',️'☕️','🍵']; //
const icon3 = allIcon3[Math.floor(Math.random()*allIcon3.length)];
        return api.setMessageReaction(icon3, event.messageID, (err) => {}, true) 
    }
    if (haha.includes("y") || haha.includes("m")) {
        return api.setMessageReaction("❤️‍🔥", event.messageID, (err) => {}, true)
    }
    if (haha.includes("gì") || haha.includes("game")) {
        const allIcon4 = ['👽','👹','🤢','🍆','🍌','🥒','🥖','💩','🥽','🌂','👙','🃏','🌶️','👁','🥶','🫣','🤓','🐼','🤮','💀','🥔','🧸','🛸','🌻','🥸','🦋','🐥','🧃','🥃','💊']; //
const icon4 = allIcon4[Math.floor(Math.random()*allIcon4.length)];
        return api.setMessageReaction(icon4, event.messageID, (err) => {}, true)             }                               
const icon4 = allIcon4[Math.floor(Math.random()*allIcon4.length)];
        return api.setMessageReaction(icon4, event.messageID, (err) => {}, true)
    if (haha.includes("1") || haha.includes("máy")) {
        return api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
    }
if (haha.includes("mèo") || haha.includes("mèo")) {
        const allIcon2 = ['🐶','🐔','🐯']; //
const icon2 = allIcon2[Math.floor(Math.random()*allIcon2.length)];
        api.setMessageReaction(icon2, event.messageID, (err) => {}, true)
        api.sendMessage("Nói nhanh tao bận.", event.threadID, event.messageID);
    }
    if (haha.includes("vợ") || haha.includes("vợ")) {
        const allIcon = ['🐮','🐭','🫂']; //
const icon = allIcon[Math.floor(Math.random()*allIcon.length)];
        api.setMessageReaction(icon, event.messageID, (err) => {}, true)
        api.sendMessage("Gọi tao có việc gì.", event.threadID, event.messageID);
    }
    if (haha.includes("Cút") || haha.includes("Cút")) {
        api.sendMessage("😡", event.threadID, event.messageID)
    }
}
module.exports.run = function ({
    api,
    event,
    client,
    __GLOBAL
}) {}