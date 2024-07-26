<template>

    <float-label class="relative block">
        <input-text 
            type="text"
            :id="id"
            class="float-label-input w-full h-[65px] border-2 border-gray-100 rounded-[10px] font-nunito px-5 text-gray-300 text-lg font-semibold outline-none focus:ring focus:ring-green-300"
            :placeholder="placeholder"
            v-model="model" />

        <label 
            :for="id"
            class="font-semibold font-nunito text-gray-300 text-lg absolute top-5 left-4 duration-500 px-1 pointer-events-none">
                {{ placeholder }}
        </label>
    </float-label>

    <small 
        v-if="error"
        class="font-nunito text-red-600 text-base mt-1">
            {{ error }}
    </small>

</template>

<script setup lang="ts">


import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'

defineProps([
    'id',
    'placeholder',
    'error',
])

const model = defineModel()

</script>
