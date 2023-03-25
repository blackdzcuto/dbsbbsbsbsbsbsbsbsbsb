module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "xem video hiện có trên bot",
  commandCategory: "nsfw",
  usages: "mv",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
  const picture = (await axios.get(`https://i.imgur.com/qXzFiPK.gif`, { responseType: "stream"})).data
    const fs = require('fs-extra');
let name = await Users.getNameUser(event.senderID)
     if (args.length == 0) return api.sendMessage({body: `🎞 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐕𝐢𝐝𝐞𝐨 🎞\n\n𝟏. 𝐌𝐕 𝐆𝐚́𝐢 ❤️\n𝟐. 𝐌𝐕 𝐒𝐞𝐱 💚\n𝟑. 𝐌𝐕 𝐍𝐮̛̃ 𝐀́𝐨 𝐃𝐚̀𝐢💜\n𝟒. 𝐌𝐕 𝐀𝐧𝐢𝐦𝐞 🖤\n𝟓. 𝐌𝐕 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧  💛\n𝟔. 𝐌𝐕 𝐓𝐞̂́𝐭 💙\n𝟕. 𝐌𝐕 𝐂𝐡𝐢𝐥𝐥 🧡\n\n𝐃𝐮̀𝐧𝐠 /𝐦𝐯  (𝐯𝐢𝐝𝐞𝐨 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦) 𝐧𝐡𝐚 ${name}\n
`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
], attachment: (picture)}, event.threadID, event.messageID);

     if (args[0] == "gái") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://API-HR.maiyeuhtt.repl.co/API/harin/video/gai').then(res => {
  var video = res.data.url;
  let callback = function () {
          api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 𝐗𝐢𝐧𝐡 𝐍𝐞̇ ${name}\n➝ 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̂̉𝐧 𝐭𝐡𝐢̣: ${res.data.count}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "tết") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://API-HR.maiyeuhtt.repl.co/tet').then(res => {
  var video = res.data.url;
  let callback = function () {
          api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐓𝐞̂́𝐭 𝐍𝐞̀ ${name}\n➝ 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̂̉𝐧 𝐭𝐡𝐢̣: ${res.data.count}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
          attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
    if (args[0] == "sex") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://api-hr.maiyeuhtt.repl.co/vdsex').then(res => {
  var video = res.data.url;
  let callback = function () {
         api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐒𝐞𝐱 𝐍𝐞̇ ${name}\n➝ 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̂̉𝐧 𝐭𝐡𝐢̣: ${res.data.count}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
    }
  if (args[0] == "anime") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://API-HR.maiyeuhtt.repl.co/animevd').then(res => {
  var video = res.data.data;
  let callback = function () {
         api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 𝐍𝐞̇ ${name}\n➝ 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̂̉𝐧 𝐭𝐡𝐢̣: ${res.data.count}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "chill") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://api-hr.maiyeuhtt.repl.co/chill').then(res => {
  var video = res.data.url;
  let callback = function () {
        api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐂𝐡𝐢𝐥𝐥 𝐍𝐞̇ ${name}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "doraemon") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://api-hr.maiyeuhtt.repl.co/doraemon').then(res => {
  var video = res.data.url;
  let callback = function () {
          api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧 𝐍𝐞̇ ${name}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "nữ áo dài") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://API-HR.maiyeuhtt.repl.co/aodai').then(res => {
  var video = res.data.url;
  let callback = function () {
          api.sendMessage({body: `📣 Đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 😘`}, event.threadID, event.messageID);
			return api.sendMessage({
            body: `➝ 𝐕𝐢𝐝𝐞𝐨 𝐍𝐮̛̃ 𝐀́𝐨 𝐃𝐚̀𝐢 𝐍𝐞̇ ${name}\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.url}\n➝ 𝐕𝐚̀ 𝐛𝐚̣𝐧 đ𝐚̃ 𝐛𝐢̣ -1000 đô`,mentions: [
      {
        tag: name,
        id: event.senderID
      }
],
          attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
    }
    }
