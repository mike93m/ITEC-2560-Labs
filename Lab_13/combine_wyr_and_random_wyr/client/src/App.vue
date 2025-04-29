<script setup>
// Import the child component
import WouldYouRather from './components/WouldYouRather.vue'
// Import the wyr service
// This service will be used to fetch random questions and answers from the API
import wyrService from './service/wyrService.js'

import { ref, onMounted } from 'vue'

// Create consts to store the question and answers
// These will be passed to the child component
const question = ref('')
const answer1 = ref('')
const answer2 = ref('')
const userSelection = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then( wyrData => {
    question.value = wyrData.question
    answer1.value = wyrData.answer1
    answer2.value = wyrData.answer2
  })
})

// This function will be called when the user selects an answer
function updateUserSelection(userAnswer) {
  // update the userSelection ref with the answer selected by the user
  userSelection.value = `Thanks for answering! You chose: ${userAnswer}`
}
</script>

<!-- All the HTML and components go in the template -->
<template>

<div id="app">
  <h1>Would You Rather...</h1>

  <!-- WouldYouRather component -->
  <!-- Pass the question and answers as props to the child component -->
  <!-- Listen for the 'answer-selected' event emitted by the child component and call updateUserSelection -->
  <WouldYouRather 
    v-bind:question="question"
    v-bind:answer1="answer1"
    v-bind:answer2="answer2"
    v-on:answer-selected="updateUserSelection">
  </WouldYouRather>


  <!-- Display the user's selection -->
  <p>{{ userSelection }}</p>

</div>
</template>

<style scoped>
#app {
 background-color: cornflowerblue;
}
</style>
