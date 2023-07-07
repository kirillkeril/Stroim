<script setup lang="ts">
import NewsCard from "@/components/NewsCard.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";

</script>

<template>
  <div class="page home-page">
    <main class="home-page-main">
      <div class="home-page-slogan">
        <h1 class="main-title">СЕРВИСЫ ДЛЯ ЖИЛЬЦОВ</h1>
        <h2 class="home-page-title">Мы поддерживаем наших пользователей</h2>
        <p class="home-page-text">Пользуйтесь сервисами, изучайте последние новости, общайтесь в чатах</p>
      </div>
      <div class="services">
        <ServiceComponent title="Маркет" text="Магазин товаров и услуг, которые предоставляют жильцы вашего жилого комплекса. Услуги няни, б/у холодильник и т.п." imageName="market"/>
        <ServiceComponent title="Защита от опасных ситуаций" text="Настройте датчики так, чтобы при возникновении опасной ситуации информация о ней отправлялась в соответствующие органы" imageName="defence"/>
        <ServiceComponent title="Чаты домов и жилых комплексов" text="Настройте датчики так, чтобы при возникновении опасной ситуации информация о ней отправлялась в соответствующие органы" imageName="messages"/>
      </div>
    </main>
    <aside class="news-sidebar">
      <h2 class="news-title">Новости вашего ЖК</h2>
      <div class="news-list">
        <NewsCard title="Отключение горячей воды" text="С 1 по 6 августа этого года" imageName="hot-water"/>
        <NewsCard title="Газоснабжение" text="Осмотр газового оборудования - 2 августа в 16:00" imageName="gaz"/>
        <NewsCard title="Отключение горячей воды" text="С 1 по 6 августа этого года" imageName="hot-water"/>
        <NewsCard title="Газоснабжение" text="Осмотр газового оборудования - 2 августа в 16:00" imageName="gaz"/>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.main-title {
  letter-spacing: 2.4px;
  font-size: 24px;
  color: $secondTextColor;
}
.page {
  margin-top: 76px;
  padding: 0 104px;
  container-type: inline-size;
  display: grid;
  grid-template-columns: auto 398px;
}
.home-page-slogan {
  margin-bottom: 36px;
  & > *:not(:last-child) {
    margin-bottom: 36px;
  }
}
.home-page-title {
  font-weight: 700;
  font-size: 70px;
  max-width: 876px;
}
.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
}
.news-title {
  font-weight: 600;
  margin-bottom: 32px;
}
.news-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.news-list {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
