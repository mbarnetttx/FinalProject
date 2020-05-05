if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const express  = require('express');
const app      = express();
const bcrypt   = require('bcrypt'); // encrypts passwords for tighter security
const passport = require('passport');
const flash    = require('express-flash');
const session  = require('express-session');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT     = process.env.PORT || 3001;




// configure Passport
const initializePassport = require('./passport-config')
initializePassport(
	passport, 
	email => users.find(user => user.email === email),
	id    => users.find(user => user.id === id)
)

const users = []

// middleware
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('client/build'))
app.use(flash())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

// Add routes, both API and view
// const donationsRouter = ("./controllers/donationsController")
// app.use(donationsRouter);

app.use(routes);




// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/donations",
	{ useUnifiedTopology: true }
);

// persists login across entire session
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// routes for login & register pages
app.get('/', checkAuthenticated, (req, res) => {
	res.render('index.js', { name: req.user.name })
})

app.get('/Login', checkNotAuthenticated, (req, res) => {
	res.render('Login.js')
})

app.post('/Login', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/Login',
	failureFlash: true
}))

app.get('/Register', checkNotAuthenticated, (req, res) => {
	res.render('Register.js')
})

app.post('/Register', checkNotAuthenticated, async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		users.push({
			id: Date.now().toString(),
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword
		})
		res.redirect('/Login')
	} catch {
		res.redirect('/Register')
	}
	console.log(users)
})
// end routes

// logs user out
app.delete('/Logout', (req, res) => {
	req.logOut()
	res.redirect('/Login')
})

// Authenticated Middleware: Redirects users who are not logged in to the Login Page
function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}
	res.redirect('/Login')
}

// if user is logged in this redirects them the the home page
function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
	  return res.redirect('/')
	}
	next()
}



// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});