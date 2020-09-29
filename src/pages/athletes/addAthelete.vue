<template>
  <div class="q-px-md q-py-md">
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pb-sm offset-sm-3">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center text-black">Add new athlete</p>
          <q-card-section>
            <q-form @submit="submit">
              <q-input color="primary" filled label="Name"></q-input>
              <br>

<!--              <q-select filled v-model="team" :options="teams" label="Filled" />-->
<!--              <br>-->

              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
                inline
                dense
                class="q-py-lg"
              />
              <br>

              <q-select filled v-model="marathonDefault" :options="marathonTypes" label="Filled" />
              <br>

              <q-btn color="primary" size='md'>Submit</q-btn>
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
  data(){
    return {
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
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      marathonDefault: 'Select marathon type',
      marathonTypes: [
        '300', '800', '1km', '10km',
      ]
    }
  }
}
</script>

<style scoped>

</style>
