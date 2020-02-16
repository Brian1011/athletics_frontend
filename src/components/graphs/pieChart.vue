<template>
    <div>
        <div id="chart" ref="barchart"></div>
    </div>
</template>

<script>
  import ApexCharts from 'apexcharts'

  export  default {
    name: "pieChart",
    component: {ApexCharts},
    data(){
      return{
        categories: [2,3,4,5],
        presentData: [1,2,3,4],
        absentData: [0,0,0,0]
      }
    },
    created(){
      //new ApexCharts(this.$refs.barchart, {
        new ApexCharts(document.querySelector('#chart'), {
        chart: {
          type: 'bar',
          height: 450,
          //stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded'
          }
        },
        series: [
          {
            name: 'Present',
            data: this.presentData
          },
          {
            name: 'Absent',
            data: this.absentData
          },
        ],
        xaxis: {
          //categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
          categories: this.categories
        },
        yaxis: {
          title: {
            text: 'Students'
          }
        },
        fill: {
          opacity: 1
        }
      }).render()
    }
  }

</script>

<style scoped>

</style>
