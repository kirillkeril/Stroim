<script setup>
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo"/>
        </router-link>
      </div>
    </header>
    <slot/>
    <footer class="footer">
      <p>
        Нет логина жильца?
        <router-link to="/">Узнайте,</router-link>
        как его получить
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 50px;
  left: 104px;
}
.header {
  padding: 52px 104px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 50px;
}
.footer {
  min-height: 150px;
  color: $secondTextColor;

  & a {
    color: $brandColor;
  }
}
</style>
