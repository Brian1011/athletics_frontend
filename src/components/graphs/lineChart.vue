<template>
  <div>
    <div class="text-h4 flex flex-center">Line Chart</div>
    <apexchart width="500" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueApexCharts from 'vue-apexcharts'
  Vue.use(VueApexCharts);
  Vue.component('apexchart',VueApexCharts)

  export default {
    name: "lineChart",
    data(){
      return{
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Sales Trends per Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      }
    }
  }
</script>

<style scoped>

</style>
