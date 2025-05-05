// Use express router to handle the routes for the application
// Import the express module and create a router object
const express = require('express')
const router = express.Router()

// Get the home page and render the view
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Feedback app', author: 'Mike M' })
})

// Get the feedback form page and render the view
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

// Post the feedback form data to the server
router.post('/submit-feedback', function(req, res, next) {
    // Get the form data from the URL query
    const formData = req.body
    // Display the form data the user has submitted
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['student-status'],
    })
})
// Export the router object to be used in other modules
module.exports = router