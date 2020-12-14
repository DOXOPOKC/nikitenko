<template>
  <div id="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "",
  mounted() {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);

    /* Add data */
    let data = [
      {
        direction: "N",
        value: 8,
      },
      {
        direction: "NE",
        value: 9,
      },
      {
        direction: "E",
        value: 4.5,
      },
      {
        direction: "SE",
        value: 3.5,
      },
      {
        direction: "S",
        value: 9.2,
      },
      {
        direction: "SW",
        value: 8.4,
      },
      {
        direction: "W",
        value: 11.1,
      },
      {
        direction: "NW",
        value: 10,
      },
    ];

    chart.data = data;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "direction";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let range = categoryAxis.axisRanges.create();
    range.category = "N";
    range.endCategory = "NE";
    range.axisFill.fill = am4core.color("#ebcab5");
    range.axisFill.fillOpacity = 0.3;
    range.locations.endCategory = 0;

    let range2 = categoryAxis.axisRanges.create();
    range2.category = "NE";
    range2.endCategory = "E";
    range2.axisFill.fill = am4core.color("#7d4164");
    range2.axisFill.fillOpacity = 0.3;
    range2.locations.endCategory = 0;

    let range3 = categoryAxis.axisRanges.create();
    range3.category = "E";
    range3.endCategory = "SE";
    range3.axisFill.fill = am4core.color("#f3e04d");
    range3.axisFill.fillOpacity = 0.3;
    range3.locations.endCategory = 0;

    let range4 = categoryAxis.axisRanges.create();
    range4.category = "SE";
    range4.endCategory = "S";
    range4.axisFill.fill = am4core.color("#8afdca");
    range4.axisFill.fillOpacity = 0.3;
    range4.locations.endCategory = 0;

    let range5 = categoryAxis.axisRanges.create();
    range5.category = "S";
    range5.endCategory = "SW";
    range5.axisFill.fill = am4core.color("#c7b6da");
    range5.axisFill.fillOpacity = 0.3;
    range5.locations.endCategory = 0;

    let range6 = categoryAxis.axisRanges.create();
    range6.category = "SW";
    range6.endCategory = "W";
    range6.axisFill.fill = am4core.color("#bb07d1");
    range6.axisFill.fillOpacity = 0.3;
    range6.locations.endCategory = 0;

    let range7 = categoryAxis.axisRanges.create();
    range7.category = "W";
    range7.endCategory = "NW";
    range7.axisFill.fill = am4core.color("#0a58ad");
    range7.axisFill.fillOpacity = 0.3;
    range7.locations.endCategory = 0;

    // let range8 = categoryAxis.axisRanges.create();
    // range8.category = "W";
    // range8.endCategory = "N";
    // range8.axisFill.fill = am4core.color("#000000");
    // range8.axisFill.fillOpacity = 0.3;
    // range8.locations.endCategory = 0;

    let series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "direction";
    series.name = "Wind direction";
    series.strokeWidth = 3;
    series.fillOpacity = 0.2;

  },
};
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 300px;
}
</style>