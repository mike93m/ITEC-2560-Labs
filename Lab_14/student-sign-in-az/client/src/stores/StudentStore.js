import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('student', () => {

    const studentList = ref([
        { name: "Eric", starID: "1234", present: false },
        { name: "John", starID: "5678", present: false },
        { name: "Jane", starID: "9101", present: false },
        { name: "Alice", starID: "1121", present: false },
        { name: "Bob", starID: "3141", present: false }
    ])

    const mostRecentStudent = ref({})

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student 
        })
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed( () => {
        return studentList.value.length
    })

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
