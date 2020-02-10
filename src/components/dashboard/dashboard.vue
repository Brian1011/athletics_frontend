<template>
    <div>
      <summary-cards></summary-cards>
      <br>
      <q-separator/>
      <br>
      <dashboard-graphs></dashboard-graphs>
      <br>
    </div>
</template>

<script>
    import SummaryCards from "./SummaryCards";
    import DashboardGraphs from "./DashboardGraphs";
    export default {
        name: "dashboard",
      components: {DashboardGraphs, SummaryCards}
    }
</script>

<style scoped>

</style>
