// Require the routes
const { all } = require("../routes/api")

// Required the database connection, the model and the config
module.exports = (sequelize, DataTypes) => {
    // Define the student model
    // The model defines the table in the sctructure in the database
    const student = sequelize.define('Student', {
        // Columns of the table
        name: {
            // Data type of the column
            type: DataTypes.STRING,
            allowNull: false,
            // Extra validation for not null
            validate: {
                notEmpty: true
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    // Sync the table with the database
    // force means that the table will be dropped and recreated
    student.sync({force: false}).then( () => {
        console.log('Synced student table')
    })
    // Return the student model
    return student
}
