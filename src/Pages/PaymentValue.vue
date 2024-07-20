<template>

    <div class="w-full max-w-[800px] mx-auto pt-9 pb-7 px-5">
        <img src="/logo.svg" alt="Logo da woovi" class="block mx-auto mb-10" />
        <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">Quanto deseja pagar?</h1>

        <form action="#" method="POST" @submit.prevent>

            <currency-input
                placeholder="Valor que deseja pagar" />

            <button
                class="block w-[250px] h-[65px] mx-auto mt-4 rounded-[10px] font-nunito px-5 bg-green-300 text-bold text-white text-lg font-semibold outline-none focus:ring focus:ring-green-300">
                    Continuar
            </button>
        </form>

    </div>

</template>

<script lang="ts" setup>

import CurrencyInput from '@/Components/CurrencyInput.vue'

</script>
