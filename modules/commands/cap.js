 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `datr=T6auY2PQm9Vq2DdpzLuEKEzP;sb=T6auY4wzK8jluP_E3Y9hbepr;locale=vi_VN;vpd=v1%3B712x360x2;fr=0TXa7u54ND5V42Uj5.AWU4roTmg60yNTf-bLylFjsVSHQ.BjrqZP.fB.AAA.0.0.BjsBmv.AWWaBhGRZ8E;c_user=100068094188928;xs=2%3A8It9bZhlHvqebA%3A2%3A1672485295%3A-1%3A8624;m_page_voice=100068094188928;fbl_st=100422758%3BT%3A27874754;fbl_cs=AhAAHwefNQOuhe5nA48nxszkGHMrMkxHdWE5S3dCeS82cGcxMWQ2dGc9ag;fbl_ci=816463386238797;m_pixel_ratio=2;wd=360x712;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=T6auY2PQm9Vq2DdpzLuEKEzP;sb=T6auY4wzK8jluP_E3Y9hbepr;locale=vi_VN;vpd=v1%3B712x360x2;fr=0TXa7u54ND5V42Uj5.AWU4roTmg60yNTf-bLylFjsVSHQ.BjrqZP.fB.AAA.0.0.BjsBmv.AWWaBhGRZ8E;c_user=100068094188928;xs=2%3A8It9bZhlHvqebA%3A2%3A1672485295%3A-1%3A8624;m_page_voice=100068094188928;fbl_st=100422758%3BT%3A27874754;fbl_cs=AhAAHwefNQOuhe5nA48nxszkGHMrMkxHdWE5S3dCeS82cGcxMWQ2dGc9ag;fbl_ci=816463386238797;m_pixel_ratio=2;wd=360x712;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=c03e3d&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n━━━━━━━━━━\n→ 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,mentions,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
  let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions},event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `datr=T6auY2PQm9Vq2DdpzLuEKEzP;sb=T6auY4wzK8jluP_E3Y9hbepr;locale=vi_VN;vpd=v1%3B712x360x2;fr=0TXa7u54ND5V42Uj5.AWU4roTmg60yNTf-bLylFjsVSHQ.BjrqZP.fB.AAA.0.0.BjsBmv.AWWaBhGRZ8E;c_user=100068094188928;xs=2%3A8It9bZhlHvqebA%3A2%3A1672485295%3A-1%3A8624;m_page_voice=100068094188928;fbl_st=100422758%3BT%3A27874754;fbl_cs=AhAAHwefNQOuhe5nA48nxszkGHMrMkxHdWE5S3dCeS82cGcxMWQ2dGc9ag;fbl_ci=816463386238797;m_pixel_ratio=2;wd=360x712;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=T6auY2PQm9Vq2DdpzLuEKEzP;sb=T6auY4wzK8jluP_E3Y9hbepr;locale=vi_VN;vpd=v1%3B712x360x2;fr=0TXa7u54ND5V42Uj5.AWUQibTDaX3oqxzh8y1PQvoKXuc.BjrqZP.fB.AAA.0.0.BjsRYz.AWUDTqKzNTA;c_user=100068094188928;xs=15%3AawP_YIUTtAPheQ%3A2%3A1672549939%3A-1%3A8624;fbl_st=101430886%3BT%3A27875832;fbl_cs=AhAAHwefNQOuhe5nA48nxszkGHMrMkxHdWE5S3dCeS82cGcxMWQ2dGc9ag;fbl_ci=816463386238797;m_page_voice=100068094188928;m_pixel_ratio=2;wd=360x712;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=c03e3d&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n ━━━━━━━━━━\n→ 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`, mentions,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
}
