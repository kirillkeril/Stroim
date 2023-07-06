<script setup lang="ts">
interface Props {
  isModalOpened: boolean;
}

const {isModalOpened} = defineProps<Props>();
const emit = defineEmits<{
  setActive: [active: boolean];
}>();
</script>

<template>
  <Teleport to="body">
    <div class="modal-container" :class="{isModalOpened: isModalOpened}">
      <div class="modal-content">
        <slot/>
      </div>
      <div class="modal-backdrop" @click.stop="emit('setActive', false)"></div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: none;
  &.isModalOpened {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.modal-content {
  z-index: 10001;
  min-width: 200px;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 3px solid black;
  border-radius: 63px;
  background: white;
}
.modal-backdrop {
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
