<template>
  <div class="home">
    <h1>Hellow</h1>
    <div v-if="!this.$store.state.user">
      You need to login
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import authComputed from '../helper'
export default {
  computed: {
    ...authComputed
  }
};
</script>
