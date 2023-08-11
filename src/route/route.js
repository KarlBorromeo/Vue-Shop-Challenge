import { createRouter,createWebHistory } from "vue-router";
import listProducts from '../components/products/listProducts.vue'
import cartView from '../components/cart/cartView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect: '/home'},
        {
            path: '/home',
            component: listProducts
        },
        {
            path: '/cart',
            component: cartView
        }
    ]
});

export default router;