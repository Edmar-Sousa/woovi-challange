<template>

    <div class="w-full max-w-[800px] mx-auto pt-9 pb-7 px-5">
        <img src="/logo.svg" alt="Logo da woovi" class="block mx-auto mb-10" />
        <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">João, como você quer pagar?</h1>

        <option-pix
            label="Pix"
            name="paymentmethod"
            :times="1"
            :value="formatCurrency(30500)"
            :input-value="1"
            v-model="selectedOption"
            @selected="handerSelectOption"
            class="rounded-[10px]">
                <template #bottom>
                    <p class="font-nunito font-semibold text-base leading-5 text-green-300">Ganhe <b>3%</b> de Cashback</p>

                    <div class="relative h-10 mt-[10px] leading-10 text-white text-base bg-contain bg-no-repeat w-full rounded-md pl-3 bg-blue-300">
                        🤑 <b>{{ formatCurrency(300) }}</b> de volta no seu Pix na hora

                        <img src="/triangle.svg" class="absolute -right-[2px] top-[2px]" />
                    </div>
                </template>
        </option-pix>


        <ul class="w-full mt-[34px]">
            <li 
                v-for="(option, index) in otherPixOptions"
                :key="index">
                    <option-pix
                        v-model="selectedOption"
                        name="paymentmethod"
                        :label="option?.label"
                        :times="option.times"
                        :value="formatCurrency(option.value)"
                        :input-value="option.times"
                        @selected="handerSelectOption"
                        :class="{ 
                            'rounded-t-[10px] border-b-0': index == 0,
                            'border-b-0': index > 0 && index < otherPixOptions.length - 1,
                            'rounded-b-[10px]': index == otherPixOptions.length - 1,
                        }">
                            <template #bottom>
                                <p class="text-gray-100 text-base font-semibold">
                                    Total: {{ formatCurrency(option.times * option.value) }}
                                </p>

                                <div
                                    v-show="option.discount" 
                                    class="relative h-10 mt-[10px] leading-10 text-white text-base w-full rounded-md pl-3 bg-blue-300">
                                        <p>
                                            <b>{{ option.discount }} de juros:</b>
                                            {{ option.bottom }}
                                        </p>
                                        <img src="/triangle.svg" class="absolute -right-[2px] top-[2px]" />
                                </div>
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
import { otherPixOptions } from '../Mocks/OtherPixOptions'

import { formatCurrency } from '../Util/formats'

const selectedOption = shallowRef(null)


const router = useRouter()

function handerSelectOption() {
    router.push({ name: 'pix-qrcode.pix' })
}

</script>