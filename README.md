# ChatGPT and Whatsapp bot, based on Node.js
![screenshot](ss.jpg)
## How to deploy

### Locally

1. Create a `.env` file,

2. Add ChatGPT token to `CHATGPT_TOKEN` ([How to get ChatGPT token](https://github.com/transitive-bullshit/chatgpt-api#session-tokens))

3. Read this on how to properly run the code with whatsapp qr ([How to Run Whatsapp Bot](https://wwebjs.dev/guide/#qr-code-generation))

2. Execute the command

```bash
# install dependencies
npm i 
# Start the bot service
pnpm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
# Then scan the QrCode and Enjoy!
```

## License

MIT © Amos Ayomide (amosayomide05)