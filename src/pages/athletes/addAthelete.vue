<template>
  <div class="q-px-md q-py-md">
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pb-sm offset-sm-3">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center text-black">Add new athlete</p>
          <q-card-section>
            <q-form @submit="submit">
              <q-input color="primary" filled label="Name" v-model="athleteData.name"></q-input>
              <br>

              <q-select filled v-model="athleteData.marathonType" :options="marathonTypes" label="Filled" />
              <br>

              <div class="q-pa-xs">
                <div class="q-pa-xs">Select gender</div>
                <div class="q-gutter-sm">
                  <q-radio v-model="athleteData.gender" val="male" label="Male" />
                  <q-radio v-model="athleteData.gender" val="female" label="Female" />
                </div>
              </div><br>

              <q-btn color="primary" size='md' @click="submit">Submit</q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addAthlete",
  computed: {

  },
  data(){
    return {
      athleteData: {
        name: '',
        gender: '',
        marathonType: 'Select marathon type',
        team: 1,
      },

      options: [
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        },
      ],

      team: 'Select team',
      teams: [
        'Team 1', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      marathonDefault: 'Select marathon type',
      marathonTypes: [
        '10 KM', 'Half marathon (13.1 miles)', 'Full marathon (42 km)', 'Ultra marathon',
      ]
    }
  },
  methods: {
    submit(){
      console.log(this.athleteData);
      this.$store.dispatch("athlete/registerAthlete", this.athleteData);

    }
  }
}
</script>

<style scoped>

</style>
