<template>

    <div class="w-screen min-h-screen">
        <router-view></router-view>
    </div>

</template>

<script setup lang="ts">


import { useRouter } from 'vue-router'


const router = useRouter()


window.addEventListener('load', () => {
    router.push({ name: 'payment-value' })
})

</script>
