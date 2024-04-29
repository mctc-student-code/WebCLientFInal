import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () => {//Needs a name 'bmi' and the const to function setup

const height = ref(1.5)
const weight = ref(55) 
// const bmiValue =ref(0)   // use a computed property since we can calculate it from 
// height and weight 
const bmiValue = computed( () => {
    return weight.value / (height.value * height.value)
})

// skip metric/US measurements, get the basic stuff working 

return {
    height,
    weight,
    bmiValue
}

//Why doen't they keep their values when used in the components??????????? 


//
//unfortunatly due to time constrainst I have to give up on this program
// No matter what I tried I couldn't get these variables to transfer with their value intact the moment I tried it only returns NaN
//this was the last thing i needed to figure out but oh well 
// the program won't work but I couldnt find an awnser, I asked google, friends, I even went full hail mary and asked chat gpt if it knew how
// unfortunatly I couldn't find a solution
//upside i feel like I know how to use Pinia to create a larger program, with the exception of exporting variables

})