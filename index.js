const PORT = 3555
const path = require('path')
const express = require('express')

const app = express()
const session = require('express-session')
const { user: USER } = require('./src/config/config')

const passport = require('passport')
LocalStrategy = require('passport-local').Strategy
const FileStore = require('session-file-store')(session)

const main = require('./src/routers/main')
const objects = require('./src/routers/objects')
const auth = require('./src/routers/auth')
const passport = require('passport')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'frontend')))

app.use(
    session({
        secret: 'wwwwsxdvdfsgfdgfdgfdgfdg',
        store: new FileStore(),
        coockie: {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false

    })

)

passport.serializeUser(
    function (user, done) {
        done(null, user.id)
    }
)
passport.deserializeUser(
    function (id, done) {
        const user = USER.id === id ? USER : false
        done(null, user.id)
    }
)

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username, password)
        /*   User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          }); */
        return done(null, false, { message: 'Incorrect username.' })
    }
))

app.post('/admin-ds/auth', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
})
)



app.use(main)

app.use(auth)
app.use('/objects', objects)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))