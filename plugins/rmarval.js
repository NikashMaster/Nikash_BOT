/*  
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "You Can Png From Any Emoji"
const iii = "type only emoji"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'rmarval ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by RAVANA'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'rmarval ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by RAVANA.'})

    }));
}
