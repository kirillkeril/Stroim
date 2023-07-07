<script setup lang="ts">
const emit = defineEmits(['click']);
const props = withDefaults(defineProps<{
  transparent: boolean
}>(), {transparent: false});
function onClick(event) {
  emit('click', event);
}
</script>

<template>
  <button @click="onClick" :class="{transparent: props.transparent}">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    color: white;
    border-radius: 50px;
    border: none;
    background: $brandColor;
    font-size: 20px;
    padding: 12px 74px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  button.transparent {
    color: $brandColor;
    border: 1px solid $brandColor;
    background: transparent;
  }
</style>
