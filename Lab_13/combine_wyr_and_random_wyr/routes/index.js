const express = require('express')

const router = express.Router()

const randomWyrQuestion = require('../model/wyr_questions')

router.get('/wyr', function(req, res, next) {
    const wyrQuestion = randomWyrQuestion()
    res.json(wyrQuestion)
})

router.get('/wyr', function(req, res, next) {
    const wyr = {
        'question': 'Go to a heavy metal concert or a rap concert?',
        'answer1': 'Heavy Metal',
        'answer2': 'Rap'
    }
    res.json(wyr)
})

module.exports = router