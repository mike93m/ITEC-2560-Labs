// Import the defineStore function from pinia to create a store
// Import the ref and computed functions from vue to create reactive variables and computed properties
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'


const studentApi = mande('api/students')

// Define a new store named 'student' using the defineStore function
export const useStudentStore = defineStore('students', () => {

    // Create a reactive variable 'studentList' to hold the list of students
    const sortedStudents = ref([])

    // Create a reactive variable 'mostRecentStudent' to hold the most recent student
    const mostRecentStudent = ref({})

    const addNewStudentErrors = ref([])

    // Get all students from the API when the store is created
    function getAllStudents() {
        studentApi.get().then( students => {
            // Set the studentList to the list of students received from the API
            sortedStudents.value = students
        })
    }


    // Add a new student to the list
    function addNewStudent(student) {
        studentApi.post(student).then( () => {
            getAllStudents()
        }).catch( err => {
            addNewStudentErrors.value = err.body
        })
    }

    // Delete a student from the list
    function deleteStudent(studentToDelete) {
        // TODO: Delete the student from the database
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            getAllStudents()
        })
    }

    // Update the most recent student to the one that arrived or left
    function arrivedOrLeft(student) {
        // TODO
        const editStudentAPI = mande(`api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            mostRecentStudent.value = student
            getAllStudents()
        })
    }

    // Create a computed property to get the count of students in the list
    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    // Sort the student list by name
    
    

    return {
        sortedStudents,
        mostRecentStudent,
        addNewStudentErrors,

        getAllStudents,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        
        studentCount
    }
})
