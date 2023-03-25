module.exports.config = {
    name: "clmm",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chẵn lẻ momoooo",
    commandCategory: "Game",
    usages: "[C1/L1/C2/L2]",
    cooldowns: 0
};

module.exports.run = async function ({api, event, args, Users, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const data = ["334819875","334819873","334819969","334819439","334819666","364819282","352842956","334819999","372842941"];

const picture = (await axios.get(`https://i.imgur.com/XO9ieTm.jpg`, { responseType: "stream"})).data
    var sdt = data[Math.floor(Math.random() * data.length)] 
   // var sdt = Math.floor(Math.random() * 1000000000) + 84;
    var info = await api.getUserInfo(event.senderID);
    var userName = info[event.senderID].name;
    let { senderID, threadID, messageID } = event;
    if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm");
    var day = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
    var codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000)
    var lastNumber = parseInt(codeGD.slice(-1))
    const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/comment.png";
    var coins = args[1]
    var content = args[0]
    if (!content) return api.sendMessage({body: "==== [ 𝗖𝗟𝗠𝗠 ] ====🎲\n━━━━━━━━━━━━━━━━━━\n🎮𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🎮\n𝗰𝗹𝗺𝗺 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝘂̛𝗼̛̣𝗰(𝘃𝗱: 𝗰𝗹𝗺𝗺 𝗹𝗲̉ 𝟮𝟬𝟬)!\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝘁𝗶̀𝗻𝗵 𝘀𝗽𝗮𝗺 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!",attachment: (picture)}, threadID, messageID);
    if (!coins) return api.sendMessage({body: "==== [ 𝗖𝗟𝗠𝗠 ] ====🎲\n━━━━━━━━━━━━━━━━━━\n🎮𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🎮\n𝗰𝗹𝗺𝗺 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝘂̛𝗼̛̣𝗰(𝘃𝗱: 𝗰𝗹𝗺𝗺 𝗹𝗲̉ 𝟮𝟬𝟬)\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝘁𝗶̀𝗻𝗵 𝘀𝗽𝗮𝗺 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!", attachment: (picture)}, threadID, messageID);
    var money = (await Currencies.getData(senderID)).money
    if(money < parseInt(coins)) return api.sendMessage('[ CỜ BẠC MOMO ] Bạn không đủ tiền để chơi', threadID, messageID);
    if(parseInt(coins) < 10) return api.sendMessage('[ CỜ BẠC MOMO ] Mức cược thấp nhất là 10', threadID, messageID);
    if(parseInt(coins) > 500000) return api.sendMessage('[ CỜ BẠC MOMO ] Bạn chỉ chơi nhiều nhất là 500.000', threadID, messageID);
    //check win
    var c1 = [2, 4, 6 ,8]
    var l1 = [1, 3, 5, 7]
    var c2 = [0, 2, 4 ,6 ,8]
    var l2 = [1, 3, 5, 7, 9]
    var msg = ''
    switch (content.toLowerCase()) {
        case "c1": {
            if(c1.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2.5 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "l1": {
            if(l1.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2.5 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "c2": {
            if(c2.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "l2": {
            if(l2.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        default: {
            msg += `Sai nội dung!\nKhông hoàn tiền!`
            await Currencies.decreaseMoney(senderID, parseInt(coins));
        }
    }
    //xử lí canvas
    let bg = (await axios.get(`https://i.imgur.com/OUPC4iK.png`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "30px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    ctx.fillText('-' + coins.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ', 151, 201);
    ctx.font = "25px SplineSans";
    ctx.fillText(content, 64, 1080);
    ctx.font = "26px SplineSans-Medium";
    ctx.textAlign = "right";
    ctx.fillText(`${userName}`, 547, 816);
    ctx.fillStyle = "#FF00FF";
    ctx.font = "22px SplineSans-Medium";
    ctx.fillText(`+84${sdt}`, 547, 884);
    ctx.font = "22px SplineSans";
    ctx.textAlign = "start";
    ctx.fillText(codeGD, 279, 240);
    ctx.fillStyle = "#000000";
    ctx.textAlign = "right";
    ctx.font = "22px SplineSans-Medium";
    ctx.fillText('Miễn phí', 547, 504);
    ctx.fillText('Ví MoMo', 547, 436);
    ctx.fillText(`${time} - ${day}`, 547, 367);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    //send
    return api.sendMessage({
            body: msg,
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
};
