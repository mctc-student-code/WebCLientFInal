<script setup>
import BMIDisplay from './components/BMIDisplay.vue';
import BMICalculation from './components/BMI-Calculation.vue';
import {useBmiStore} from './Store/BMI-Stores'
import {storeToRefs} from 'pinia'

const useStore = useBmiStore()
let {calculate} = storeToRefs(useStore)

</script>

<template>


<BMIDisplay> </BMIDisplay>
<BMICalculation v-on:userInputData="calculate"> </BMICalculation>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
