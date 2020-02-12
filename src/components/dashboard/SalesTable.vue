<template>
  <div class="q-px-lg q-py-lg">
    <q-separator/>
    <br>
<!--    <p>Yellow {{tableData}}</p>-->
    <p>Blue{{tableDataGetter}}</p>
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

<!--          <q-card-section>-->
<!--            <q-linear-progress value=0.8 class="q-mt-md" size="30px" track-color="orange">-->
<!--              <div class="absolute-full flex flex-center">-->
<!--                <q-badge color="white" text-color="accent" label="Monday 80%" />-->
<!--              </div>-->
<!--            </q-linear-progress>-->

<!--            <q-linear-progress value=0.75 class="q-mt-md" size="30px" color="warning" track-color="orange">-->
<!--              <div class="absolute-full flex flex-center">-->
<!--                <q-badge color="white" text-color="accent" label="Tuesday 75%" />-->
<!--              </div>-->
<!--            </q-linear-progress>-->

<!--            <q-linear-progress value=0.83 class="q-mt-md" size="30px" color="secondary" track-color="orange">-->
<!--              <div class="absolute-full flex flex-center">-->
<!--                <q-badge color="white" text-color="accent" label="Wednesday 83%" />-->
<!--              </div>-->
<!--            </q-linear-progress>-->

<!--            <q-linear-progress value=0.65 class="q-mt-md" size="30px" color="accent" track-color="orange">-->
<!--              <div class="absolute-full flex flex-center">-->
<!--                <q-badge color="white" text-color="accent" label="Thursday 65%" />-->
<!--              </div>-->
<!--            </q-linear-progress>-->

<!--            <q-linear-progress value=0.90 class="q-mt-md" size="30px" color="brown" track-color="orange">-->
<!--              <div class="absolute-full flex flex-center">-->
<!--                <q-badge color="white" text-color="accent" label="Friday 90%" />-->
<!--              </div>-->
<!--            </q-linear-progress>-->
<!--          </q-card-section>-->
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
          data: [
            {
              name: 'Nairobi',
              calories: 159,
              fat: 15,
              carbs: 24,
              protein: 4.0,
              sodium: 87,
              calcium: '14%',
              iron: '1%'
            },
            {
              name: 'Muranga',
              calories: 237,
              fat: 25,
              carbs: 37,
              protein: 4.3,
              sodium: 129,
              calcium: '8%',
              iron: '1%'
            },
            {
              name: 'Makueni',
              calories: 262,
              fat: 16,
              carbs: 23,
              protein: 6.0,
              sodium: 337,
              calcium: '6%',
              iron: '7%'
            },
            {
              name: 'Kirinyaga',
              calories: 305,
              fat: 12,
              carbs: 67,
              protein: 4.3,
              sodium: 413,
              calcium: '3%',
              iron: '8%'
            },
            {
              name: 'Homa Bay',
              calories: 356,
              fat: 16,
              carbs: 49,
              protein: 3.9,
              sodium: 327,
              calcium: '7%',
              iron: '16%'
            },
            {
              name: 'Migori',
              calories: 375,
              fat: 10.0,
              carbs: 94,
              protein: 0.0,
              sodium: 50,
              calcium: '0%',
              iron: '0%'
            },
            {
              name: 'Kisii',
              calories: 392,
              fat: 22,
              carbs: 98,
              protein: 0,
              sodium: 38,
              calcium: '0%',
              iron: '2%'
            },
            {
              name: 'Kiambu',
              calories: 408,
              fat: 32,
              carbs: 87,
              protein: 6.5,
              sodium: 562,
              calcium: '0%',
              iron: '45%'
            },
            {
              name: 'Vihiga',
              calories: 452,
              fat: 25,
              carbs: 51,
              protein: 4.9,
              sodium: 326,
              calcium: '2%',
              iron: '22%'
            }
          ]
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
