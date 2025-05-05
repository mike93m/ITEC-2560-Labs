<script setup>
    // Script here 
// Import the different components
import { useStudentStore } from '../stores/StudentStore'

import { storeToRefs } from 'pinia'

import { computed } from 'vue'

import StudentRow from './StudentRow.vue';

// Import the StudentStore
const studentStore = useStudentStore()

// Use the storeToRefs function to create reactive references to the store's state
const {studentListSorted, studentCount }= storeToRefs(studentStore)

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}


const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

// Create a computed property to display the number of students in the class
// This will be used in the template to display the number of students
const pluralStudentMessage = computed(() => {
    if (studentCount.value === 1) {
        return 'There is 1 student in class'
    } else {
        return `There are ${studentCount.value} students in class`
    }
})




</script>
    
<template>
    <!-- HTML here -->
    <div id="student-list-table" class="card m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <h5>{{ pluralStudentMessage }}</h5>
            <!-- This is the main student table -->
            <div id="student-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>StarID</th>
                            <th>Present?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                   <tbody>
                        <!-- Student row component -->
                        <!-- The student prop is passed to the component -->
                        <!-- The arrivedOrLeft and deleteStudent functions are passed to the component -->
                        <!-- The v-for directive is used to loop through the studentListSorted array and create a new StudentRow component for each student -->
                        <StudentRow 
                            v-for="student in studentListSorted"
                            v-bind:student="student"
                            v-on:arrived-or-left="arrivedOrLeft"
                            v-on:delete-student="deleteStudent">
                        </StudentRow>

                   </tbody>

                </table>
            </div>
        </div>
</template>
    
<style scoped>
    /*  */
#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, td, tr {
    width: 25%;
    text-align: left;
}

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}
</style>