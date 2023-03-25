module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Admin",
	usages: " bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
      "addedNewNDH": '💓=====「 𝗔𝗗𝗗 𝗡𝗗𝗛 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗡𝗗𝗛 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━\n[💞] %2',
      "removedNDH": '💓=====「 𝗥𝗘𝗠𝗢𝗩𝗘 𝗡𝗗𝗛 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗴𝗼̛̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗩𝗶𝗲̂𝗻 \n━━━━━━━━━━━━━━━━━\n[💞] %2',
        "listAdmin": `━━━━━━━━━━━━━━━━\n=== [ 𝗔𝗗𝗠𝗜𝗡 𝗟𝗜𝗦𝗧  ] ===\n━━━━━━━━━━━━━━━━\n\n%1\n\n\n━━━━━━━━━━━━━━━━\n=== [ 𝗡𝗗𝗛 𝗟𝗜𝗦𝗧  ] ===\n━━━━━━━━━━━━━━━━\n\n%2`,
        "notHavePermssion": '𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻 đ𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 "%1"',
        "addedNewAdmin": '💓=====「 𝗔𝗗𝗗 𝗔𝗗𝗠𝗜𝗡 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━\n[💞] %2',
        "removedAdmin": '💓=====「 𝗥𝗘𝗠𝗢𝗩𝗘 𝗔𝗗𝗠𝗜𝗡 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗴𝗼̛̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗩𝗶𝗲̂𝗻 \n━━━━━━━━━━━━━━━━━\n[💞] %2',
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async  ({ api, event, args, Users, permssion, getText }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const content = args.slice(1, args.length);
 axios.get('https://api-hr.maiyeuhtt.repl.co/images/loli').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
let callback = function () {
    if (args.length == 0)
      api.sendMessage({body:`====『 𝐀𝐝𝐦𝐢𝐧 』====\n𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 ➣ 𝐓𝐡𝐞̂𝐦 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐊𝐡𝐚́𝐜 𝐋𝐞̂𝐧 𝐋𝐚̀𝐦 𝐀𝐝𝐦𝐢𝐧\n𝐚𝐝𝐦𝐢𝐧 𝐫𝐦 ➣ 𝐗𝐨́𝐚 𝐁𝐨̉ 𝐀𝐝𝐦𝐢𝐧 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐊𝐡𝐚́𝐜\n𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 ➣ [ 𝐨𝐧 / 𝐨𝐟𝐟 ] 𝐂𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭\n𝐚𝐝𝐦𝐢𝐧 𝐜𝐡𝐚𝐭  ➣ [ 𝐨𝐧 / 𝐨𝐟𝐟 ] 𝐂𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐌𝐨̛́𝐢 Đ𝐮̛𝐨̛̣𝐜 𝐂𝐡𝐚𝐭 𝐑𝐢𝐞̂𝐧𝐠 𝐕𝐨̛́𝐢 𝐁𝐨𝐭\n====『 𝐁𝐨𝐱 』====\n𝐚𝐝𝐦𝐢𝐧 𝐥𝐢𝐬𝐭   ➣ 𝐗𝐞𝐦 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭 \n𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐱𝐨𝐧𝐥𝐲 ➣ [ 𝐨𝐧 / 𝐨𝐟𝐟 ] 𝐂𝐡𝐢̉ 𝐐𝐓𝐕 - 𝐀𝐝𝐦𝐢𝐧 𝐌𝐨̛́𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭\n====『 𝐍𝐨𝐭𝐞 』====\n𝐇𝐃𝐒𝐃: ${global.config.PREFIX}𝐀𝐝𝐦𝐢𝐧 [𝐭𝐞𝐱𝐭]
`,
						attachment: fs.createReadStream(__dirname + `/cache/admin.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/admin.${ext}`), event.messageID);
				};
				 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/admin.${ext}`)).on("close", callback);
			})
 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
  const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
  const data = `https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`//res.data.data;
//tải ảnh xuống
downloader = require('image-downloader'),
fse = require('fs-extra');
await downloader.image({url: data, dest: __dirname+'/cache/1.jpg'});
stream = fse.createReadStream(__dirname+'/cache/1.jpg' );
    var config = require(configPath);
    switch (args[0]) {
        case "all":{ 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`→ ${name}\n→ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: facebook.com/${idAdmin} `);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`→ ${name1}\n→ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: facebook.com/${idNDH} `);
                }
            }

            return api.sendMessage({body: getText("listAdmin", msg.join("\n\n"), msg1.join("\n\n")), attachment: (await axios.get((await axios.get(`https://api-hr.maiyeuhtt.repl.co/images/loli`)).data.data,  {
                    responseType: 'stream'
                })).data},threadID, messageID);
        }

       
        case "add": { 
            if (event.senderID != 100087438951039) return api.sendMessage(`Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
        return api.sendMessage({body:`💓=====「 𝗔𝗗𝗗 𝗔𝗗𝗠𝗜𝗡 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━\n[💞] → 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${event.mentions[id]}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${id}`,attachment: stream },threadID, messageID);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", 1, `→ 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${name}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${content[0]}`), attachment: stream },threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != 100087438951039) return api.sendMessage(`Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
              var listAdd = [];
for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
    return api.sendMessage({body: `💓=====「 𝗥𝗘𝗠𝗢𝗩𝗘 𝗔𝗗𝗠𝗜𝗡 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗴𝗼̛̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗩𝗶𝗲̂𝗻 \n━━━━━━━━━━━━━━━━━\n[💞] → 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗰𝘂̃: ${event.mentions[id]}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${id}`,attachment: stream },threadID, messageID);
            };
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("removedAdmin", 1, `→ 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗰𝘂̃: ${name}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${content[0]}`),attachment: stream },threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
        if (permssion < 1) return api.sendMessage("Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'bot', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("Tắt thành công chế độ Quản trị viên, tất cả thành viên có thể sử dụng Bot", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("Kích hoạt thành công chế độ Quản trị viên, chỉ Quản trị viên có thể sử dụng Bot", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            if (config.adminOnly == false) {
            config.adminOnly = true;
                api.sendMessage(`Bật thành công chỉ admin mới dùng được bot`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`Tắt thành công chỉ admin mới dùng được bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
          case 'chat':
        case '-ca': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ admin mới dùng được", threadID, messageID);
               if (config.adminPaseOnly == false) {
                config.adminPaseOnly = true;
                api.sendMessage(" Bật thành công chỉ admin mới chat riêng được với bot 🔒", threadID, messageID);
            } else {
                config.adminPaseOnly = false;
                api.sendMessage(" Tắt thành công chỉ admin mới chat riêng được với bot 🔓 ", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ndhonly':
        case '-ndh': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ Admin mới dùng được", threadID, messageID);
            if (config.ndhOnly == false) {
                config.ndhOnly = true;
                api.sendMessage(`Bật thành công chỉ NDH mới dùng được bot`, threadID, messageID);
            } else {
                config.ndhOnly = false;
                api.sendMessage(`Tắt thành công chỉ NDH mới dùng được bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case "addndh": { 
          if (event.senderID != 100087438951039) return api.sendMessage(`Cần quyền Admin chính để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    return api.sendMessage({body:`💓=====「 𝗔𝗗𝗗 𝗡𝗗𝗛 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗡𝗗𝗛 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━\n[💞] → 𝗧𝗲̂𝗻 𝗡𝗗𝗛 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${event.mentions[id]}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${id}`, attachment: stream },threadID, messageID);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewNDH", 1, `→ 𝗧𝗲̂𝗻 𝗡𝗗𝗛 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${name}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${content[0]}`), attachment: stream },threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
  }
        case "removendh":{
          if (event.senderID != 100087438951039) return api.sendMessage(`Cần quyền Admin để thực hiện`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
          return api.sendMessage({body:`💓=====「 𝗥𝗘𝗠𝗢𝗩𝗘 𝗡𝗗𝗛 」=====💓\n━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗴𝗼̛̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗩𝗶𝗲̂𝗻 \n━━━━━━━━━━━━━━━━━\n[💞] → 𝗧𝗲̂𝗻 𝗡𝗗𝗛 𝗯𝗼𝘁 𝗰𝘂̃: ${event.mentions[id]}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${id}`,attachment: stream },threadID, messageID);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("removedNDH", 1, `→ 𝗧𝗲̂𝗻 𝗡𝗗𝗛 𝗯𝗼𝘁 𝗰𝘂̃: ${name}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${content[0]}`),attachment: stream },threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                      }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
  }