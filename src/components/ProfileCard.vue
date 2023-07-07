<script setup lang="ts">

import UiButton from "@/components/uikit/UiButton.vue";
import {useAuthStore} from "@/store/authStore.ts";

const authStore = useAuthStore();
</script>

<template>
  <div class="profile-container">
    <h2 class="profile-card-title">ИНФОРМАЦИЯ ОБ АККАУНТЕ</h2>
    <main class="profile-main">
      <h3 class="user-fullname">{{ authStore.userFullName }}</h3>
      <div class="userdata">
        <span class="userdata-key">
          Жилой комплекс:
          <span class="userdata-value">“{{ authStore.user.apartment[0].complex_title }}”</span>
        </span>
        <span class="userdata-key">
          Полный адрес:
          <span class="userdata-value">{{ authStore.user.apartment[0].custom_title }}</span>
        </span>
        <span class="userdata-key">
          Кол-во жильцов:
          <span class="userdata-value">4</span>
        </span>
        <span class="userdata-key">
          Email:
          <span class="userdata-value">{{ authStore.user.user_mail }}</span>
        </span>
        <span class="userdata-key">
          Телефон:
          <span class="userdata-value">{{ authStore.user.user_phone }}</span>
        </span>
      </div>
      <div class="user-settings">
        <ui-button>Восстановить пароль</ui-button>
        <ui-button transparent>Добавить жильца</ui-button>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.profile-card-title {
  font-family: Mulish, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: $secondTextColor;
}
.user-fullname {
  color: $mainTextColor;
  font-size: 32px;
  font-weight: 600;
}
.userdata-key {
  font-size: 16px;
  color: $secondTextColor;
}
.userdata, .user-settings {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
.user-settings button{
  width: 252px;
  padding-left: 0;
  padding-right: 0;
}
.userdata-value {
  font-size: 20px;
  color: $mainTextColor;
}
.profile-main {
  margin-top: 76px;
}
.userdata {
  margin-top: 32px;
  margin-bottom: 32px;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
