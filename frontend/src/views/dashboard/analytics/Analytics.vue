<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col md="4" sm="6">
        <statistic-card-with-line-chart
          icon="MonitorIcon"
          statistic="7890"
          statistic-title="Посещаемость"
          :chart-data="siteTraffic.series"
        />
      </b-col>
      <b-col md="4" sm="6">
        <statistic-card-with-line-chart
          icon="UserCheckIcon"
          color="success"
          statistic="6598"
          statistic-title="Количество студентов"
          :chart-data="activeUsers.series"
        />
      </b-col>
      <b-col lg="4" sm="6">
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="UsersIcon"
          :statistic="
            kFormatter(data.subscribersGained.analyticsData.subscribers)
          "
          statistic-title="Количество cтажеров"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4" md="6">
        <card-advance-employee-task />
      </b-col>
      <b-col md="8">
        <chartjs-bar-chart />
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="4">
        <card-analytic-product-orders />
      </b-col>
      <b-col lg="8">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="ml-25">Активность на платформе</b-card-title>
          </b-card-header>

          <b-card-body>
            <app-timeline>
              <!-- 12 INVOICES HAVE BEEN PAID -->
              <app-timeline-item icon="DollarSignIcon" variant="primary">
                <div
                  class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                >
                  <h6>Было прислано 12 тестовых заданий</h6>
                  <small class="text-muted">12 мин назад</small>
                </div>
                <p>12 тестовых заданий ожидают проверки.</p>
                <p>
                  <b-img
                    :src="require('@/assets/images/icons/pdf.png')"
                    height="auto"
                    width="20"
                    class="mr-1"
                  />
                  <span class="align-bottom">frontend_test.pdf</span>
                </p>
              </app-timeline-item>

              <app-timeline-item variant="secondary" icon="UserIcon">
                <div
                  class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                >
                  <h6>Собеседование</h6>
                  <small class="text-muted">45 минут назад</small>
                </div>
                <p>Собеседование со стажером в 10:00.</p>
                <b-media>
                  <template #aside>
                    <b-avatar
                      :src="require('@/assets/images/avatars/12-small.png')"
                    />
                  </template>
                  <h6>Иван Иванов</h6>
                  <p>Frontend developer</p>
                </b-media>
              </app-timeline-item>

              <!-- FINANCIAL REPORT -->
              <app-timeline-item variant="success" icon="FileTextIcon">
                <div
                  class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                >
                  <h6>Отчет по стажерам</h6>
                  <small class="text-muted">2 часа назад</small>
                </div>
                <p>Отчет по стажерам был сформирован 2 часа назад.</p>
                <b-button
                  v-b-toggle.report-list-with-icon
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  size="sm"
                  variant="outline-primary"
                >
                  Перейти к отчету
                </b-button>
              </app-timeline-item>

              <!-- INTERVIEW SCHEDULE -->
              <app-timeline-item variant="warning" icon="MapPinIcon">
                <div
                  class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                >
                  <h6>Интервью</h6>
                  <small class="text-muted">03:00</small>
                </div>
                <p>Интервью со студентом на стажировку.</p>
                <div
                  class="d-flex flex-sm-row flex-column justify-content-between align-items-start"
                >
                  <b-media>
                    <template #aside>
                      <b-avatar
                        :src="require('@/assets/images/avatars/2-small.png')"
                      />
                    </template>
                    <h6>Искандер Сафин</h6>
                    <span class="text-muted">Студент Школы 21</span>
                  </b-media>
                  <div>
                    <feather-icon icon="MessageSquareIcon" class="mr-1" />
                    <feather-icon icon="PhoneCallIcon" />
                  </div>
                </div>
              </app-timeline-item>

              <!-- ONLINE STORE -->
              <app-timeline-item variant="danger" icon="ShoppingBagIcon">
                <div
                  class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                >
                  <h6>Проект онлайн магазина завершен</h6>
                  <small class="text-muted">05:00</small>
                </div>
                <p>
                  Студенты курса Фуллстэк разработки завершили проект онлайн
                  магазина.
                </p>
                <div
                  class="d-flex flex-sm-row flex-column justify-content-between align-items-start"
                >
                  <!-- 1st Col -->
                  <div class="mb-1 mb-sm-0">
                    <span class="text-muted mb-50">Разработчики</span>

                    <div>
                      <b-avatar
                        text="AЗ"
                        class="mr-50"
                        size="24"
                        variant="light-primary"
                      />
                      <b-avatar
                        text="ИС"
                        class="mr-50"
                        size="24"
                        variant="light-success"
                      />
                      <b-avatar
                        text="МК"
                        class="mr-50"
                        size="24"
                        variant="light-danger"
                      />
                    </div>
                  </div>
                  <!-- 2nd Col -->
                  <div class="mb-1 mb-sm-0">
                    <span class="text-muted mb-50 d-block">Дедлайн</span>
                    <span>19-12-2022</span>
                  </div>
                  <!-- 3rd Col -->
                  <div>
                    <span class="text-muted mb-50 d-block">
                      Финальная оценка</span
                    >
                    <span>10/10</span>
                  </div>
                </div>
              </app-timeline-item>

              <!-- DESIGNING UI -->
              <app-timeline-item variant="info" icon="GridIcon">
                <div
                  class="d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50"
                >
                  <h6>Проект верстки завершен</h6>
                  <b-badge pill variant="light-primary"> Frontend </b-badge>
                </div>
                <p>
                  Студенты курса Фуллстэк разработки завершили проект верстки
                  проекта.
                </p>
                <div>
                  <span class="text-muted"> Участники </span>
                  <b-avatar-group size="32px" class="mt-50">
                    <b-avatar
                      v-b-tooltip.hover
                      class="pull-up"
                      title="Jenny Looper"
                      :src="
                        require('@/assets/images/portrait/small/avatar-s-5.jpg')
                      "
                    />
                    <b-avatar
                      v-b-tooltip.hover
                      class="pull-up"
                      title="Jennifer Lopez"
                      :src="
                        require('@/assets/images/portrait/small/avatar-s-6.jpg')
                      "
                    />
                    <b-avatar
                      v-b-tooltip.hover
                      class="pull-up"
                      title="Arya Stark"
                      :src="
                        require('@/assets/images/portrait/small/avatar-s-7.jpg')
                      "
                    />
                  </b-avatar-group>
                </div>
              </app-timeline-item>
            </app-timeline>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue";
import { kFormatter } from "@core/utils/filter";
import AnalyticsCongratulation from "./AnalyticsCongratulation.vue";
import AnalyticsAvgSessions from "./AnalyticsAvgSessions.vue";
import AnalyticsSupportTracker from "./AnalyticsSupportTracker.vue";
import AnalyticsTimeline from "./AnalyticsTimeline.vue";
import AnalyticsSalesRadarChart from "./AnalyticsSalesRadarChart.vue";
import AnalyticsAppDesign from "./AnalyticsAppDesign.vue";
import CardAdvanceEmployeeTask from "@/views/card/card-advance/CardAdvanceEmployeeTask";
import ChartjsBarChart from "@/views/charts-and-maps/charts/chartjs/ChartjsBarChart";
import StatisticCardWithLineChart from "@core/components/statistics-cards/StatisticCardWithLineChart";

import {
  BCard,
  BImg,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BAvatar,
  BMedia,
  BButton,
  BCollapse,
  VBToggle,
  BListGroup,
  BListGroupItem,
  BAvatarGroup,
  BBadge,
  VBTooltip,
} from "bootstrap-vue";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
import Ripple from "vue-ripple-directive";
import CardAnalyticProductOrders from "@/views/card/card-analytic/CardAnalyticProductOrders";

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
    CardAdvanceEmployeeTask,
    ChartjsBarChart,
    StatisticCardWithLineChart,
    CardAnalyticProductOrders,

    AppTimeline,
    AppTimelineItem,
    BCard,
    BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BMedia,
    BAvatar,
    BButton,
    BCollapse,
    BListGroup,
    BListGroupItem,
    BAvatarGroup,
    BBadge,
  },
  directives: { "b-toggle": VBToggle, "b-tooltip": VBTooltip, Ripple },

  data() {
    return {
      data: {},
      siteTraffic: {},
      activeUsers: {},
    };
  },
  created() {
    // data
    this.$http.get("/analytics/data").then((response) => {
      this.data = response.data;
    });

    // Site Traffic gained
    this.$http.get("/card/card-statistics/site-traffic").then((response) => {
      this.siteTraffic = response.data;
    });

    // Active Users
    this.$http.get("/card/card-statistics/active-users").then((response) => {
      this.activeUsers = response.data;
    });
  },
  methods: {
    kFormatter,
  },
};
</script>
