require("dotenv").config()

const express = require("express")

const telegramConfig = require("./config/telegramConfig")
const databaseConfig = require("./config/databaseConfig")

const Order = require("./models/OrderModel")

const TelegramController = require("./api/controllers/TelegramController")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/telegram", TelegramController)

app.get("/", (req, res) => {
    res.status(200).json({ status: "Ok" })
})

app.listen(3000, async () => {
    try {
        await telegramConfig.init()
        await databaseConfig.authenticate()
        await databaseConfig.sync()

        console.log("The server has been started 🚀")
    } catch (error) {
        console.log(error)
    }
})
