// JavaScript function/ Node JS practice


console.log('Hello, World!')

let name = 'Mike'
console.log(`Hello, ${name}!`)

let temp = 7
// .toFixed function is used to round the number to a certain number of decimal places
console.log(`The temperature is ${((temp - 32) * 5/9).toFixed(2)} degrees.`)

// Is the number between 1 and 4? if so return true, else return false
function gpa(num) {
    if (num < 0 || num > 4) {
        return false
    } else {
        return true
    }
}

console.log("Is 4.5? "  + gpa(4.5))
console.log("Is 4? "  + gpa(4))

// Function to properly format a city and state
function city_state_address(city, state) {
    state = state.toUpperCase()
    return city + ', ' + state
}

console.log(city_state_address('Chicago', 'il'))
console.log(city_state_address('New York', 'ny'))

// Double quote "
// Single quote '
// Backtick `

// Function to shout text/ make it all uppercase and add '!!!'
function shout(text) {
    return text.toUpperCase() + '!!!'
}

console.log(shout('hello web programmers'))

// Get the temperature in celsius
function temp_in_celsius(temp) {
    return 'The tempurature in degrees celcius is ' + ((temp - 32) * 5/9).toFixed(2)
}

console.log(temp_in_celsius(59))
console.log(temp_in_celsius(32))
console.log(temp_in_celsius(100))

let class_name = 'Web Programming'
let class_code = 2560
let department = 'ITEC'

function class_message(){
    let message = `${department} ${class_code} ${class_name}`
    return message
}

console.log(class_message())