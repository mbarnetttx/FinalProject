//Dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
app.get("*", (request, response) => {
	response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = router;
