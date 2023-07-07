<script lang="ts" setup>
interface Props {
  title: string;
  text: string;
  imageName: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="news-block">
    <div class="news-content">
      <span class="news-title">{{props.title}}</span>
      <span class="news-text">{{props.text}}</span>
    </div>
    <div class="news-image">
      <img :src="`/images/news/${imageName}.png`" :alt="imageName">
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-block{
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  width: 398px;
  height: 216px;
  color: white;
  padding: 24px;
}
.news-content {
  height: 100%;
  max-width: 60%;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}
.news-title {
  font-weight: 500;
  font-size: 16px;
}
.news-text {
  font-size: 24px;
}
.news-image {
  background: #000;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
