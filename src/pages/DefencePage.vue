<script setup lang="ts">

import Defense from "@/components/Defense.vue";
import ConnectedDevises from "@/components/ConnectedDevises.vue";
</script>

<template>
  <div class="page defence-page">
    <connected-devises/>
    <Defense/>
  </div>
</template>

<style scoped>
.defence-page {
  padding: 0 104px;
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
