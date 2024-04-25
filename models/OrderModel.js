const Sequelize = require("sequelize")
const database = require("../config/databaseConfig")

const Order = database.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    chat_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    }

}, { updatedAt: false });

module.exports = Order
