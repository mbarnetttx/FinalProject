// dependencies
var express       = require ("express");
require('dotenv').config();

var bodyParser   = require ("body-parser");
var cookieParser = require('cookie-parser');

var mongoose     = require('mongoose');
var passport     = require('passport');
var session      = require('express-sessions');


// set up express app
var app  = express();

var PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        name: 'session-id',
        secret: process.env.APP_SECRET,
        saveUninitialized: false,
        resave: fale,
        cookie: {
            expires: 600000,
        },
    })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());
authConfig(passport);

// 404 Catcher
app.use((req, res, next) => {
    const error  = new Error(`${req.originalUrl} - Not found`);
    error.status = 404;
    next(error);
});

// Error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({ message: `Error! ${error.message}`, error });
});

// connect db model
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/mern_todolist",
	{ useNewUrlParser: true }
);

// var DB = require ("");



// sets up app to handle data parsing
app.use(routes);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/api/', auth);
app.use('/api/users/', users);

// routes
require("")
var auth  = require('./routes/auth');
var users = require('.routes/users');


// sync sequelize models and start express app
// DB.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        consolelog("App listening on PORT"+ PORT)
    })
// });


