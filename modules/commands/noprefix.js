module.exports.config = {
    name: "noprefix",
    version: "1.0.0",
    hasPermssion: 0,
    description: "Anh không thương em🥺",
    credits: "Nghĩa Khoai To", // Ultra Super Mega Rebuild By DungUwU
    commandCategory: "Không cần dấu lệnh",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs": "",
        "request": ""
    }
};

const dirMaterial = __dirname + `/noprefix/`;

const conditionsAndData = [
    {
        conditions: ["buồn", "bùn", "pùn", "khóc"],
        message: "Đừng buồn nữa thương:3",
        files: {
            "buồn.mp4": "https://i.imgur.com/eWjpUcr.mp4"
        }
    },
    {
        conditions: ["chia sẻ"],
        message: "👨‍🏫Chia sẻ cho thầy điii",
        files: {
            "chiase2.mp3": "https://unkemptaptmotion.rootandroid.repl.co/chiase2.mp3"
        }
    },
    {
        conditions: ["h này còn chưa ngủ", "chưa ngủ hả"],
        message: "Ngủ đi nhá thương😽",
        files: {
            "chuangu4.mp4": "https://i.imgur.com/r4EL6Cj.mp4"
        }
    },
    {
        conditions: ["helo", "hello", "hii", "hí"],
        message: "Haiii chào cậu :3",
        files: {
            "hii.mp4": "https://unkemptaptmotion.rootandroid.repl.co/hii.mp4",
          "híi.mp4":"http://tinyurl.com/2cty5unq"
        }
    },
    {
        conditions: ["quê :>", "ôi quê"],
        message: "Lew Lew Quê",
        files: {
            "quê.mp4": "https://i.imgur.com/oQyNW2A.mp4"
        }
    },
    {
        conditions: ["sầu", "chán"],
        message: "Đừng bùn nữa nhá🥺",
        files: {
            "sầu2.mp4": "https://unkemptaptmotion.rootandroid.repl.co/sau2.mp4"
        }
    },
  {
        conditions: ["ngủ", "đi ngủ đây", "ik ngủ ây", "pp đi ngủ đây", "bai đi ngủ đây"],
        message: "[ 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 ]\n🌸𝐏𝐚𝐢𝐢 𝐏𝐚𝐢𝐢𝐢 𝐁𝐛𝐢 💤💤\n🌱𝐂𝐡𝐮́𝐜 𝐁𝐛𝐢 𝐍𝐠𝐮̉ 𝐍𝐠𝐨𝐧🛌",
        files: {
            "ngủ.mp4": "https://i.imgur.com/nSY8aWy.mp4"
        }
  },
  {
        conditions: ["cừi", "cười", "cười ẻ", "kkk"],
        message: "mắc cười kakaka 🤣🤣🤣",
        files: {
            "kkk.mp4": "https://i.imgur.com/WGVH9Mh.mp4"
        }
      }
]

module.exports.onLoad = function () {
    const { existsSync, mkdirSync, createWriteStream, statSync } = global.nodemodule["fs"];
    const { request } = global.nodemodule;
    if (!existsSync(dirMaterial)) mkdirSync(dirMaterial, { recursive: true });

    for (let i = 0; i < conditionsAndData.length; i++) {
        for (const fileName in conditionsAndData[i].files) {
            const filePath = `${dirMaterial}${fileName}`;
            if (!existsSync(filePath) || !statSync(filePath).isFile() || statSync(filePath).size === 0) {
                const file = createWriteStream(filePath);
                request(conditionsAndData[i].files[fileName])
                    .pipe(file)
                    .on("close", () => console.log(`[ NOPREFIX ] Downloaded ${fileName}`));
            }
        }
    }
}

module.exports.handleEvent = function ({ api, event }) {
    let { threadID, messageID, body } = event;
    const { createReadStream, existsSync, statSync } = global.nodemodule["fs"];

    body = body ? body.toLowerCase() : "";
    let msg = null, randomFile, allFiles, filePath;

    for (let i = 0; i < conditionsAndData.length; i++) {
        if (conditionsAndData[i].conditions.some(condition => body.indexOf(condition) == 0)) {
            allFiles = Object.keys(conditionsAndData[i].files);
            randomFile = allFiles[Math.floor(Math.random() * allFiles.length)];
            filePath = `${dirMaterial}${randomFile}`;

            if (existsSync(filePath) || statSync(filePath).isFile() || statSync(filePath).size > 0) {
                msg = {
                    body: conditionsAndData[i].message,
                    attachment: createReadStream(filePath)
                }
            }
            break;
        }
    }

    if (msg != null) api.sendMessage(msg, threadID, messageID);
    return;
}

module.exports.run = function ({ }) { }