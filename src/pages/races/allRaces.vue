<template>
  <div>
    <q-table
      title="Registered races"
      :data="tableData"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mb-lg q-mt-lg"
      selection="single"
      :selected.sync="selected"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <q-btn color="primary" v-show="selected.length > 0" @click="dialog=true">{{showMessage.call()}}</q-btn>
        <p class="text-h6" v-show="selected.length === 0">Races</p>
      </template>
    </q-table>

    <!-- view results of that county -->
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
          <race-results></race-results>
        </q-card-section>
      </q-card>
    </q-dialog>
<!--    <div class="q-mt-md">-->
<!--      Selected: {{ JSON.stringify(selected) }}-->
<!--    </div>-->
  </div>
</template>

<script>
import RaceResults from "./raceResults";
export default {
  name: "allRaces",
  components: {RaceResults},
  computed: {
    tableData(){
      return this.$store.state.table.tableData;
    }
  },
  data(){
    return{
      filter: '',
      dialog: false,
      maximizedToggle: true,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Marathon type', field: 'calories', sortable: true },
        { name: 'carbs', label: 'Gender', field: 'carbs', sortable: true  },
        { name: 'protein', label: 'Total participants', field: 'protein' },
      ],
      selected: []
    }
  },
  methods: {
    showMessage(){
      if(this.selected.length > 0){
        return 'View race results of '+this.selected[0].name
      } else {
        return 'View race results'
      }
    }
  }
}
</script>

<style scoped>

</style>
