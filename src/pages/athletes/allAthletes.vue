<template>
  <div>
    <q-table
      title="Data Table With Sort and Search"
      :data="tableData"
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
export default {
  name: "allAthletes",
  computed: {
    tableData(){
      return this.$store.state.table.tableData;
    }
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
        { name: 'calories', align: 'center', label: 'Marathon type', field: 'calories', sortable: true },
        { name: 'carbs', label: 'Gender', field: 'carbs', sortable: true  },
        { name: 'protein', label: 'Team', field: 'protein' },
      ],
    }
  }
}
</script>

<style scoped>

</style>
