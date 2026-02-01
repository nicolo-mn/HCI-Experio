<script setup>
import { useRouter } from 'vue-router'
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()

function onBackClick() {
    router.back()
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl overflow-hidden">
      
       <!-- Header -->
      <div class="shrink-0 flex items-center justify-between px-5 py-4 mt-4 bg-whitesmoke z-50">
        <div class="flex items-center gap-4">
             <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="onBackClick" />
             <b class="text-[2.5rem] leading-none text-black">Paola</b>
        </div>
        <!-- Icons/Avatar placeholder -->
         <div class="flex items-center gap-2">
            <div class="w-[1.875rem] h-[1.875rem] bg-gray-200 rounded-full" /> 
            <div class="w-[1.875rem] h-[1.875rem] bg-gray-200 rounded-full" />
         </div>
      </div>
      
      <!-- Messages Area -->
      <div class="relative flex-1 w-full overflow-y-auto">
        <!-- Message 1 (Left) -->
        <div class="absolute top-[0rem] left-[0rem] w-[80%] h-[4.688rem]">
            <div class="absolute top-[0rem] left-[0rem] shadow-[0px_4px_8.12px_#662c00] rounded-[20.31px] bg-goldenrod w-full h-[4.688rem]" />
            <div class="absolute top-[0rem] left-[0.938rem] flex items-center w-[90%] h-[4.688rem]">Ciao, quanto tempo ci vuole<br/>per visitare tutto?</div>
        </div>

         <!-- Message 2 (Left) -->
        <div class="absolute top-[5.812rem] left-[0rem] w-[80%] h-[4.938rem] z-10">
            <div class="absolute top-[0rem] left-[0rem] shadow-[0px_4px_8.12px_#662c00] rounded-[20.31px] bg-goldenrod w-full h-[4.938rem]" />
            <div class="absolute top-[0rem] left-[0.938rem] flex items-center w-[90%] h-[4.938rem]">Circa 2 ore! Secondo me è bellissimo la mattina</div>
        </div>

        <!-- Message 3 (Right) -->
        <div class="absolute top-[12rem] right-[0rem] w-[40%] h-[3.25rem]">
            <div class="absolute top-[0rem] left-[0rem] shadow-[0px_4px_8.12px_#662c00] rounded-[20.31px] bg-goldenrod w-full h-[3.25rem]" />
            <div class="absolute top-[0rem] left-[0.501rem] flex items-center w-[90%] h-[3.25rem]">Grazie mille!</div>
        </div>
      </div>
      
      </div>
      
      <!-- Input Area (Fixed at bottom of flex container) -->
      <div class="shrink-0 w-full px-4 pb-8 pt-2 bg-whitesmoke">
         <div class="relative w-full h-[3.125rem]">
             <div class="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white border-darkslategray border-solid border-[3px] box-border w-[calc(100%-3.5rem)] h-[3.125rem]" />
             <div class="absolute top-[0.8rem] left-[1rem] text-[1.25rem]">Scrivi un messaggio...</div>
             <div class="absolute top-[0rem] right-[0rem] rounded-[50%] bg-darkslategray w-[3.125rem] h-[3.125rem]" />
         </div>
      </div>

    </div>
  </div>
</template>