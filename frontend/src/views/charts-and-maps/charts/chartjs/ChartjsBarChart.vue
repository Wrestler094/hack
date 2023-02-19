<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Активность на проектах</b-card-title>
      <!-- datepicker -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-bar-chart
        :height="400"
        :data="chartjsData.latestBarChart.data"
        :options="chartjsData.latestBarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardBody, BCardTitle } from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import ChartjsComponentBarChart from "./charts-components/ChartjsComponentBarChart.vue";
import chartjsData from "./chartjsData";

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    flatPickr,
    ChartjsComponentBarChart,
  },
  data() {
    return {
      chartjsData,
      rangePicker: ["2022-05-01", "2022-05-02"],
    };
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
