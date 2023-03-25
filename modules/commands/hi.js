module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Sam",
  description: "hi gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5,
  denpendencies: {
    "axios": "",
    "moment-timezone": ""
    }
}


module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "hello",
    "hello mn",
    "hăi",
    "hi",
    "hai",
    "chào",
    "chao",
    "hí",
    "híí",
    "hì",
    "hìì",
    "lô",
    "hii",
    "helo",
    "hê nhô",
    "2",
    "belo",
    "hê sờ lô hê sờ lyly"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
      "1841028362616606",
      "1841028482616594",
      "1841028609283248",
      "526220308111401",
      "193082987877305",
      "2041011389459668", 
      "2041011569459650", 
      "2041011726126301",
      "2041011836126290", 
      "2041011952792945", 
      "2041012109459596", 
      "2041012262792914", 
      "2041012406126233", 
      "2041012539459553",
      "2041012692792871",
      "2041014432792697",
      "2041014739459333", 
      "2041015016125972", 
      "2041015182792622",
      "2041015329459274",
      "2041015422792598",
      "2041015576125916",
      "2041017422792398", 
      "2041020049458802",
      "2041020599458747", 
      "2041021119458695",
      "2041021609458646",
      "2041022029458604", 
      "2041022286125245",
       "2523892817885618",
      "2523892964552270",
      "2523893081218925",
      "2523893217885578",
      "2523893384552228",
      "2523892544552312",
      "2523892391218994",
      "2523891461219087",
      "2523891767885723",
      "2523891204552446",
      "2523890691219164",
      "2523890981219135",
      "2523890374552529",
      "2523889681219265",
      "2523889851219248",
      "2523890051219228",
      "2523886944552872",
      "2523887171219516",
      "2523888784552688",
      "2523888217886078",
      "2523888534552713",
      "2523887371219496",
      "2523887771219456",
      "2523887571219476"     
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡 :Đ",
      "𝐯𝐮𝐢 𝐯𝐞̉ 😄",
      "𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 ❤",
      "𝐲𝐞̂𝐮 đ𝐨̛̀𝐢 😘",
      "𝐁𝐢̀𝐧𝐡 𝐘𝐞̂𝐧😘",
      "𝐌𝐚𝐲 𝐌𝐚̆́𝐧😘",
      "𝐅𝐮𝐥𝐥 𝐍𝐚̆𝐧𝐠 𝐋𝐮̛𝐨̛̣𝐧𝐠😘",
      "𝐓𝐮𝐲𝐞̣̂𝐭 𝐕𝐨̛̀𝐢😘", 
      "𝐓𝐢̉𝐧𝐡 𝐓𝐚́𝐨😘"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "𝐬𝐚́𝐧𝐠 𝐭𝐢𝐧𝐡 𝐦𝐨̛" : 
    hours > 401 && hours <= 700 ? "𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" :
    hours > 701 && hours <= 1000 ? "𝐬𝐚́𝐧𝐠" :
    hours > 1001 && hours <= 1200 ? "𝐭𝐫𝐮̛𝐚" : 
    hours > 1201 && hours <= 1700 ? "𝐜𝐡𝐢𝐞̂̀𝐮" : 
    hours > 1701 && hours <= 1800 ? "𝐜𝐡𝐢𝐞̂̀𝐮 𝐭𝐚̀" : 
    hours > 1801 && hours <= 2100 ? "𝐭𝐨̂́𝐢" : 
    hours > 2101 && hours <= 2400 ? "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    }) 
    let msg = {body: `🖐️𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${name},💕𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}\n===『${time}』===`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}