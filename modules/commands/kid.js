module.exports.config = {
  name: "kid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh kid",
  commandCategory: "nsfw",
  usages: "kid",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/PIe6CFv.jpg",
"https://i.imgur.com/FT0Ympp.jpg",
"https://i.imgur.com/deomffD.jpg",
"https://i.imgur.com/uT76zxt.jpg",
"https://i.imgur.com/D5XS7XP.jpg",
"https://i.imgur.com/shCGZnF.jpg",
"https://i.imgur.com/tfmRJKy.jpg",
"https://i.imgur.com/hWHAcoQ.jpg",
"https://i.imgur.com/9jZ3V1Y.jpg",
"https://i.imgur.com/G6l7sWi.jpg",
"https://i.imgur.com/9txY0dn.jpg",
"https://i.imgur.com/4AQvKbT.jpg",
"https://i.imgur.com/wkdMU6B.jpg",
     ];
     var callback = () => api.sendMessage({body:`𝗦𝗼𝗻𝗼𝗸𝗼 𝗛𝗮𝘆 𝗚𝗶̀ 𝗠𝗮̀ 𝗠𝗲̂ 𝗞𝗶𝗱 𝗗𝘂̛̃ 𝗩𝗮̣̂𝘆 🐥`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };