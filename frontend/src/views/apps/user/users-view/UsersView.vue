<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col lg="6">
          <apex-heat-map-chart />
        </b-col>
        <b-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
        >
          <user-view-user-info-card :user-data="userData" />
        </b-col>
      </b-row>

      <b-row >
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-meetup />
        </b-col>
        <b-col lg="8">
          <card-advance-timeline />
        </b-col>
      </b-row>

      <invoice-list />
    </template>

  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import userStoreModule from '../userStoreModule'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'
import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'
import CardAdvanceTimeline from "@/views/card/card-advance/CardAdvanceTimeline";
import CardAdvanceMeetup from "@/views/card/card-advance/CardAdvanceMeetup";
import CardAnalyticAvgSessions from "@/views/card/card-analytic/CardAnalyticAvgSessions";
import ApexHeatMapChart from "@/views/charts-and-maps/charts/apex-chart/ApexHeatMapChart";

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    UserViewUserInfoCard,
    UserViewUserPlanCard,
    UserViewUserTimelineCard,
    UserViewUserPermissionsCard,
    CardAdvanceTimeline,
    CardAdvanceMeetup,
    CardAnalyticAvgSessions,
    ApexHeatMapChart

  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
