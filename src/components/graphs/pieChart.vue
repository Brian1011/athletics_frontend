<template>
  <div>
    <div class="text-h4 flex flex-center">Pie Chart</div><br>
    <apexchart type="pie" width="80%" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueApexCharts from 'vue-apexcharts'
  Vue.use(VueApexCharts);
  Vue.component('apexchart',VueApexCharts)

  export default {
    name:"pieChart",
    data(){
      return{
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          title: {
            text: 'Sales per City',
            align: 'center'
          },
          chart: {
            width: 380,
            height: 400,
            type: 'pie',
          },
          labels: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Machakos'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      }
    }
  }
</script>
