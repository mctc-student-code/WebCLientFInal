import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore( {
    function calculate(height, weight){
        let bmi = weight /(height * height)
        bmiValue.value = bmi.toPrecision(3)//rounds the number 2 decimal
        console.log(bmiValue)
      }
    
      const bmiValue =ref(0)




})
