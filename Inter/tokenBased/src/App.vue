<template>
<div id="app">
    <app-nav />
    <router-view class="page" />
</div>
</template>

<script>
import axios from 'axios'
import AppNav from './components/AppNav.vue'

export default {
  name: 'App',
  components: {
    AppNav
  },
  created(){
    const userString = localStorage.getItem('user')
    if(userString){
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if(error.response.status === 401){
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  }
}
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
