// Import the express module
const express = require('express')
const apiRoutes = require('./routes/api.js')
const path = require('path')

// Create an express application
const app = express()

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json()) 

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles) // Serve static files from the client/dist directory

// Use api routes for all requests to /api
app.use('/api', apiRoutes)

app.use(function(req,res,next) {
    res.status(404).send('Not found')
})

app.use(function(req, res, next, err) {
    console.error(err.stack) // Log the error stack to the console for server-side debugging
    res.status(500).send('Server error') // Send a 500 error response to the client
})

// Start the server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port ', server.address().port)
})

