<script lang="ts" setup>
import {ref} from "vue";

const value = ref('');
const emit = defineEmits(['update:value']);

function onChange(event) {
  emit('update:value', event);
}
</script>

<template>
  <input @input="onChange" v-model="value"/>
</template>

<style lang="scss" scoped>
input {
  padding: 12px 24px;
  font-size: 16px;
  border: 1px solid $brandColor;
  border-radius: 50px;
}
</style>
