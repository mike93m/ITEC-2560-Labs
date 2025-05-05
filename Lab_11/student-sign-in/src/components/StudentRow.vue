<script setup>

import {ref} from 'vue'

// Define the props for the component
const props = defineProps({
    student: Object
})

const isStudentPresent = ref(props.student.present)

// Define the emits for the component
const emit = defineEmits(['arrived-or-left', 'delete-student'])

// Watch for changes in the isStudentPresent value and update the student object 
const notiftyArrivedOrLeft = () => {
    emit('arrived-or-left', props.student, isStudentPresent.value)
}

const confirmDeleteStudent = () => {
    if (confirm(`Are you sure you want to delete ${props.student.name}?`)) {
        emit('delete-student', props.student)
    }
}

</script>

<template>
    <!-- HTML here -->

<!-- Table  -->
<!-- Present/absent are bound to a class -->
<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }"> 
    <!-- Table data is the student name and star ID -->
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
        <!-- Checkbox is bound to the student present value -->
        <!-- When the checkbox is changed, the arrivedOrLeft function is called --> 
        <input type="checkbox" v-model="isStudentPresent" v-on:change="notiftyArrivedOrLeft">
        <span class="mx-3" v-if="student.present">Here!</span>
        <span class="mx-3" v-else>Not present</span>   
    </td>  
    <td>
        <!-- Delete student button -->
        <!-- When the button is clicked, the confirmDeleteStudent function is called -->
        <button class="btn btn-danger" v-on:click="confirmDeleteStudent(student)">
            <i class="bi bi-trash-fill"></i>Delete
        </button>
    </td>
</tr>

</template>

<!-- CSS styles for the component -->
<style scoped>

.present {
    color: grey;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>