<template>
  <div>
    <div class="text-h4 flex flex-center">Bar Chart</div>
    <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueApexCharts from 'vue-apexcharts'
  Vue.use(VueApexCharts);
  Vue.component('apexchart',VueApexCharts)

  export default {
    name: "apexChartTrial",
    components: {VueApexCharts},
    data(){
      return{
        chartOptions: {
          chart: {
            id: 'vuechart-example',
            height: 800,
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    }
  }

</script>

<style scoped>

</style>
