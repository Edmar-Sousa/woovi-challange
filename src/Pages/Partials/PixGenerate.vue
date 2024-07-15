<template>

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

</template>

<script setup lang="ts">
</script>
