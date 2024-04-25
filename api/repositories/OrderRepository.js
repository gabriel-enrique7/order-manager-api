const OrderModel = require("../../models/OrderModel")

class OrderRepository {

    async create(chat_id) {
        await OrderModel.create({ chat_id })
    }
}

module.exports = OrderRepository
