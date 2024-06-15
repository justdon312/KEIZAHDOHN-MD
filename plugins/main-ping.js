import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let thumbnail = 'https://telegra.ph/file/fa4152408c8d224dc5d3e.jpg'
  let fgg = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `𝐊𝐄𝐈𝐙𝐀𝐇𝐃𝐎𝐇𝐍-𝐌𝐃`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'𝐊𝐄𝐈𝐙𝐀𝐇𝐃𝐎𝐇𝐍-𝐌𝐃'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let pingMsg = await conn.sendMessage(m.chat, { text: '𝐝𝐨𝐡𝐧 𝐩𝐢𝐧𝐠𝐢𝐧𝐠...' }, { quoted: fgg })

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(
      m.chat,
      {
        protocolMessage: {
          key: pingMsg.key,
          type: 14,
          editedMessage: {
            conversation: `𝐊𝐞𝐢𝐳𝐚𝐡 𝐒𝐩𝐞𝐞𝐝: ${latency} ｍｓ`,
          },
        },
      },
      {}
    )
  })
}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler


















/**

import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'Pinging...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `└──✪ speed of ${boname} ✪── \n ${latency} ms` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed', 'pn'] 

export default handler
**/
