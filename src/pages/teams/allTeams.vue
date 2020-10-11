<template>
  <div>
    <q-table
      title="Teams"
      :data="allTeams"
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
  name: "allTeams",
  computed: {
    tableData(){
      return this.$store.state.table.tableData;
    },
    ...mapGetters("race", {
      allTeams: 'allTeams'
    }),
  },
  data(){
    return{
      filter: '',
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
        { name: 'counties', label: 'County', field: 'county', sortable: true  },
        { name: 'members', align: 'center', label: 'Number of members', field: 'total_members', sortable: true },
      ],
    }
  },

  created() {
    this.$store.dispatch("race/loadTeams")
  }
}
</script>

<style scoped>

</style>
