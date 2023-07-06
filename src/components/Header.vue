<script setup lang="ts">

import UiButton from "@/components/uikit/UiButton.vue";
</script>

<template>
  <header class="header-container">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo"/>
      </router-link>
    </div>
    <div class="routing">
      <router-link to="/">Главная</router-link>
      <router-link to="/news">Новости</router-link>
      <div>Сервисы ></div> <!-- TODO выпадашка -->
      <router-link to="/contacts">Контакты</router-link>
    </div>
    <UiButton>Войти</UiButton>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 46px 104px;
}
.routing {
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 64px;
  }
  & > * {
    color: $mainTextColor;
    font-size: 20px;
  }
}
</style>
