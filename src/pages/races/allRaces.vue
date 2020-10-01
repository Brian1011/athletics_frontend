<template>
  <div>
    <q-table
      title="Registered races"
      :data="allRaces"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mb-lg q-mt-lg"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <p class="text-h6">Races</p>
      </template>

      <template v-slot:body="props">
        <q-tr props="props">
          <q-td key="race_id" :props="props">{{props.row.id}}</q-td>
          <q-td key="race_name" :props="props">{{props.row.raceName}}</q-td>
          <q-td key="race_venue" :props="props">{{props.row.venue}}</q-td>
          <q-td key="race_distance" :props="props">{{props.row.distance}}</q-td>
          <q-td key="action" :props="props">
            <q-btn @click=setSelectedRace(props.row) color="primary">{{props.row.raceName}} Race results</q-btn>
          </q-td>
        </q-tr>
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
          <race-results :race-results="raceResult"></race-results>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RaceResults from "./raceResults";

export default {
  name: "allRaces",
  components: {RaceResults},
  computed: {
    tableData(){
      return this.$store.state.table.tableData;
    },
    ...mapGetters("race", {
        allRaces: 'allRaces',
        raceResult: 'raceResult'
    })
  },
  data(){
    return{
      filter: '',
      dialog: false,
      maximizedToggle: true,
      columns: [
        {
          name: 'race_id',
          label: 'Id',
          field: row => row.id,
          sortable: true
        },
        { name: 'race_name', label: 'Race Name', field: 'raceName', sortable: true },
        { name: 'race_venue', label: 'Venue', field: 'venue', sortable: true  },
        { name: 'race_distance', label: 'Distance (Metres)', field: 'distance' },
        { name: 'action', label: 'Results', field:'raceName'},
      ],
      selected: []
    }
  },
  methods: {
    showMessage(){
      if(this.selected.length > 0){
        return 'View race results of '+this.selected[0].raceName
      } else {
        return 'View race results'
      }
    },

    setSelectedRace(rowData){
      this.selected = rowData
      this.$store.dispatch('race/selectedRace', this.selected)
      this.dialog = true
    }
  },

  created() {
    this.$store.dispatch('race/loadRaces')
  }
}
</script>

<style scoped>

</style>
