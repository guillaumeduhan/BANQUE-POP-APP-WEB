<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Comptes from './components/Comptes.vue'
import LineChart from './components/LineChart.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Comptes,
    LineChart
  }
}
</script>

<style>

@import './assets/master.css';

#app {
  background-color:rgb(254,254,254);
  height:-webkit-fill-available;
  display:flex;
}

</style>
