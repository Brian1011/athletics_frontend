<template>
  <div class="q-px-md q-py-md">
    <div class="row ">
      <div class="col-xs-12 col-sm-6 q-pb-sm offset-sm-3">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center">Add new race</p>
          <q-card-section>
            <q-form @submit="submit">
              <q-input color="primary" filled label="Race name" v-model="raceData.raceName"
               :rules="[ val => val && val.length > 0 || 'Race name cannot be empty']"
              ></q-input>
              <br>

              <q-input color="primary" filled label="Venue" v-model="raceData.venue"
               :rules="[ val => val && val.length > 0 || 'Venue cannot be empty']"
              ></q-input>
              <br>

              <q-select filled v-model="raceData.county" :options="counties" label="Select county" />
              <br>

              <q-option-group
                v-model="raceData.gender"
                :options="genderOptions"
                color="primary"
                inline
                dense
              />
              <br>

<!--              <q-select filled v-model="marathonDefault" :options="marathonTypes" label="Filled" />-->
<!--              <br>-->

              <q-input color="primary" filled label="Distance (metres)" v-model="raceData.distance"
                 :rules="[ val => val && val.length > 0 || 'Distance cannot be empty']"
              ></q-input>
              <br>

              <q-select
                v-model="raceData.runners"
                multiple
                filled
                :options="runners"
                label="Select runners to participate"
                behavior="dialog"
              />
              <br>

              <q-btn color="primary" size='md' type="submit">Submit</q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "addRace",
  computed: {
    ...mapGetters("athlete", {
      runners: 'allRunnersList'
    })
  },
  data(){
    return {
      raceData: {
        raceName: '',
        venue: '',
        county: 'Select county',
        gender: '',
        distance: 0,
        runners: null,
      },

      gender:'',
      genderOptions: [
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        },
      ],

      county: 'Select county',
      counties: [
        'Nairobi', 'Machakos', 'Nyeri', 'Narok', 'Muranga'
      ],

      marathonDefault: 'Select marathon type',
      marathonTypes: [
        '300', '800', '1km', '10km',
      ],

      runner: null,
    }
  },
  methods: {
    submit(){
      if(this.raceData.gender === ''){
        this.$q.notify({
          message: 'Gender',
          caption: 'Gender cannot be empty',
          color: 'danger',
          position: 'top'
        })
      } else if(this.raceData.runners === null){
        this.$q.notify({
          message: 'Runners',
          caption: 'Select runners that will participate',
          color: 'danger',
          position: 'top'
        })
      } else {
        this.$store.dispatch('race/addNewRace', this.raceData)
      }
    }
  },

  created() {
    this.$store.dispatch('athlete/loadRunners')
  }
}
</script>

<style scoped>

</style>
