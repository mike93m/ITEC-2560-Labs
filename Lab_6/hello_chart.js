let canvas = document.querySelector('#soda_chart')
let ctx = canvas.getContext('2d')

let sodaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Mountain Dew', 'Dr. Pepper', 'Sprite', 'Fanta'],
        datasets: [{
            label: 'Soda preference',
            data: [6, 24, 13, 11, 8, 9],
            backgroundColor: ['red', 'blue', 'green', 'maroon', 'cyan', 'orange']
        }]
    },
})
