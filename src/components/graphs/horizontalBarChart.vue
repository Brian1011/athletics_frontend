<template>
  <div>
    <div class="text-h4 flex flex-center">Horizontal Bar Chart</div>
    <apexchart width="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueApexCharts from 'vue-apexcharts'
  Vue.use(VueApexCharts);
  Vue.component('apexchart',VueApexCharts);

  export default {
    name: "horizontalBarChart",
    props: {
      dataSeries: Array,
      dataCategories: Array
    },
    data(){
      return{
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
