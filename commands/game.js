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
export async function morpion(client, message) {

    const board = `
⭕❌⭕
❌⭕❌
⭕❌⭕
`;

    await client.sendMessage(message.key.remoteJid, {
        text: `🎮 JEU MORPION\n${board}`
    }, { quoted: message });
}

export async function quiz(client, message) {

    const questions = [
        {
            q: "🌍 Capitale du Cameroun ?",
            r: "Yaoundé"
        },
        {
            q: "⚽ Combien de joueurs dans une équipe de foot ?",
            r: "11"
        },
        {
            q: "🐍 Python est un langage ou un animal ?",
            r: "Les deux 😂"
        }
    ];

    const pick = questions[Math.floor(Math.random() * questions.length)];

    await client.sendMessage(message.key.remoteJid, {
        text: `🧠 QUIZZ\n\n${pick.q}\n\n✅ Réponse : ${pick.r}`
    }, { quoted: message });
}

export async function anagramme(client, message) {

    const words = [
        {
            m: "TAC",
            r: "CHAT"
        },
        {
            m: "MEACRUON",
            r: "CAMEROUN"
        },
        {
            m: "TPHNOE",
            r: "PHONE"
        }
    ];

    const pick = words[Math.floor(Math.random() * words.length)];

    await client.sendMessage(message.key.remoteJid, {
        text: `🔠 ANAGRAMME\n\nMot mélangé : ${pick.m}\n\n✅ Réponse : ${pick.r}`
    }, { quoted: message });
}

export async function piege(client, message) {

    const pieges = [
        "❓ Je parle sans bouche et j'entends sans oreilles. Qui suis-je ?\n\n✅ Réponse : un écho",
        "❓ Plus tu prends de moi, plus je grandis.\n\n✅ Réponse : un trou",
        "❓ Qu’est-ce qui monte mais ne descend jamais ?\n\n✅ Réponse : l’âge"
    ];

    const pick = pieges[Math.floor(Math.random() * pieges.length)];

    await client.sendMessage(message.key.remoteJid, {
        text: `🪤 QUESTION PIÈGE\n\n${pick}`
    }, { quoted: message });
}