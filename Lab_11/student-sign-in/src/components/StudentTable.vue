<script setup>
    // Script here 
import { useStudentStore } from '../stores/StudentStore'

import { storeToRefs } from 'pinia'

import { computed } from 'vue'

import StudentRow from './StudentRow.vue';


const studentStore = useStudentStore()

const {studentListSorted, studentCount }= storeToRefs(studentStore)

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}


const arrivedOrLeft = (student, isStudentPresent) => {
    studentStore.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

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
                        
                        <StudentRow 
                            v-for="student in studentListSorted"
                            v-bind:student="student"
                            v-on:arrivedOrLeft="arrivedOrLeft">
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

th, tr {
    width: 25%;
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