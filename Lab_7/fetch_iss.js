// Variable for the URL of the ISS API
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// Variables for the elements in the HTML
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#timeDate')

// Create a map centered in the middle of the world
let map = L.map('iss-map').setView([0, 0], 1)
// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
// Create an icon for the ISS
let IssIcon = L.icon({
    iconUrl: 'international-space-station.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Variable to store the marker
let issMarker
// Variables for the update interval and the maximum failed attempts
let update = 10000
let maxFailedAttempts = 3

// Call the function to update the ISS location
updateISS(maxFailedAttempts)

function updateISS(attempts) {

    // If the attempts are less than or equal to 0, alert the user and return
    if (attempts <= 0) {
        alert("Failed to contact ISS server after several attempts")
        return
    }

    // Fetch the data from the API
    fetch(url)
        .then( res => res.json() )
        .then( issData => { 
            console.log(issData) 
            // Get the latitude and longitude from the data and display it
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat 
            issLong.innerHTML = long

            // Get the current date and time and display it
            let now = Date()
            timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`

            // Create marker if it doesn't exist
            // Move marker if it does exist
            // Use the ISS icon
            if (!issMarker) {
                issMarker = L.marker([lat, long], { icon: IssIcon }).addTo(map)
            } else {
                issMarker.setLatLng([lat, long])
            }
            
        })
        .catch( err => {
            // If there is an error subtract 1 from the attempts
            attempts--
            console.log("Ohh no there was an error", err)
        })
        // Finally runs weather the fetch is successful or not
        .finally( () => {
            // Call the function again after 10 seconds
            // So regardless of the outcome of the fetch, it will be called again as long as the attempts are greater than 0
            setTimeout(updateISS, update, attempts)
        })
}


