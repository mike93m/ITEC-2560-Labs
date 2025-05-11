const { all } = require("../routes/api")

module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    student.sync({force: false}).then( () => {
        console.log('Synced student table')
    })

    return student
}
