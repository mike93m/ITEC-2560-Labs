// Create a map centered on the United States
let usCenterCoordinates = [39.8283, -98.5795] 
let zoomLevel = 4
// Create the map
let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

// Creat the canvas for the chart
let chartCanvas = document.querySelector('#bridge-chart')
let ctx = chartCanvas.getContext('2d')

// Create the chart object leaving the data and options empty to be added later as the bridges are looped through
let bridgeChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
            data: [],
            backgroundColor: []
        }
        ],
        labels: []
    },
    options: {}
})
// Arry of objects with bridge data
// Looking back I should have used camel case or a single word for the name of each key to make the template string easier to read
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

// Create an array of colors to add to the chart
let chartColors = ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet']

// Initialize the longest span to the first bridge's span
let longestSpan = bridgeData[0].Span;
let longestBridge = bridgeData[0];

// Loop through the array of bridge data to find the longest span
bridgeData.forEach(function(bridge) {
    if (bridge.Span > longestSpan) {
        longestSpan = bridge.Span;
        longestBridge = bridge;
    }
});

// Loop through the array of bridge data to create markers and add the data to the chart
bridgeData.forEach(function(bridge) {
    // Create a marker for each bridge
    let bridgeMarker = L.marker(bridge.Location)
        // Add a popup to the marker
        .bindPopup(`${bridge["Bridge name"]}<br>${bridge["City and State"]}<br>Span: ${bridge.Span} meters`)
        .addTo(map);

    // Add the bridge name to the chart
    bridgeChart.data.labels.push(bridge["Bridge name"]);

    // Add the span to the chart
    bridgeChart.data.datasets[0].data.push(bridge.Span);

    // Keep track of the number of colors added to the chart
    let colorCount = bridgeChart.data.datasets[0].backgroundColor.length;
    // Get the color from the array of colors
    // The % operator is used to loop back to the beginning of the array once we reach the end(exceed the length of the array)
    let color = chartColors[colorCount % chartColors.length];
    // Add the color to the chart
    bridgeChart.data.datasets[0].backgroundColor.push(color);

    // Set the marker to the black icon
    let bridgeIcon = L.icon({
        iconUrl: 'bridge.png',
        iconSize: [28, 28],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    });

    bridgeMarker.setIcon(bridgeIcon);

    // If the bridge is the longest span, set the marker to a red icon
    // I had to add extra validation to make sure the bridge name is the same as the longest bridge
    // because the spans are the same for the Verrazano-Narrows Bridge and Golden Gate Bridge
    if (bridge.Span === longestSpan && bridge["Bridge name"] === longestBridge["Bridge name"]) {
        bridgeMarker.setIcon(L.icon({
            iconUrl: 'red-bridge.png',
            iconSize: [28, 28],
            iconAnchor: [16, 32],
            popupAnchor: [0, -28]
        }));
    }
});

console.log(longestBridge);

// Update the chart
bridgeChart.update();
