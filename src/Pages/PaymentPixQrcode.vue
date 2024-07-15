<template>

    <div class="w-full pt-9 pb-7 px-5">
        <img src="/logo.svg" alt="Logo da woovi" class="block mx-auto mb-10" />
        <h1 class="text-2xl text-center font-extrabold text-gray-300 font-nunito mb-8">
            João, pague a entrada de <br />
            R$ 15.300,00 pelo Pix
        </h1>

        <div class="text-center">
            <div class="border-2 inline-block border-green-300 rounded-[10px] p-[10px]">
                <img
                    src="/qrcode.png" />
            </div>

            <button class="inline-flex mt-5 items-center gap-3 bg-blue-300 px-5 py-2 font-nunito font-semibold text-lg text-white rounded-lg">
                Clique para copiar QR CODE
                <img 
                    src="/paper.svg" 
                    alt="Icone de copiar" />
            </button>

            <p class="font-nunito text-lg font-semibold text-gray-100 mt-5">
                Prazo de pagamento: <br />
                <b class="text-gray-300">15/12/2021 - 08:17</b>
            </p>
        </div>

        <div class="mt-5 pb-5 border-b-2 border-b-gray-100"> 
            <timeline :value="timelineData" :pt="{
                event: 'flex items-start gap-2',
                eventContent: 'flex-1',
                eventConnector: 'w-[2px] ml-[7px] bg-gray-100 min-h-[20px]',
            }">
                <template #marker="slotProps">
                    <span 
                        class="flex w-4 h-4 border-2 border-gray-100 rounded-full"
                        :class="{ 
                            '!border-green-300 bg-green-300 timeline-event-checked relative': slotProps.item.activite == 'completed',
                            '!border-green-300': slotProps.item.activite == 'activite',
                        }">
                    </span>
                </template>

                <template #content="slotProps">
                    <div class="w-full flex items-center justify-between">
                        <p class="text-lg font-nunito text-gray-300 font-semibold">{{ slotProps.item.title }}</p>
                        <p class="text-lg font-nunito text-gray-300 font-extrabold"><b>{{ formatCurrency(slotProps.item.value) }}</b></p>
                    </div>
                </template>
            </timeline>
        </div>


        <div class="w-full flex items-center justify-between mt-7 pb-5 border-b-2 border-b-gray-100">
            <p class="text-lg font-nunito text-gray-300 font-semibold">CET: 0,5%</p>
            <p class="text-lg font-nunito text-gray-300 font-semibold">Total: R$ 30.600,00</p>
        </div>

        <accordion value="1">
            <accordion-panel value="0" class="py-5 border-b-2 border-b-gray-100">
                <accordion-header class="flex items-center justify-between w-full font-extrabold text-base text-gray-300 font-nunito">
                    Como funciona?
                </accordion-header>

                <accordion-content class="pt-2">
                    <p class="text-base font-nunito text-gray-300 font-semibold">
                        O Pix parcelado permite que a primeira parcela de uma compra 
                        seja paga instantaneamente via Pix, enquanto as parcelas 
                        subsequentes são cobradas no cartão de crédito. Essa 
                        modalidade combina a velocidade e a simplicidade do Pix 
                        com a flexibilidade do pagamento parcelado, facilitando transações 
                        rápidas e sem complicações. As próximas parcelas são automaticamente 
                        debitadas no cartão, conforme o cronograma de pagamento estabelecido.
                    </p>
                </accordion-content>
            </accordion-panel>
        </accordion>

        <p class="font-nunito text-center text-lg font-semibold text-gray-100 mt-5">
            Prazo de pagamento: <br />
            <b class="text-gray-300">2c1b951f356c4680b13ba1c9fc889c47</b>
        </p>

        <Footer />
    </div>

</template>

<script setup lang="ts">

import Timeline from 'primevue/timeline'


import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

import Footer from '@/Components/Footer.vue'

import { formatCurrency } from '../Util/formats'


const timelineData = [
    { title: '1ª entrada no Pix', value: 15300, activite: 'completed' },
    { title: '2ª no cartão', value: 15300, activite: 'activite' }
]

</script>


<style>

.p-timeline-event-separator {
    background-color: #000;
}

</style>

