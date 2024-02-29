<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const axiosteste = () => {
  axios.get('https://opentdb.com/api.php?amount=1&category=20')
  .then((response) => {
    console.log(response.data)
  });
};

onMounted(axiosteste)

//https://opentdb.com/api.php?amount=1&category=20

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
</style>
