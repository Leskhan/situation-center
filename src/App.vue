<script setup lang="ts">
import Menu from './components/Menu.vue';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

</script>

<template> 
  <Menu></Menu>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  background-color: #f5f6fa;
}
</style>
