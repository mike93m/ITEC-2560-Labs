// Create a new Express router instance
const express = require('express')
// Import the express module to create a router
const router = express.Router()

// GET home page
// This route handles GET requests to the root URL ("/") and renders the index view with a title
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BMI Calculator', author: 'Mike M' })
})

router.get('/BMI-app', function(req, res, next) {
    res.render('body_mass_index')
})

// Export the router so it can be used in server.js
module.exports = router