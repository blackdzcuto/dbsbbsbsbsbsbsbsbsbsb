module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Tài khoản",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100087438951039"];
  if (!permission.includes(event.senderID))
  return api.sendMessage({body:"Xin cái tuổi để out?", attachment: (await axios.get((await axios.get(`https://api-hr.thamthuong1aido.repl.co/images/loli`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage({body: 'Đã nhận lệnh out nhóm từ admin!', attachment: (await axios.get((await axios.get(`https://api-hr.thamthuong1aido.repl.co/images/canh`)).data.data, {
                    responseType: 'stream'
                })).data},id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}