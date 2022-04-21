import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state: {
    currentRow: "-1",
    cities: [],
    type: "add"
  },
  mutations: {
    SET_ROW(state, row){
      state.currentRow = row
    },
    SET_CITIES(state, cities){
      state.cities = cities
    },
    ADD_CHILD(state, child){
      let parent = state.cities
      if(state.currentRow == "-1"){
        state.cities[child.id] = child
      }else{
        let keys = state.currentRow.split('/')
      while(keys.length){
        parent = parent[keys[0]].child
        keys.shift()
      }
      parent[child.id] = child
      }
      console.log(state.cities)
    },
    UPDATE_CHILD(state, child){
      let parent = state.cities
      let keys = state.currentRow.split('/')
      while(keys.length - 1){
        parent = parent[keys[0]].child
        keys.shift()
      }
      let needToupdate = parent[keys[keys.length - 1]]
      needToupdate.name = child.name
      needToupdate.fact = child.fact
      needToupdate.overall = child.overall
      console.log(state.cities)
    },
    DELETE_CHILD(state){
      let parent = state.cities
      let keys = state.currentRow.split('/')
      while(keys.length - 1){
        parent = parent[keys[0]].child
        keys.shift()
      }
      delete parent[keys[0]]
      console.log(state.cities)
    },
    UPDATE_TYPE(state){
      state.type == 'add' ? state.type = 'edit' : state.type = 'add'
    }
  },
  actions: {
    changeRow({ commit }, row){
      console.log(row)
      commit('SET_ROW', row)
    },
    getCities({ commit }){
      axios.get('//localhost:3000/cities')
      .then(({ data }) => {
        commit('SET_CITIES', data.cities.cities)
      })
    },
    addChild({ commit }, newChildData){
      commit('ADD_CHILD', newChildData)
    },
    updateChild({ commit }, newChildData){
      commit('UPDATE_CHILD', newChildData)
    },
    deleteChild({ commit }){
      commit('DELETE_CHILD')
    },
    changeType({ commit }){
      commit('UPDATE_TYPE')
    }
  },
  modules: {},
  getters: {
    getCities(state){
      return state.cities
    },
    getType(state){
      return state.type
    }
  }
});
