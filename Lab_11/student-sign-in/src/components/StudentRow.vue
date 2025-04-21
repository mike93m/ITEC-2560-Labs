<script setup>

import {ref} from 'vue'

const props = defineProps({
    student: Object
})

const isStudentPresent = ref(props.student.present)


const emit = defineEmits(['arrived-or-left', 'delete-student'])

const notiftyArrivedOrLeft = () => {
    emit('arrived-or-left', props.student, isStudentPresent.value)
}


</script>

<template>
    <!-- HTML here -->

<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
        <input type="checkbox" v-model="isStudentPresent" v-on:change="notiftyArrivedOrLeft">
        <span class="mx-3" v-if="student.present">Here!</span>
        <span class="mx-3" v-else>Not present</span>   
    </td>  
    <td>
        <button class="btn btn-danger" v-on:click="deleteStudent(student)">
            <i class="bi bi-trash-fill"></i>Delete
        </button>
    </td>
</tr>

</template>

<style scoped>

</style>