<template>

    <float-label class="relative block">

        <Select 
            :pt="{
                root: 'flex items-center pl-5',
                label: 'w-full outline-none',
                option: 'w-ful px-5 font-nunito px-5 text-gray-300 font-semibold text-lg py-2 cursor-pointer hover:bg-green-200',
                listContainer: 'bg-white overflow-y-auto px-2 border-2 rounded-[10px] border-gray-100'
            }"
            class="float-label-input w-full h-[65px] border-2 border-gray-100 rounded-[10px] font-nunito px-5 text-gray-300 text-lg font-semibold outline-none focus:ring focus:ring-green-300"
            :options="options"
            :option-label="optionLabel"
            :option-value="optionValue"
            v-model="model">
        </select>

        <label 
            :for="id"
            class="font-semibold font-nunito text-gray-300 text-lg absolute top-5 left-4 duration-500 px-1 pointer-events-none">
                {{ placeholder }}
        </label>
    </float-label>


</template>

<script setup lang="ts">

import FloatLabel from 'primevue/floatlabel'
import Select from 'primevue/select'


import { ref } from 'vue'

defineProps({
    id: {
        type: String,
    },
    placeholder: {
        type: String,
    },

    options: {
        type: Array,
    },

    optionLabel: {
        type: String,
        default: 'label',
    },

    optionValue: {
        type: String,
        default: 'value',
    },
})


const model = ref(1)
</script>
