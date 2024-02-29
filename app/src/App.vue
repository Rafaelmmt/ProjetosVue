<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// reactive state
const apiData = () => {
  axios.get('https://opentdb.com/api.php?amount=1&category=20')
  .then((response) => {
    console.log(response.data.results)
  })
} 

// functions that mutate state and trigger updates
/* function increment() {
  count.value++
} */

// lifecycle hooks
onMounted (apiData)

</script>

<template>
  
  <div>
    <p>Humano 0 x 0 Computador</p><hr>
  </div>

  <div class="main-div">
    <h1>0</h1>

    <input type="radio" name="options" value="true">
    <label>Verdadeiro</label><br>

    <input type="radio" name="options" value="false">
    <label>Falso</label><br>

    <button class="btn-send" type="button">Enviar</button>
    
  </div>

</template>

<style scoped>
.main-div {
  font-family: Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px auto;
  max-width: 960px;
}
.main-div input{
  margin: 12px 12px;
}
.btn-send {
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background: #1857c0;
  border: 1px solid #1857c0;
  cursor: pointer;
}

</style>
