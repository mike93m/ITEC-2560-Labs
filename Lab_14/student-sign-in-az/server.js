// Import the express module
const express = require('express')
const apiRoutes = require('./routes/api.js')
const path = require('path')

// Create an express application
const app = express()

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json()) 

// Get the path to the client/dist directory
const staticFilePath = path.join(__dirname, 'client', 'dist')
// Create a const for the static files using the path
const staticFiles = express.static(staticFilePath)
// Use the static files
app.use('/', staticFiles) 

// Use api routes for all requests to /api
app.use('/api', apiRoutes)

// Display not found error for 404 errors
app.use(function(req,res,next) {
    res.status(404).send('Not found')
})

// Display server error for 500 errors
app.use(function(req, res, next, err) {
    console.error(err.stack) // Log the error stack to the console for server-side debugging
    res.status(500).send('Server error') // Send a 500 error response to the client
})

// Start the server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port ', server.address().port)
})

