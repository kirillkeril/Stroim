<template>
  <div class="Connected-Devises">
    <div class="devises">
      <h2>Подключенные устройства</h2>
      <button class="add-devises">+</button>
    </div>
        <div class="devises-info">
          <span class="Devises">ТермоХуй</span>
          <span class="status">Включено</span>
        </div>
    </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style  scoped>
.Connected-Devises{
  min-width: 690px ;
  min-height: 400px;
  background: #4ed5d5;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.devises-info{
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
}
.status{
  color: green;
}
h2{
  padding-left: 40px;
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

</style>