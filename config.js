const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/kXv7hkSC/theogod.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134983467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/kXv7hkSC/theogod.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_22_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNXbEpOcEdlZU9hK0JyNEp4czVOTHRHSm9qUmFWTlpNUFVuTEJYRDVCVm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndORkpWSEstU29pa2VBM211bzdaREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTMzZWZjNTktNzM1Zi00MGM4LTgwNGUtZDhjZjUyMmQxNjQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICA0MCxcbiAgICAgIDQ3LFxuICAgICAgMTAwLFxuICAgICAgNDcsXG4gICAgICAxMDIsXG4gICAgICAxOTEsXG4gICAgICAyMTgsXG4gICAgICAzOSxcbiAgICAgIDIxNixcbiAgICAgIDI1NCxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDE1MCxcbiAgICAgIDIyMSxcbiAgICAgIDIzMixcbiAgICAgIDQ4LFxuICAgICAgMTcsXG4gICAgICAxOTcsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxNDcsXG4gICAgICA2OSxcbiAgICAgIDE3NixcbiAgICAgIDk3LFxuICAgICAgODEsXG4gICAgICA4NSxcbiAgICAgIDI3LFxuICAgICAgOTYsXG4gICAgICAxNTIsXG4gICAgICAyNDksXG4gICAgICAxMixcbiAgICAgIDI4LFxuICAgICAgMjUsXG4gICAgICAxNTAsXG4gICAgICAxODIsXG4gICAgICA3MCxcbiAgICAgIDY1LFxuICAgICAgNDAsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL21nRnNReG9XeXRBWVlEQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZYUGxWdXpPTVU4dWNySHd2TmpjTmlOd29Zc0xKWVU3eVhXSUFmc3plQ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMzhld2xJZ2pqNHZPNW5TR0JIUjN6QVhaWDRlbitjRVlIRWtPdkkyd2MraGo5Y05VNXd0K3ZXZ3hrMStBNjNvc3NWZmJubyswdFNzZVpzTHRKSlRQQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidXJMWDRXTTJDZnBuYVI2Mm9WNkFxNEVTaUFlMkVmVHFDK1RZd1Z1Mk9JSlh0L21ySWMvQmFRZWxicHRhVHJwUzg0ZUhWdVY0TlVnZU9KWVdnV3FuakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM0OTgzNDY3OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlb1wiLFxuICAgIFwibGlkXCI6IFwiMTM3OTE0OTIzNjIzNjk6NTdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0OTgzNDY3OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ4NDU1NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "THEO_IDOLO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://i.postimg.cc/kXv7hkSC/theogod.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
