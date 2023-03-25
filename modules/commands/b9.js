module.exports.config = {
    name: 'b9',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'imgur.com',
    commandCategory: 'Tiện ích',
    usages: 'Reply [ảnh | video]',
    dependencies: {
        'image-downloader': '',
        'tslib': '',
        'imgur': '',
        'request': ''
    }
};
const {ImgurClient} = require('imgur');
const {image} = require('image-downloader');
const {createReadStream, unlinkSync} = require('fs-extra');
const {get} = require('request');
module.exports.run = async function({ api, event }){
  const picture = (await axios.get(`https://i.imgur.com/Vp5CLYz.jpeg`, { responseType: "stream"})).data
  let Succes = 0, Error = [];
  try {
    const client = new ImgurClient({ clientId: 'd191da1e2b3ede' + 8});
    if (event.type != 'message_reply') return api.sendMessage({body: `➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝟭 𝗮̉𝗻𝗵 𝗼𝗿 𝘃𝗶𝗱𝗲𝗼 𝗯𝗮̂́𝘁 𝗸𝗶̀ đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗹𝗶𝗻𝗸\n➝ 𝗩𝗱: /𝗯𝟵 𝘃𝗮̀ 𝗿𝗲𝗽𝗹𝘆 𝟭 𝗮̉𝗻𝗵 𝗼𝗿 𝘃𝗶𝗱𝗲𝗼\n➝ 𝗕𝗼𝘁 𝘀𝗲̃ đ𝗼̂̉𝗶 𝘀𝗮𝗻𝗴 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴 𝗰𝗵𝗼 𝗯𝗮̣𝗻`, attachment: (picture)}, event.threadID, event.messageID);
    const arr = [];
    for (const {url} of event.messageReply.attachments) {
    const dest = `${__dirname}/${get(url).uri.pathname.replace(/\/|-|_/g, '')}`;
    await image({ url, dest });
    const res = await client.upload({ image: createReadStream(dest), type: 'stream' });
     arr.push(res.data.link);
Error.push(res.data.link);

     unlinkSync(dest);
    };
    api.sendMessage({body: `=== [ 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 ] ===\n━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 : ${Error.length}\n→ 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶 : ${Succes}\n⊱ ⋅\n━━━━━━━━━━━━━━━━━\n⋅ ⊰\n🐰 𝗯𝗼𝘁 𝘃𝘂̛̀𝗮 𝘂𝗽 𝘀𝗮𝗻𝗴 𝗹𝗶𝗻𝗸 𝗻𝗲̀: \n➝ ${arr.join('\n')}`, attachment: (picture)}, event.threadID, event.messageID);
  } catch(e){
     api.sendMessage(e, event.threadID, event.messageID); 
  };
};