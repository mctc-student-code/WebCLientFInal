<!--Features to add
  2. allow the user to swap between lbs and kilos4

  TO-DO: 
  *Get convert up and running by 11:56pm 4/21/2024,
  *Get the radio button working,
  * If there's time clean up code.
  

  I wanted to do the extra credit however I ran out of time. extra credit >= missing 3 labs 
  Due to me running out of time there is some nonsesical notes/commment that havent been cleaned up yet
-->

<script setup>
import BodyMassIndexCalc from './components/BMICalc.vue' //makes this App.vue a component of WouldYouRather

import { ref } from 'vue'//ref will make your app reactive
//The code down below sets up both the questions and its anwsers
const welcomeBmi = ref('Welcome to the BMI calculator')

const bmiValue =ref(0)
// this will store the users answer once they made their choice

//This line of code prints out the users choice as well as additional dialog to make the app appear friendly 

let metricUnitsApp = ref(false)

function convertTrue(metricUnitsBMI) {
 metricUnitsBMI.value = !metricUnitsBMI.value
 
 console.log('convertTrue')
}
//ask teacher about parameters, I need to understand them better
function calculate(height, weight){
  let bmi = weight /(height * height)
  bmiValue.value = bmi.toPrecision(3)//rounds the number 2 decimal
  console.log(bmiValue)
}

 function calculateImperial (){
  let bmi = weight /(height * height) * 730
  bmiValue.value = (bmi.toPrecision(3))//rounds the number 2 decimal
  console.log(bmiValue)}

  




</script>
<!--Down below post Would You Rather in big text-->
<template>
<div id="app-component"></div>
<h1>BMICalc</h1>
<h1>{{metricUnitsBMI}}</h1>
<!--down below connects Vue to the questions amd the answers-->
<BodyMassIndexCalc v-on:userInputData="calculate"
v-bind:metricUnitsBMI="metricUnitsApp">
</BodyMassIndexCalc><!--Detects the message form sendDataToapp-->
{{ bmiValue }}
<label for="convert">Change unit of measurment?</label>
<input v-model="metricUnitsApp" type="checkbox" id="convertUnits" v-on:change="convertTrue" >



</template>

<!--Down below styles the app localy(the css changes will only occur in this component)-->
<style scoped>

</style>
