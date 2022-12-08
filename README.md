# ChatGPT and Whatsapp bot, based on Node.js

## How to deploy

### Locally

1. Create a `.env` file,

   1. Add Telegram bot token to `TELEGRAM_BOT_TOKEN` ([How to create a Telegram bot](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-telegram)）
   2. Add ChatGPT token to `CHATGPT_TOKEN` ([How to get ChatGPT token](https://github.com/transitive-bullshit/chatgpt-api#session-tokens))

2. Execute the command

```bash
# install dependencies
npm i 
# Start the bot service
pnpm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
# Then scan the QrCode and Enjoy!
```
