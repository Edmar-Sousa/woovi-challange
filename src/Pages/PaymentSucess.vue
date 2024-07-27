<template>

    <div class="w-full min-h-screen flex items-center justify-around flex-col">
        <header>
            <img src="/logo.svg" alt="Logo da woovi" class="block mx-auto mb-10" />
            <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">
                Olá {{ paymentStore.firstname }}, o pagamento <br />
                foi aprovado com sucesso!
            </h1>
        </header>

        <div>
            <div class="w-[100px] h-[100px] bg-green-300 rounded-full text-white flex items-center justify-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                </svg>
            </div>

            <h2 class="text-2xl text-green-300 font-nunito font-bold mt-4">
                Sucesso!
            </h2>
        </div>

        <Footer />
    </div>


</template>

<script setup lang="ts">


import { usePaymentStore } from '../Store/PaymentStore'

import Footer from '@/Components/Footer.vue'


const paymentStore = usePaymentStore()

</script>
