<template>

    <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">
        João, pague o restante em 1x no <br />
        cartão
    </h1>

    <form action="#" method="POST">
        <input-text
            placeholder="Nome completo"
            id="username" />

        <input-mask 
            class="mt-7"
            placeholder="CPF"
            id="document"
            mask="999.999.999-99" />

        <input-mask 
            class="mt-7"
            placeholder="Número do cartão"
            id="cardnumber"
            mask="9999-9999-9999-9999" />

        <div class="flex gap-4">
            <input-mask 
                class="mt-7"
                placeholder="Vencimento"
                id="cardvaliddate"
                mask="99/99" />
    
            <input-mask 
                class="mt-7"
                placeholder="CVV"
                id="cardcvv"
                mask="999" />
        </div>

        <select-input 
            class="mt-7"
            :options="options"
            placeholder="Parcelas" />
    </form>

</template>

<script setup lang="ts">


import InputText from '@/Components/TextInput.vue'
import InputMask from '@/Components/InputMask.vue'

import SelectInput from '@/Components/SelectInput.vue'


const options = [
    { label: '1x de R$ 15.300,00', value: 1 },
    { label: '2x de R$ 15.300,00', value: 2 },
    { label: '3x de R$ 15.300,00', value: 3 },
    { label: '4x de R$ 15.300,00', value: 4 },
    { label: '5x de R$ 15.300,00', value: 5 },
    { label: '6x de R$ 15.300,00', value: 6 },
    { label: '7x de R$ 15.300,00', value: 7 },
    { label: '8x de R$ 15.300,00', value: 8 },
    { label: '9x de R$ 15.300,00', value: 9 },
    { label: '10x de R$ 15.300,00', value: 10 },
]

</script>


