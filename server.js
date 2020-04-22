// dependencies
var express = require ("express");

var bodyParser = require ("body-parser");

// set up express app
var app = express();

var PORT = process.env.PORT || 3000;

// connect db model
// var DB = require ("");


// sets up app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));


// routes
require("")

// sync sequelize models and start express app
// DB.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        consolelog("App listening on PORT"+ PORT)
    })
// });


