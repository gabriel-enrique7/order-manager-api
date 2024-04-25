const telegramUtil = require("../../utils/telegramUtil")

const OrderRepository = require("../repositories/OrderRepository")

const sendOrder = async (chatId) => {
    text = "Seu pedido do Hambúrguer Clássico foi realizado\nEm breve estará na sua casa ;)"

    try {
        const repository = new OrderRepository()
        await repository.create(chatId)

        // Implementar Web Sockets
    } catch (error) {
        console.log(error)
    }

    await telegramUtil.sendMessage(chatId, text)
}

const sendOrderStatus = async (chatId) => {
    // Consultar do tabela de pedidos

    text = "O status do seu pedido é\n*Em andamento*"
    telegramUtil.sendMessage(chatId, text)
}

const sendWelcome = async (chatId) => {
    text = `Olá, seja bem-vindo a Hamburgueria Arte Burgers\nTemos os seguintes comandos disponiveis:\n/pedido - Realizar um pedido\n/statusPedido - Consultar status do seu pedido`
    telegramUtil.sendMessage(chatId, text)
}

const comands = {
    "/pedido": sendOrder,
    "/statusPedido": sendOrderStatus,
    "default": sendWelcome
}

const receiveMessage = async (chatId, message) => {
    try {
        const command = comands[message] || comands["default"]
        command(chatId)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { receiveMessage }
