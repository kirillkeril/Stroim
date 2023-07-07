<script setup lang="ts">

import ProductsGrid from "@/components/ProductsGrid.vue";
import {useProductsStore} from "@/store/productsStore.ts";
const productsStore = useProductsStore();
</script>

<template>
  <div class="page products-page">
    <ProductsGrid :products="productsStore.products"/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 0;
  & *:first-child {
    margin: 0 auto;
  }
}
</style>
