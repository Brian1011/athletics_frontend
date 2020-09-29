<template>
  <div>
    <div class="q-pa-lg">
      <q-toolbar>
        <q-toolbar-title>Athletes</q-toolbar-title>
        <q-space></q-space>
        <q-btn label="Add new athlete" color="primary" @click="dialog = true" />
      </q-toolbar>

      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />
            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
              <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
              <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <add-athlete></add-athlete>
          </q-card-section>
        </q-card>
      </q-dialog>
      <all-athletes></all-athletes>
    </div>
  </div>
</template>

<script>
import AllAthletes from "./allAthletes";
import AddAthlete from "./addAthelete";
export default {
name: "athlete",
  components: {AddAthlete, AllAthletes},
  data(){
    return {
      dialog: false,
      maximizedToggle: true
    }
  }
}
</script>

<style scoped>

</style>
