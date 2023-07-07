<script setup lang="ts">

import ProductCard from "@/components/ProductCard.vue";

</script>

<template>
  <div class="grid-container">
    <div class="products-grid">
      <slot name="addCard"/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  container-type: inline-size;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products-grid {
  width: min-content;
  grid-gap: 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
}
@container(width > 840px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@container(width > 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
