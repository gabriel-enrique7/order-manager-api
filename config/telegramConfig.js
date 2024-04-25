const http = require("./axiosConfig")

const webhookURL = `${process.env.SERVER_URL}/api/telegram/message`

const init = async () => {
    try {
        await http.get(`/setWebhook?url=${webhookURL}`)

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { init }
