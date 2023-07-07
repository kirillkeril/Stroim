import {defineStore} from "pinia";
import {reactive} from "vue";
import {Product} from "@/types/Products.ts";

export const useProductsStore = defineStore('products',() => {
    const products: Product[] = reactive([]);

    function addProduct(newProduct: Product) {
        products.push(...products, newProduct);
    }
    function deleteProduct(delProduct: Product) {
        products.filter(p => p.id === delProduct.id);
    }

    return {products, addProduct, deleteProduct};
})
