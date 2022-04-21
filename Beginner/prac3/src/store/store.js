import { createStore } from 'vuex'
import EventServices from '../Services/EventServices'
export default createStore({
  state: {
    user: 'Tair Aminalover',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    SET_EVENTS(state, events){
      state.events = events
    }
  },
  actions: {
    createEvent({ commit }, event){
      EventServices.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchEvents({ commit }){
      EventServices.getEvents(2, parseInt(this.$route.query.page) || 1)
      .then((res) => {
        commit('SET_EVENTS', res.data)
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
    }
  },
  modules: {},
})
