const express = require("express")

const { createOne, getAll } = require("./controller")

const router = express.Router()

router.get("/", getAll)

router.post("/", createOne)

module.exports = router