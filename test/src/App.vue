<template>
  <div>
    <div id="nav">
      <app-nav />
    </div>
    <router-view />
  </div>
</template>
<script>
import AppNav from './components/AppNav.vue'
export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>
<style lang="scss">
body{
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


</style>
