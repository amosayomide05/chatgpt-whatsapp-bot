const qrcode = require("qrcode-terminal");
const request = require("request");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { ChatCompletion } = require('./churchless.js');

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/google-chrome-stable', //change if you are using windows or Mac OS (See puppeteer docs for more info)
    headless: true
  },
  authStrategy: new LocalAuth()
});

client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.on("authenticated", () => {
  console.log("Auth Completed!");
});
client.on("ready", () => {
  console.log("Bot is ready!");
});


client.on("message", async (message) => {
  if(message.type == "chat"){
    const chatBotMessage = await ChatCompletion.create(question);
    await message.reply(chatBotMessage);
  }
  else{
    message.reply("I only reply to text messages");
  }

});
