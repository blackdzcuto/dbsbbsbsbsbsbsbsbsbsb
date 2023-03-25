const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;

  var tl = ["𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 𝐱𝐢𝐧 𝐧𝐠𝐡𝐞!", "𝐆𝐨̣𝐢 𝐛𝐨𝐭 𝐜𝐨́ 𝐯𝐢𝐞̣̂𝐜 𝐠𝐢̀ 𝐤𝐡𝐨̂𝐧𝐠 𝐚̣?", "𝐎̂𝐧𝐠 𝐜𝐡𝐮̉ 𝐜𝐮̉𝐚 𝐞𝐦 𝐥𝐚̀: 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 đ𝐳.", "𝐁𝐨𝐭 𝐜𝐨́ 𝐭𝐡𝐞̂́ 𝐠𝐢𝐮́𝐩 𝐠𝐢̀ đ𝐮̛𝐨̛̣𝐜 𝐜𝐡𝐨 𝐛𝐚̣𝐧", "𝐂𝐚̉𝐦 𝐨̛𝐧 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐚̃ 𝐝𝐮̀𝐧𝐠 𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚.", "𝐁𝐨𝐭•𝐇•𝐌𝐢𝐤𝐚 𝐥𝐚̀ 𝐛𝐚𝐛𝐲 để𝐜𝐮̉𝐚\n┏━━┓┏━━┓┏━━┓┏━━┓ \n┗━┓┃┃┏┓┃┗━┓┃┗━┓┃ \n┏━┛┃┃┃┃┃┏━┛┃┏━┛┃\n𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢 𝐃𝐳\n┃┗━┓┃┗┛┃┃┗━┓┏━┛┃\n┗━━┛┗━━┛┗━━┛┗━━┛\n𝐍𝐡𝐚̂́𝐭 𝐭𝐡𝐞̂́ 𝐤𝐢̉"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "In tư admin ") || (event.body.toLowerCase() == "In4 admin ")) {
    return api.sendMessage("https://www.facebook.com/PTH2506091", threadID);
  };

  if ((event.body.toLowerCase() == "ủa ") || (event.body.toLowerCase() == "ủa ")) {
    return api.sendMessage("Ủa sao em cute thế nhờ :>", threadID);
  };

  if ((event.body.toLowerCase() == "đâu ") || (event.body.toLowerCase() == "mô ")) {
    return api.sendMessage("Đây chứ đâu", threadID);
  };
  
  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == "=)) ")) {
    return api.sendMessage("Sài icon ít thôi lo mà tương tác với box😡", threadID);
  };

  if ((event.body.toLowerCase() == "sao ") || (event.body.toLowerCase() == "răng ")) {
    return api.sendMessage("Sao là sao, bây giờ làm sao, sao là sao thế nào.", threadID);
  };

if ((event.body.toLowerCase() == "cáu ") || (event.body.toLowerCase() == "😠 ")) {
    return api.sendMessage("thôi thôi bớt giận đi bot yêu", threadID);
  };

if ((event.body.toLowerCase() == "nhếch mép ") || (event.body.toLowerCase() == "😏 ")) {
    return api.sendMessage("Nhếch mép cái gì mà nhếch mép đấm mi bh 😏", threadID);
  };

if ((event.body.toLowerCase() == "xl ") || (event.body.toLowerCase() == "xin lỗi ")) {
    return api.sendMessage("không tha đâu đi ra chỗ khác đi 😏", threadID);
  };
  
  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Ad bot là ai vậy")) {
    return api.sendMessage(" kêu chi thằng lòn ad ngủ mẹ rồi, phô lô cho nó rồi ib cho nó đê https://www.facebook.com/100087438951039", threadID);
  };
  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vc")) {
    return api.sendMessage(" Ý bạn là Vãi Cặc à.?", threadID);
  };
  
if ((event.body.toLowerCase() == "vcl") || (event.body.toLowerCase() == "vcl")) {
    return api.sendMessage(" ️sủa cc gì đấy thằng nhóc :>", threadID);
  };

  if ((event.body.toLowerCase() == "đĩ") || (event.body.toLowerCase() == "đĩ")) {
    return api.sendMessage(" đĩ cái lồng bàn tơ 😏", threadID);
  };
  
if ((event.body.toLowerCase() == "đím") || (event.body.toLowerCase() == "điếm")) {
    return api.sendMessage(" Tâu điếm mi nghĩ mi ko điếm à?", threadID);
  };

  if ((event.body.toLowerCase() == "?") || (event.body.toLowerCase() == "!")) {
    return api.sendMessage("Lệnh là / mày dùng cái đéo gì vậy", threadID);
  };
  
if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == ",")) {
    return api.sendMessage("Lệnh là / mày dùng cái đéo gì vậy", threadID);
  };
  
if ((event.body.toLowerCase() == "#") || (event.body.toLowerCase() == "+")) {
    return api.sendMessage("Lệnh là / mày dùng cái đéo gì vậy", threadID);
  };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "oke")) {
    return api.sendMessage("OK là tên của hãng bao cao su mà Bot hay thổi bong bóng", threadID);
  };

  if ((event.body.toLowerCase() == "THai") || (event.body.toLowerCase() == "thai")) {
    return api.sendMessage("===Đôi lời về THai===\n 🇹​🇭​🇦​🇮\n 🇩​🇪​🇵\n 🇹​🇷​🇦​🇮\n 🇻​🇱​", threadID);
  }; 
  
  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút TRC đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("mình là bot nhé?? Bạn xàm quá....!?", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("nay bae của Rùa có việc gì vui dạ 🥰 kể bé ghe đi ", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("nào ừm cái giề 🥲 nay bae k ngoan rồi kìa 🥲 ", threadID);
  };

if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };
  

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("úi Ny của bot nay ngoan ngoãn thế ta ơi 🥰🥰♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á bae? Tương tác đi tí boss cho Ny 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai con bò cười hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage(" icon của sự thỉu năng 😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ối gì thế tương tác mạnh lên nha ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ơi gì vậy tèng ơi tương tác đê 🤣 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "=)))") || (event.body.toLowerCase() == "=))")) {
    return api.sendMessage("bỏ cái icon đó đi, sao cậu không yêu tớ thay vì thả icon đó", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm gì 🥲 tương tác đi 😌", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "mèo gâu") || (event.body.toLowerCase() == "mèo gau")) {
    return api.sendMessage("mèo gâu cái dịt mẹ nhá mèo củ lồn kêu con cẹc🙂😼 bà câm mẹ mồm đi thứ chó🙂😼😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì tương tác lẹ đi tí boss cho bim bim🥺 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa cơ đấy chả ngoan tí nào cả🥲 dạ đi mới là bé ngoan <<<<<< 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk á giỏi nhề nay bật nóc nhà cơ đấy giỏi quá rồi còn😌", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu với đương, tiền, xe, nhà thì không có mà yêu với đương, lo học hành và đi làm kiếm tiền sau cả yêu không làm khổ con nhà người ta ra", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("nào k nên nói bậy phải sang lên hỉu chưa ?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("nói đi, ạ min còn phải đi làm việc cho admin ạ nói nhanh đi ạ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin cute của bót đi ạ 🤣", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("Em ơi đừng sầu em ơi đừng buồn em ơi đừng tin những lời người ta mấy ai thật thà Yêu em nữa đâu🖤", threadID);
  };

  if ((event.body.toLowerCase() == "Hảo") || (event.body.toLowerCase() == "hảo")) {
    return api.sendMessage("à ý là hảo hảo chua cay ý hả, mua hộ admin túi mì ăn đi hihi❤️", threadID);
  };

 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("Thằng công nhân sao giám mua cân thịt☺️", threadID);
  };

    if ((event.body.toLowerCase() == "nhà ghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao giám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "Tvm") || (event.body.toLowerCase() == "tvm")) {
    return api.sendMessage("Bbi vào box r hả, anh đứng đây từ chiều đợi bé gt+show đóa~~~❤️", threadID);
  };


  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin rất đẹp trai :))) và đang ế", threadID);
  };

 if ((event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "🌝")) {
    return api.sendMessage("icon đen tối vậy Bbi của anh❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một buổi tối tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("quẩy nào ....... Quẩy lên aeeeeee ơi hú hú hú ", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi trời thật là hư đốn 🥲 ", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút buồn cười ghê 🤣 ", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi chuối ạ 🤣....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("alo gì dạ? Yêu min k nè hihihi", threadID);
  };

  if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmmm")) {
    return api.sendMessage("Suy nghĩ j dạ cho bót hóng vs, đc k??", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "Tt") || (event.body.toLowerCase() == "tt")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao ah Khanh có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };
  

  if ((event.body.toLowerCase() == "tt") || (event.body.toLowerCase() == "Tt")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️đâu đâu cởi ra xem nào ? không cởi dk à ? thế sau câm câm đi nhé", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con phò 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi ? tởm vãi 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dậy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mmày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mmày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi chửi bậy ít thôi nhé 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "ông khanh") || (event.body.toLowerCase() == "ong khánh")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ôg quân") || (event.body.toLowerCase() == "@ah Quân")) {
    return api.sendMessage("️Sao kêu ad có gì không vậy 💢", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế bot sợ 🥲 nụ cười nguy hiểm gian sảo 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️đâu show xem nào ? xem ciu to hay nhỏ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....? à thậm chí mi dell bằng con chó ý", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi k ghiệ đó bạn ạ 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê  mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Min  nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày ghiệp quật cho 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "ừ")) {
    return api.sendMessage( "ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)",threadID);
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, event.threadID,event.messageID); 
       };
                                         }
module.exports.run = function({ api, event, client, __GLOBAL }) { }