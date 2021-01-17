const { Router } = require('express')
const path = require('path')
const router = Router()
const multer = require('multer')
const fs = require('fs')


const FILE_LINK = path.join(__dirname, '..', 'files', 'csv-file.csv')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'files'))
    },
    filename: function (req, file, cb) {
        cb(null, 'csv-file' + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

router.post('/add', upload.single('file'), async (req, res) => {

    fs.readFile(FILE_LINK, "UTF-8", (err, data) => {
        if (err) throw err;
        console.log(data.split(/\n/gm))
    })

    res.json({ res: "ok" })

})

module.exports = router