<script setup lang="ts">

import ProfileCard from "@/components/ProfileCard.vue";
import ProductsGrid from "@/components/ProductsGrid.vue";
import AddProductCard from "@/components/AddProductCard.vue";
</script>

<template>
  <div class="page profile-page">
    <div class="profile-side">
      <ProfileCard/>
    </div>
    <div class="products-side">
      <ProductsGrid>
        <template #addCard>
          <add-product-card />
        </template>
      </ProductsGrid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 104px;
}
</style>
