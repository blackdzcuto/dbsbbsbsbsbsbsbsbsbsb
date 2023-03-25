const fs = require("fs-extra");
const config = require("../../config.json");
module.exports.config = {
    name: "autoout",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MAVERICK",
    description: "Bot sẽ tự động rời khỏi nhóm dưới số thành viên được chỉ định.",
    commandCategory: "Admin",
    usages: "[số thành viên]",
    cooldowns: 0
};

module.exports.onLoad = () => {
    if(!config["leave"]) config["leave"] = {};
    if(!config["leave"]["status"]) config["leave"]["status"] = false;
    if(!config["leave"]["number"]) config["leave"]["number"] = 0;
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));
}

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
  const permission = ["100087438951039"];
	if (!permission.includes(event.senderID)) return api.sendMessage("autoout con mẹ mày, mày làm j có tuổi để bật autoout :))", event.threadID, event.messageID);
    
    if(args[0]) number = parseInt(args[0]);
    config.leave = { status: config.leave.status == true ? false : true, number: number || config.leave.number}
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));
    return api.sendMessage(`» Đã ${config["leave"]["status"] == true ? "bật" : "tắt"} chức năng tự động rời khỏi nhóm khi nhóm có số thành viên nhỏ hơn ${config["leave"]["number"]} thành viên.`, threadID, messageID);
}

module.exports.handleEvent = async ({ api, event }) => {
    const { threadID, messageID, participantIDs } = event;
    if (config["leave"]["status"] && participantIDs.length <= config["leave"]["number"] && event.isGroup && event.senderID != api.getCurrentUserID() && !config.ADMINBOT.includes(event.senderID)) {
       await api.sendMessage(`➝ 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 \n ◆═════════════◆ \n➝ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 𝐜𝐡𝐢̉ 𝐡𝐨𝐚̣𝐭 đ𝐨̣̂𝐧𝐠 𝐨̛̉ 𝐜𝐚́𝐜 𝐧𝐡𝐨́𝐦 𝐜𝐨́ ${config["leave"]["number"]} 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐫𝐨̛̉ 𝐥𝐞̂𝐧.\n➝ 𝐍𝐡𝐨́𝐦 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 đ𝐚𝐧𝐠 𝐜𝐨́  ${participantIDs.length}/${config["leave"]["number"]} 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐞̂𝐧 𝐁𝐨𝐭 𝐬𝐞̃ 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦.\n\n➝ 𝐇𝐚̃𝐲 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 đ𝐞̂̉ đ𝐮̛𝐨̛̣𝐜 𝐡𝐨̂̃ 𝐭𝐫𝐨̛̣.\n➝ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: \n➝ 𝐙𝐚𝐥𝐨`, threadID);
        return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
    }
}                       