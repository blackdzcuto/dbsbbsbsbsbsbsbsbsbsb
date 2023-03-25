const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "múi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz",
  description: "Ảnh múi nè ",
  commandCategory: "Hình Ảnh",
  usages: "múi",
  cooldowns: 5,
    dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.imgur.com/ZxgqkwL.jpg",
"https://i.imgur.com/b9UcrUD.jpg",
"https://i.imgur.com/xWUGHFq.jpg",
"https://i.imgur.com/4X3AJ9o.jpg",
"https://i.imgur.com/mMtvb2d.jpg",
"https://i.imgur.com/HN60IYC.jpg",
"https://i.imgur.com/kJ89HBh.jpg",
"https://i.imgur.com/46Iwvsr.jpg",
"https://i.imgur.com/EE0ahrW.jpg",
"https://i.imgur.com/2ddfAGO.jpg",
"https://i.imgur.com/8E7ekHj.jpg",
"https://i.imgur.com/hJwN7SO.jpg",
"https://i.imgur.com/s1Da2W9.png",
"https://i.imgur.com/Wc0EVQK.jpg",
"[https://i.imgur.com/LrVKSrQ.jpg",
"https://i.imgur.com/0xJqnFG.jpg",
"https://i.imgur.com/VuMhVbk.jpg",
"https://i.imgur.com/kjSKaFW.jpg",
"https://i.imgur.com/lvAjJHU.jpg",
"https://i.imgur.com/dxXzo3Y.jpg",
"https://i.imgur.com/2cslVNr.jpg",
"https://i.imgur.com/PMzNoAe.jpg",
"https://i.imgur.com/cp8D0Aa.jpg",
"https://i.imgur.com/yFNyEwG.jpg",
"https://i.imgur.com/CUW1Uic.jpg",
"https://i.imgur.com/HYIrEaz.jpg",
"https://i.imgur.com/nV7gfCz.jpg",
"https://i.imgur.com/oeCl76J.jpg",
"https://i.imgur.com/2ZBeNSw.jpg",
"https://i.imgur.com/JFvT1X2.jpg",
"https://i.imgur.com/N8rVc6H.jpg",
"https://i.imgur.com/dqM1iBJ.jpg",
"https://i.imgur.com/X0MzSxw.jpg",
"https://i.imgur.com/rTsEmXi.jpg",
"https://i.imgur.com/19dPbCb.jpg",
    "https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/244635839_565527997866718_4737163000656834008_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=x-xuDKQXWwQAX9VOGQC&_nc_ht=scontent.fhan6-1.fna&oh=03_AVKw5TvsaluCwA46YjQaWjlBrE92wZZmDALx1lCbuEZetw&oe=61DFD351",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/251651673_189916313301815_7371616905678009730_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ZWzr4WmaYEsAX8WbBNn&_nc_ht=scontent.fhan6-1.fna&oh=03_AVJZMkhr7-f4dpgCE62f2MzaVK6hvbzCr-DRrbykf-dCqg&oe=61E23330",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/263004185_3163377077321597_5614448932656553807_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=iHhFw3NPyq4AX9Ye1Xe&_nc_ht=scontent.fhan6-1.fna&oh=03_AVIAgKQXcGY89vUDJNjVkAidqYTLERuMy4wGSrj3FezCMg&oe=61E048C1",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/250054172_1056221388478167_680957060134637156_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=dAxfkPu-GwoAX-EOEQJ&_nc_ht=scontent.fhan6-1.fna&oh=03_AVJpTKfE9rTGrCvMF_vr6tcGdXFz8zZnfrk94T6W4E9jTA&oe=61E186CA",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/263337857_282070200424244_5235274524561668341_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RHuegZX0-3EAX9Gyi5S&_nc_ht=scontent.fhan6-1.fna&oh=03_AVLm5UEYUjlzEu7L-i1eo4c8B9aR7ppo5BK1R4dwixv6gw&oe=61DED8BC",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/252779109_423454655824969_94606056284439478_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=usqUCJJTJkQAX-sBInN&_nc_ht=scontent.fhan6-1.fna&oh=03_AVKJtuzgOiaHcWRmxXFI6RnOdOL3ugG6E3WQK5JT35A_BA&oe=61DEC453",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/246866641_835244187172395_1141986737471857577_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=3Oouf1pxK_wAX9V4gbE&_nc_ht=scontent.fhan6-1.fna&oh=03_AVJGtI15cxp-na8vBfHap4c2D374vrj6QI8gPf3zVxX_Lw&oe=61E24568",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/250660049_724026691887463_6979040562146888508_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nsd-xfR0yWgAX9Nw2VC&_nc_ht=scontent.fhan6-1.fna&oh=03_AVI7BRIjMhyeH4ME9ncVKFIzHCUxgFKr6uIdrw_mG2FBeQ&oe=61E13B3B",
"https://anhhungxadieu.vn/trai-dep-6-mui/imager_93474.jpg",
"https://kenh14cdn.com/thumb_w/660/2020/5/9/962549905647937477840989205244852504100864o-1589032097578817363046.jpg",
"https://kenh14cdn.com/2020/5/9/screen-shot-2020-05-09-at-84953-pm-15890322245641806566093.png",
     ];
   var callback = () => api.sendMessage({body:`Ảnh múi\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/49.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/49.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/49.jpg")).on("close",() => callback());
   };