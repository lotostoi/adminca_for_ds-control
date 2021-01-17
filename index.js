const PORT = 3555
const path = require('path')
const express = require('express')
const { db: configDB } = require('./src/config/config')
const PouchDB = require('pouchdb')
const app = express()

const main = require('./src/routers/main')
const objects = require('./src/routers/objects')

app.use(express.static(path.join(__dirname, 'frontend')))


app.use(main)

app.use('/objects', objects)

const db = new PouchDB(configDB.link + 'test')

console.log(db.info().then(console.log).catch(console.log))


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))