const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    r_text[1] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    r_text[2] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    r_text[3] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    r_text[4] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    r_text[5] = "https://telegra.ph/file/7de56858209649d760d99.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮Nikash💮━━━━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 Maraya🇱🇰 𝐛𝐨𝐭.
╚═════════════Nikash(.)
■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕
💮විධානය➜ .song <පෙළow>
🍙භාවිතා කිරීම➜ ඔබ වෙනුවෙන් ගීතය බාගත කරයි..
💮විධානය➜ .video <yt link>
🍙𝙐𝙨𝙚➜ යූ ටියුබ් සබැඳියෙන් වීඩියෝ බාගන්න.
💮විධානය➜ .profinsta<පරිශීලක නාමය>
🍙𝙐𝙨𝙚➜ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.
💮විධානය➜  .insta <link>
🍙𝙐𝙨𝙚➜   Instagram වෙතින් අන්තර්ගතය බාගන්න.
💮විධානය➜  .yt<text>
🍙𝙐𝙨𝙚➜   ඔබට yt සබැඳි ලබා දෙයි.
🍙 විධානය➜  .show <පෙන්වන්න නම>
🍙𝙐𝙨𝙚➜   රූපවාහිනී කතා මාලාව හා සංදර්ශන සම්බන්ධ තොරතුරු ලබා ගන්න.
💮විධානය➜ .gif 
🍙𝙐𝙨𝙚➜ වීඩියෝව gif බවට පරිවර්තනය කරයි.
💮විධානය➜ .tomp3 
🍙𝙐𝙨𝙚➜ වීඩියෝව ශ්රව්ය උපකරණ බවට පරිවර්තනය කරයි.
💮විධානය➜ .say <පෙළ>
🍙𝙐𝙨𝙚➜ පෙළ හ voice බවට පරිවර්තනය කරයි.
💮විධානය➜ .img <පෙළ>
🍙𝙐𝙨𝙚➜ එය ගූගල් වෙතින් රූපය යවයි.
💮විධානය➜ .trt <language code>
🍙𝙐𝙨𝙚➜ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wiki <පෙළ>
🍙𝙐𝙨𝙚➜ එය විකිපීඩියාවේ ප්රති .ලය යවයි.
💮විධානය➜ .lyric <පෙළ>
🍙𝙐𝙨𝙚➜  ගීතයේ පද රචනා සොයා ගනී.
💮විධානය➜ .covid <රටේ කේතය>
🍙𝙐𝙨𝙚➜ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.
💮විධානය➜ .weather <නගරය>
🍙𝙐𝙨𝙚➜ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.
💮විධානය➜ .removebg 
🍙𝙐𝙨𝙚➜ රූපයේ පසුබිම ඉවත් කරයි.
💮විධානය➜ .ocr
🍙𝙐𝙨𝙚➜ රූපයේ ලියා ඇති පෙළ සොයා ගනී.
💮විධානය➜ .wallpaper
🍙𝙐𝙨𝙚➜ එය අහඹු බිතුපත ඔබට යවයි.
■□■□■□■□■□■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟
💮විධානය➜ .joke 
🍙𝙐𝙨𝙚➜ එය අහඹු විහිළුවක් යවයි.
 
💮විධානය➜ .meme <පෙළ>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.
💮විධානය➜ .quote 
🍙𝙐𝙨𝙚➜ එය අහඹු උපුටා දැක්වීමක් යවයි.
💮විධානය➜ .ss <වෙබ් අඩවි සබැඳිය>
🍙𝙐𝙨𝙚➜ එය වෙබ් අඩවියේ තිර රුව යවයි.
💮විධානය➜ .changesay <පෙළ>
🍙𝙐𝙨𝙚➜ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි.
💮විධානය➜ .trumpsay
🍙𝙐𝙨𝙚➜ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න
💮විධානය➜ .compliment 
🍙𝙐𝙨𝙚➜ ඔබට ප්‍රශංසාවක් ලබා දෙයි.
💮විධානය➜  .bitly <link>
🍙𝙐𝙨𝙚➜   ඔබේ සබැඳිය කෙටි කරන්න.
💮විධානය➜  .dict 
🍙𝙐𝙨𝙚➜   ශබ්ද කෝෂය [-dict en; anime]
💮විධානය➜  .zodiac <leo> 
🍙𝙐𝙨𝙚➜   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි.
💮විධානය➜  .qr <text>
🍙𝙐𝙨𝙚➜   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.
💮විධානය➜  .movie 
🍙𝙐𝙨𝙚➜  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
💮විධානය➜  .anime <text>
🍙𝙐𝙨𝙚➜  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
■□■□■□■□■□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝
සමහර ලොගෝ වැඩ නෑ මොකද ලොගෝ දෙන site එක limit තියෙන්නේ unlimited ගන්නනම් සල්ලි  ඕන.
💮විධානය➜ .sticker 
🍙𝙐𝙨𝙚➜ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි.
💮විධානය➜ .photo 
🍙𝙐𝙨𝙚➜ ස්ටිකර් රූපයට පරිවර්තනය කරයි.
💮විධානය➜ .attp <text>
🍙𝙐𝙨𝙚➜ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.
■□■□■□■□■□■□■□■□■□■□
Logo  Commands
💮විධානය➜ .mff
🍙𝙐𝙨𝙚➜ Freefire ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mpubg
🍙𝙐𝙨𝙚➜ pubg ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mmarvel
🍙𝙐𝙨𝙚➜ marvel ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mwetglass
🍙𝙐𝙨𝙚➜ weglass ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mbook
🍙𝙐𝙨𝙚➜ book ලාන්චන ලබා ගැනීමට
💮විධානය➜ .maveng
🍙𝙐𝙨𝙚➜ avengers ලාන්චන ලබා ගැනීමට
💮විධානය➜ .m3d
🍙𝙐𝙨𝙚➜ 3d ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mbneon
🍙𝙐𝙨𝙚➜ bneon ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mharry
🍙𝙐𝙨𝙚➜ Harry Potter ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mgplay
🍙𝙐𝙨𝙚➜ youtube gold plabtn ලාන්චන ලබා ගැනීමට
💮විධානය➜ .mhorror
🍙𝙐𝙨𝙚➜ horror ලාන්චන ලබා ගැනීමට
💮විධානය➜ .msplay
🍙𝙐𝙨𝙚➜ youtube silver platbtn ලාන්චන ලබා ගැනීමට
┇
┇ ᵐᵒʳᵉ ˡᵒᵍᵒˢ ᶜᵒᵐᵐⁱⁿᵍ ˢᵒᵒⁿ😉
┇_______________________________
┇ try more logos type :-)
┇              *!txttoimg*
╚═══════════════════════════════
═════💕Nikash═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));
