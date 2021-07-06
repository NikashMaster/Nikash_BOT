  
  
/* # Exclusively from 💕 Maraya
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'mdraw ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/draw-image?apikey=00oQhHnqcqFGofHbjsFtXZcKVWO&image=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by 💕 Maraya*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'mdraw ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/draw-image?apikey=00oQhHnqcqFGofHbjsFtXZcKVWO&image=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by 💕 Maraya*' })

    }));
    
}
