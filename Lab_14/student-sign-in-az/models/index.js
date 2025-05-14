// Required the database connection, the model and the config
const { Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./student')

// Get the environment variable from the config file
const env = process.env.NODE_ENV || 'development'
// Get the database password from the environment variable
const dbPassword = process.env.DB_PASSWORD 

// Configure using the environment variable
const config = configJson[env]
// Set the database password
config.password = dbPassword

// Create a new Sequelize instance
const sequelize = new Sequelize(config)

// Create a variable to hold the database connection
const database = {
    sequelize: sequelize,
    Sequelize: Sequelize,
}

// Create the student model using the Sequelize instance and DataTypes
const studentModel = createStudentModel(sequelize, DataTypes)
// Get the name of the student model 
const studentModelName = studentModel.name 
// Name the database connection
database[studentModelName] = studentModel
// Export the database connection
module.exports = database