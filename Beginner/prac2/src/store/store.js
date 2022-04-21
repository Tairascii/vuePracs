import { createStore } from 'vuex'
import EventServices from '../Services/EventServices'
export default createStore({
  state: {
    user: 'Tair Aminalover',
    events: [],
    event: null
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    SET_EVENTS(state, events){
      state.events = events
    },
    SET_EVENT(state, event){
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event){
      EventServices.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch((error) => {
          throw(error)
        })
    },
    fetchEvents({ commit }){
      return EventServices.getEvents()
      .then((res) => {
        commit('SET_EVENTS', res.data)
      })
      .catch((error) => {
        throw(error)
      })
    },
    fetchEvent({ commit }, id) {  
      const event = this.state.events.find(event => event.id === id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        return EventServices.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    }
  },
  modules: {},
})
