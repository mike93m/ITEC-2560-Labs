const express = require('express')
const database = require('../models')
const Student = database.Student

const router = express.Router()

router.get('/students', function (req, res, next) {
    Student.findAll( {order: ['name']} ).then( students => {
        return res.json(students)
    })
})

router.post('/students', function (req, res, next) {
    const newStudent = req.body
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!')
    })
})

module.exports = router