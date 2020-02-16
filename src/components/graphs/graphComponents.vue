<template>
  <div class="q-px-lg q-py-lg">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <apex-chart-trial></apex-chart-trial>
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
    export default {
        name: "graphComponents",
      components: {Spline, ApexChartTrial, PieChart}
    }
</script>

<style scoped>

</style>
