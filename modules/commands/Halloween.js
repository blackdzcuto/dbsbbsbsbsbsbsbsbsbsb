module.exports.config = {
  name: "halloween",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yuuki",
  description: "Đếm ngược tới ngày lễ hoá trang Halloween",
  commandCategory: "Công Cụ",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("February 14, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🇻🇳「🎃𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗰𝗵𝗼 ngày lễ hoá trang haloowenn🎃」🇻🇳\n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
                             }