<script setup>
  import { ref, watch } from 'vue'
  //This tells the app what data to expect
  const unitsOfMeasurement = ref('false')
  const height = ref(0)
  const weight = ref(0)
  let heightMeasurement = ref('Meters')
  let weightMeasurement = ref('Kilograms')
  let convertTrue = false
  const emit = defineEmits([ 'userInputData'])
  /* watch(, () =>{
  emit('calculate', calculate.value)
  }) */
  function sendDataToApp(){//emits a message to app.vue
      emit('userInputData', height.value, weight.value)
  }//This data needs to be sent to app.vue
  
  function toggleConvertUnits(Event){
      emit('convertUnits', Event.target.checked)
  }
  
  
  
  
  </script>
  <template>
  
  
  <div id ="bmi">
  <h2>Please enter you weight & height in the fields below </h2>
  <h3>This app will convert negative numbers into positive</h3>
  
  <div>
      <label for="convert">Change unit of measurment?</label>
      <input v-model="unitsOfMeasurement" v-bind:value="convertTrue"  type="checkbox" id="convertUnits" @change="toggleConvertUnits">
      <br>
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
  <!--down below contains visual changes that are kept locally to this specific text file -->
  <style scoped> 
   button{
      background-color:cornflowerblue ;
   }
  </style>