<template>
  <b-card class="pb-1">

    <b-row style="flex-direction: column">

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column mb-2"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText(userData.fullName)"
            :variant="`light-${resolveUserRoleVariant(userData.role)}`"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1" style="justify-content: center">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.fullName }}
              </h4>
              <span class="card-text">{{ userData.email }}</span>
            </div>
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2" style="justify-content: flex-start;">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <feather-icon
                icon="CheckIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                143
              </h5>
              <small>Заданий выполнено</small>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                12
              </h5>
              <small>Проектов завершено</small>
            </div>
          </div>
        </div>
      </b-col>
      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Логин</span>
            </th>
            <td class="pb-50">
              {{ userData.username }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Статус</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.status }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Роль</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.role }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Страна</span>
            </th>
            <td class="pb-50">
              {{ userData.country }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Номер</span>
            </th>
            <td>
              {{ userData.contact }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                  icon="FlagIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Направление</span>
            </th>
            <td class="pb-50">
              Frontend
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      resolveUserRoleVariant,
    }
  },
}
</script>

<style>

</style>
