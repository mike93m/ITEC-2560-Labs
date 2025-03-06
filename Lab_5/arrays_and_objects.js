/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
let latitude = iss_location.iss_position.latitude
console.log(`Latitude: ${latitude}`)
// TODO Extract the longitude value, and log it to the console.
let longitude = iss_location.iss_position.longitude
console.log(`Longitude: ${longitude}`)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates["CHF"] = 1.1787
console.log(rates)
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let euros = 100
let AUD_exchange_rate = rates["AUD"]
let amount_in_AUD = euros * AUD_exchange_rate

console.log(`100 Euros is equivalent to ${amount_in_AUD.toFixed()} Australian Dollars`)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
console.log(cats_and_owners)

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
cats_and_owners.forEach(function(owner_cat_pair){
    console.log(`${owner_cat_pair.name} owns a cat named ${owner_cat_pair.cat}`)
})

// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log(cats_and_owners[1].cat)

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach(function(pair){
    if (pair.name == "Gary Oldman") {
        console.log(pair.cat)
    }
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

// Create an array to access the prizes array
let prizes_array = nobel_prize_winners_2017.prizes
console.log(prizes_array)

// Empty variable to store the literature category
let literature_category = ''
// Loop through the prizes array to find the literature category
prizes_array.forEach(function(prize){
    if (prize.category === "literature"){
        literature_category = prize
    }    
})

console.log(literature_category)

// Access the laureates array
let laureates_array = literature_category.laureates
console.log(laureates_array)

// Access the first laureate in the array
let laureate_info = laureates_array[0]
console.log(laureate_info)

// Access the first name and last name of the laureate
let first_name = laureate_info.firstname
let last_name = laureate_info.surname

console.log(`${first_name} ${last_name}`)

// Empty variable to store the physics category
let physics_category = ''
// Loop through the prizes array to find the physics category
prizes_array.forEach(function(prize){
    if (prize.category === "physics"){
        physics_category = prize
    }
})
console.log(physics_category)

// Access the laureates array
let phy_laureates_array = physics_category.laureates
console.log(phy_laureates_array)

// Create an empty array to store the IDs of the winners of the physics category
let id_array = []
// Loop through the laureates array to get the IDs of the winners and add them to the id_array
phy_laureates_array.forEach(function(laureate){
    let id = laureate.id
    id_array.push(id)
})
console.log(id_array)
console.log(`The IDs of the winners of the physics category are as follows: ${id_array.join(', ')}`)

// Loop through the prizes array and print the category of each prize
prizes_array.forEach(function(prize){
    console.log(prize.category)
})

console.log(prizes_array.length)


// Initialize a variable to store the total number of laureates
let total_laureates = 0
// Loop through the prizes array and add the number of laureates in each prize to the total_laureates
prizes_array.forEach(function(prize){
    total_laureates += prize.laureates.length
})

console.log(total_laureates)

type some stuff
