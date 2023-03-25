//this is my source code, pls dont mod them  
const { spawn } = 
require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);


logger("Opened server site...", "[ zioles ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ zioles ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ zioles ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json").then((res) => {
    logger(res['data']['name'], "[ zioles ]");
    logger("Version: " + res['data']['version'], "[ Phiên Bản ]");
    logger(res['data']['descriptiondirname [ zioles ]");
});






async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/modules/commands/banking/banking.json');
const logger = require("./utils/log.js");
const user = require('./modules/commands/banking/banking.json');
const timeIM = 60*60
const laisuat = 2
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	logger.loader("Đang xử lí...");
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}
bank()
startBot();

const config = {
	status: true,
	name: 'Disme Project',
	timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
	logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ 𝐇𝐚𝐫𝐢𝐧 ]');
	if(process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
	logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với UptimeRobot cho bạn!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
	connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
	try {
		const res = (await axios.get(`https://vigorousentirebundledsoftware.duy-tuantuan.repl.co/?add=${url}`)).data;
		if(res.error) return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
		return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
	}
	catch {
		return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
	}	
};
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
//vẫn k hiểu tại s file bị v :v ae nào fix đc cho dùng ké nhé