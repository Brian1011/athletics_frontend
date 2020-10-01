<template>
  <div class="q-px-md q-py-md">
    <div class="row ">
      <div class="col-xs-12 col-sm-10 q-pb-sm offset-sm-1">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center">Perfomance</p>
          <q-card-section>
            <q-select
              v-model="selectedRunner"
              filled
              :options="runners"
              label="Select athlete"
              behavior="dialog"
              @input="calculateSpeed"
            />
            <br>
          </q-card-section>
        </q-card><br>

        <!-- CHARTS -->
        <div>
          <div class="text-h4 flex flex-center">Bar Chart</div>
          <apexchart width="100%" type="bar" :options="apexChartOptions" :series="secondsSeries" ref="apexChart"></apexchart>
        </div>

        <div>
          <div class="text-h4 flex flex-center">Line Chart</div>
          <apexchart width="100%" type="line" :options="lineChartOptions" :series="speedSeries" ref="lineChart"></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
Vue.component('apexchart',VueApexCharts)
import { mapGetters } from 'vuex'
import HorizontalBarChart from "../../components/graphs/horizontalBarChart";
import LineChart from "../../components/graphs/lineChart";
import ApexChartTrial from "../../components/graphs/apexChartTrial";
export default {
  name: "athletesPerfomance",
  components: {ApexChartTrial, LineChart, HorizontalBarChart},
  computed: {
    ...mapGetters("athlete", {
      runners: 'allRunnersList',
    }),
    ...mapGetters("race", {
      allRacesResults: 'allRacesResults',
      allRaces: 'allRaces'
    }),
  },
  data(){
    return {
      selectedRunner: {label: 'Tom', value: 1},
      HTMLcontent: null,
      secondsSeries: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      speedSeries: [{
        name: "Km / hr",
        data: [10, 20, 90]
      }],
      lineChartOptions: {
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
          text: 'Speed per race',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
      },
      apexChartOptions: {
        chart: {
          id: 'vuechart-example',
          height: 800,
        },
        title: {
          text: 'Seconds spent per race',
          align: 'left'
        }
      }
    }
  },
  methods:{
    calculateSpeed(){
      let allRaces = this.allRaces;
      let speedData = []
      let secondsSpent = []
      let runnerData = this.allRacesResults.filter(
        results => (results.athleteId === this.selectedRunner.value)
      )
      if(runnerData.length > 0){
        runnerData.forEach(function (item){
          // get seconds spent
          secondsSpent.push(item.seconds)

          // get race info
          let raceInfo = allRaces.find(
            results => (results.id === item.raceId)
          )
          // get race distance
          let distance = Math.round(raceInfo.distance / 1000);

          // get speed
          let speed = Math.round(distance / (item.seconds / 3600))
          speedData.push(speed)
        })
      }
      this.$refs.lineChart.updateSeries([{
        data: speedData
      }])

      this.$refs.apexChart.updateSeries([{
        data: secondsSpent
      }])
    }
  },
  created() {
    this.$store.dispatch('auth/loadUser')
    this.$store.dispatch('athlete/loadRunners')
    this.$store.dispatch('race/loadRaces')
    this.calculateSpeed()
  }
}
</script>

<style scoped>

</style>
