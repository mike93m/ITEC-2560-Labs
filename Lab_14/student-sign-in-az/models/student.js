module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
        },
        starID: {
            type: DataTypes.STRING,
        },
        present: {
            type: DataTypes.BOOLEAN,
        }
    })
    student.sync({force: false}).then( () => {
        console.log('Synced student table')
    })
    return student
}
