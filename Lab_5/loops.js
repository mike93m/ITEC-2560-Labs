let birds =['Owl', 'Robin', 'Eagle']
// Loop through the array
birds.forEach(function(bird, index){
    console.log(index, bird)
})

// Traditional foe loop
for (let x=0; x<birds.length; x++ ) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}

