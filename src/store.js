import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //属性
    count: 0,
    todos: [{
        id: 1,
        title: 'todo iten 1',
        complated: false
      },
      {
        id: 2,
        title: 'todo iten 2',
        complated: false
      },

      {
        id: 3,
        title: 'todo iten 3',
        complated: false
      }

    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})