<script setup>

import {ref} from 'vue'
import { useStudentStore } from '../Stores/StudentStore';

const StudentStore = useStudentStore()

const newStudentName = ref('')
const newStarID = ref('')
const formErrors = ref([])



function addStudent(){
    formErrors.value= []
//validity check
    if(newStudentName.value.length == 0) {
    formErrors.value.push('A student name must be entered')
    }
    if(newStarID.value.length == 0) {
    formErrors.value.push('A students starID must be entered')
    }
    //If ther're no errors
        if (formErrors.value.length == 0){
        let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
            }
        //TODO how to add student?
        StudentStore.addNewStudent(student)
        newStudentName.value= ''
        newStarID.value= ''
        }
}   
//code here

</script>

<template>
<h1></h1>
<div id="new-student-form-errors" class="m-2">
    <!-- TODO show errors from form validation -->

    <div v-if="formErrors.length >0" class="alert alert-danger">
        <li v-for="error in formErrors">
            {{error}}
        </li>
    </div>
</div>

        
<div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>
    <h5>{{studentCount}} students in class.</h5>

    <div class="form-group mb-3">
        <label for="name">Name</label>
        <!-- TODO v-model newStudentName -->
        <input v-model.trim="newStudentName" id="name" class="form-control">
    </div>

    <div class="form-group mb-3">
        <label for="starID">Star ID</label>
            <!-- TODO v-model newStarID -->
        <input v-model.trim="newStarID" id="starID" class="form-control">
    </div>

    <!-- TODO v-on:click event handler -->
    <button v-on:click="addStudent" class="btn btn-primary">Add</button>
</div>
    <!--HTML template here-->

</template>

<style scoped>

/*css for thid componet here*/
</style>