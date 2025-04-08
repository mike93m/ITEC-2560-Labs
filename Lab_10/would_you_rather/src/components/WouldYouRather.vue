<script setup>
import { ref, watch } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])


const userAnswer = ref('')

watch(userAnswer, () => {
  emit('answer-selected', userAnswer.value)
})

// function choiceMade() {
//   emit('answer-selected', userAnswer.value)
// }

</script>

<template>

<div id="selection">
  <h2>Make your choice!</h2>

  <p>{{ question }}</p>

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
