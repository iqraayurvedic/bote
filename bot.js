const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('Scan this QR Code to log in:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

client.on('message', async message => {
    if (message.body.toLowerCase() === 'hello') {
        client.sendMessage(message.from, 'Hello! How can I help you?');
    }
});

client.initialize();
