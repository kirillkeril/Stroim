<script setup lang="ts">

import UiButton from "@/components/uikit/UiButton.vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/store/authStore.ts";
import DropDown from "@/components/uikit/DropDown.vue";
import {RouterNames} from "@/router";
const router = useRouter();
const authStore = useAuthStore();
async function toLogin() {
  await router.push({name: 'auth'});
}

</script>

<template>
  <header class="header-container">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo"/>
      </router-link>
    </div>
    <div class="routing">
      <router-link class="menu-item" to="/">Главная</router-link>
      <router-link class="menu-item" to="/news" v-if="authStore.isLoggedIn">Новости</router-link>
      <DropDown class="menu-item" v-if="authStore.isLoggedIn">
        <template #title>Сервисы</template>
        <template #items>
          <router-link class="menu-item" to="/market">Маркет</router-link>
          <router-link class="menu-item" to="/defence">Защита</router-link>
          <router-link class="menu-item" to="/messages">Сообщения</router-link>
        </template>
      </DropDown>
      <router-link class="menu-item" to="/contacts">Контакты</router-link>
    </div>
    <UiButton @click.prevent="() => toLogin()" v-if="!authStore.isLoggedIn">Войти</UiButton>
    <div v-else @click.prevent="router.push(RouterNames.PROFILE)">
      {{authStore.userFullName}}
    </div>
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
  & .menu-item {
    color: $mainTextColor;
    font-size: 20px;
  }
}
</style>
