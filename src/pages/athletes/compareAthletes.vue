<template>
  <div class="q-px-md q-py-md">
    <div class="row">
      <div class="col-xs-12 col-sm-5 q-pb-sm offset-sm-1">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center">1st Athlete</p>
          <q-card-section>
            <q-select
              v-model="selected1stRunner"
              filled
              :options="runners"
              label="Select athlete"
              behavior="dialog"
              @input="firstStats"
            />
            <br>

            <athlete-summary :athlete-data="firstRunnerData"/>
          </q-card-section>
        </q-card><br>
      </div>
      <div class="col-xs-12 col-sm-5 q-pb-sm offset-sm-1">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center">2nd Athlete</p>
          <q-card-section>
            <q-select
              v-model="selected2ndRunner"
              filled
              :options="runners"
              label="Select athlete"
              behavior="dialog"
              @input="secondStats"
            />
            <br>
            <athlete-summary :athlete-data="secondRunnerData"/>
          </q-card-section>
        </q-card><br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AthleteSummary from "./athleteSummary";
export default {
name: "compareAthletes",
  components: {AthleteSummary},
  computed:{
    ...mapGetters("athlete", {
      runners: 'allRunnersList',
    }),
    ...mapGetters("race", {
      allRacesResults: 'allRacesResults',
      allRaces: 'allRaces'
    }),
  },
  data(){
    return{
      selected1stRunner:"",
      selected2ndRunner: "",
      firstRunnerData: {},
      secondRunnerData: {},
    }
  },
  methods: {
    firstStats(){
      let allRaces = this.allRaces;
      let speedData = 0
      let secondsSpent = 0
      let distanceCovered = 0
      let selectedRunner = this.selected1stRunner
      let runnerData = this.allRacesResults.filter(
        results => (results.athleteId === selectedRunner.value)
      )
      if(runnerData.length > 0){
        runnerData.forEach(function (item){
          // get seconds spent
          secondsSpent = secondsSpent + item.seconds

          // get race info
          let raceInfo = allRaces.find(
            results => (results.id === item.raceId)
          )
          // get race distance
          distanceCovered = distanceCovered+raceInfo.distance
        })

        // get speed
        speedData = Math.round((distanceCovered /1000) / (secondsSpent / 3600))
      }
      this.firstRunnerData = {
        "average_speed" : speedData,
        "average_distance": distanceCovered,
        "seconds_spent": secondsSpent,
        "number_of_races" : runnerData.length
      };
    },

    secondStats(){
      let allRaces = this.allRaces;
      let speedData = 0
      let secondsSpent = 0
      let distanceCovered = 0
      let selectedRunner = this.selected2ndRunner
      let runnerData = this.allRacesResults.filter(
        results => (results.athleteId === selectedRunner.value)
      )
      if(runnerData.length > 0){
        runnerData.forEach(function (item){
          // get seconds spent
          secondsSpent = secondsSpent + item.seconds

          // get race info
          let raceInfo = allRaces.find(
            results => (results.id === item.raceId)
          )

          // get race distance
          distanceCovered = distanceCovered+raceInfo.distance
        })

        // get speed
        speedData = Math.round((distanceCovered /1000) / (secondsSpent / 3600))
      }
      this.secondRunnerData = {
        "average_speed" : speedData,
        "average_distance": distanceCovered,
        "seconds_spent": secondsSpent,
        "number_of_races" : runnerData.length
      };
    }
  },
  created() {
    this.$store.dispatch('athlete/loadRunners')
    this.$store.dispatch('race/loadRaces')
  }
}
</script>

<style scoped>

</style>
