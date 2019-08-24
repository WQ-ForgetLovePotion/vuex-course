<template>
  <div id="count">
    <div>
      <hr />
      <h1>count.vue:{{count}}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "count",
  components: {},
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
  computed: mapState({
    count: state => state.count,
    todos: state => state.todos
  })
};
</script>

<style>
</style>
