<template>
    <div class="q-px-lg q-py-lg">
      <basic-table></basic-table>
      <data-table></data-table>
      <dark-table></dark-table>
    </div>
</template>

<script>
    import BasicTable from "./basicTable";
    import DataTable from "./dataTable";
    import DarkTable from "./darkTable";
    export default {
        name: "tableComponent",
      components: {DarkTable, DataTable, BasicTable}
    }
</script>

<style scoped>

</style>
