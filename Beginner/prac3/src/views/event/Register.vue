<template>
  <div v-if="event">
    <p>Register for event here</p>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage = 'YOoooooooooooooooooooooooooo'

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
