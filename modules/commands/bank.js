module.exports.config = {
    name: "bank",
    version: "2.0.6",
    hasPermssion: 0,
    credits: "",//huudan&BoK 
    description: "Dành cho người dùng",
    commandCategory: "bank",
    usages: "",
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bank.jpg")) request("https://i.imgur.com/Nv0ujVO.jpg ").pipe(fs.createWriteStream(dirMaterial + "bank.jpg"));
}

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID, body } = event;     
    const axios = require('axios');
    const checkBank = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/check?ID=${senderID}`)).data
    const { createReadStream } = require(`fs-extra`);
    switch(args[0]) {
        case 'register':
        case '-r':
        case 'r': {
            const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/register?senderID=${senderID}&name=${encodeURI((await Users.getData(senderID)).name)}`)).data
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            return api.sendMessage(`=== [ ${res.message.noti} ] ===\n👤 Chủ tài khoản: ${res.message.name}\n💳 STK: ${res.message.STK}\n💰 Số dư: ${res.message.money}`, threadID, messageID)
        }
        
         case "find":
        case "-f": {
            if (checkBank.status == false) api.sendMessage("Bạn chưa có tài khoản trên ngân hàng!", threadID, messageID)
            if (args[1] != "stk" && args[1] != "id") {
                api.sendMessage("Vui lòng chọn đúng kiểu dữ kiện (stk/id)", threadID, messageID)
            }
            let { data } = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/find?type=${args[1].toUpperCase()}&${args[1].toUpperCase()}=${args[2]}`))
            const name = data.message.name
            const stk = data.message.data.STK
            const soDu = data.message.data.money
            return api.sendMessage(`=== [ BANK KING ] ===\n👤 Chủ tài khoản: ${name}\n💳 STK: ${stk}\n💰 Số dư: ${soDu}$`, threadID, messageID)
        }
      case 'info':
      case '-i':
      case 'check':
      case '-c': {
        var a = event.senderID;
        if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản ngân hàng!', threadID, messageID);
        const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/find?type=ID&ID=${a}`)).data  
          return api.sendMessage(`=== [ BANK KING ] ===\n👤 Chủ tài khoản: ${res.message.name}\n💳 STK: ${res.message.data.STK}\n💰 Số dư: ${res.message.data.money}$`, threadID, messageID)
      }
        case 'get':
        case 'rút': {

     const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/get?ID=${senderID}&money=${args[1]}`)).data  
          
    if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
    if(!args[1]) return api.sendMessage('Vui lòng nhập: get [số tiền]', threadID, messageID);
       
    if(res.status == false) {
              return api.sendMessage(res.message, threadID, messageID);
       } else { await Currencies.increaseMoney(senderID,parseInt(args[1]));
              }
               return api.sendMessage(`${res.message.noti}\n👤 Chủ tài khoản: ${res.message.name}\n💰 Số dư còn lại: ${res.message.money}`, threadID, messageID);
                                   } 
         case 'top':
         case '-t':{
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản trên ngân hàng!', threadID, messageID);
            const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/top`)).data  
            if(res.status == false) return api.sendMessage('Hiện tại chưa có dữ liệu!', threadID, messageID);
            var msg = res.message + '\n'
            for (let i of res.ranking) {
                msg += `${i.rank}. ${i.name} \n» 💰 Số dư: ${i.money}$\n===========\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        case 'pay':
        case '-p': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản ngân hàng!', threadID, messageID);
            if(!args[1] || !args[2] || !args[3]) return api.sendMessage('Vui lòng nhập đúng kiểu dữ liệu: pay stk [stk người nhận] [số tiền]', threadID, messageID);
            if(args[1] == 'stk') {
            const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/pay?type=STK&senderID=${senderID}&STK=${args[2]}&money=${args[3]}`)).data 
            if(res.status == false) { 
              return api.sendMessage(res.message, threadID, messageID);
            } else return api.sendMessage("Giao dịch thành công", event.threadID, event.messageID)
        }
     if(args[1] == 'id') {
                if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản ngân hàng!', threadID, messageID);
             
  const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/pay?type=ID&senderID=${senderID}&userID=${args[2]}&money=${args[3]}`)).data 
            if(res.status == false) { 
              return api.sendMessage(res.message, threadID, messageID);
            } else return api.sendMessage("Giao dịch thành công", event.threadID, event.messageID)


       
        
            }
            break;
        }
        case 'send':
        case 'gửi':
        case 'nạp': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản ngân hàng!', threadID, messageID);
            if(!args[1]) return api.sendMessage('Vui lòng nhập số tiền cần nạp vào!\nsend [số tiền cần nạp]', threadID, messageID);
            var check = await checkMoney(senderID, args[1])
            if (check == false) return api.sendMessage('Tiền đâu mà nạp vô đây?', threadID, messageID);
            await Currencies.decreaseMoney(senderID, parseInt(args[1]))
            const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/bank/send?senderID=${senderID}&money=${args[1]}`)).data  
            return api.sendMessage(`${res.message.noti}\n👤 Chủ tài khoản: ${res.message.name}\n💰 Số dư hiện tại: ${res.message.money}$`, threadID, messageID)
            break;
    }
        case 'giftcode':
        case '-g': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản BANK KING!', threadID, messageID);
     
                    
                    api.sendMessage('Hãy kiểm tra tin nhắn chờ để nhập giftcode', threadID, messageID);
                    return api.sendMessage('Vui lòng reply tin nhắn này để nhập giftcode mà bạn nhận được từ admin', senderID, (error, info) => 
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: 'newPassword',
                            messageID: info.messageID,
                            author: event.senderID,
                            threadID: threadID
                        })
                    ); 
            
        }
        default: {
        
                           
        return api.sendMessage({body:"=== 「 🏦 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 𝐛𝐚𝐧𝐤 🏦 」 ===\n💳 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫: Đ𝐚̆𝐧𝐠 𝐤𝐢́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 \n📋 𝐈𝐧𝐟𝐨: 𝐗𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧\n💰 𝐆𝐞𝐭: 𝐑𝐮́𝐭 𝐭𝐢𝐞̂̀𝐧 \n🏆 𝐓𝐨𝐩: 𝐗𝐞𝐦 𝐭𝐨𝐩 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠\n✉ 𝐏𝐚𝐲: 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧 \n💶 𝐒𝐞𝐧𝐝: 𝐍𝐚̣𝐩 𝐭𝐢𝐞̂̀𝐧 𝐯𝐚̀𝐨 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 \n𝐆𝐢𝐟𝐭𝐜𝐨𝐝𝐞: 𝐈𝐁 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 (𝐕𝐃: 𝐠𝐢𝐟𝐭𝐜𝐨𝐝𝐞 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚)", attachment: createReadStream(__dirname + `/noprefix/bank.jpg`)}, threadID, messageID);
        }
    }
async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
}
module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const axios = require('axios')
    const { senderID, messageID, threadID , body } = event;
    switch(handleReply.type) {
        
        
        case 'newPassword': {
            const res = (await axios.get(`https://api-caochungdat.bokdepzai.repl.co/giftcode?senderID=${senderID}&giftcode=${body}`)).data   
            if(res.status == false) {
              return api.sendMessage(res.message, threadID, messageID);
      } else {
            api.sendMessage(`${res.message.noti}\n-------------------------------------------------\n Giftcode được tạo bởi ${res.message.ath} `, handleReply.threadID);
            return api.sendMessage(`${res.message.noti}\n-------------------------------------------------\n Giftcode được tạo bởi ${res.message.ath} `, threadID, messageID)}
        }
    }
}