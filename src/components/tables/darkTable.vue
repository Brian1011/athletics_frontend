<template>
  <q-table
    title="Dark Table"
    :data="tableData"
    :columns="columns"
    row-key="name"
    :filter="filter"
    dark
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" dark>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<script>
    export default {
        name: "darkTable",
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
                label: 'County',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
              },
              { name: 'calories', align: 'center', label: 'Sales', field: 'calories', sortable: true },
              { name: 'fat', label: 'Users', field: 'fat', sortable: true },
              { name: 'carbs', label: 'Profit (%)', field: 'carbs', sortable: true  },
              { name: 'protein', label: 'Rating', field: 'protein' },
            ],
          }
        }
    }
</script>

<style scoped>

</style>
