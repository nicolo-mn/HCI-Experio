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
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative overflow-hidden">
      
       <!-- Header -->
      <div class="shrink-0 flex items-center px-5 py-4 mt-4 bg-whitesmoke z-50">
        <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer mr-4" alt="Back" @click="onBackClick" />
        <b class="text-[2.5rem] leading-none text-black">Premi</b>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto w-full p-5 pb-[5rem]">
         <!-- Notice Board Container -->
         <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-4">
            
            <!-- Flex Wrap Layout -->
            <div class="flex flex-wrap justify-center gap-3">
                
                <!-- Card 1 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                    <img class="w-[80%] h-[50%] object-contain" alt="100 consigli ricevuti" />
                    <b class="text-[0.9rem] text-center leading-tight">100 consigli ricevuti</b>
                </div>

                <!-- Card 2 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                    <img class="w-[80%] h-[50%] object-contain" alt="50 consigli ricevuti" />
                    <b class="text-[0.9rem] text-center leading-tight">50 consigli ricevuti</b>
                </div>

                 <!-- Card 3 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                    <img class="w-[80%] h-[50%] object-contain" alt="25 consigli ricevuti" />
                    <b class="text-[0.9rem] text-center leading-tight">25 consigli ricevuti</b>
                </div>

                <!-- Card 4 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                    <img class="w-[80%] h-[50%] object-contain" alt="100 consigli donati" />
                    <b class="text-[0.9rem] text-center leading-tight">100 consigli donati</b>
                </div>

                <!-- Card 5 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                     <img class="w-[80%] h-[50%] object-contain" alt="50 consigli donati" />
                    <b class="text-[0.9rem] text-center leading-tight">50 consigli donati</b>
                </div>

                 <!-- Card 6 -->
                <div class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2">
                    <img class="w-[80%] h-[50%] object-contain" alt="25 consigli donati" />
                    <b class="text-[0.9rem] text-center leading-tight">25 consigli donati</b>
                </div>

            </div>
         </div>
      </div>

    </div>
  </div>
</template>