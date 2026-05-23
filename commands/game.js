export async function gameMenu(client, message) {
    const text = `
🎮 MENU JEUX 🎮

🎲 .dice  → lancer un dé
🪙 .coin  → pile ou face
😂 .joke  → blague random
📖 .truth → vérité
🔥 .dare  → action
`;

    await client.sendMessage(message.key.remoteJid, {
        text
    }, { quoted: message });
}

export async function dice(client, message) {
    const number = Math.floor(Math.random() * 6) + 1;

    await client.sendMessage(message.key.remoteJid, {
        text: `🎲 Résultat du dé : ${number}`
    }, { quoted: message });
}

export async function coin(client, message) {
    const result = Math.random() < 0.5 ? 'PILE 🪙' : 'FACE 🪙';

    await client.sendMessage(message.key.remoteJid, {
        text: `🪙 ${result}`
    }, { quoted: message });
}

export async function joke(client, message) {
    const jokes = [
        "😂 Pourquoi JavaScript est triste ? Parce qu'il ne Node plus rien.",
        "😂 Le bug a fui parce qu'il avait peur du debug.",
        "😂 Un développeur sans café = erreur système."
    ];

    const pick = jokes[Math.floor(Math.random() * jokes.length)];

    await client.sendMessage(message.key.remoteJid, {
        text: pick
    }, { quoted: message });
}