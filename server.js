if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser') // middleware that parses data
const cors       = require('cors') // middleware to access the routes
const bcrypt = require('bcrypt')
const mongoose   = require("mongoose");
const routes     = require("./routes");
const PORT       = process.env.PORT || 3001;
const Users      = require('./routes/Users')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Add routes, both API and view
// const donationsRouter = ("./controllers/donationsController")
// app.use(donationsRouter);

app.use(routes);
app.use('/users', Users)

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/donations",
	{ useUnifiedTopology: true, useNewUrlParser: true }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))


// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});