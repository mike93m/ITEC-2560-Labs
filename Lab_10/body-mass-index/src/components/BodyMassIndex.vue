<script setup>
import { ref, watch } from 'vue'



const emit = defineEmits([
    'stats-entered'
])


const height = ref(0)
const weight = ref(0)



</script>

<template>

    <h2>Enter your height and weight</h2>

    <div id="inputs">

        <p><input type ="number" id="heightInput" v-model="height"><label for="heightInput">Height</label></p>
    
        <p><input type ="number" id="weightInput" v-model="weight"><label for="weightInput">Weight</label></p>

    </div>

    <button id="calculateButton" @click="emit('stats-entered',[height, weight])">Calculate</button>
  
</template>

<style scoped>
#heightInput, #weightInput {
    width: 100px;
}
#calculateButton {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
}
#inputs {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
}
</style>
