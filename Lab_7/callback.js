let animals = ['Giraffe', 'Zebra', 'Elephant', 'Cheetah', 'Penguin']

animals.forEach( function(animal) {
    console.log(animal)
})

animals.forEach((animal, index) => {
    console.log(animal, index)
})