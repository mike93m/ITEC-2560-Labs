// Import the defineStore function from pinia to create a store
// Import the ref and computed functions from vue to create reactive variables and computed properties
// Import mande to create an API client for making HTTP requests
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

// Create an API client using mande to interact with the students API
const studentApi = mande('api/students')

// Define a new store named 'student' using the defineStore function
export const useStudentStore = defineStore('students', () => {

    // Create a reactive variable 'studentList' to hold the list of students
    const sortedStudents = ref([])

    // Create a reactive variable 'mostRecentStudent' to hold the most recent student
    const mostRecentStudent = ref({})

    // Store any errors that occur when adding a new student
    const addNewStudentErrors = ref([])

    // Get all students from the API when the store is created
    function getAllStudents() {
        studentApi.get().then( students => {
            // Set the studentList to the list of students received from the API
            sortedStudents.value = students
        })
    }


    // Add a new student to the list
    // Posts the student to the API and then calls getAllStudents to refresh the list
    // If there is an error, it is stored in the addNewStudentErrors variable
    function addNewStudent(student) {
        studentApi.post(student).then( () => {
            getAllStudents()
        }).catch( err => {
            addNewStudentErrors.value = err.body
        })
    }

    // Delete a student from the list
    function deleteStudent(studentToDelete) {
        // Use mande and the student ID to create an API client for deleting the student
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            getAllStudents() // Refresh the list of students 
        })
    }

    // Update the most recent student to the one that arrived or left based on "present" status
    function arrivedOrLeft(student) {
        // Create an API client for editing the student 
        const editStudentAPI = mande(`api/students/${student.id}`)
        // Update the student object with the new present status
        editStudentAPI.patch(student).then( () => {
            mostRecentStudent.value = student // Update the most recent student
            getAllStudents() // Refresh the list of students
        })
    }

    // Computed property to get the count of students in the list
    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    return {
        // Reactive variables 
        sortedStudents,
        mostRecentStudent,
        addNewStudentErrors,
        // Functions 
        getAllStudents,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        // Computed property 
        studentCount
    }
})
