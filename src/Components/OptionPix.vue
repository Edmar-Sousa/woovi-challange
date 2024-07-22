<template>

    <div 
        class="w-full relative border-2 border-gray-200 p-5 cursor-pointer"
        :class="{ 
            'border-green-300 bg-green-200 border-b-2': model == inputValue,
        }"
        @click.prevent="handlerSelectOption">
            <p
                v-show="label?.length"
                class="px-5 py-1 bg-gray-200 font-nunito font-extrabold text-lg -top-[20px] text-gray-300 absolute rounded-full">
                {{ label }}
            </p>

            <div class="w-full flex items-center justify-between">
                <p class="text-2xl font-nunito text-gray-300 font-normal">
                    <b class="font-extrabold" v-show="times">{{ times }}x</b>

                    {{ formatCurrency(value) }}
                </p>

                <input
                    type="radio"
                    class="border-2 border-gray-200 w-[26px] h-[26px] rounded-full"
                    :class="{ 'border-green-300 bg-green-300': model == inputValue }"
                    :name="name"
                    :value="inputValue"
                    v-model="model" />
            </div>

            <slot name="bottom" />
    </div>

</template>

<script setup lang="ts">

import { formatCurrency } from '../Util/formats'


const props = defineProps({
    label: {
        type: String,
        required: false,
    },

    times: {
        type: Number,
        required: false,
    },

    value: {
        type: Number,
        required: true,
    },

    interest: {
        type: Number,
        default: 0,
    },

    name: {
        type: String,
        required: true,
    },
    inputValue: {
        required: true,
    },
})


const model = defineModel()

const emit = defineEmits([ 'selected' ])

function handlerSelectOption() {
    model.value = props.inputValue

    emit('selected', {
        times: props.times,
        value: props.value,
        interest: props.interest,
    })
}

</script>
