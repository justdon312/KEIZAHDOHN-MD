import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['254783853522', 'dohn', false],
  ['254783853522', 'dohn', false], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['254783853522'] 
global.prems = ['254783853522', '254783853522', '254783853522']
global.allowed = ['254783853522']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '𝐊𝐄𝐈𝐙𝐀𝐇𝐃𝐎𝐇𝐍-𝐌𝐃'
global.princebot = '𝐊𝐄𝐈𝐙𝐀𝐇𝐃𝐎𝐇𝐍-𝐌𝐃'
global.packname = '𝐊𝐄𝐈𝐙𝐀𝐇' 
global.author = '𝐃𝐎𝐇𝐍' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://whatsapp.com/channel/0029VahhyIm1noz80Dybyp0a'
global.menuvid = 'https://i.imgur.com/0UK6D3b.mp4'
global.Princesc = 'https://github.com/justdon312/KEIZAHDOHN-MD' 
global.princeyt = 'https://chat.whatsapp.com/IhlJkw6hl4N80B1bxyfMmo'
global.Princelog = 'https://telegra.ph/file/fa4152408c8d224dc5d3e.jpg'
global.thumb = fs.readFileSync('./Assets/wasi.png')

global.wait = '*♻️ _ʟᴏᴅɪɴɢ ᴘʟᴢ ᴡᴀɪᴛ ᴅᴇᴀʀ _*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
