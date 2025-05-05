<script setup>
// Script here 

import { ref } from 'vue'

// Import the student store
import { useStudentStore } from '../stores/StudentStore'
// Use the student store
const studentStore = useStudentStore()

// Create empty refs for the new student name and star ID and for errors
const newStudentName = ref('')
const newStarID = ref('')

const mostRecentStudent = ref({})

const formErrors = ref([])

const arrivedOrLeft = (student) => {
    mostRecentStudent.value = student
}

// Create a function to add a new student to the store
const addStudent = () => {
    // Clear the form errors
    formErrors.value = []

    // Check if the new student name and star ID are empty
    if (!newStudentName.value) {
        formErrors.value.push('Name is required')
    }
    if (!newStarID.value) {
        formErrors.value.push('Star ID is required')
    }
    // If no errors, add the student to the store
    if (formErrors.value.length === 0) {
        let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
        }
        studentStore.addNewStudent(student)
        // Reset the form fields
        newStudentName.value = ''
        newStarID.value = ''
        }    
    }

</script>

<template>
<!-- HTML here -->
    <!-- This div only shows if there are errors with the form, it will display the errors -->
    <div id="new-student-form-errors" class="m-2">
        <div class="alert alert-danger" v-if="formErrors.length > 0">
            <li v-for="error in formErrors" v-bind:key="error">
                {{ error }}
            </li>
        </div>
    </div>

    <!-- This div is the form to add a new student -->
    <!-- The form has two input fields, one for the name and one for the star ID -->
    <div id="new-student-form" class="card add-student m-2 p-2">
        <h4 class="card-title">Add new student</h4>
        <!-- Name input -->
        <div class="form-group mb-3">
            <label for="name">Name</label>
            <input id="name" class="form-control" v-model.trim="newStudentName">
        </div>
        <!-- StarID input -->
        <div class="form-group mb-3">
            <label for="starID">Star ID</label>
            <input id="starID" class="form-control" v-model.trim="newStarID">
        </div>
            <!-- Add student button -->
            <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>
</template>

<style scoped>
/*  */
</style>