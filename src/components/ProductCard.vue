<script setup lang="ts">
import UiButton from "@/components/uikit/UiButton.vue";
import {Product} from "@/types/Products.js";

const {product} = defineProps<{product: Product}>();
</script>

<template>
  <div class="product-card-container">
    <header class="header">
      <div class="image">
      </div>
    </header>
    <main class="main">
      <h6 class="title">{{product.title}} <span style="font-size: 12px; color: #d6d6d6">{{product.type}}</span></h6>
      <div class="price">{{product.price}} р.</div>
      <p class="description">{{ product.description }}</p>
      <div class="user-data">
        <span class="user-data-key">Продавец: <span class="user-data-value">{{product.ownerName}}</span></span>
        <span class="user-data-key">Место: <span class="user-data-value">{{product.place}}</span></span>
      </div>
      <footer class="footer">
        <UiButton style="padding-left: 100px; padding-right: 100px;">Позвонить</UiButton>
        <UiButton transparent style="padding: 0; border: none">
          <img src="/images/message.svg" alt="message"/>
        </UiButton>
      </footer>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.product-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 398px;
  border: 1px solid $brandColor;
  padding: 24px;
  border-radius: 15px;
}
.product-card-container > *:not(:last-child) {
  margin-bottom: 10px;
}
.header{
  width: 100%;
}
.image{
  width: 100%;
  height: 247px;
  background: #d9d9d9;
  border-radius: 7px;

  user-select: none;
}
.image img {
  width: 100%;
  height: 100%;
}
.main{}
.main > *:not(:last-child) {
  margin-bottom: 10px;
}
.title{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 27px;
}
.price{
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 33px;
  user-select: none;
}
.description{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20pt;
}
.footer{
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
}
.user-data {
  display: flex;
  flex-direction: column;
}
.user-data-key {
  color: #7C7C7C;
}
.user-data-value {
  color: #1E1E1E;
}
</style>
