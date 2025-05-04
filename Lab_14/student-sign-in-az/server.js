const express = require('express')

const app = express()

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is running on port ', server.address().port)
})