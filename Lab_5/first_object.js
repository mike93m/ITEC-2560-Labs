let user = { username: 'Mike', password: 'apple$'}

console.log(user.username)
console.log(user['username'])

let user_name = user.username
let password = user.password
console.log(`username: ${user_name} \n
            password: ${password} `)

user.email = 'mike@yahoo.com'

console.log(user)

var employee = {
    username: 'Mike',
    password: 'jeng@',
    userID: 57,
    roles: ['user', 'server-admin'],
    contact: {
        phone: '421-999-9548',
        email: 'mike@msn.com'
    },
    office_location: {
        city: 'Minneapolis',
        state: 'MN'
    }
}

console.log(employee.office_location.city)
console.log(employee)

employee.salary = 100000.00
employee.roles.push('Developer')
employee.contact.office = 'E465'
console.log(employee)