<template>

    <div class="w-full max-w-[800px] mx-auto pt-9 pb-7 px-5">
        <img src="/logo.svg" alt="Logo da woovi" class="block mx-auto mb-10" />
        <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">
            {{ paymentStore.firstname }}, como você quer pagar?
        </h1>

        <option-pix
            label="Pix"
            name="paymentmethod"
            :times="1"
            :value="paymentStore.value"
            :input-value="1"
            v-model="selectedOption"
            @selected="handerSelectOption"
            class="rounded-[10px]">
                <template #bottom>
                    <p class="font-nunito font-semibold text-base leading-5 text-green-300">
                        Ganhe <b>3%</b> de Cashback
                    </p>

                    <blue-flag :class="{ '!text-green-200': selectedOption == 1 }">
                        🤑 <b>{{ formatCurrency(calculateCashback(paymentStore.value)) }}</b> de volta no seu Pix na hora
                    </blue-flag>
                </template>
        </option-pix>


        <ul class="w-full mt-[34px]">
            <li 
                v-for="(option, index) in otherPixOptions"
                :key="index">
                    <option-pix
                        name="paymentmethod"
                        v-model="selectedOption"
                        @selected="handerSelectOption"
                        :label="option?.label"
                        :times="option.times"
                        :value="option.value"
                        :interest="option.interest"
                        :input-value="option.times"
                        :class="{ 
                            'rounded-t-[10px] border-b-0': index == 0,
                            'border-b-0': index > 0 && index < otherPixOptions.length - 1,
                            'rounded-b-[10px]': index == otherPixOptions.length - 1,
                        }">
                            <template #bottom>
                                <p class="text-gray-100 text-base font-semibold">
                                    Total: {{ formatCurrency(option.times * option.value) }}
                                </p>

                                <blue-flag 
                                    v-show="option.discount" 
                                    :class="{ 'text-green-200': selectedOption == option.times }">
                                        <b>{{ option.discount }} de juros:</b> {{ option.bottom }}
                                </blue-flag>
                            </template>
                    </option-pix>
            </li>
        </ul>

        <Footer />
    </div>


</template>


<script setup lang="ts">

import { useRouter } from 'vue-router'
import { shallowRef } from 'vue'

import Footer from '@/Components/Footer.vue'
import OptionPix from '@/Components/OptionPix.vue'
import BlueFlag from '@/Components/BlueFlag.vue'

import { usePaymentStore } from '../Store/PaymentStore'

import { calculatePixOptions } from '../Mocks/OtherPixOptions'
import { formatCurrency } from '../Util/formats'
import { InstallmentType } from '../Interfaces/Installment'


const selectedOption = shallowRef(1)

const paymentStore = usePaymentStore()
const router = useRouter()


const otherPixOptions = calculatePixOptions(paymentStore.value)


function handerSelectOption(installment: InstallmentType) {
    paymentStore.setInstallment(installment)

    router.push({ 
        name: 'pix-qrcode.pix'
    })
}


function calculateCashback(value: number) {
    return value * 0.03
}

</script>