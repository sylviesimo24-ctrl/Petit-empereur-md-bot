import connectToWhatsapp from './digix/crew.js'
import handleIncomingMessage from './events/messagehandler.js'

(async () => {
    await connectToWhatsapp(handleIncomingMessage)
    console.log('✅ Bot connecté avec succès !')
})()