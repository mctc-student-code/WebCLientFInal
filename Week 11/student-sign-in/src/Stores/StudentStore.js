import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useStudentStore = defineStore('students', () =>{
    const studentList = ref([               
    { name: 'Aba Mohhamed', starID: '111ABM222', present: false},
    { name: 'Abby Monarch', starID: '222ABM333', present: false},
    { name: 'Akagi  Saito', starID: '333AKS444', present: false},
    { name: 'Candy  Summers', starID: '222CAS555', present: false},
    { name: 'Bao  Yangling', starID: '333AKS444', present: false},])

    const mostRecentStudents = ref({})

    const studentCount = computed (() =>{
        return studentList.value.length
     })  

    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (student1, student2) => {
            return student1.name.localeCompare(student2.name)
        })
    })
    function addNewStudent(student){
            studentList.value.push(student)
        }

    function deleteStudent(studentToDelete){
            studentList.value = studentList.value.filter((student) => {
                return studentToDelete != student
            })
            mostRecentStudents.value = {}//makes sure that if someone is deleted it won't say hi X(it acknowledges the person left)
        }
//this functionis reactive
    function arrivedOrLeft(student){
        mostRecentStudents.value = student
    }
    return{
        studentList, 
        mostRecentStudents,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        //Computed properties
        sortedStudents,
        studentCount,
    }
})