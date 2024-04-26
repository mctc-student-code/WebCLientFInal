<script setup>
import WouldYouRather from './components/WouldYouRather.vue' //makes this App.vue a component of WouldYouRather

import { ref } from 'vue'//ref will make your app reactive
//The code down below sets up both the questions and its anwsers
const wyrQuestion = ref('Would you rather live in a city that\'s always raining or always snowing?')
const wyrAnswer1 = ref('Rainy city')
const wyrAnswer2 = ref('Snowy city')

// this will store the users answer once they made their choice
const userSelection = ref('')

//This line of code prints out the users choice as well as additional dialog to make the app appear friendly 
function updateUserSelection(userChoice){
  userSelection.value = `Thanks you chose ${userChoice}`
}


</script>
<!--Down below post Would You Rather in big text-->
<template>
  <div id="app-component">  </div>
<h1>Would You Rather?</h1>
<!--down below connects Vue to the questions amd the answers-->
<WouldYouRather 
v-bind:question="wyrQuestion" 
v-bind:answer1="wyrAnswer1"
v-bind:answer2="wyrAnswer2"
v-on:choice-selected="updateUserSelection">
</WouldYouRather>
<!--what follows (=) in a v-bind sends data to the parent file
 what follows (:) in a v-bind sends refers to the name of the prop and the child-->


<p>{{ userSelection }}</p> <!--prints the user selection in its own paragraph-->
</template>
<!--Down below styles the app localy(the css changes will only occur in this component)-->
<style scoped>
#app-component{
  font-size: 3em;
  background-color: tomato;
}
p{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans' ;
}
</style>
