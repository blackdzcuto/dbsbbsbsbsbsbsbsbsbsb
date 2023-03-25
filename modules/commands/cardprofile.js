const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/file/d/1lJLhIHU7CScUsidr-MrxDIOyuayq41pO/view?usp=drivesdk"
const fontsLink = 18
const fontsInfo = 25
const colorName = "#00FFFF"
module.exports.config = {
  name: "cardprofile",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Hải harin",
  description: "Tạo card thông tin Profile của bản thân you",
  commandCategory: "BOX",
  usages: "",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Hải harin") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/44.png`;
  let pathAvata = __dirname + `/cache/33.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(event.senderID); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/kPDp0s7.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 45, 63,290,290);
    var gender = res.gender == 'male' ? "Nam" : res.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.birthday ? `${res.birthday}` : "unfinished";
    var love = res.relationship_status ? `${res.relationship_status}` : "unfinished"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ffcc00";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`Tên: ${res.name}`, 720, 230);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ffcc00";
  ctx.textAlign = "start";
  fontSize = 15;
  ctx.fillText(`Giới tính:   ${gender}`, 720, 255);
  ctx.fillText(`Follow:   ${res.follow}`, 720, 280);
  ctx.fillText(`Mối quan hệ:   ${love}`, 720, 305);
  ctx.fillText(`Ngày sinh:   ${birthday}`, 720, 330);
  ctx.fillText(`UID:   ${uid}`, 720, 360);
  ctx.fillText(`Profile:   ${res.link}`, 620, 390);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#ffcc00";
  ctx.textAlign = "start";
  fontSize = 15;  
  ctx.fillText(`Facebook:  ${res.name}`, 130, 385);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};