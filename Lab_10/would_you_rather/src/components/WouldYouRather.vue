<script setup>
import { ref, watch } from 'vue'

// Define the props for the component
// This allows the parent component to pass data to this component
defineProps({
  question: String,
  answer1: String,
  answer2: String
})

// Define the emits for the component
// This allows the parent component to listen for the 'answer-selected' event
const emit = defineEmits([
  'answer-selected'
])

// Store the user answer
const userAnswer = ref('')

// Using watch to monitor changes in userAnswer
watch(userAnswer, () => {
  emit('answer-selected', userAnswer.value)
})

// Another way to emit the event when the user makes a choice
// function choiceMade() {
//   emit('answer-selected', userAnswer.value)
// }

</script>

<template>

<div id="selection">
  <h2>Make your choice!</h2>
  <!-- This is the question passed from App.vue(the parent) -->
  <p>{{ question }}</p>

  <!-- Radio buttons and labels for user to choose an option -->
  <!-- The answer strings are passed from the parent component -->
  <input type="radio" id="answer1" v-model="userAnswer" v-bind:value="answer1">
  <label for="answer1">{{ answer1 }}</label>
  <input type="radio" id="answer2" v-model="userAnswer" v-bind:value="answer2">
  <label for="answer2">{{ answer2 }}</label>
</div>
</template>

<style scoped>
#selection {
  background-color: rgb(19, 191, 19);
  padding: 5px;
  border-radius: 15px;
}

</style>
