const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Feedback app', author: 'Mike M' })
})

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) {
    // Get the form data from the URL query
    const formData = req.body
    // TODO save the form data to the database

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['student-status'],
    })
})
    
module.exports = router