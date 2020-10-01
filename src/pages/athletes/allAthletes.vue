<script src="../../store/modules/auth.js"></script>
<template>
  <div>
    <q-table
      title="Registered athletes"
      :data="athletes"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mb-lg q-mt-lg"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "allAthletes",
  computed: {
    ...mapGetters("athlete", {
      athletes: 'allAthletes'
    }),
    tableData(){
      return this.$store.state.table.tableData;
    }
  },
  data(){
    return{
      filter: '',
      columns: [
        {
          name: 'id',
          required: true,
          label: 'id',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'name', label: 'Name', field: 'name', sortable: true },
        { name: 'gender', label: 'Gender', field: 'gender', sortable: true  },
        { name: 'marathonType', label: 'Team', field: 'marathonType'},
      ],
    }
  },
  created() {
    this.$store.dispatch('athlete/loadAthletes')
  }
}
</script>

<style scoped>

</style>
