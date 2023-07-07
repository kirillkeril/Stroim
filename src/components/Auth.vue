<script lang="ts" setup>
import {LoginResponse} from "@/services/http/types.ts";
import UiInput from "@/components/uikit/UiInput.vue";
import UiButton from "@/components/uikit/UiButton.vue";
import AuthService from "@/services/http/authService.ts";
import {useAuthStore} from "@/store/authStore.ts";
import {useRouter} from "vue-router";
import {reactive} from "vue";
import {UserDto} from "@/dtos/Auth.ts";

const authStore = useAuthStore();
const router = useRouter();
const user: UserDto = reactive({
  login: '',
  password: '',
});
async function login() {
  const data: LoginResponse | undefined = await AuthService.login(user);
  if (data) {
    authStore.login(data.data.user_fullname, data.data.user);
  }
  await router.push('/');
}
</script>

<template>
  <div class="auth-container">
    <h1>Авторизация</h1>
    <form class="auth-form" @submit.prevent="() => login()">
      <UiInput class="auth-login" placeholder="login" type="text" v-model="user.login"/>
      <UiInput class="auth-password"  placeholder="password" type="password" v-model="user.password"/>
      <UiButton class ="auth-button">Войти</UiButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.auth-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-form {
  width: 120%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    width: 100%;
    margin-bottom: 24px;
  }
}
.auth-button {
  padding: 12px 79px;
}
</style>
