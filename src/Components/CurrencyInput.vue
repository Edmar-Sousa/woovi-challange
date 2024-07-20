<template>

    <float-label class="relative block float-container">
        <input
            type="text"
            :id="id"
            class='block float-label-input w-full h-[65px] border-2 border-gray-100 rounded-[10px] font-nunito px-5 text-gray-300 text-lg font-semibold outline-none focus:ring focus:ring-green-300'
            v-model="model"
            :placeholder="placeholder"
            @focusin="handleFocus"
            @focusout="handleBlur" />
        
        <label 
            :for="id"
            class="font-semibold font-nunito text-gray-300 text-lg absolute top-5 left-4 duration-500 px-1 pointer-events-none"
            :class="{
                '-top-4 bg-white': isFloatingLabel,
            }">
                {{ placeholder }}
        </label>
    </float-label>


</template>

<script setup lang="ts">

import { computed, shallowRef, ref } from 'vue'

import FloatLabel from 'primevue/floatlabel'


defineProps([
    'id',
    'placeholder',
])


const model = ref<string|null>()
const state = shallowRef(false)


const isFloatingLabel = computed(() => state.value)



function handleFocus() {
    const numberWithoutTexts = model.value?.replace(/[^0-9,-]/g, '')
        .replace(',', '.')

    if (numberWithoutTexts)
        model.value = Number.parseFloat(numberWithoutTexts).toFixed(2)
}


function handleBlur() {

    const value = Number(model.value?.replace(',', '.'))

    if (model.value)
        model.value = Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(value)
}

</script>
