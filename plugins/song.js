const {cmd , commands} = require('../command')
const fg = require("api-dylux")
const yts = require("yt-search")

cmd({
    pattern: "song",
    desc: "Download Song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Give Me a Url Or song Name ‼️*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`

*📁DOWNLOADER ⬇️*

 *🏷️ Title   -* ${data.title}
*🕐 Time   -* ${data.timestamp}
*🏷️ Ago     -* ${data.ago}
*🧑‍🧑‍🧒‍🧒 Views -* ${data.views}

*_🎧Downloading Your Song Please wait..._*

🔮ᴘᴏᴡᴇʀᴅ ʙʏ *ᴏꜱᴀᴅᴀ-ᴍᴅ*

`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

//Download Auodio 
let down = await fg.yta(url)
let downloadUrl = down.dl_url 

//Send Audio 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
//await conn.sendMessage(from,{documnet:{url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title+ ".mp4",caption:"made by Osada-md"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//=============Video==============

cmd({
    pattern: "video",
    desc: "Download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Give Me a Url Or Video Name ‼️*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`

*📁Video DOWNLOADER ⬇️*

*🏷️ Title  -* ${data.title}
*🕐 Time   -* ${data.timestamp}
*🏷️ Ago    -* ${data.ago}
*🧑‍🧑‍🧒‍🧒 Views -* ${data.views}

*_🎧Downloading Your Video Please wait..._*

🔮ᴘᴏᴡᴇʀᴅ ʙʏ *ᴏꜱᴀᴅᴀ-ᴍᴅ*

`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

//Download Auodio 
let down = await fg.ytv(url)
let downloadUrl = down.dl_url 

//Send Audio 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
//await conn.sendMessage(from,{documnet:{url:downloadUrl},mimetype:"video/mp4",fileName:data.title+ ".mp4"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
