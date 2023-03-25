const fbname = "100014811933322";
const githubname = "github.com/senthanh";
module.exports.config = {
	name:"upt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai-Team",
	description: "Random ảnh theo api - uptime",
	commandCategory: "Tiện ích",
	cooldowns: 3,
  dependencies: {
		"pidusage": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/hanakuUwU/font/blob/main/UTM%20Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  let k = args[0];
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1111231.png`;
    let pathAva = __dirname + `/tad/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI(`https://i.imgur.com/k4AD6eC.jpg`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "45px UTM";
    ctx.fillStyle = "#99ff99";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 990, 200);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "25px time";
    ctx.fillText("@" + "100087438951039", 180, 140)
    ctx.fillText("@" + "pth_mika", 180, 190)
    ctx.fillText("@" + "0389102738", 180, 250)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `⚜️ ━━━━━ [ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 ] ━━━━━ ⚜️ 
➠ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗕𝗼𝘁 𝗰𝘂̉𝗮 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗴𝗶𝗼̛̀  ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆.\n\n❯➠ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n❯➠ Tổng Nhóm: ${global.data.allThreadID.length}\n❯➠ Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%\n❯➠ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n❯➠ Ping: ${Date.now() - timeStart}ms\n❯➠ ID Nhân Vật: ${id}\n❯➠ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: 𝐁𝐨𝐭•𝐓♡𝐌𝐢𝐤𝐚\n❯➠ 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 : /\n❯➠ 𝐁𝐨𝐭 được tạo bởi 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 `,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
}
