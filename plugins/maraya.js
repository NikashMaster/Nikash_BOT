const Asena = require('../events');
const{MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'maraya', fromMe: true}, (async (message, match) => {

       await message.sendMessage('this is test');
       await new Promise(r => setTimeout(r, 1000));

       await message.sendMessage('Bu bir testtir!');


}));