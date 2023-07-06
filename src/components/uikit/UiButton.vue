<script setup lang="ts">
const emit = defineEmits(['click']);

function onClick(event) {
  emit('click', event);
}
</script>

<template>
  <button @click="onClick">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    font-size: 20px;
    background: #fff;
    color: white;
    border-radius: 50px;
    border: none;
    background: $brandColor;
    font-size: 20px;
    padding: 12px 74px;
  }
</style>
