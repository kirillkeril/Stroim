<template>
  <div class="Connected-Devises">
    <div class="devises">
      <h2>Подключенные устройства</h2>
      <ui-button style="padding: 0; color: white; border: none;" transparent class="add-devises">
        <img src="@/assets/plus.svg" alt="plus"/>
      </ui-button>
    </div>
        <div class="devises-info">
          <span class="Devises">Какое-то устройство</span>
          <span class="status">Включено</span>
        </div>
    </div>
</template>

<script>
import UiButton from "@/components/uikit/UiButton.vue";

export default {
  components: {UiButton},
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.Connected-Devises{
  min-width: 690px ;
  min-height: 400px;
  background: $brandColor;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  border-radius: 15px;
}
.devises-info{
  display: flex;
  justify-content: space-between;
}
.status{
  color: #57FFF3;
}
h2{
  margin: 0;
}
.devises{
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  align-items: start;

}
.add-devises{

  width: 24px;
  height: 24px;
  border-radius: 12px;
}
.Devises {
  font-size: 24px;
}
</style>
