const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// Import the routes in routes/index.js
const indexRouter = require('./routes/index')

// Create the web application
const app = express()

// Enable parsing of POST request form body data
app.use(bodyParser.urlencoded({ extended: false }))

// Serve static files from the public folder
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// Configure it to work with the handlebars template engine and work with the files in the views folder
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Make the routes in index.js available to the app
app.use('/', indexRouter)

// Start server running on port 3000
let server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + server.address().port)
})