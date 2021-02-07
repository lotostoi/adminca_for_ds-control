const PORT = 3555
const path = require('path')
const express = require('express')
const jwt = require('jsonwebtoken')

const history = require('connect-history-api-fallback')
const app = express()
const { TOKEN_SECRET_KEY } = require('./src/config/config')

const main = require('./src/routers/main')
const objects = require('./src/routers/objects')
const auth = require('./src/routers/auth')
process.env.NODE_ENV !== 'development' && app.use(history())


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'frontend')))

const mustBeAuthorizationRestApi = (req, res, next) => {
  if (req.params.token) {
    jwt.verify(req.params.token, TOKEN_SECRET_KEY, (err, data) => {
      if (err) return next()
      delete data.password
      req.user = data
      next()
    })
  } else {
    next()
  }
}


app.use('*/:token', mustBeAuthorizationRestApi)


app.use(auth)
app.use(objects)
app.use(main)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))