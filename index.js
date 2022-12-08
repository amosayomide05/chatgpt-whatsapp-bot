const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/google-chrome-stable',
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


const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

client.on("message", (message) => {

  (async () => {
    const { ChatGPTAPI } = await import('chatgpt');

    const api = new ChatGPTAPI({
      sessionToken: process.env.SESSION_TOKEN,
      markdown: false
    });

    await api.ensureAuth();
    const response = await api.sendMessage(message);
    await sleep(5000);
    message.reply(response);
  })();

});