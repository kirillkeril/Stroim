<script setup lang="ts">

import ProductsGrid from "@/components/ProductsGrid.vue";
</script>

<template>
  <div class="page products-page">
    <ProductsGrid/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  & *:first-child {
    margin: 0 auto;
  }
}
</style>
