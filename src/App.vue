<template>
  <div id="app">
    app.vue:{{count}}
    <p>{{complatedTodos}}</p>
    <p>{{complatedTodosCount}}</p>
    <p>{{getTodosById(3)}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "complatedTodos",
    "complatedTodosCount",
    "getTodosById"
  ])
  //  computed:mapState(["count","todos"])
  //   computed:mapState({
  //    count:state =>state.count,
  //    todos:state =>state.todos
  //  })
  //   写法1
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   complatedTodos() {
  //     return this.$store.getters.complatedTodos;
  //   },
  //   complatedTodosCount() {
  //     return this.$store.getters.complatedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.gettters.getTodosById;
  //   }
  //     todos() {
  //       return this.$store.state.todos;
  //     }
  // }
};
</script>

<style>
</style>
