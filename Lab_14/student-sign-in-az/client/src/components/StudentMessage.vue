<script setup>
    // Script here 
import { useStudentStore } from '../stores/StudentStore'
import { storeToRefs } from 'pinia'

// Import the StudentStore
const studentStore = useStudentStore()

// Use the storeToRefs function to create reactive references to the store's state
const { mostRecentStudent } = storeToRefs(studentStore)
    
</script>
    
<template>
    <!-- HTML here -->
    <!-- Welcome/goodbye message for the most recent student -->
    <div id="welcome-or-goodbye-message" class="m-2">
        <div v-if="mostRecentStudent.name">

            <div v-if="mostRecentStudent.present" class="alert alert-success">
                Welcome, {{ mostRecentStudent.name }}!
            </div>

            <div v-else class="alert alert-info">
                Goodbye, {{ mostRecentStudent.name }}!
            </div>

        </div>
    </div>
</template>
    
<style scoped>
    /*  */
</style>