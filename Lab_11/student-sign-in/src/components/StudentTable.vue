<script setup>
    // Script here 
import { useStudentStore } from '../stores/StudentStore'

import { storeToRefs } from 'pinia'

const studentStore = useStudentStore()

const studentList = storeToRefs(studentStore).studentList

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}



</script>
    
<template>
    <!-- HTML here -->
    <div id="student-list-table" class="card m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <h5>{{ studentCount }} {{ studentCountLabel }} in class</h5>
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
                        
                        <tr v-for="student in studentList" v-bind:key="student.starID" v-bind:class="{ present: student.present, absent: !student.present }">
                            <td>{{ student.name }}</td>
                            <td>{{ student.starID }}</td>
                            <td>
                                <input type="checkbox" v-model="student.present" v-on:change="arrivedOrLeft(student)">
                                <span class="mx-3" v-if="student.present">Here!</span>
                                <span class="mx-3" v-else>Not present</span>   
                            </td>  
                            <td>
                                <button class="btn btn-danger" v-on:click="deleteStudent(student)">
                                    <i class="bi bi-trash-fill"></i>Delete
                                </button>
                            </td>
                        </tr>

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