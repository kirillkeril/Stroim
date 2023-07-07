<script setup lang="ts">
import {Ref, ref} from "vue";

const active: Ref<boolean> = ref(false);
</script>

<template>
  <div class="dropdown" :class="{active: active}" @click="active = !active">
    <span>
      <slot name="title"/>
    </span>
    <div class="dropdown-items">
      <slot name="items"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
}
.dropdown.active .dropdown-items{
  display: flex;
  flex-direction: column;
  width: 200%;
  text-align: center;

  & > a:not(:last-child) {
    margin-bottom: 20px;
  }
}
.dropdown-items {
  border-radius: 10px;
  padding: 30px 0;
  box-shadow: 0 0 30px rgba(0,0,0,0.035);
  background: white;
  z-index: 10;
  position: absolute;
  top: 30px;
  display: none;
}
</style>
