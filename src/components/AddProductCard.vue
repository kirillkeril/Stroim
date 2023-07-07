<script lang="ts" setup>
import UiButton from "@/components/uikit/UiButton.vue";
import UiInput from "@/components/uikit/UiInput.vue";
import UiRadio from "@/components/uikit/UiRadio.vue";
import {useProductsStore} from "@/store/productsStore.ts";
import {Product} from "@/types/Products.ts";
import {reactive} from "vue";
import {useAuthStore} from "@/store/authStore.ts";

const productsStore = useProductsStore();
const newProductInit: Product = {
  id: '',
  title: '',
  description: '',
  imageId: '',
  ownerId: '',
  place: '',
  price: 0,
  amount: 0,
  ownerName: '',
  type: "product"
}
const newProduct: Product = reactive(newProductInit);
const authStore = useAuthStore();
function addProduct() {
  newProduct.id = 'some';
  newProduct.place = authStore.user.apartment[0].custom_title;
  newProduct.ownerId = authStore.user.token;
  newProduct.ownerName = authStore.userFullName;
  productsStore.addProduct(newProduct);
}
</script>

<template>
  <div class="add-product-card">
    <form class="product-info" @submit.prevent="addProduct">
      <div class="radio-container">
        <ui-radio style="justify-content: space-between" type="line" name="type" v-model="newProduct.type" :values="[{id: 1, value: 'product', label: 'Товар'}, {id: 2, value: 'service', label: 'Услуга'}]"/>
      </div>
      <ui-input v-model="newProduct.title" type="text" class="input-data" placeholder="Название товара" />
      <ui-input v-model="newProduct.description" type="text" class="input-data" placeholder="Описание" />
      <div class="product-price">
        <ui-input v-model="newProduct.price" type="text" class="input-data" placeholder="цена" />
        <ui-input v-model="newProduct.amount" type="text" class="input-data" placeholder="Кол-во" />
      </div>
      <footer class="footer">
        <ui-button style="width: 250px">добавить</ui-button>
      </footer>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add-product-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 398px;
}
.product-info{
  display: flex;
  flex-direction: column;
}
.product-price{
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    width: 50%;
  }
  & > *:first-child{
    margin-right: 16px;
  }
}
.type-buttons{
  margin: 0 auto 24px auto;
}
.input-data{
  border-radius: 50px;
  margin-bottom: 24px;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio-container {
  margin: 0 auto 24px auto;
  width: 50%;
}
</style>
