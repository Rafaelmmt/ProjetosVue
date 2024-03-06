<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="45" height="45" />

    <div class="links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/trivia">Trivia Game</RouterLink>
    <RouterLink to="/store">Fake Store</RouterLink>
    </div>
  </header>

  <RouterView />

</template>

<style>
header {
  display: flex;
}

</style>
