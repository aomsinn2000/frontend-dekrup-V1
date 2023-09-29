<template>
  <NavbarView></NavbarView>
  <RouterView/>
</template>





<script setup lang="js">
import NavbarView from './views/NavbarView.vue'

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap');
#app {
  font-family: 'Kanit', sans-serif;
}
</style>
