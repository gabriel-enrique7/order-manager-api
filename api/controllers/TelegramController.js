const router = require("express").Router()

const TelegramService = require("../services/TelegramService")

router.post("/message", async (req, res) => {
    console.log(req.body)

    const message = req.body.message.text
    const chat_id = req.body.message.chat.id
    TelegramService.receiveMessage(chat_id, message)

    res.status(200).end()
})

module.exports = router
