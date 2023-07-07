<template>
  <div class="contacts-container">
    <h2>О компании</h2>
    <div class="about">
      <h3>Мы- цифровизация</h3>
       <p style="font-weight: 600;">Совершенствуем свои подходы в области технологических решений и помогаем внедрять новые технологии в повседневную жизнь человека</p>
    </div>
    <div class="images-line">
      <div class="image-wrapper">
        <span class="image-text">Умные здания</span>
        <img src="@/assets/images/frame3.jpg" alt="img"/>
      </div>
      <div class="image-wrapper">
        <span class="image-text" style="color: #23CEC2">Голосовой<br>ассистент</span>
        <img src="@/assets/images/Frame2.jpg" alt="img"/>
      </div>
      <div class="image-wrapper">
        <span class="image-text">Виртуальная диспетчерская</span>
        <img src="@/assets/images/Frame1.jpg" alt="img"/>
      </div>
    </div>
  <div class="map-info">
    <div class="map">
      <img src="@/assets/images/map.png">
  </div>
    <div class="contacts-list">
      <div class="contacts" >
        <h4>Отдел прямых продаж</h4>
        <span>sale@ujin.tech8 800 551 18 95 доб. 1 </span>
      </div>
      <div class="contacts" >
        <h4> Стать партнером</h4>
        <span> sale@ujin.tech8 800 551 18 95 доб. 1 </span>
      </div>
      <div class="contacts" >
        <h4>Техподдержка Ujin</h4>
        <span>sale@ujin.tech8 800 551 18 95 доб. 1 </span>
      </div>
      <div class="contacts" >
        <h4>Маркетинг и PR</h4>
        <span>  sale@ujin.tech8 800 551 18 95 доб. 1</span>
      </div>
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

<style lang="scss" scoped>
.image-wrapper img{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
}
.image-wrapper{
  position: relative;
  width: 540px;
  height: 347px;
}
.image-text {
  position: absolute;
  top: 36px;
  left: 36px;
  font-weight: 600;
  font-size: 32px;
  color: white;
}
.images-line{
  margin-top: 76px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
  margin-bottom: 100px;
}
.about{
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
}
h2{
  font-size: 24px;
  color: #D6D6D6;
}
h3{
  font-size: 70px ;
  font-weight: bold;
}
.about >p{
  font-size: 20px;
}
.map-info{
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.map{
  margin-right: 40px;
}
.contacts > h4{
  font-size: 32px;
}
.contacts > span {
  font-size: 24px;
  color:#7C7C7C;
}
.contacts-list {
  & > .contacts > h4:not(:last-child) {
    margin-bottom: 16px;
  }
  & > .contacts:not(:last-child) {
    margin-bottom: 36px;
  }
}
</style>
