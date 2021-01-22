const PORT = 3555
const path = require('path')
const express = require('express')

const app = express()

const main = require('./src/routers/main')
const objects = require('./src/routers/objects')

app.use(express.static(path.join(__dirname, 'frontend')))


app.use(main)

app.use('/objects', objects)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))