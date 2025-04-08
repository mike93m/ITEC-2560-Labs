<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'
import { ref } from 'vue'

const bmi = ref(0)

function calculateBMI([weight, height]) {
        bmi.value = (weight / (height * height)).toFixed(2)
}

</script>

<template>

    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndex @stats-entered="calculateBMI"></BodyMassIndex>

    <p>{{ bmi }}</p>
  
</template>

<style scoped>

</style>
