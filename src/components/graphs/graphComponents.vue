<template>
  <div class="q-px-lg q-py-lg">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <apex-chart-trial></apex-chart-trial>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <pie-chart></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
    import PieChart from "./pieChart";
    import ApexChartTrial from "./apexChartTrial";
    export default {
        name: "graphComponents",
      components: {ApexChartTrial, PieChart}
    }
</script>

<style scoped>

</style>
