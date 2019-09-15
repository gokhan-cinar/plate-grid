import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export  default new Vuex.Store({
  state : { vehicle : { } },
  getters : {},
  actions : {
    getVehicle({commit}, vehicle) {
      commit(setVehicle, vehicle)
    }
  },
  mutations : {
    setVehicle(state, {vehicle}) {
      state.vehicle = vehicle
    }
  }
})

