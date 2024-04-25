const axios = require("axios")

const baseURL = process.env.API_URL_TELEGRAM + process.env.API_KEY_TELEGRAM
const http = axios.create({ baseURL })

module.exports = http
