module.exports.config = {
    name: "taixiu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chơi tài xỉu",
    commandCategory: "Trò chơi",
    usages: "< tài/xỉu + số tiền >",
    cooldowns: 15
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
  const picture = (await axios.get(`https://i.imgur.com/Lc5UCCK.jpg`, { responseType: "stream"})).data
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    if (!args[0]) return api.sendMessage({body: "🎲==== [ 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨 ] ====🎲\n━━━━━━━━━━━━━━━━━━\n🎮𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🎮\n\n𝟭. 𝗧𝗮𝗶𝘅𝗶𝘂 + 𝘁𝗮̀𝗶 𝗼𝗿 𝘅𝗶̉𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂 𝘁𝗮̀𝗶 𝟮𝟬𝟬)\n𝟮. 𝗧𝗮𝗶𝘅𝗶𝘂 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂 𝗹𝗲̉ 𝟮𝟬𝟬)\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝘁𝗶̀𝗻𝗵 𝘀𝗽𝗮𝗺 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!", attachment: (picture)
        }, threadID, messageID);
    const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("𝗖𝗵𝗶̉ đ𝗮̣̆𝘁 𝗰𝘂̛𝗼̛̣𝗰 tài 𝗵𝗼𝗮̣̆𝗰 xỉu", threadID, messageID)
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("𝗠𝘂̛́𝗰 đ𝗮̣̆𝘁 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝗵𝗼𝗮̣̆𝗰 𝗱𝘂̛𝗼̛́𝗶 𝟱𝟬$", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(` 𝗦𝗼̂́ 𝗱𝘂̛ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ ${money}$ đ𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗼̛𝗶`, threadID, messageID);
    try {
        const res = (await axios.get(`https://api-hr.thamthuong1aido.repl.co/game/tx`)).data
        const image = [];
        const result = res.result;
        if(result == false) result = '3 mặt cùng loại';
        for (let i in res.image) {
            var path = __dirname + `/cache/${i}.png`;
            var img = (await axios.get(`${res.image[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(img, "utf-8"));
            image.push(fs.createReadStream(path));
        }
        if (choose.toLowerCase() == result) {
            await Currencies.increaseMoney(senderID, parseInt(money * 1));
            api.sendMessage({ body: `🌸=== [ 𝐘𝐎𝐔 𝐖𝐈𝐍 ] ===\n🎋𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗵𝗮̆́𝗻𝗴\n🎲 𝗡𝗵𝗮̀ 𝗰𝗮́𝗶 𝗿𝗮: ${result}\n👤 𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${choose}\n🧧𝗚𝗼𝗺 𝘃𝗲̂̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻: ${money*1}$💵\n━━━━━━━━━━━━━━━━━━\n→ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀
${[moneyUser - money*1]}`, attachment: image }, threadID, messageID);
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(money));
            api.sendMessage({ body: `🌸=== [ 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 ] ===🌸\n\n🎋 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗵𝘂𝗮 𝘀𝗮̆́𝗽 𝗺𝗮̣̆𝘁\n🎲 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${result}\n👤 𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${choose}\n🧨𝗕𝗮𝘆 𝗺𝗮̀𝘂: ${money*1}$💵\n━━━━━━━━━━━━━━━━━━\n→ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀: ${[moneyUser - money*1]}`, attachment: image}, threadID, messageID);
        }
        for(var i = 0; i < image.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
        }
    } catch(e) {
        console.log(e);
        return api.sendMessage('Đã xảy ra lỗi khi thực hiện lệnh, vui lòng thử lại sau...', threadID, messageID);
    }
}