// Import the express module
const express = require('express')
const apiRoutes = require('./routes/api.js')

// Create an express application
const app = express()

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json()) 

// Use api routes for all requests to /api
app.use('/api', apiRoutes)

// Start the server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port ', server.address().port)
})

