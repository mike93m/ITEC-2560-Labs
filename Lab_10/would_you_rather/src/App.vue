<script setup>
import WouldYouRather from './components/WouldYouRather.vue'
import { ref } from 'vue'

const question = ref('Go to a heavy metal concert or a rap concert?')
const answer1 = ref('Heavy Metal')
const answer2 = ref('Rap')
const userSelection = ref('')

function updateUserSelection(userAnswer) {
  userSelection.value = `Thanks for answering! You chose: ${userAnswer}`
}
</script>

<template>
  
  <h1>Would You Rather...</h1>

  <WouldYouRather 
    v-bind:question="question"
    v-bind:answer1="answer1"
    v-bind:answer2="answer2"
    v-on:answer-selected="updateUserSelection">
  </WouldYouRather>


  <p>{{ userSelection }}</p>


</template>

<style scoped>

</style>
