let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://github.com/Itxxwasi/WASI-MD/raw/main/Assets/mp3/alive.mp3"
    let url = "https://whatsapp.com/channel/0029Vabz7vUJ3jutx2fNsf2P"
    let murl = "https://chat.whatsapp.com/IhlJkw6hl4N80B1bxyfMmo"
    let hash = global.princebot
    let img = "https://telegra.ph/file/fa4152408c8d224dc5d3e.jpg"
    let num = "923192173398"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
