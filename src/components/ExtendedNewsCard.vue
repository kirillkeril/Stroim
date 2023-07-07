<script lang="ts" setup>
interface Props {
  title: string;
  text: string;
  imageName: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="Extended-News-Card">
    <div class="Extended-News-Content">
      <h2>{{props.title}}</h2>
      <p>{{props.text}}</p>
    </div>
    <div class="Extended-News-photo">
      <img :src="`/images/news/${imageName}.png`" alt="gaz">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Extended-News-Card{
  background: $secondBrandColor;
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 447px;
  overflow: hidden;
  padding: 32px;
  border-radius: 15px;
}

.Extended-News-photo{
  width: 470px;
  height: 470px;
  background: black;
  border-radius: 50%;
  position: absolute ;
  bottom: -67px;
  right: -79px;
  overflow: hidden;
  & img {
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}
.Extended-News-Content{
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h2{
  font-size: 16px;
}
p{
  font-size: 24px;
}
</style>
