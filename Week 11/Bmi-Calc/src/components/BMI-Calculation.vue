<script setup>
import  {storeToRefs} from 'pinia'
import {useBmiStore} from '../Store/BMI-Stores'
import { ref } from 'vue';
const useStore = useBmiStore()
let {bmiValue,height, weight} = storeToRefs(useStore)
//ask teacher about parameters, I need to understand them better

const calculate = (height, weight) =>{
        const bmi = weight /(height * height)
        bmiValue.value = ref(bmi.toPrecision(3))//rounds the number 2 decimal
        console.log(bmiValue.value)
    }
      
</script>

<template>

<div>

<p>
    <button @click="calculate" >calculate</button> <!--Let's start using @click more, it's more convient-->
</p>
 {{ bmiValue }}
<h2>
</h2>
</div>

</template>

<style scoped>

button {
    background: cadetblue;
}



</style>