import { createApp } from 'vue';
import {router} from "@/router/index.ts";

import App from "@/App.vue";
import layouts from '@/layouts/index.js';
import Uikit from "@/components/uikit";

import {createPinia} from "pinia";


const app = createApp(App);
const pinia = createPinia()
app.use(pinia)

// Global register of layouts and UI components
Object.keys(layouts).map(key => {
    app.component(key, layouts[key]);
})
Object.keys(Uikit).map(key => {
    app.component(key, Uikit[key]);
})

app.use(router);


app.mount('#app')
