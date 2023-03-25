module.exports.config = {
    name: "taixiu1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D",
    description: "Chơi tài xỉu",
    commandCategory: "tien ich",
    usages: "[tài/xỉu]",
    cooldowns: 8
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
  const picture = (await axios.get(`https://i.imgur.com/Lc5UCCK.jpg`, { responseType: "stream"})).data
    const moneyUser = dataMoney.money;
    if (!args[0]) return api.sendMessage({body: "🎲==== [ 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨 ] ====🎲\n━━━━━━━━━━━━━━━━━━\n🎮𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🎮\n\n𝟭. 𝗧𝗮𝗶𝘅𝗶𝘂𝟭 + 𝘁𝗮̀𝗶 𝗼𝗿 𝘅𝗶̉𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂𝟭 𝘁𝗮̀𝗶 𝟮𝟬𝟬)\n𝟮. 𝗧𝗮𝗶𝘅𝗶𝘂𝟭 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂𝟭 𝗹𝗲̉ 𝟮𝟬𝟬)\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝘁𝗶̀𝗻𝗵 𝘀𝗽𝗮𝗺 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!", attachment: (picture)
        }, threadID, messageID);
    const choose = args[0]
    if (choose != 'tài' && choose != 'xỉu') return api.sendMessage("Chỉ đặt cược tài hoặc xỉu!", threadID, messageID)
    const money = args[1]
    if (money < 30 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 30$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`⚡️Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const res = await axios.get(`https://caochungdat.me/docs/game/taixiu`);
        const images = [];
        const result = res.data.result;
        const total = res.data.total;
        for (var i in res.data.images) {
  let path = __dirname + `/cache/${i}.png`;
  let imgs = (await axios.get(`${res.data.images[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(imgs, "utf-8"));
            images.push(fs.createReadStream(path));
        }
    if (choose == result) {
  await Currencies.increaseMoney(senderID, parseInt(money * 2));
  api.sendMessage({
    attachment: images,
      body: `•Kết quả: ${result}\n•Tổng: ${total} nút\n•Bạn đã thắng \nĐược: ${money*2}$`},threadID, messageID);
  }
else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
  api.sendMessage({
    attachment: images,
      body: `•Kết quả: ${result}\n•Tổng: ${total} nút\n•Bạn đã thua\nMất: ${money}$ `},threadID, messageID);
  for(let i = 0; i < images.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
  }
}
} catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}