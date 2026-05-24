export async function dice(client, message) {

    const number = Math.floor(Math.random() * 6) + 1;

    await client.sendMessage(message.key.remoteJid, {
        text: `🎲 Résultat : ${number}`
    }, { quoted: message });
}

export async function coin(client, message) {

    const result = Math.random() < 0.5 ? 'PILE' : 'FACE';

    await client.sendMessage(message.key.remoteJid, {
        text: `🪙 ${result}`
    }, { quoted: message });
}