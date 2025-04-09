<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'
import { ref } from 'vue'

// Store the BMI value
const bmi = ref(0)

// Function to calculate BMI
function calculateBMI([height, weight]) {
        bmi.value = (weight / (height * height)).toFixed(2)
}

</script>

<template>

    <h1>Body Mass Index Calculator</h1>

    <!-- BodyMassIndex component -->
    <!-- The @stats-entered event is listened to and calls the calculateBMI function -->
    <BodyMassIndex @stats-entered="calculateBMI"></BodyMassIndex>

    <div id="result">
        <!-- Display the result -->
        <p><b>Your BMI is: {{ bmi }}</b></p>
        
    </div>
  
</template>

<style scoped>

</style>
