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
  const { ChatGPTAPI, getOpenAIAuth } = await import('chatgpt');
const openAIAuth = await getOpenAIAuth({
      email: ,
      password:  
});
const api = new ChatGPTAPI({ ...openAIAuth });


try{
      await api.initSession();
    }
    catch(error){
      console.error("ChatGPT Auth Failed: " + error.message);
    }
})();

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

client.on("message", (message) => {

  (async () => {
    var response = await api.sendMessage(message);
    await sleep(5000);
    message.reply(response);
  })();

});