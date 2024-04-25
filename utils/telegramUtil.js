const http = require("../config/axiosConfig")

const sendMessage = async (chatId, text) => {
    try {
        await http.post("/sendMessage", { chat_id: chatId, text })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    sendMessage
}
