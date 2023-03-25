module.exports.config = {
  name: "tiktokvip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "cuteo",
  description: "xem video tiktok",
  commandCategory: "video tiktok",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/gWiruiP.mp4",
"https://i.imgur.com/RNKOBXo.mp4", "https://i.imgur.com/gItqCuM.mp4",
"https://i.imgur.com/RNKOBXo.mp4",
"https://i.imgur.com/rSVadbO.mp4",
"https://i.imgur.com/rUpbntQ.mp4",
"https://i.imgur.com/twBF9k4.mp4",
"https://i.imgur.com/BikFdS0.mp4",
"https://i.imgur.com/cW70msH.mp4",
"https://i.imgur.com/REzv95O.mp4",
"https://i.imgur.com/zdQHhm3.mp4", "https://i.imgur.com/lQj0EB0.mp4",
"htttps://i.imgur.com/WZ8aOEE.mp4",
"https://i.imgur.com/j62RxeC.mp4",
"https://i.imgur.com/ok6mM97.mp4",
"https://i.imgur.com/HMvIoqI.mp4",
"https://i.imgur.com/3fMtjxW.mp4",
"https://i.imgur.com/EnpfNvL.mp4"
    ];
  var callback = () => api.sendMessage({body:`🌺梁Update bởi ADMIN 𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧𝐧梁🌺
            𖤂◡̈𖤂
       Admin 𝐇𝐚̉𝐢 𝐇𝐚𝐫𝐢𝐧----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 