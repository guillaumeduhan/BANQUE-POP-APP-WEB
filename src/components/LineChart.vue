<template>
  <div id="">
    <p>{{ title }}</p>
  </div>
</template>

<script>
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

export default {
  name: "LineChart",
  data () {
    return {
      title: "Hello LineChart"
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
