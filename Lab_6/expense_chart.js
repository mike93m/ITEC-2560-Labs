/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// TODO create chart object 
let expensesChart = new Chart(ctx, {
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

// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like 
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

function addExpenseToChart(name, amount) {
    
    // TODO add expense to chart 
    expensesChart.data.labels.push(name)
    expensesChart.data.datasets[0].data.push(amount)

    let colorCount = expensesChart.data.datasets[0].backgroundColor.length
    let color = chartColors[colorCount % chartColors.length]
    expensesChart.data.datasets[0].backgroundColor.push(color)



    expensesChart.update()

}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // TODO call function to update chart
    addExpenseToChart(expenseName, expenseAmount)


    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})

window.addEventListener('keydown', function(event) {
    // Event listener to click the Add Expense button when the enter key is pressed 
    if (event.key == 'Enter') {
        addExpenseButton.click()
        expenseNameInput.focus()
    }
})
// TODO add event listener to click the Add Expense button when the enter key is pressed 