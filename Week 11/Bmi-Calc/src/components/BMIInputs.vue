<script setup>
import {useBMIStore} from '../Store/BMI-Stores.js'
import {storeToRefs} from  'pinia'





</script>

<template>



<div id ="bmi">
<h2>Please enter you weight & height in the fields below </h2>
<h3>This app will convert negative numbers into positive</h3>

<div>

    <label for="your-height">Enter your height in {{heightMeasurement}}   </label>
    <input min="0" v-model="height" id="your-height" name="your-height" type="number">
    <br>
    <label for="your-weight">Enter your weight in {{weightMeasurement}}  </label>
    <input min="0" v-model="weight" id="your-weight" name="your-weight" type="number">
  
        <p>
            You are measuring in {{ heightMeasurement }} and {{ weightMeasurement }}
        </p>
    <p>
        <button @click="sendDataToApp">calculate</button> <!--Let's start using @click more, it's more convient-->
    </p>
</div>


</div>

</template>


<style scoped>





</style>