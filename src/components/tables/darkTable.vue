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
    <template v-slot:item.action="{ item }">
      <q-icon name="print" small>print</q-icon>
      <q-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </q-icon>
      <q-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </q-icon>
    </template>
  </q-table>
</template>

<script>
    export default {
        name: "darkTable",
        computed: {
          tableData(){
            return this.$store.state.table.tableData;
          },
          formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
            editedIndex: -1,
            editedItem: {
              name: '',
              calories: 0,
              fat: 0,
              carbs: 0,
              protein: 0,
            },
            defaultItem: {
              name: '',
              calories: 0,
              fat: 0,
              carbs: 0,
              protein: 0,
            },
            watch: {
              dialog (val) {
                val || this.close()
              },
            },
          }
        },
      methods: {
        editItem (item) {
          this.editedIndex = this.tableData.indexOf(item)
          this.editedItem = Object.assign({}, item)
          //this.dialog = true
        },

        deleteItem (item) {
          const index = this.tableData.indexOf(item)
          confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        }
      }
    }
</script>

<style scoped>

</style>
