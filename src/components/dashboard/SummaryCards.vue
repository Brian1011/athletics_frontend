<template>
  <div>
    <div class="row q-px-lg q-py-lg">
      <div class="col-xs-12 col-sm-4 q-pb-md" v-for="card in cards">
        <q-card v-if="card.status === 'inc'" class="my-card text-white q-mr-sm summary_card_success">
          <q-card-section>
            <div class="text-h6">{{card.title}}</div>
            <q-separator dark/>
            <br>

            <div class="row">
              <div class="col-xs-12  col-sm-6">
                <div class="text-h2">{{card.numbers}}</div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <div class="text-h5">
                  <q-icon name="arrow_upward" size="md" class="text-green" v-if="card.status === 'inc'"></q-icon>
                  {{card.percent}} %
                </div>
              </div>
            </div>

            <div class="row">
              <div class="text-subtitle2">{{card.subtitle}}</div>
            </div>

          </q-card-section>
        </q-card>
        <q-card v-else class="my-card text-white q-mr-sm summary_card_failure">
          <q-card-section>
            <div class="text-h6">{{card.title}}</div>
            <q-separator dark/>
            <br>

            <div class="row">
              <div class="col-xs-12  col-sm-6">
                <div class="text-h2">{{card.numbers}}</div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <div class="text-h5">
                  <q-icon name="arrow_downward" size="md" class="text-red" v-if="card.status === 'dec'"></q-icon>
                  {{card.percent}} %
                </div>
              </div>
            </div>

            <div class="row">
              <div class="text-subtitle2">{{card.subtitle}}</div>
            </div>

          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SummaryCards",
      data(){
          return{
            cards:[
              {title:'Users', numbers:'900', status:'inc', percent:'15.32', subtitle:'Members Online'},
              {title:'Sales', numbers:'402', status:'inc', percent:'7.2', subtitle:'New Sales'},
              {title:'Profits', numbers:'2000', status:'dec', percent:'12.38', subtitle:"Today's Profit (Ksh)"}
            ]
          }
      }
    }
</script>

<style scoped>
  .summary_card_success{
    background: linear-gradient(to bottom right, #9C27B0 0%, #009900 100%);
  }
  .summary_card_failure{
    background: linear-gradient(to bottom right, #9C27B0 0%, red 100%);
  }
</style>
