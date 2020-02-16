<template>
  <div>
    <div class="text-h4 flex flex-center">Mixed Chart</div>
    <apexchart width="500" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueApexCharts from 'vue-apexcharts'
  Vue.use(VueApexCharts);
  Vue.component('apexchart',VueApexCharts)

  export default {
    name: "mixedGraph",
    data(){
     return{
       series: [{
         name: 'Nairobi',
         type: 'column',
         data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
       }, {
         name: 'Mombasa',
         type: 'area',
         data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
       }, {
         name: 'Kisumu',
         type: 'line',
         data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
       }],
       chartOptions: {
         chart: {
           height: 350,
           type: 'line',
           stacked: false,
         },
         stroke: {
           width: [0, 2, 5],
           curve: 'smooth'
         },
         plotOptions: {
           bar: {
             columnWidth: '50%'
           }
         },

         fill: {
           opacity: [0.85, 0.25, 1],
           gradient: {
             inverseColors: false,
             shade: 'light',
             type: "vertical",
             opacityFrom: 0.85,
             opacityTo: 0.55,
             stops: [0, 100, 100, 100]
           }
         },
         labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
           '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
         ],
         markers: {
           size: 0
         },
         xaxis: {
           type: 'datetime'
         },
         yaxis: {
           title: {
             text: 'Points',
           },
           min: 0
         },
         tooltip: {
           shared: true,
           intersect: false,
           y: {
             formatter: function (y) {
               if (typeof y !== "undefined") {
                 return y.toFixed(0) + " points";
               }
               return y;

             }
           }
         }
       }
     }
    }
  }
</script>

<style scoped>

</style>
