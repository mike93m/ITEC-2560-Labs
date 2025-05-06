<script setup>

import { onMounted } from 'vue'
// Import the different components
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

import {useStudentStore} from './stores/StudentStore'
const studentStore = useStudentStore()

onMounted( () => {
  // Fetch the students when the component is mounted
  studentStore.getAllStudents()
})
 
</script>
  
<template>
  <!-- HTML here -->

  <!-- Components -->
  <NewStudentForm></NewStudentForm>
  <StudentTable></StudentTable>
  <StudentMessage></StudentMessage>

</template>
  
<style scoped>
  /*  */
</style>