module.exports.config = {
    name: "ảnh",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "LVBang",//tổng hợp api của Hải harin 
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "random-img",
    usages: "số thứ tự",
    cooldowns: 0,
    envConfig: {
      cooldownTime: 1200000
    }
  };
  module.exports.onLoad = async function () {
        console.log("===========»  𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢   «===========");
  }
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    const picture = (await axios.get(`https://i.imgur.com/5UuEALz.gif`, { responseType: "stream"})).data
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["𝗔̉𝗻𝗵 𝗚𝗮́𝗶 💞", "𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 💕", "𝗔̉𝗻𝗵 𝗦𝗲𝘅 🎧", "𝗔̉𝗻𝗵 𝟲 𝗠𝘂́𝗶 🏆", " 𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 💓", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗡𝗴𝗮 🥀", "𝗔̉𝗻𝗵 𝗦𝗲𝘅𝘆 🔥", "𝗔̉𝗻𝗵 𝗗𝘂́ 🎀", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 Đ𝗶́𝘁 𝗕𝘂̛̣ 🌚", "𝗔̉𝗻𝗵 𝗧𝘄 🙉", "𝗔̉𝗻𝗵 𝗠𝗶𝗫𝗶 ⚡", "𝗔̉𝗻𝗵 𝗠𝗼̂𝗻𝗴 🎉", "𝗔̉𝗻𝗵 𝗠𝗲𝗺𝗲 🤖", "𝗔̉𝗻𝗵 𝗰𝘂 👀", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 👗", "𝗔̉𝗻𝗵 𝗝𝗮𝗰𝗸 🐝", "𝗔̉𝗻𝗵 𝗦𝗼̛𝗻 𝘁𝘂̀𝗻𝗴 🎀", "𝗔̉𝗻𝗵 𝗶𝗴 🎃", "𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 🦄", "𝗔̉𝗻𝗵 𝗕𝗮̂̀𝘂 𝗧𝗿𝗼̛̀𝗶 ", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗩𝗶𝗲̣̂𝘁 💥", "𝗔̉𝗻𝗵 𝗛𝗮𝗻𝗮 💨", "𝗔̉𝗻𝗵 𝗟𝗼𝗹 🍑", "𝗔̉𝗻𝗵 𝗛𝗼̣𝗰 𝗦𝗶𝗻𝗵 ❄️", "𝗔𝗻𝗶𝗺𝗲 𝗖𝗵𝗶𝘁𝗮𝗻𝗱𝗮 👹", "𝗔𝗻𝗶𝗺𝗲 𝗟𝗼𝗹𝗶 👼", "𝗔𝗻𝗶𝗺𝗲 𝗶𝘁𝘀𝘂𝗸𝗶 💕", "𝗔𝗻𝗶𝗺𝗲 𝗔𝗻𝘆𝗮 💫", "𝗔𝗻𝗶𝗺𝗲 𝗠𝗶𝗿𝗮𝗶 ✨", "𝗔𝗻𝗶𝗺𝗲 𝗥𝗲𝗺 🌀", "𝗔𝗻𝗶𝗺𝗲 𝗚𝘂𝗿𝗮 🦈", "𝗔𝗻𝗶𝗺𝗲 𝗟𝘂𝗰𝘆 👼", "𝗔𝗻𝗶𝗺𝗲 𝗗𝗼𝗿𝗮𝗲𝗺𝗼𝗻 🐯", "𝗔𝗻𝗶𝗺𝗲 𝗡𝗮𝗿𝘂𝘁𝗼 ⚔️", "𝗔𝗻𝗶𝗺𝗲 𝗹𝘂𝗳𝘆 👒", "𝗔𝗻𝗶𝗺𝗲 𝗣𝗵𝗼𝗻𝗴 𝗰𝗮̉𝗻𝗵 🏞️", "𝗔𝗻𝗶𝗺𝗲 𝗖𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 👑", "𝗔𝗻𝗶𝗺𝗲 𝗚𝗲𝗻𝘀𝗶𝗻 ✨", "𝗔𝗻𝗶𝗺𝗲 𝗚𝗼𝗸𝘂 🎃", "𝗔𝗻𝗶𝗺𝗲 𝗞𝘂𝗿𝘂𝗺𝗶 🌝", " 𝗔𝗻𝗶𝗺𝗲 𝗬𝘂𝘂𝗹𝘇𝘂𝗺𝗶 🦠", "𝗔𝗻𝗶𝗺𝗲 𝗠𝗶𝗰𝗰𝗵𝗼𝗻𝘀𝗵𝗶𝗸𝗶𝗺𝗼𝗿𝗶 🥀", "𝗔̉𝗻𝗵 𝗔𝗻𝗶𝗺𝗲 🍒", "𝗔𝗻𝗶𝗺𝗲 𝗖𝗼𝗻𝗮𝗻 💧", "𝗔𝗻𝗶𝗺𝗲 𝗔𝘂𝘀𝗮𝗻𝗱 ☠️", "𝗔𝗻𝗶𝗺𝗲 𝗞𝗮𝗻𝗮 🍷", "𝗔𝗻𝗶𝗺𝗲 𝗢𝗻𝗲-𝗽𝗶𝗲𝗰𝗲🥤", "𝗠𝗩 𝗧𝗲̂́𝘁 🧨", "𝗠𝗩 𝗚𝗮́𝗶 👯", "𝗡𝗵𝗮̣𝗰 𝗠𝗽𝟯 🎼", "𝗠𝗩 𝗗𝗼𝗿𝗮𝗲𝗺𝗼𝗻 🛸", "𝗠𝗩 𝗖𝗵𝗶𝗹𝗹 🎧", "𝗠𝗩 𝗦𝗲𝘅 💥", "𝗠𝗩 𝗔𝗻𝗶𝗺𝗲 🌀", "𝗠𝗩 𝗕𝗮̂̀𝘂 𝗧𝗿𝗼̛̀𝗶 🍦"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 24 ;
    var numPage = Math.ceil(b / limit);
    var msg = `====== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗜𝗠𝗔𝗚𝗘 𝗛𝗔𝗥𝗜𝗡 ]  ======\n━━━━━━━━━━━━━━━━━━\n\n💞 𝗣𝗵𝗶́𝗮 𝗱𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗸𝗵𝗼 𝗮̉𝗻𝗵 𝗧𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁\n⚜️ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼 𝗮̉𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗰𝗼́ ${name.length} 𝗹𝗼𝗮̣𝗶 𝗮̉𝗻𝗵\n\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[ ${i+1} ] ➝ ${name[i]}\n\n`;
    }
    msg += `🌸 𝗕𝗮̣𝗻 ${name1} 𝗥𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n🌐 𝗗𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗮̉𝗻𝗵 𝟮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗹𝗶𝘀𝘁 𝗮̉𝗻𝗵 𝗮𝗻𝗶𝗺𝗲\n🎥 𝗗𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗮̉𝗻𝗵 𝟯 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘃𝗶𝗱𝗲𝗼`;
    return api.sendMessage({body: msg, attachment: (picture)},event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
             if(event.body == "1"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/girl"
}
         else if(event.body == "2"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/trai"
}
         else if(event.body == "3"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/sex"
}
          else if(event.body == "4"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/6mui"
}
          else if(event.body == "5"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/nude"
}
         else if(event.body == "6"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/gainga"
}
         else if(event.body == "7"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/gaisexy"
}
         else if(event.body == "8"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/du"
}
         else if(event.body == "9"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/gaiditbu"
}
         else if(event.body == "10"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/tw"
}
        else if(event.body == "11"){
          var  url = "https://api-hr.maiyeuhtt.repl.co/images/domixi"
}
         else if(event.body == "12"){
          var  url = "https://api-hr.maiyeuhtt.repl.co/images/mong"
}
         else if(event.body == "13"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/meme"
}
         else if(event.body == "14"){
         var url = "https://api-hr.maiyeuhtt.repl.co/images/cu"
}
         else if(event.body == "15"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/nuaodai"
}
         else if(event.body == "16"){
           var url = "https://api-hr.maiyeuhtt.repl.co/images/jack"
}
         else if(event.body == "17"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/sontung"
}
         else if(event.body == "18"){
           var url = "https://api-hr.maiyeuhtt.repl.co/images/ig"
}
         else if(event.body == "19"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/cosplay"
}
           else if(event.body == "20"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/imgbautroi"
}
        else if(event.body == "21"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/gaiviet"
}
       else if(event.body == "22"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/hana"
} 
         else if(event.body == "23"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/lol"
         }
         else if(event.body == "24"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/hocsinh"
         }
       else if(event.body == "25"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/chitanda"
}
       else if(event.body == "26"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/loli"
}
      else if(event.body == "27"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/itsuki"
}
    else if(event.body == "28"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/anya"
}
    else if(event.body == "29"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/mirai"
}
    else if(event.body == "30"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/rem"
}
    else if(event.body == "31"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/gura"
}
    else if(event.body == "32"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/lucky"
}
    else if(event.body == "33"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/imgdoraemon"
}
    else if(event.body == "34"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/naruto"
}
    else if(event.body == "35"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/lufy"
}
    else if(event.body == "36"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/canh"
}
    else if(event.body == "37"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/congchua"
}
    else if(event.body == "38"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/ghensin"
}
    else if(event.body == "39"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/goku"
}
    else if(event.body == "40"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/kurumi"
}
    else if(event.body == "41"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/yuulzumi"
}
    else if(event.body == "42"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/mocchonshikimori"
}
    else if(event.body == "43"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/anime"
}
    else if(event.body == "44"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/conan"
}
    else if(event.body == "45"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/ausend"
}
    else if(event.body == "46"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/kana"
}
    else if(event.body == "47"){
          var url = "https://api-hr.maiyeuhtt.repl.co/images/onepice"
}
    else if(event.body == "48"){
          var url = "https://api-hr.maiyeuhtt.repl.co/tet"
}
    else if(event.body == "49"){
          var url = "https://api-hr.maiyeuhtt.repl.co/API/harin/video/gai"
}
    else if(event.body == "50"){
          var url = "https://api-hr.maiyeuhtt.repl.co/mp3"
}
    else if(event.body == "51"){
          var url = "https://api-hr.maiyeuhtt.repl.co/doraemon"
}
    else if(event.body == "52"){
          var url = "https://api-hr.maiyeuhtt.repl.co/chill"
}
    else if(event.body == "53"){
          var url = "https://api-hr.maiyeuhtt.repl.co/vdsex"
}
    else if(event.body == "54"){
          var url = "https://api-hr-1.maiyeuhtt.repl.co/animevd"
}
      else if(event.body == "55"){
          var url = "https://api-hr.maiyeuhtt.repl.co/bautroi"
}
    switch(handleReply.type){
    case "choose":{
      //
      let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗼̛́𝗶 𝗹𝗮̂́𝘆 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮 🐰", event.threadID, event.messageID);
      //phần này để cho bot ngăn thằng khác chọn dùm
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.url
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `🖼️=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗔̉𝗡𝗛 𝗛𝗔𝗥𝗜𝗡 ] ===🖼️\n💓 𝗟𝗮̂́𝘆 𝗮̉𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗼̛̉ 𝗱𝗼̀𝗻𝗴 𝘀𝗼̂́: ${event.body}\n💝 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗴𝗶𝗼̛̀ 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼: 55 𝗮̉𝗻𝗵`, attachment : download}, event.threadID)
}
    }
                }