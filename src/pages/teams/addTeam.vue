<template>
  <div class="q-px-md q-py-md">
    <div class="row ">
      <div class="col-xs-12 col-sm-6 q-pb-sm offset-sm-3">
        <q-card class="text-black">
          <p class="text-h6 flex flex-center">Add new team</p>
          <q-card-section>
            <q-form @submit="submit">
              <q-input color="primary" filled label="Team name"></q-input>
              <br>

              <q-select filled v-model="county" :options="counties" label="Filled" />
              <br>

              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
                inline
                dense
              />
              <br>

              <q-input color="primary" filled label="Team manager name"></q-input>
              <br>

              <q-input color="primary" filled label="password" type="password"></q-input>
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
  name: "addTeam",
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

      county: 'Select county',
      counties: [
        'Nairobi', 'Machakos', 'Nyeri', 'Narok', 'Muranga'
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
