<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const layout = computed(() => route.meta.layout || 'DefaultLayout');
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style lang="scss" scoped>

</style>