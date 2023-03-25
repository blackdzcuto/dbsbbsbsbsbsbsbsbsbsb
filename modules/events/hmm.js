module.exports.config = {
    name: "join",
    eventType: ['log:subscribe'],
    version: "1.0.0",
    credits: "Mirai-Team",//inspire by miraibot
    description: "GROUP UPDATE NOTIFICATION"
};
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
module.exports.circle = async (image) => {
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
module.exports.run = async function({ api, event, Users }) {
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮𝐨̂̉𝐢 𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" : getHours < 12 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐫𝐮̛𝐚" : getHours < 17 ? "𝐛𝐮𝐨̂̉𝐢 𝐜𝐡𝐢𝐞̂̀𝐮" : getHours < 23 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢" : "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "SENTHANH BOT" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`🌐 𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐝𝐞̂́𝐧 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠!.\n🎊 𝐇𝐚̃𝐲 𝐛𝐚̆́𝐭 đ𝐚̂̀𝐮 𝐝𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐡𝐮̛̃𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐝𝐮̛𝐨̛́𝐢 đ𝐚̂𝐲 đ𝐞̂̉ 𝐥𝐚̀𝐦 𝐪𝐮𝐞𝐧 𝐧𝐡𝐞́ !\n༒───────⑄───────༒\n👉 ${global.config.PREFIX}𝐡𝐞𝐥𝐩 (𝕏𝕖𝕞 𝕕𝕒𝕟𝕙 𝕤𝕒́𝕔𝕙 𝕥𝕠𝕒̀𝕟 𝕓𝕠̣̂ 𝕝𝕖̣̂𝕟𝕙)\n✕═══════〄═══════✕\n💥 𝐃𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐜𝐡𝐚̣̂𝐦 𝐭𝐡𝐨̂𝐢 𝐧𝐡𝐚`, event.threadID, () => api.sendMessage({ body: `━━━━━━━━━━━━━━━━\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐁𝐨𝐱 ◄\n━━━━━━━━━━━━━━━━━\n➝ [🐧] 𝐇𝐢 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ ${global.config.BOTNAME}\n➝ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐥𝐚̀: ${global.config.PREFIX}\n➝ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐭𝐫𝐞̂𝐧 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 ${global.config.BOTNAME} đ𝐚𝐠 𝐜𝐨́ ${client.commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 \n [🎀] 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭 , 𝐒𝐩𝐚𝐦 , 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭\n→ [🎊] 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐡𝐞𝐥𝐩 , ${global.config.PREFIX}𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐂𝐚́𝐜 𝐋𝐞̣̂𝐧𝐡 𝐓𝐫𝐨𝐧𝐠 𝐁𝐨𝐭\n➝ [📺] 𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐚̀𝐢 𝐁𝐨𝐭 𝐕𝐯 , 𝐕𝐚̀ 𝐂𝐨́ 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐓𝐨̂́𝐭 𝐋𝐚̀𝐧𝐡\n━━━━━━━━━━━━━━━━━\n➝ [🌐] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/PTH2506091\n\n➝ [🎀] 𝐙𝐚𝐥𝐨 𝐀𝐝𝐦𝐢𝐧: 𝟎𝟑𝟖𝟗𝟏𝟎𝟐𝟕𝟑𝟖\n━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/joinbox1.mp4")} , threadID));
  }
  else {
    try {
        if(!fs.existsSync(__dirname+`/cache/Semi.ttf`)) { 
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname+`/cache/Semi.ttf`, Buffer.from(getfont, "utf-8"));
        };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
     // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for(o = 0; o < event.logMessageData.addedParticipants.length; o++){
    let pathImg = __dirname + `/cache/${o}.png`;
  let pathAva = __dirname + `/cache/fbcover2.png`;
  let avtAnime = (await axios.get(encodeURI(
    `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=1371688333316058|yqnZCV_SATCp9jPHNUQZaj5_C_Y`,{
      headers:{
        cookie:'xs=13%3AlajUELLXiJWSGA%3A2%3A1670218018%3A-1%3A6326;c_user=100026039134645;fr=04yhWc9aZ2jCK6WYB.AWX6H8d2OYiFMQa_tmHEcMP9bNY.BjjYEe.-o.AAA.0.0.BjjYEi.AWW2404AO5I;sb=HoGNYx-MLHOu0FOMeC8kqttW;datr=HoGNY-xBBNLJjRghcnhN1hWA;'
      }
    }), { responseType: "arraybuffer" })).data;
    var ok = [
      'https://i.imgur.com/dDSh0wc.jpeg',
'https://i.imgur.com/UucSRWJ.jpeg',
'https://i.imgur.com/OYzHKNE.jpeg',
'https://i.imgur.com/V5L9dPi.jpeg',
'https://i.imgur.com/M7HEAMA.jpeg'
             ]
  let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    var avatar = await this.circle(pathAva);
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  registerFont(__dirname+`/cache/Semi.ttf`, {
        family: "Semi"
    });
  let canvas = createCanvas(1902, 1082);
    console.log(canvas.width, canvas.height)
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "center";
  ctx.font = `155px Semi`;
  ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20 , canvas.height / 2 + 100);
  ctx.save();
  ctx.font = `75px Semi`;
  ctx.fillText(`Chào mừng ${threadName}`, canvas.width / 2 - 15 , canvas.height / 2 + 235)
  ctx.fillText(`Thành viên thứ ${participantIDs.length - o}`, canvas.width / 2 - 15 , canvas.height / 2 + 350)
  ctx.restore();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  abx.push(fs.createReadStream(__dirname + `/cache/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "\⎔ 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 ⎔\n➾ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀: {time}\n➾ 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢 𝐂𝐮̉𝐚 𝐂𝐡𝐮́𝐧𝐠 𝐓𝐚 !!!\n▭▭▭▭ [ 𝐈𝐍𝐅𝐎 ] ▭▭▭▭\n⋄ 𝐍𝐚𝐦𝐞: {name} \n⋄ 𝐔𝐫𝐥 𝐅𝐁: https://www.facebook.com/{iduser}\n⋄ {type} 𝐀̂́𝐲 𝐋𝐚̀ 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐒𝐨̂́ {soThanhVien} 𝐂𝐮̉𝐚 {threadName} !!\n⋄ 𝐂𝐡𝐮́𝐜 {name} 𝐁𝐮𝐨̂̉𝐢 {buoi} 𝐕𝐮𝐢 𝐕𝐞̉ 𝐌𝐨𝐚𝐡𝐡 🍒\n▭▭▭▭▭▭▭▭▭▭▭▭\n◈ {name} 𝐕𝐚̀𝐨 𝐍𝐡𝐨́𝐦 𝐁𝐨̛̉𝐢 𝐋𝐨̛̀𝐢 𝐌𝐨̛̀𝐢 𝐂𝐮̉𝐚 {author}\n◈ 𝐔𝐫𝐥 𝐅𝐁: https://www.facebook.com/{uidAuthor}\n{type} 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐫𝐚 đ𝐚̉𝐨 𝐨̛̉ 🍀" : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? '𝐂𝐚́𝐜 𝐁𝐚̣𝐧': '𝐁𝐚̣𝐧')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
         .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time);

      var formPush = { body: msg, attachment: abx , mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.png`)
    }
    } catch (e) { return console.log(e) };
  }
                   }