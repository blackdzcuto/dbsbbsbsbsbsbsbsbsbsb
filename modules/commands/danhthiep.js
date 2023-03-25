module.exports.config = {
name: "danhthiep",
version: "1.0.0",
hasPermssion: 0,
credits: "MAVERICK",
description: "lỏ",
commandCategory: "Tạo Ảnh",
usages: "-danhthiep + ngày tháng năm sinh của bạn ",
cooldowns: 0
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const threadData = global.data.threadData.get(event.threadID) || {};
  const prefix = threadData.PREFIX || global.config.PREFIX;
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage(`Hãy dùng ${prefix}danhthiep + ngày sinh của bạn.\nVí dụ ${prefix}danhthiep 9/9/1999.`, threadID, messageID)
  else return api.sendMessage(`➜ Bạn Đã Chọn Ngày Sinh Là: ${args.join(" ").toUpperCase()}.\n➜ Trả Lời Tin Nhắn Này Và Nhập Số Follow Của Bạn.`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "ngaysinh",
        name: this.config.name,
        author: senderID,
        ngaysinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function ({ event, api, handleReply }) {
if (handleReply.author != event.senderID) return;
   var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
  const { threadID, messageID, senderID, body } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  var mentions = event.senderID
let data = await api.getUserInfo(mentions);
let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Không Biết";
   var  ngaysinh = handleReply. ngaysinh;
  switch (handleReply.type) {
    case "ngaysinh": {
      var sofl = handleReply.sofl;
      var  ngaysinh = handleReply.ngaysinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`➜ Bạn Đã Chọn Số Follow Là: ${event.body.toUpperCase()}.\n➜ Trả Lời Tin Nhắn Và Nhập Nơi Ở Của Bạn.`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "noiden",
          name: this.config.name,
          author: senderID,
          sofl: event.body,
           ngaysinh:  ngaysinh,
          messageID: info.messageID
        });
      },messageID)
    }
    case "noiden": {
      var noiden = handleReply.noiden;
      var ngaysinh = handleReply.ngaysinh;
      var sofl = handleReply.sofl;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`➜ Bạn Đã Nhập Nơi Ở Là: ${event.body.toUpperCase()}.\n➜ Trả Lời Tin Nhắn Và Nhập Quê Quán Của Bạn.`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "quequan",
          name: this.config.name,
          author: senderID,
          noiden: event.body,
          ngaysinh: ngaysinh,
          sofl: sofl,
          messageID: info.messageID
        });
      },messageID) 
    }
case "quequan": {
      var noiden = handleReply.noiden;
      var ngaysinh = handleReply.ngaysinh;
      var sofl = handleReply.sofl;
      var quequan = handleReply.quequan;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`➜ Bạn Đã Chọn Quê Quán Là: ${event.body.toUpperCase()}.\n➜ Trả Lời Tin Nhắn Và Nhập Mối Quan Hệ Của Bạn.`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: this.config.name,
          author: senderID,
          ngaysinh: ngaysinh,
          noiden: noiden,
          sofl: sofl,
          quequan: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    
    case "create": {
      var rela = event.body.toUpperCase()
      var ngaysinh = handleReply.ngaysinh.toUpperCase()
      var noiden = handleReply.noiden.toUpperCase()
      var quequan = handleReply.quequan.toUpperCase()
      
  var sofl = handleReply.sofl.toUpperCase()
       api.unsendMessage(handleReply.messageID);
            api.sendMessage(`➜ Đang Tạo Ảnh.`,threadID, (err, info) => {
            setTimeout(() => {
            api.unsendMessage(info.messageID);
            var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/coverfbv3.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/coverfbv3.png"),event.messageID);
                return request(encodeURI(`https://manhict.tech/api/fbcover3?uid=${senderID}&name=${name}&birthday=${ngaysinh}&love=${rela}&location=${noiden}&hometown=${quequan}&follow=${sofl}&gender=${gender}&color=red`)).pipe(fs.createWriteStream(__dirname + '/cache/coverfbv3.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 

