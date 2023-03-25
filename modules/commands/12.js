module.exports.config = {
	name: "12",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hải harin",
	description: "12 thì trong tiếng anh",
  commandCategory: "study",
	cooldowns: 0
};
module.exports.run = ({ event, api }) => api.sendMessage(` ==== 12 thì trong tiếng anh ====
 1. The Present Simple (Thì Hiện Tại Đơn) 
 2. The Present Continuous(Thì Hiện Tại Tiếp Diễn)
 3. The Present Perfect (Thì Hiện Tại Hoàn Thành)
 4. The Present Perfect Continuous (Thì Hiện Tại Hoàn Thành Tiếp Diễn)
 5. The Simple Past (Thì Quá Khứ Đơn)
 6. The Past Continous (Thì  Quá Khứ Tiếp Diễn)
 7. The Past Perfect (Thì Quá Khứ Hoàn Thành)
 8. The Past Perfect Continous (Thì Quá Khứ Hoàn Thành Tiếp Diễn)
 9. The Simple Future – (Thì Tương Lai Đơn)
10. The Future Continuous (Thì Tương Lai Tiếp Diễn)
11. The Future Perfect ( Thì Tương Lai Hoàn Thành)
12. The Future Perfect Continuous (Thì Tương Lai Hoàn Thành Tiếp Diễn)

Reply tin nhắn theo số để xem thêm về từng thì nha :33`, event.threadID, event.messageID);
