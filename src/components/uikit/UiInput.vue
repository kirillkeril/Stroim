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
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px ;
}
</style>
