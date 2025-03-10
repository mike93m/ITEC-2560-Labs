// Create variables for the elements in the HTML file
let randomCountryElement = document.querySelector('#random-country-display')     // The element to display the country's name in, currently has the text 'Country name placeholder'
let userAnswerElement = document.querySelector('#user-answer-entry')    // The input element the user enters their answer in  
let submitButton = document.querySelector('#submit-user-answer')    // The button the user clicks to submit their answer 
let resultTextElement = document.querySelector('#game-result')   // The element that displays if the user is correct or not. Currently has the text "Replace with result"
let playAgainButton = document.querySelector('#play-again')   // The button the user clicks to play again.

console.log(countriesAndCodes)   

// Function to get a random country from the countriesAndCodes array
const getRandomCountry = () => countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]

// Create a variable to store the random country
let randomCountry = getRandomCountry()
console.log(randomCountry)

// Get the name of the random country and display it in the randomCountryElement
randomCountryElement.textContent = randomCountry.name 

// Event listener for the submit button to handle the user's answer
submitButton.addEventListener('click', () => {
    // Get the user's answer
    let userAnswer = userAnswerElement.value
    // If the user's answer is an empty string, alert the user to enter an answer and return
    if (userAnswer === '') {
        alert('Please enter an answer')
        return
    }
    // Get the two-letter code for the random country
    let countryCode = randomCountry['twoLetterCode']
    // Create the URL using the country code
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`
    console.log(url)
    // Fetch the data from the URL
    fetch(url)
    // Convert the response to JSON
    .then(response => response.json())
    .then(data => {
        // Extract the capital city from the data
        let capitalCity = data[1][0].capitalCity
        // Ensure that I am getting the correct data
        console.log(data[1]) 
        console.log(capitalCity)

        // Convert the capital city and user's answer to lowercase for a more accurate comparison
        // Remove any whitespace from the user's answer
        let lowerCaseCapitalCity = capitalCity.toLowerCase()
        let lowerCaseUserAnswer = userAnswer.toLowerCase().trim()

        // Use fast-levenshtein to compare the user's answer to the capital city
        let comparison = Levenshtein.get(lowerCaseUserAnswer, lowerCaseCapitalCity)
        console.log(comparison)
        // If the answer is within 2 correct characters, consider it correct
        // Display the result in the resultTextElement
        if (comparison <= 2) {
            resultTextElement.textContent = `Correct! The capital of ${randomCountry.name} is ${capitalCity}`
        } else {
            resultTextElement.textContent = `Wrong - the capital of ${randomCountry.name} is not ${userAnswer}, it is ${capitalCity}`
        }
    })
    .catch(error => {
        alert('An error occurred')
        console.log(error)
    })
})

// Create an event listener for the submit button to allow the enter key to submit the answer
userAnswerElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitButton.click()
    }
})

// When the play again button is clicked, select a new random country and clear the user and answer inputs
playAgainButton.addEventListener('click', () => {
    randomCountry = getRandomCountry()
    randomCountryElement.textContent = randomCountry.name
    userAnswerElement.value = ''
    resultTextElement.textContent = ''
}) 