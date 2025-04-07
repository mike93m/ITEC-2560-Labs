<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])

const userAnswer = ref('')

function choiceMade() {
  emit('answer-selected', userAnswer.value)
}

</script>

<template>
 
  <h2>Make your choice!</h2>

  {{ question }}

  <input type="radio" id="answer1" v-model="userAnswer" v-bind:value="answer1" v-on:change="choiceMade">
  <label for="answer1">{{ answer1 }}</label>
  <input type="radio" id="answer2" v-model="userAnswer" v-bind:value="answer2" v-on:change="choiceMade">
  <label for="answer2">{{ answer2 }}</label>

</template>

<style scoped>

</style>
