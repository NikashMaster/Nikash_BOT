const MARAYA  = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const SPAM = "Bot SPAM Center"


    MARAYA.addCommand({pattern: 'mspam', fromMe: true, deleteCommand: true, desc: SPAM,}, (async (message, match) => {

        await message.sendMessage("*WELLCOME MARAYA SPAM CENTER* \n\n✨BEST SPAMS\n\n\n▶(.1) BANG CORONA SPAM\n\n▶(.2) INSTAGRAM LINK SPAM\n\n▶(.3) CHINA SPAM\n\n▶(.4) 𝑴𝑨𝑿老༅࿐老༅࿐ SPAM\n\n\n\n MARAYA SPAM CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි");
    
    }));
    
 MARAYA.addCommand({pattern: 'mspam', fromMe: false, deleteCommand: true, desc: SPAM,}, (async (message, match) => {

        await message.sendMessage("*WELLCOME MARAYA SPAM CENTER* \n\n✨BEST SPAMS\n\n\n▶(.1) BANG CORONA SPAM\n\n▶(.2) INSTAGRAM LINK SPAM\n\n▶(.3) CHINA SPAM\n\n▶(.4) 𝑴𝑨𝑿老༅࿐老༅࿐ SPAM\n\n\n\n MARAYA SPAM CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි");
    
    }));
    
