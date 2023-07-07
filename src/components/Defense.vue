<script lang="ts" setup>
import UiButton from "@/components/uikit/UiButton.vue";
import {onUnmounted, ref} from "vue";
import {Ref} from "vue";
import DefenceServices from "@/services/Defence/DefenceServices.ts";
import {useAuthStore} from "@/store/authStore.ts";
import UiInput from "@/components/uikit/UiInput.vue";

const isDefended: Ref<boolean> = ref(false);
const authStore = useAuthStore();

let WaterInterval;
const waterSensor = ref({value: 0, isFlooded: false});

let WarmInterval;
const warmSensor = ref({value: 0, isTooWarm: false});

async function getWarm() {
  const res = await DefenceServices.isTooWarm(authStore.user.token);
  if (res) {
    warmSensor.value.isTooWarm = res.isTooWarm;
    warmSensor.value.value = res.value;
  }
}
async function getWater() {
  const res = await DefenceServices.isFlooded(authStore.user.token);
  console.log(res);
  if (res) {
    waterSensor.value.isFlooded = res.isFlooded;
    waterSensor.value.value = res.value;
  }
}
function DefenceOn() {
  isDefended.value = true;

  WarmInterval = setInterval(() => {
    getWarm();
  }, 2000);

  WaterInterval = setInterval(() => {
    getWater();
  }, 2000);
}
function DefenceOff() {
  clearInterval(WarmInterval);
  clearInterval(WaterInterval);

  DefenceServices.setLampState(0, authStore.user.token);
  isDefended.value = false;
}
onUnmounted(() => {
  DefenceOff();
});
</script>

<template>
  <div>
    <div class="Defense-mode">
      <div class="Defense-title">
        <h2>Режим защиты</h2>
        <ui-button transparent @click.prevent="DefenceOn()" v-if="!isDefended">Включить</ui-button>
        <ui-button transparent @click.prevent="DefenceOff()" v-else>Выключить</ui-button>
      </div>
      <div v-if="isDefended" class="defenceData" style="display: flex; flex-direction: column;">
        <span v-if="warmSensor" class="defence-key">
          Датчик тепла:
          <span class="defence-value">
            {{warmSensor.value}} °C
          </span>
        </span>
        <span v-if="waterSensor" class="defence-key">
          Датчик перелива:
          <span class="defence-value">
            {{waterSensor.value}}
            <span v-if="waterSensor.isFlooded" style="color: red; font-size: 32px;">Залив!</span>
          </span>
        </span>
      </div>
      <span class="defence-text">Наши устройства начнут фиксировать информацию о состоянии вашей квартиры и, при достижении пиковых показателей оповестят вас, управление жилым комплексом и соответствующие органы.</span>
      <p class="message">На какой номер прислать оповещение?</p>
      <ui-input placeholder="Введите номер  телефона" type="tel" class="input"/>
    </div>
  </div>
</template>

<style  scoped>
.Defense-mode{
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.defence-text {
  line-height: 30pt;
  margin-top: 24px;
}
.Defense-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.input{
  width: 398px;
  height: 50px;
  border-radius:50px ;
}
.message {
  font-size: 24px;
  margin-top: 60px;
  margin-bottom: 24px;
}
button{
  color: #569DB8;
  border-radius: 50px;
  width: 252px;
  height: 48px;
}
h2{
  font-size: 32px;
}
span{
  font-size: 24px;
}
p{
  font-size: 24px;
}
</style>
