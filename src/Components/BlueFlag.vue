<template>

    <div class="relative h-10 mt-[10px] text-white leading-10 text-base bg-contain bg-no-repeat w-full rounded-md pl-3 bg-blue-300">
        <p class="text-white">
            <slot />
        </p>

        <svg 
            width="19" 
            height="37" 
            viewBox="0 0 19 37" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -right-[2px] top-[2px]">
                <path d="M1.5 18.5L18 2V35L1.5 18.5Z" fill="currentColor" stroke="currentColor"/>
        </svg>
    </div>

</template> 
