<script setup>
import {storeToRefs} from 'pinia'
import {useBmiStore} from '../Store/BMI-Stores'
const useStore = useBmiStore()
let {height,weight,bmiValue} = storeToRefs(useStore)

const heightMeasurement = 'Meters'
const weightMeasurement = 'Kilograms'


</script>

<template>

<div id ="bmi">
<h2>Please enter you weight & height in the fields below </h2>
<h3>This app will convert negative numbers into positive</h3>
</div>
<div>

    <label for="your-height">Enter your height in {{heightMeasurement}}   </label>
    <input min="0" v-model="height" id="your-height" name="your-height" type="number">
    <br>
    <label for="your-weight">Enter your weight in {{weightMeasurement}}  </label>
    <input min="0" v-model="weight" id="your-weight" name="your-weight" type="number">
  
        <p>
            You are measuring in {{ heightMeasurement }} and {{ weightMeasurement }}
        </p>

            <p>{{ bmiValue }}</p>
</div>

</template>


<style scoped>





</style>