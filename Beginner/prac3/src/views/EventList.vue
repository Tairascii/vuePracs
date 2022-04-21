<template>
  <div class="events">
    <h1>Event For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >
      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNext"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventServices from '../Services/EventServices'
export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventServices.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((res) => {
        next((comp) => {
          comp.events = res.data
          comp.totalEvents = res.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    return EventServices.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((res) => {
        this.events = res.data
        this.totalEvents = res.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },

  computed: {
    hasNext() {
      var totalPages = Math.ceil(this.totalEvents / 2)

      return this.page < totalPages
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: black;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
