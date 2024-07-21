<template>

    <float-label class="relative block w-full">
        <input-mask
            type="text"
            :id="id"
            class="float-label-input w-full h-[65px] border-2 border-gray-100 rounded-[10px] font-nunito px-5 text-gray-300 text-lg font-semibold outline-none focus:ring focus:ring-green-300"
            :placeholder="placeholder"
            :mask="mask" />

        <label 
            :for="id"
            class="font-semibold font-nunito text-gray-300 text-lg absolute top-5 left-4 duration-500 px-1 pointer-events-none">
                {{ placeholder }}
        </label>
    </float-label>

</template>

<script setup lang="ts">


import InputMask from 'primevue/inputmask'
import FloatLabel from 'primevue/floatlabel'

defineProps({
    id: {
        type: String,
    },
    placeholder: {
        type: String,
    },

    mask: {
        type: String,
    }
})

</script>
