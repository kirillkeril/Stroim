<script setup lang="ts">
import {ref} from "vue";
const {id} = defineProps({
  id: {
    required: true,
    type: String
  }
})
const model = ref(false);
const emit = defineEmits(['update:modelValue']);

function onChange(event) {
  emit('update:modelValue', event.target.checked);
}
</script>

<template>
  <label :for="`ui-checkbox-${id}`">
    <input :id="`ui-checkbox-${id}`" type="checkbox" v-model="model" @change="onChange"/>
    <span class="mark"></span>
    <slot/>
  </label>
</template>

<style lang="scss" scoped>
label {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 1.5em;
  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
  }

  .mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1em;
    height: 1em;
    background: #fff;
    border: 1px dashed black;
    border-radius: 0.2em;
  }
  input:checked ~ .mark{
    background: black;
  }
}
</style>
