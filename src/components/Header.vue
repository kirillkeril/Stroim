<script setup lang="ts">

import UiButton from "@/components/uikit/UiButton.vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/store/authStore.ts";
import UiCheckbox from "@/components/uikit/UiCheckbox.vue";
import {ref} from "vue";
import DropDown from "@/components/uikit/DropDown.vue";
import {RouterNames} from "@/router";
const router = useRouter();
const authStore = useAuthStore();
async function toLogin() {
  await router.push({name: 'auth'});
}

const checked = ref(false);
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
      <router-link to="/news" v-if="authStore.isLoggedIn">Новости</router-link>
      <DropDown v-if="authStore.isLoggedIn">
        <template #title>Сервисы</template>
        <template #items>
          <router-link to="/market">Маркет</router-link>
          <router-link to="/defence">Защита</router-link>
          <router-link to="/messages">Сообщения</router-link>
        </template>
      </DropDown>
      <router-link to="/contacts" v-if="authStore.isLoggedIn">Контакты</router-link>
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
  & a {
    color: $mainTextColor;
    font-size: 20px;
  }
}
</style>
