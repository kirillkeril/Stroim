<script setup lang="ts">
interface Props {
  type: "column" | "line";
  name: string;
  modelValue?: string; 
  values: Array<{
    id: number;
    value: string;
    label: string;
  }>;
}
import {computed, ref} from "vue";
let {name, values, modelValue, type} = withDefaults(defineProps<Props>(), {type: "line"});
const model = ref('');
const emit = defineEmits(['update:modelValue']);

function onChange(event) {
  console.log(model.value, event.target.value, values)
  emit('update:modelValue', event.target.value);
}
const isChecked = computed(() => {
  return modelValue === model.value;
}) 
</script>

<template>
  <div class="radio-group" :id="name" :class="{line: type==='line', column: type==='column'}">
    <label v-for="value in values" :for="`ui-radio-${value.id}`" :key="value.id">
      <input :id="`ui-radio-${value.id}`" :checked="isChecked" type="radio" v-model="model" :value="value.value" @change="onChange" :name="name"/>
      <span class="mark">
        <span class="checked"></span>
      </span>
      <span>{{value.label}}</span>
    </label>
  </div>

</template>

<style lang="scss" scoped>
.radio-group.line {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.radio-group.column {
  display: flex;
  flex-direction: column;
}
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
    border: 1px solid $brandColor;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input:checked ~ .mark{

    & .checked {
      background: $brandColor;
      display: block;
      width: 70%;
      height: 70%;

      border-radius: 50%;
    }
  }
}
</style>
