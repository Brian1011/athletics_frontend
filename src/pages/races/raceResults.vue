<template>
  <div class="q-pa-md">
    <q-table
      title="Race results"
      :data="raceResults"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{props.row.id}}</q-td>
          <q-td key="athlete" :props="props">{{props.row.athleteName}}</q-td>
          <q-td key="seconds" :props="props">{{props.row.seconds}}</q-td>
          <q-td key="actions" :props="props">
            <q-btn @click="alterResults(props.row)" color="primary" v-if="user.userType === 'admin'">Alter results</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">New time slot</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="seconds" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save results" @click="saveResults" v-if="user.userType === 'admin'"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name: "raceResults",
  // props:{
  //   raceResults: Array
  // },
  computed: {
    ...mapGetters("race", {
      raceResults: 'raceResult'
    }),
    ...mapGetters("auth", {
      user: 'getCurrentUser'
    }),
  },
  data () {
    return {
      columns: [
        { name: 'id', label: 'Id', field: 'id', sortable: true },
        { name: 'athlete',  label: 'Athlete', field: 'athleteName', sortable: true },
        { name: 'seconds', label: 'Time (seconds)', field: 'seconds', sortable: true, style: 'width: 10px' },
        { name: 'actions', label: 'Actions', field: ''}
      ],
      prompt: false,
      seconds: 0,
      selectedData: null
    }
  },
  methods:{
    alterResults(selectedData){
      this.selectedData = selectedData
      this.seconds = selectedData.seconds
      this.prompt = true
    },
    saveResults(){
      this.$store.dispatch('race/updateRaceResult', {data:this.selectedData, seconds: this.seconds})
      this.prompt = false
    }
  },
  created() {
    this.$store.dispatch('auth/loadUser')
    this.$store.dispatch('race/loadRaces')
  }
}
</script>

<style scoped>

</style>
