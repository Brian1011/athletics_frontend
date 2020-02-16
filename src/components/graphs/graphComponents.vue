<template>
  <div class="q-px-lg q-py-lg">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <apex-chart-trial></apex-chart-trial>
      </div>

      <div class="col-xs-12 col-md-6">
        <horizontal-bar-chart></horizontal-bar-chart>
      </div>
    </div>

    <br>
    <q-separator></q-separator>
    <br>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <line-chart></line-chart>
      </div>

      <div class="col-xs-12 col-md-6">
        <spline></spline>
      </div>
    </div>
  </div>
</template>

<script>
    import PieChart from "./pieChart";
    import ApexChartTrial from "./apexChartTrial";
    import Spline from "./spline";
    import LineChart from "./lineChart";
    import HorizontalBarChart from "./horizontalBarChart";
    export default {
        name: "graphComponents",
      components: {HorizontalBarChart, LineChart, Spline, ApexChartTrial, PieChart}
    }
</script>

<style scoped>

</style>
