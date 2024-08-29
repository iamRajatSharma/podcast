const express = require("express")
const app = express();
require("dotenv").config();
require("./database/conn")

app.get("/", (req, res) => {
    res.send({ msg: "Hello" })
})

app.listen(process.env.PORT, (err) => {
    if (!err) console.log(`Server started on port ${process.env.PORT}`)
})