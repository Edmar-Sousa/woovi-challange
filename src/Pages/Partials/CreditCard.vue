<template>

    <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">
        João, pague o restante em {{ paymentStore.timesCreditCard }}x no <br />
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

        <div class="flex gap-4 w-full">
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

        <button
            class="block w-[250px] h-[65px] mx-auto mt-4 rounded-[10px] font-nunito px-5 bg-green-300 text-bold text-white text-lg font-semibold outline-none focus:ring focus:ring-green-300">
                Continuar
        </button>
    </form>

</template>

<script setup lang="ts">


import InputText from '@/Components/TextInput.vue'
import InputMask from '@/Components/InputMask.vue'

import SelectInput from '@/Components/SelectInput.vue'


import { usePaymentStore } from '../../Store/PaymentStore'
import { creditCardOptions } from '../../Util/creditCardOptins'

const paymentStore = usePaymentStore()

const options = creditCardOptions(paymentStore.totalCreditCard)

</script>


