<template>
  <div>
    <div class="Defense-mode">
      <div class="Defense-title">
        <h2>Режим защиты</h2>
        <button>включить</button>
      </div>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam beatae consequatur eveniet facere hic labore magni maxime odio pariatur perspiciatis porro quos, reprehenderit sequi temporibus ut vel velit veritatis.</span>
      <p>На какой номер прислать оповещение?</p>
      <input placeholder="Введите номер  телефоначё" type="text" class="input">
      <div class="radio">
        <input type="radio">
        <input type="radio">
      </div>
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
.Defense-mode{
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.Defense-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.radio{
  display: flex;
  flex-direction: column;
  align-items: start  ;
}
.input{
  width: 398px;
  height: 50px;
  border-radius:50px ;
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