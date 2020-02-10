<template>
    <div>
      <summary-cards></summary-cards>

      <br>
      <dashboard-graphs></dashboard-graphs>
      <br>
      <sales-table></sales-table>
    </div>
</template>

<script>
    import SummaryCards from "./SummaryCards";
    import DashboardGraphs from "./DashboardGraphs";
    import SalesTable from "./SalesTable";
    export default {
        name: "dashboard",
      components: {SalesTable, DashboardGraphs, SummaryCards}
    }
</script>

<style scoped>

</style>
