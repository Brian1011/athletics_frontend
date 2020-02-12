<template>
  <div>
    <q-table
      title="Basic Table"
      :data="tableData"
      :columns="columns"
      row-key="name"
      class="q-mb-lg"
    >
    </q-table >
  </div>
</template>

<script>
    export default {
        name: "basicTable",
        computed: {
          tableData(){
            return this.$store.state.table.tableData;
          }
        },
        data(){
          return {
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
              { name: 'calories', align: 'center', label: 'Sales', field: 'calories', sortable: false },
              { name: 'fat', label: 'Users', field: 'fat', sortable: false },
              { name: 'carbs', label: 'Profit (%)', field: 'carbs', sortable: false  },
              { name: 'protein', label: 'Rating', field: 'protein' },
            ],
          }
        }
    }
</script>

<style scoped>

</style>
