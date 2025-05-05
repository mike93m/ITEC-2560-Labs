// Import the express module
const express = require('express')

// Create an express application
const app = express()

// Start the server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port ', server.address().port)
})

