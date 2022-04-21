<template>
  <div class="org">
    <Organizational />
  </div>
</template>

<script>
// @ is an alias to /src
import Organizational from '../components/Organizational.vue'
export default {
  name: 'Home',
  components: {
    Organizational,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
};
</script>
