const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./db')
const router = require('./routes')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

db.connect()
    .then(() => {
        router(app)

        app.listen(3001,
            () => console.log('server is up'))
    })