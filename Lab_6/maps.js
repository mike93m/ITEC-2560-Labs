let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 9   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
// L.map() is a Leaflet function that creates a map object
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


// Add some markers for Minneapolis College and Saint Paul College

// Marker for Minneapolis College
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    // .binfPopup allows you to click on the marker and see a popup
    .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

// Marker for Saint Paul College
let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

// Marker for Normandale College
let normandaleCoordinates = [44.8297, -93.3312]
let normandaleMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
    .addTo(map)


// Add a circle approximately around the Twin Cities metro 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        // 
        color: 'blue',    // use any CSS color name
        radius: 30000,
        fillOpacity: 0.1
    })
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)