// Import the defineStore function from pinia to create a store
// Import the ref and computed functions from vue to create reactive variables and computed properties
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Define a new store named 'student' using the defineStore function
export const useStudentStore = defineStore('student', () => {

    // Create a reactive variable 'studentList' to hold the list of students
    const studentList = ref([
        { name: "Eric", starID: "1234", present: false },
        { name: "John", starID: "5678", present: false },
        { name: "Jane", starID: "9101", present: false },
        { name: "Alice", starID: "1121", present: false },
        { name: "Bob", starID: "3141", present: false }
    ])

    // Create a reactive variable 'mostRecentStudent' to hold the most recent student
    const mostRecentStudent = ref({})

    // Add a new student to the list
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    // Delete a student from the list
    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student 
        })
        // Clear the most recent student 
        mostRecentStudent.value = {}
    }

    // Update the most recent student to the one that arrived or left
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    // Create a computed property to get the count of students in the list
    const studentCount = computed( () => {
        return studentList.value.length
    })

    // Sort the student list by name
    const studentListSorted = computed( () => {
        return studentList.value.toSorted((s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })
    

    return {
        studentList,
        mostRecentStudent,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        studentCount,
        studentListSorted
    }

})
