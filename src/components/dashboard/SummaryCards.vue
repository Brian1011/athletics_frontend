<template>
  <div>
    <div class="row q-px-lg q-py-lg">
      <div class="col-4">
        <q-card class="my-card text-white q-mr-sm summary_card_success">
          <q-card-section>
            <div class="text-h6">Users</div>
            <q-separator dark/>
            <br>

            <div class="row">
              <div class="col-6">
                <div class="text-h2">900</div>
                <div class="text-subtitle2">Members Online</div>
              </div>
              <div class="col-6">
                <div class="text-h5"><q-icon name="arrow_upward" size="md" class="text-green"></q-icon>10.58% </div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card text-white q-mr-sm summary_card_success">
          <q-card-section>
            <div class="text-h6">Sales</div>
            <q-separator dark/>
            <br>

            <div class="row">
              <div class="col-6">
                <div class="text-h2">402</div>
                <div class="text-subtitle2">New Sales</div>
              </div>
              <div class="col-6">
                <div class="text-h5"><q-icon name="arrow_upward" size="md" class="text-green"></q-icon>12.38% </div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card text-white q-mr-sm summary_card_failure">
          <q-card-section>
            <div class="text-h6">Profits</div>
            <q-separator dark/>
            <br>

            <div class="row">
              <div class="col-6">
                <div class="text-h2">2000</div>
                <div class="text-subtitle2">Today's Profit (Ksh)</div>
              </div>
              <div class="col-6">
                <div class="text-h5"><q-icon name="arrow_downward" size="md" class="text-orange"></q-icon>12.38% </div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SummaryCards"
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
