// Use express
const express = require('express')

// Import the routes from index.js
const routes = require('./routes/index')

// Create an express app
const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

// Make the routes available in the app
app.use('/', routes)

// Start the server running
let server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port}`)
})