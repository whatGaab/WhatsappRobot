const whatsapp = require('@open-wa/wa-automate');
const { decryptMedia } = require('@open-wa/wa-decrypt');
whatsapp.create().then((client) => start(client));
var prefix = '?'

function start(client) {
    client.onMessage(async (message) => {
        if (!message.body.startsWith(prefix)) return;
        const args = message.body.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        switch(command) {
            case 'world':
                cleint.sendText(message.from, "Você acabou de usar o ?world")
        }
    });
};