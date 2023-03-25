module.exports.config = {
  name: "wibu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TNguyen",
  description: "Random ảnh anime nữ cute",
  commandCategory: "nsfw",
  usages: "wibu",
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
"https://i.imgur.com/p0aRk73.jpg",
"https://i.imgur.com/FaSnB3H.jpg",
"https://i.imgur.com/2a0GUij.jpg",
"https://i.imgur.com/g8bkkSf.jpg",
"https://i.imgur.com/HS8nSmu.jpg",
"https://i.imgur.com/gu4WMu8.jpg",
"https://i.imgur.com/pAYSB1b.jpg",
"https://i.imgur.com/5qJEXfm.jpg",
"https://i.imgur.com/g3R1jlJ.jpg",
"https://i.imgur.com/DRAHtWD.jpg",
"https://i.imgur.com/CC4WpsL.jpg",
"https://i.imgur.com/wrKWVdn.jpg",
"https://i.imgur.com/e7RYyUl.jpg",
"https://i.imgur.com/ylWNv7u.jpg",
"https://i.imgur.com/a1LuaJy.jpg",
"https://i.imgur.com/9qbqAYc.jpg",
"https://i.imgur.com/dv7GphC.jpg",
     ];
     var callback = () => api.sendMessage({body:`𝗖𝗵𝗮̀𝗼 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗔𝗻𝗵 𝗘𝗺 𝗧𝗼̂𝗶 𝗪𝗶𝗯𝘂 𝗚𝗶𝗼̂́𝗻𝗴 𝗕𝗮̣𝗻 😸`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };