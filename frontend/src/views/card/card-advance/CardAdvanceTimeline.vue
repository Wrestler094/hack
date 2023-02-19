<template>
  <b-card no-body>
    <b-card-header>
      <div class="d-flex align-items-center">
        <feather-icon size="24" class="mr-1" icon="ListIcon" />
        <b-card-title class="ml-25"> Активность пользователя </b-card-title>
      </div>
      <feather-icon icon="MoreVerticalIcon" size="18" />
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item variant="primary">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h6>Выполнено тестовое задание</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1"
              >12 минут назад</small
            >
          </div>
          <p>Пользователь выполнил тестовое задание для RM Onboarding.</p>
          <b-media no-body>
            <b-media-aside class="mr-1">
              <b-img
                :src="require('@/assets/images/icons/json.png')"
                height="23"
                alt="data.json"
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="media-body mb-0">test_front.vue</h6>
            </b-media-body>
          </b-media>
        </app-timeline-item>

        <app-timeline-item variant="warning">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h6>Пройдено собеседование</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1"
              >45 минут назад</small
            >
          </div>
          <p>Пройдено собеседование для участия в стажировке</p>
          <b-media no-body>
            <b-media-aside class="mr-50">
              <b-avatar
                :src="require('@/assets/images/portrait/small/avatar-s-9.jpg')"
                size="38"
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="mb-0">Искандер Сафин (Интервьюер)</h6>
              <p class="mb-0">Студент школы 21</p>
            </b-media-body>
          </b-media>
        </app-timeline-item>

        <app-timeline-item variant="info">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h6>Выполнен проект</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">
              2 дня назад
            </small>
          </div>
          <p>Выполнен командный проект интернет магазина</p>
          <b-avatar-group size="35px">
            <b-avatar
              v-for="avatar in avatars"
              :key="avatar.userImg"
              v-b-tooltip.hover.top="'Tooltip!'"
              :src="avatar.userImg"
              class="pull-up"
            />
          </b-avatar-group>
        </app-timeline-item>

        <app-timeline-item
          title="Прослушана лекция"
          subtitle="Прослушана лекция <<Observability>>"
          time="5 дней назад"
          variant="danger"
        />

        <app-timeline-item
          title="Прослушана лекция"
          subtitle="Прослушана лекция <<Node.js>>"
          time="8 дней назад"
          variant="danger"
        />

        <app-timeline-item
          title="Прослушана лекция"
          subtitle="Прослушана лекция <<Карьерный путь фронтенд разработчика>>"
          time="10 дней назад"
          variant="info"
        />
      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BImg,
  BMedia,
  BMediaBody,
  BMediaAside,
  BAvatar,
  BAvatarGroup,
  VBTooltip,
} from "bootstrap-vue";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
    BMedia,
    BAvatar,
    BMediaBody,
    BMediaAside,
    BAvatarGroup,
  },
  directives: {
    "b-tooltip": VBTooltip,
  },
  data() {
    return {
      avatars: [
        {
          userImg: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
          name: "Billy Hopkins",
        },
        {
          userImg: require("@/assets/images/portrait/small/avatar-s-6.jpg"),
          name: "Amy Carson",
        },
        {
          userImg: require("@/assets/images/portrait/small/avatar-s-8.jpg"),
          name: "Brandon Miles",
        },
        {
          userImg: require("@/assets/images/portrait/small/avatar-s-7.jpg"),
          name: "Daisy Weber",
        },
        {
          userImg: require("@/assets/images/portrait/small/avatar-s-20.jpg"),
          name: "Jenny Looper",
        },
      ],
    };
  },
};
</script>
