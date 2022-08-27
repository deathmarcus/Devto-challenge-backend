const express = require("express")
const cors = require("cors")

const server = express()

// Routers
const routerAuth = require("./routes/auth.route")

// Middlewares
server.use(cors())
server.use(express.json())
server.use("/auth", routerAuth)

module.exports = server