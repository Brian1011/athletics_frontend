<template>
  <div class="q-px-lg q-py-lg">
    <q-separator/>
    <br>
<!--    <p>Yellow {{tableData}}</p>-->
<!--    <p>Blue{{tableDataGetter}}</p>-->
    <div class="row ">
      <div class="col-6">
        <q-table
          title="Kenya Sales 2019"
          :data="tableData"
          :columns="columns"
          row-key="name"
          :filter="filter"
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

      <div class="col-6">
        <q-card class="q-ml-md">
          <q-card-section>
            <div class="text-h6">Last Week Sales Per Target</div>
          </q-card-section>

          <q-card-section>
            <q-linear-progress value=0.8 class="q-mt-md" size="30px" track-color="orange">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" label="Monday 80%" />
              </div>
            </q-linear-progress>

            <q-linear-progress value=0.75 class="q-mt-md" size="30px" color="warning" track-color="orange">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" label="Tuesday 75%" />
              </div>
            </q-linear-progress>

            <q-linear-progress value=0.83 class="q-mt-md" size="30px" color="secondary" track-color="orange">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" label="Wednesday 83%" />
              </div>
            </q-linear-progress>

            <q-linear-progress value=0.65 class="q-mt-md" size="30px" color="accent" track-color="orange">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" label="Thursday 65%" />
              </div>
            </q-linear-progress>

            <q-linear-progress value=0.90 class="q-mt-md" size="30px" color="brown" track-color="orange">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" label="Friday 90%" />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

</template>

<script>
    //import {mapGetters} from 'vuex'
    // import * as getters from "../../store/tables/getters";
    import {tableDataGetter} from "../../store/tables/getters";

    export default {
      name: "SalesTable",
      computed:{
        //...mapGetters(["tableDataGetter"]),
        tableData(){
          return this.$store.state.table.tableData;
        },
      },
      data () {
        return {
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
      },
      mounted() {
        console.log(this.$store.getters.tableDataGetter);
      },
      created(){

      }
    }
</script>

<style scoped>

</style>
