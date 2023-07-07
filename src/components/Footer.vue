<template>
  <div class="footer">
    <div class="footer-photo">
      <img src ="@/assets/images/logofooter.svg">
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
.footer{
  margin-top: 100px;
  background: $brandColor;
  width: 100%;
  min-height: 500px;
  position: relative;
}
.footer-photo{
  top:77px;
  left:104px;
  position: absolute;
}

</style>
