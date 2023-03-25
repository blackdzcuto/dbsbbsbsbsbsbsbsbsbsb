const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 210
const fontsLink = 30
const fontsInfo = 190
const fontsUid = 190
const colorName = "#00FFFF"

module.exports.config = {
  name: "cardpu",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Tạo card thông tin người dùng facebook",
  commandCategory: "Thông tin",
  usages: "cardinfo",
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
  var _0xee18=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x44\u0169\x6E\x67\x6B\x6F\x6E","\x54\x68\x61\x79\x20\x63\x72\x65\x64\x69\x74\x73\x20\u0103\x6E\x20\x63\u1EE9\x74\x20\xE0\x20\u0111\u1ED5\x69\x20\x6C\u1EA1\x69\x20\x6E\x68\x61\x6E\x68\x20\x63\xF2\x6E\x20\x6B\u1ECB\x70","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if((this[_0xee18[1]][_0xee18[0]])!= _0xee18[2]){return api[_0xee18[6]](`${_0xee18[3]}`,event[_0xee18[4]],event[_0xee18[5]])}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;
  /*                 */
  var _0xa835=["\x74\x79\x70\x65","\x6D\x65\x73\x73\x61\x67\x65\x5F\x72\x65\x70\x6C\x79","\x73\x65\x6E\x64\x65\x72\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x52\x65\x70\x6C\x79","\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F\x56\x32","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F","\x2F\x70\x69\x63\x74\x75\x72\x65\x3F\x68\x65\x69\x67\x68\x74\x3D\x31\x35\x30\x30\x26\x77\x69\x64\x74\x68\x3D\x31\x35\x30\x30\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D\x36\x36\x32\x38\x35\x36\x38\x33\x37\x39\x25\x37\x43\x63\x31\x65\x36\x32\x30\x66\x61\x37\x30\x38\x61\x31\x64\x35\x36\x39\x36\x66\x62\x39\x39\x31\x63\x31\x62\x64\x65\x35\x36\x36\x32","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x58\x71\x4A\x42\x39\x76\x58\x2E\x6A\x70\x67","\x75\x74\x66\x2D\x38","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x63\x69\x72\x63\x6C\x65"];if(event[_0xa835[0]]== _0xa835[1]){uid= event[_0xa835[3]][_0xa835[2]]}else {uid= event[_0xa835[2]]};const res= await api[_0xa835[4]](uid);let getAvatarOne=( await axios[_0xa835[9]](`${_0xa835[6]}${uid}${_0xa835[7]}`,{responseType:_0xa835[8]}))[_0xa835[5]];let bg=( await axios[_0xa835[9]](encodeURI(`${_0xa835[10]}`),{responseType:_0xa835[8]}))[_0xa835[5]];fs[_0xa835[13]](pathAvata,Buffer[_0xa835[12]](getAvatarOne,_0xa835[11]));avataruser=  await this[_0xa835[14]](pathAvata);fs[_0xa835[13]](pathImg,Buffer[_0xa835[12]](bg,_0xa835[11]))

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
  ctx.drawImage(baseAvata, 267, 628, 692, 692);
    var gender = res.gender == 'male' ? "Nam" : res.gender == 'female' ? "Nữ" : "Private";
    var birthday = res.birthday ? `${res.birthday}` : "Private";
    var love = res.relationship_status ? `${res.relationship_status}` : "Private"
    var location = res.location.name ? `${res.location.name}` : "Private"
    var hometown = res.hometown.name ? `${res.hometown.name}` : "Private"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsName}px Play-Bold`;
  ctx.fillStyle = "#00FF00";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`${res.name}`, 1200, 260);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`Giới tính: ${gender}`, 1505, 830);
  ctx.fillText(`Follow: ${res.follow}`, 1505, 1060);
  ctx.fillText(`Mối quan hệ: ${love}`, 1505, 1310);
  ctx.fillText(`Sinh nhật: ${birthday}`, 1505, 550);
  ctx.fillText(`Nơi ở: ${location}`, 1505, 1600);
  ctx.fillText(`Quê hương: ${hometown}`, 1505, 1850);
  ctx.font = `${fontsUid}px Play-Bold`;
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`${uid}`, 1505, 2100);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "start";
  fontSize = 20;  
  //ctx.fillText(`» Profile: ${res.link}`, 200, 400);
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

 