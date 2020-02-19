<template>
  <div class="row ">
    <div class="col-12 q-px-lg q-py-lg">
      <br>
      <q-separator/>
      <div id="app">
        <div id="chart-container">
          <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataformat="dataFormat"
            :dataSource="dataSource"
          >
          </fusioncharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueFusionCharts from 'vue-fusioncharts';
  import FusionCharts from 'fusioncharts';
  import Column2D from 'fusioncharts/fusioncharts.charts';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

  Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

  // STEP 2: Prepare the data
  const chartData = [
    {
      label: "Kenya",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];

  // STEP 3: Configure your chart
  const dataSource = {
    chart: {
      caption: "January Sales 2020",
      subcaption: "Sales Per Country",
      xaxisname: "Country",
      yaxisname: "Boxes(B)",
      numbersuffix: "B",
      theme: "fusion",
      background: 'grey'
    },
    data: chartData
  };

  export default {
    name: "DashboardGraphs",
    //name: 'app',
    data() {
      return {
        "type": "column2d",
        "renderAt": "chart-container",
        "width": "100%",
        "height": "500",
        "dataFormat": "json",
        dataSource
      }
    }
  }
</script>
<style scoped>

</style>
