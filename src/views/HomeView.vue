<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{$store.state.counter}}</p>
    <!-- have to ".commit()" to access/use the function in mutations -->
    <button @click="$store.commit('increment')">+</button>
    <button @click="$store.commit('decrement')">-</button>
    {{$store.state.dataArray}}
  </div>
</template>

<script>
// @ is an alias to /src
// import FruitView from './FruitView.vue'

export default {
  name: 'HomeView',
  components: {
    // FruitView
  },
  methods : {
    fetchData: function(){
      this.$store.dispatch('fetchData')
    }
  },
  mounted(){
    this.fetchData()
  }
}
</script>
