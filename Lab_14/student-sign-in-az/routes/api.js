// Require the necessary modules
const express = require('express')
const database = require('../models')
const Student = database.Student
// Use the express router
const router = express.Router()

// Get all students and catch errors
router.get('/students', function (req, res, next) {
    // Order the students by name
    Student.findAll( {order: ['name']} ).then( students => {
        // Return the students as a JSON object
        return res.json(students)
    }).catch( err => {
        return next(err)
    })
})

// Create a new student and catch errors
router.post('/students', function (req, res, next) {
    // The body of the request contains the new student
    const newStudent = req.body
    // Create the new student in the database and display a verification to the user
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!')
    }).catch( err => {
        // If there are database errors
        if (err instanceof database.Sequelize.ValidationError) {
            // Store the errors and display them in JSON
            const messages = err.errors.map( e => e.message )
            return res.status(400).json(messages)
        } else {
            // If not db error
            return next(err)
        }   
    })
})

// Update a student 
router.patch('/students/:id', function (req, res, next) {
    // Get the student to update starID and the student 
    const studentID = req.params.id
    const updatedStudent = req.body
    console.log(studentID, updatedStudent)
    // Update the student, if 1 row in the table is moddified display a success message
    Student.update( updatedStudent, { where: { id: studentID } }).then( (result) => {
        const rowsModified = result[0]
        if (rowsModified == 1) {
            return res.send('Student updated')
        } else { // If no rows modded display error 
            return res.status(404).send('Student not found')
        }
    }) .catch (err => { // Catch DB errors
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message )
            return res.status(400).json(messages)
        } else {
            return next(err)
        }
    })
})

// Delete a student
router.delete('/students/:id', function (req, res, next) {
    // Get the starID and delete the student from the table
    // Display a message if successfull
    const studentID = req.params.id
    Student.destroy( { where: { id: studentID } }).then( (rowsDeleted) => {
        if (rowsDeleted == 1) {
            return res.send('Student deleted')
        }
        return res.status(404).send('Student not found')
    }).catch( err => {
        return next(err)
    })
})

module.exports = router