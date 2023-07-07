<script setup lang="ts">
import UiButton from "@/components/uikit/UiButton.vue";
interface Props {
  title: string;
  text: string;
  imageName: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="service-block">
    <div class="service-content">
      <h4 class="service-title">{{ props.title }}</h4>
      <p class="service-text">{{props.text}}</p>
      <UiButton>К сервису</UiButton>
    </div>
    <div class="service-image">
      <img :src="`/images/services/${props.imageName}-service.png`" :alt="props.imageName" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-block {
  padding: 32px;
  background: $secondBrandColor;
  min-height: 204px;
  min-width: 1100px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
}
.service-content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 498px;
}
.service-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
}
.service-text {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 32px;
}
.service-image {
  position: absolute;
  right: 100px;
  top: 0;
  bottom: 0;
  & img {
    width: auto;
    height: 100%;
  }
}
</style>
