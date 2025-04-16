<script setup>
// Script here 

import { ref } from 'vue'

import { useStudentStore } from '../stores/StudentStore'
const studentStore = useStudentStore()

const newStudentName = ref('')
const newStarID = ref('')

const mostRecentStudent = ref({})

const formErrors = ref([])

const arrivedOrLeft = (student) => {
    mostRecentStudent.value = student
}

const addStudent = () => {
    formErrors.value = []

    if (!newStudentName.value) {
        formErrors.value.push('Name is required')
    }
    if (!newStarID.value) {
        formErrors.value.push('Star ID is required')
    }
    if (formErrors.value.length === 0) {
        let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
        }
        // TODO - add student 

        studentStore.addNewStudent(student)

        newStudentName.value = ''
        newStarID.value = ''
        }    
    }

</script>

<template>
<!-- HTML here -->
    <div id="new-student-form-errors" class="m-2">
        <div class="alert alert-danger" v-if="formErrors.length > 0">
            <li v-for="error in formErrors" v-bind:key="error">
                {{ error }}
            </li>
        </div>
    </div>


    <div id="new-student-form" class="card add-student m-2 p-2">
        <h4 class="card-title">Add new student</h4>

        <div class="form-group mb-3">
            <label for="name">Name</label>
            <input id="name" class="form-control" v-model.trim="newStudentName">
        </div>

        <div class="form-group mb-3">
            <label for="starID">Star ID</label>
            <input id="starID" class="form-control" v-model.trim="newStarID">
        </div>

            <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>
</template>

<style scoped>
/*  */
</style>