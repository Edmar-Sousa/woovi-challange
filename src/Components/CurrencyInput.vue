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
            class="font-semibold font-nunito text-gray-300 text-lg absolute top-5 left-4 duration-500 px-1 pointer-events-none">
                {{ placeholder }}
        </label>
    </float-label>


</template>

<script setup lang="ts">

import { ref } from 'vue'

import FloatLabel from 'primevue/floatlabel'


const props = defineProps([
    'id',
    'placeholder',
    'modelValue'
])

const emit = defineEmits([
    'update:modelValue'
])

const model = ref<string|null>(props.modelValue ? formatNumber(props.modelValue) : '')


function handleFocus() {
    const numberWithoutTexts = model.value?.replace(/[^0-9,-]/g, '')
        .replace(',', '.')

    if (numberWithoutTexts)
        model.value = Number.parseFloat(numberWithoutTexts).toFixed(2)
}


function formatNumber(value: number) {
    return Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(value)
}


function handleBlur() {
    if (!model.value)
        return 


    const value = parseFloat(model.value?.replace(',', '.'))
    model.value = formatNumber(value)

    emit('update:modelValue', value)
}

</script>
