module.exports.config = {
  name: "fbcover",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LVBang",
  description: "banner",
  commandCategory: "Tạo ảnh",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, args, event }) {

  const { threadID, messageID, senderID, body } = event;
  
  const request = require("request");
  const axios = require("axios");
  const fs = require("fs-extra");
  
  let k = args[0];
   if(args[0] == "list"){

      const res = await axios.get("https://run.mocky.io/v3/6aa59c3e-ff9f-41cd-8611-07a1b870042d");
      
      var trang = 1;
      trang = parseInt(args[1]) || 1;
      trang < -1 ? trang = 1 : "";
      var limit = 11;
      var danhsach = res.data.listAnime.length;
      var soTrang = Math.ceil(danhsach / limit);
      var msg = [];

      for (var i = limit * (trang - 1); i < limit * (trang - 1) + limit; i++) {
          if (i >= danhsach) break;
          var nv = res.data.listAnime[i].name;
          msg += `${i + 1}. ${nv}\n`
      }

      msg += `» Có tất cả ${danhsach} nhân vật\n» Số trang (${trang}/${soTrang})\n» Dùng ${global.config.PREFIX}fbcover list <số trang> để có thể xem trang tiếp theo`;
    return api.sendMessage(`●──• 𝐌𝐲𝐁𝐨𝐭 𝐗𝐮🐥𖠌 •──●\n` + msg + `\n●──• End •──●`, threadID, messageID);
    } else if(args[0] == "find"){
   var char = args[1];
    
    const res = await axios.get(`https://docs-api.nguyenhaidang.ml/taoanhdep/search?type=name&name=${encodeURIComponent(char)}`);

    
    var id = res.data.ID;
     
     return api.sendMessage(`ID của ${char} là: ${id}`, threadID, messageID);
     
   } 
    
   else if(args[0] == "color") {

      const mautienganh = "https://4.bp.blogspot.com/-_nVsmtO-a8o/VYfZIUJXydI/AAAAAAAACBQ/FHfioHYszpk/w1200-h630-p-k-no-nu/cac-mau-trong-tieng-anh.jpg";
      var callback = () => {
          api.sendMessage({
              body: "[ Danh sách màu tiếng Anh ]",
              attachment: fs.createReadStream(__dirname + `/cache/mautienganh.jpg`)
          }, threadID, () => fs.unlinkSync(__dirname + `/cache/mautienganh.jpg`))
      };

      request(encodeURI(mautienganh)).pipe(fs.createWriteStream(__dirname + `/cache/mautienganh.jpg`)).on("close", callback);

  } else {
      return api.sendMessage(`» Reply tin nhắn kèm với ID nhân vật mà bạn muốn chọn`, threadID, (error, info) => {
          return global.client.handleReply.push ({
              type: "characters",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
          })
      }, event.messageID);
  }
}

module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  
  if (handleReply.author != event.senderID) return api.sendMessage('Vô duyên', event.threaID);
  const {
    threadID,
    messageID,
    senderID
  } = event;

  switch (handleReply.type) {
    case "characters": {
      const res = await axios.get(`https://docs-api.nguyenhaidang.ml/taoanhdep/search?type=id&id=${event.body}`);

      var name = res.data.name
      
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`» Bạn đã chọn ID nhân vật là ${name}\n» Reply tin nhắn này và nhập tên của bạn`, threadID, (error, info) => {
        return global.client.handleReply.push({
          type: 'subname',
          name: this.config.name,
          author: senderID,
          characters: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }
    case "subname": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`» Reply tin nhắn này để nhập tên phụ của bạn`, threadID, (error, info) => {
        return global.client.handleReply.push({
          type: 'color',
          name: this.config.name,
          author: senderID,
          characters: handleReply.characters,
          name_s: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`» Reply tin nhắn này để nhập màu nền \n» Bạn có thể nhấn ${global.config.PREFIX}fbcover color để xem danh sách màu`, threadID, (error, info) => {
        return global.client.handleReply.push({
          type: 'create',
          name: this.config.name,
          author: senderID,
          characters: handleReply.characters,
          subname: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID)
    }
    
    case "create": {
      var idchar = handleReply.characters;
      var name_ = handleReply.name_s;
      var subname_ = handleReply.subname;
      var color_ = event.body;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Đang tạo ảnh ...`, event.threadID, async (error, info) => {
        await new Promise(resolve => setTimeout(resolve, 3 * 1000));
        var imag = (await axios.get(`https://docs-api.nguyenhaidang.ml/fbcover/v2?name=${encodeURIComponent(name_)}&color=${encodeURIComponent(color_)}&subname=${encodeURIComponent(subname_)}&id=${idchar}`, {
          responseType: "stream"
        })).data;
        var msg = {
          body: 'Ảnh bìa của bạn đây',
          attachment: imag
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
      })
    }
  }
}
