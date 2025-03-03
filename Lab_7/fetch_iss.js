let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#timeDate')

let map = L.map('iss-map').setView([0, 0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
let IssIcon = L.icon({
    iconUrl: 'international-space-station.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let issMarker
let update = 10000
let maxFailedAttempts = 3

updateISS(maxFailedAttempts)

function updateISS(attempts) {
    
    // If the attempts are less than or equal to 0, alert the user and return
    if (attempts <= 0) {
        alert("Failed to contact ISS server after several attempts")
        return
    }

    fetch(url)
        .then( res => res.json() )
        .then( issData => { 
            console.log(issData) 
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat 
            issLong.innerHTML = long

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
            // So regardless of the outcome of the fetch, it will be called again
            setTimeout(updateISS, update, attempts)
        })
}


