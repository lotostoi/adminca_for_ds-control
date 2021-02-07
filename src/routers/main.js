const { Router } = require('express')
const router = Router()
const path = require('path')

router.get('/', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/index.html'))
})

module.exports = router