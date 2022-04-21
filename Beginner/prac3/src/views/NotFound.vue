<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking is not here</h3>
    <router-link :to="{ name: 'EventList' }">Back to homepage</router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      defauld: 'page',
    },
  },
}
</script>
