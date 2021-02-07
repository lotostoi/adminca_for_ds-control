const { Router } = require('express')
const { TOKEN_SECRET_KEY, user, BASE_URL } = require('../config/config')
const jwt = require('jsonwebtoken')
const f = require('session-file-store')
const router = Router()


router.get(BASE_URL + 'auth/:token', async (req, res) => {

    if (req.user) {
        res.status(200).json(req.user)
    } else {
        res.status(200).send({ res: false })
    }
})

router.post(BASE_URL + 'auth', async (req, res) => {

    const username = req.body.username
    const password = req.body.password


    if (username !== user.username || password !== user.password) {
        return res.status(200).json({ result: false })
    }

    res.status(200).json({ ...user, result: true, token: jwt.sign(user, TOKEN_SECRET_KEY) })

})

module.exports = router