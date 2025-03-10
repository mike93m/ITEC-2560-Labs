
let randomCountryElement = document.querySelector('#random-country-display')     // The element to display the country's name in, currently has the text 'Country name placeholder'
let userAnswerElement = document.querySelector('#user-answer-entry')    // The input element the user enters their answer in  
let submitButton = document.querySelector('#submit-user-answer')    // The button the user clicks to submit their answer 
let resultTextElement = document.querySelector('#game-result')   // The element that displays if the user is correct or not. Currently has the text "Replace with result"
let playAgainButton = document.querySelector('#play-again')   // The button the user clicks to play again.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes to solve this problem - just proving it is available 

// Function to get a random country from the countriesAndCodes array
function getRandomCountry() {
    return countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
}

// Create a variable to store the random country
let randomCountry = getRandomCountry()
console.log(randomCountry)

// Get the name of the random country and display it in the randomCountryElement
randomCountryElement.textContent = randomCountry.name 

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * Read the text the user typed into userAnswerElement.
//  * Create the URL you will need to make a request to.
//     - You will need with the letter code for the country chosen, to build the URL.
//     - These are in countriesAndCodes, example the code for China is 'CN', the code for Afghanistan is 'AF'.
//  * Use fetch() to make a call to the World Bank API.
//  * Catch any errors encountered in the API call. If an error occurs, display an alert message
//  * If the API call was successful, extract the name of the capital city from the World Bank API response.
//  * Compare the actual capital city to the user's answer. 
//      - You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//        as the World Bank data. You can make the comparison case insensitive.
//      - Optional: if you want to be more flexible, and allow close guesses to be correct, include and use a string similarity 
//        library such as https://github.com/hiddentao/fast-levenshtein. This means you can allow an answer 
//        like 'Washington DC' when the name of the capital listed by the World Bank is 'Washington D.C.'
//  * Display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'

// Event listener for the submit button to handle the user's answer
submitButton.addEventListener('click', () => {
    // Get the user's answer
    let userAnswer = userAnswerElement.value
    // Get the two-letter code for the random country
    let randomCountry = getRandomCountry()
    let countryCode = randomCountry['twoLetterCode']
    // Create the URL using the country code
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Extract the capital city from the data
        let capitalCity = data[1][0].capitalCity
        // Ensure that I am getting the correct data
        console.log(data[1]) 
        console.log(capitalCity)
        // Compare the user's answer to the capital city and display the result
        // Use toLowerCase() to make the comparison case insensitive
        if (userAnswer.toLowerCase() === capitalCity.toLowerCase()) {
            resultTextElement.textContent = `Correct! The capital of ${randomCountry.name} is ${capitalCity}`
        } else {
            resultTextElement.textContent = `Wrong - the capital of ${randomCountry.name} is not ${userAnswer}, it is ${capitalCity}`
        }
    })
    .catch(error => {
        alert('An error occurred')
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
    let randomCountry = getRandomCountry()
    randomCountryElement.textContent = randomCountry.name
    userAnswerElement.value = ''
    resultTextElement.textContent = ''
}) 