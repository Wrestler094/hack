<template>
  <b-card no-body>
    <b-card-body class="d-flex justify-content-between align-items-center pb-0">
      <div class="truncate">
        <h2 class="mb-25 font-weight-bolder">
          {{ statistic }}
        </h2>
        <span>{{ statisticTitle }}</span>
      </div>
      <b-avatar :variant="`light-${color}`" size="45">
        <feather-icon size="21" :icon="icon" />
      </b-avatar>
    </b-card-body>

    <vue-apex-charts
      type="area"
      height="100"
      width="100%"
      :options="chartOptionsComputed"
      :series="chartData"
    />
  </b-card>
</template>

<script>
import { BCard, BCardBody, BAvatar } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";
import { areaChartOptions } from "./chartOptions";

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardBody,
    BAvatar,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    statistic: {
      type: [Number, String],
      required: true,
    },
    statisticTitle: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    chartOptions: {
      type: Object,
      default: null,
    },
  },
  computed: {
    chartOptionsComputed() {
      if (this.chartOptions === null) {
        const options = JSON.parse(JSON.stringify(areaChartOptions));
        options.theme.monochrome.color = $themeColors[this.color];
        return options;
      }
      return this.chartOptions;
    },
  },
};
</script>
