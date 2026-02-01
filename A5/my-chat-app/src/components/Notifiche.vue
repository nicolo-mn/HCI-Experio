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
      <div class="shrink-0 flex items-center px-5 py-4 mt-4 bg-whitesmoke z-50">
        <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer mr-4" alt="Back" @click="onBackClick" />
        <b class="text-[2.5rem] leading-none text-black">Notifiche</b>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto w-full pb-[5rem]">
        <!-- Notif 1 -->
        <div class="relative w-full border-black border-solid border-b-[1px] box-border p-4 flex items-start gap-4 hover:bg-black/5 transition-colors cursor-pointer">
             <div class="rounded-full bg-gainsboro w-[3rem] h-[3rem] shrink-0" />
             <div class="flex-1">
                <span class="block">
                    <b class="font-urbanist">Paola </b>
                    <span class="text-[0.9rem] text-dimgray">ti ha dato un nuovo consiglio</span>
                </span>
                <span class="text-[0.8rem] text-dimgray block mt-1">1h</span>
             </div>
             <div class="rounded-[4.2px] w-[3rem] h-[1.8rem] bg-gray-300 shrink-0" />
        </div>

        <!-- Notif 2 -->
        <div class="relative w-full border-black border-solid border-b-[1px] box-border p-4 flex items-start gap-4 hover:bg-black/5 transition-colors cursor-pointer">
             <div class="rounded-full bg-gainsboro w-[3rem] h-[3rem] shrink-0" />
             <div class="flex-1">
                <span class="block">
                    <b class="font-urbanist">Marco </b>
                    <span class="text-[0.9rem] text-dimgray">ti ha dato un nuovo consiglio</span>
                </span>
                <span class="text-[0.8rem] text-dimgray block mt-1">5h</span>
             </div>
             <div class="rounded-[4.2px] w-[3rem] h-[1.8rem] bg-gray-300 shrink-0" />
        </div>

         <!-- Notif 3 -->
        <div class="relative w-full border-black border-solid border-b-[1px] box-border p-4 flex items-start gap-4 hover:bg-black/5 transition-colors cursor-pointer">
             <div class="rounded-full bg-gainsboro w-[3rem] h-[3rem] shrink-0" />
             <div class="flex-1">
                <span class="block">
                     <b class="font-urbanist">Ludovica </b>
                    <span class="text-[0.9rem] text-dimgray">ti ha dato un nuovo consiglio</span>
                </span>
                <span class="text-[0.8rem] text-dimgray block mt-1">1d</span>
             </div>
             <div class="rounded-[4.2px] w-[3rem] h-[1.8rem] bg-gray-300 shrink-0" />
        </div>
      </div>
      
    </div>
  </div>
</template>