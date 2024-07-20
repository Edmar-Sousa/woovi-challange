import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('@/Pages/PaymentValue.vue'), name: 'payment-value' },
    { path: '/method', component: () => import('@/Pages/PaymentMethod.vue'), name: 'payment-method' },
    {
        path: '/pix',
        component: () => import('@/Pages/PaymentPixQrcode.vue'),

        children: [
            { path: '', component: () => import('@/Pages/Partials/PixGenerate.vue'), name: 'pix-qrcode.pix' },
            { path: 'credit-card', component: () => import('@/Pages/Partials/CreditCard.vue'), name: 'pix-qrcode.credit-card' },
        ]
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})


export { router }
