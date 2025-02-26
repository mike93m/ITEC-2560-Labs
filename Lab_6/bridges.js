// Create a map centered on the United States
let usCenterCoordinates = [39.8283, -98.5795] 
let zoomLevel = 4
// Create the map
let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

// Arry of objects with bridge data
let bridgeData = [
    {
        "Bridge name": "Verrazano-Narrows Bridge",
        "City and State": "New York, NY",
        "Span": 1298.4,
        "Location": [40.6066, -74.0447]
    },
    {
        "Bridge name": "Golden Gate Bridge",
        "City and State": "San Francisco and Marin, CA",
        "Span": 1298.4,
        "Location": [37.8199, -122.4783]
    },
    {
        "Bridge name": "Mackinac Bridge",
        "City and State": "Mackinaw and St Ignace, MI",
        "Span": 1158.0,
        "Location": [45.8174, -84.7278]
    },
    {
        "Bridge name": "George Washington Bridge",
        "City and State": "New York, NY and New Jersey, NJ",
        "Span": 1067.0,
        "Location": [40.8517, -73.9527],
    },
    {
        "Bridge name": "Tacoma Narrows Bridge",
        "City and State": "Tacoma and Kitsap, WA",
        "Span": 853.44,
        "Location": [47.2690, -122.5517]
    }
]

// Loop through the array of bridge data
bridgeData.forEach(function(bridge) {
    // Create a marker for each bridge
    let bridgeMarker = L.marker(bridge.Location)
        .bindPopup(`${bridge["Bridge name"]}<br>${bridge["City and State"]}<br>Span: ${bridge.Span} meters`)
        .addTo(map)
})