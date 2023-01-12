const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/google-chrome-stable',
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


(async () => {
  const api = new ChatGPTAPIBrowser({
    email: emaiL, //Your Password
    password: password //Your Email
  })

  await api.initSession()


const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

client.on("message", (message) => {

  (async () => {
    var response = await api.sendMessage(message);
    await sleep(5000);
    message.reply(response);
  })();

});
  })();
