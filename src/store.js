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
        complated: true
      },

      {
        id: 3,
        title: 'todo iten 3',
        complated: true
      }

    ]
  },
  getters: {
    count: state => state.count,
    complatedTodos: state => state.todos.filter(todo => todo.complated),
    complatedTodosCount: (state, getters) => getters.complatedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

    // complatedTodos: function (state) {
    //   return state.todos.filter(function (todo) {
    //     return todo.complated
    //   })
    // }
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount

  },
  actions: {

  }
})