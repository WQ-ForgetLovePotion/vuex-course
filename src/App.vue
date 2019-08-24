<template>
  <div id="app">
    app.vue:{{count}}
    <p>{{todos}}</p>
    <ul>
      <li v-for="todo in todos">{{todo.id}}--{{todo.title}</li>
    </ul>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed:mapState(["count","todos"])
  //computed:mapState({
  //  count:state =>state.count,
 //   todos:state =>state.todos
 // })
  //写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
    //   return this.$store.state.todos;
   //  }
  //}
};
</script>

<style>
</style>
