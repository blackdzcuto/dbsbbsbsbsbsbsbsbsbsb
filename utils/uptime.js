/*
- Uptime tự động trên replit
- Hỗ trợ cho replit free
- Có thể bật tắt tính năng
- Thay đổi tên phía dưới config để hệ thống dễ nhận dạng nhé!
- Code by D-Jukie vui lòng không thay đổi credits, tks!
*/

const axios = require("axios");
const logger = require("./log");

const config = {
    status: true,
    name: 'Disme Project',
    timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
    logger('You are running the bot at the link: ' + urlRepl, '[ 𝐇𝐚𝐫𝐢𝐧 ]');
    if(process.env.REPLIT_CLUSTER == 'hacker') return logger('You are using Replit Hacker, remember to turn on "Always On" so that the BOT is always running!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
    logger('You are using normal Replit, the system will automatically connect to UptimeRobot for you!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
    connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
    try {
        const res = (await axios.get(`https://api.phamvandien.xyz/uptimerobot?url=${url}&name=${name}`)).data;
        if(res.error) return logger('Completed Uptime connection for you!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
        return logger('Completed Uptime connection for you!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
    }
    catch {
        return logger('Uptime server has a problem, cant turn on uptime for you!', '[ 𝐇𝐚𝐫𝐢𝐧 ]');
    }    
};
