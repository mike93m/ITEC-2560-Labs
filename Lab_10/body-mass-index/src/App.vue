<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'
import { ref } from 'vue'

const bmi = ref(0)

function calculateBMI([height, weight]) {
        bmi.value = (weight / (height * height)).toFixed(2)
}

</script>

<template>

    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndex @stats-entered="calculateBMI"></BodyMassIndex>

    <div id="result">
        <p><b>Your BMI is: {{ bmi }}</b></p>
        
    </div>
  
</template>

<style scoped>

</style>
