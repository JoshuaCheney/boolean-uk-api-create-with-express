const Book = require("./model")
const db = require("../../utils/database")

Book();

function createOne(req, res) {
    const bookToCreate = {
        ...req.body
    }

    const createOne = `
    INSERT INTO books (title, type, author, topic, publicationdate)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `
    db.query(createOne, [bookToCreate.title, bookToCreate.type, bookToCreate.author, bookToCreate.topic, bookToCreate.publicationdate])
        .then((result) => res.json({data: result.rows[0]}))
        .catch(console.error)
}

function getAll(req, res) {
    const getAll = `
    SELECT *
    FROM books
    `
    console.log("here")

    db.query(getAll)
        .then((result) => res.json({data: result.rows}))
        .catch(console.error)
}

module.exports = {createOne, getAll}