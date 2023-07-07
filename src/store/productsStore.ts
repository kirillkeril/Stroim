import {defineStore} from "pinia";
import {reactive} from "vue";
import {Product} from "@/types/Products.ts";

export const useProductsStore = defineStore('products',() => {
    const products: Product[] = reactive([
        {id: "1", title: 'Ноготочки', description: "Делаю ноготочки недорого!!", place: "ул. Несуществующая, 4-21", ownerName: "Имя Фамилия", ownerId: 'asd', price: 1200, amount: 1, type: "service", imageId:""},
        {id: "2", title: 'Кресло', description: "Старое кресло. Целое.", place: "ул. Несуществующая, 31-4", ownerName: "Имя Фамилия", ownerId: 'sad', price: 1, amount: 1, type: "product", imageId:""},
        {id: "3", title: 'Шоколад ручной работы', description: "Делаю шоколад ручной работы. Дорого.", place: "ул. Несуществующая, 3-13", ownerName: "Имя Фамилия", ownerId: 'adjh', price: 121091, amount: 1, type: "service", imageId:""},
    ]);

    function addProduct(newProduct: Product) {
        console.log(newProduct);
        products.push(newProduct);
        console.log(products);
    }
    function deleteProduct(delProduct: Product) {
        products.filter(p => p.id === delProduct.id);
    }

    return {products, addProduct, deleteProduct};
})
