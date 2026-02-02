<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import { store } from '../services/store.js'

const router = useRouter()

function onBackClick() {
    router.back()
}

const notifications = ref([
    { id: 1, sender: 'Paola', title: 'Paola', message: 'ti ha dato un nuovo consiglio' },
    { id: 2, sender: 'Giovanni', title: 'Giovanni', message: 'ti ha dato un nuovo consiglio' },
    { id: 3, sender: 'Ludovica', title: 'Ludovica', message: 'ti ha dato un nuovo consiglio' }
])
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
        <div 
            v-for="notif in notifications" 
            :key="notif.id"
            class="w-full h-[5rem] border-black border-solid border-b-[1px] box-border relative cursor-pointer hover:bg-black/5 transition-colors" 
          >
             <!-- Avatar -->
             <img :src="store.resolveAvatar(notif.sender || 'System')" class="absolute top-1/2 -translate-y-1/2 left-[1rem] w-[2.9rem] h-[2.9rem] object-cover rounded-full bg-gainsboro border-[1px] border-black/10" alt="Avatar" />
             
             <div class="absolute top-[1rem] left-[4.5rem] font-medium text-[1rem]">{{ notif.title }}</div>
             <div class="absolute top-[2.5rem] left-[4.5rem] text-[0.8rem] text-gray-600 truncate w-[13rem]">{{ notif.message }}</div>
             
          </div>
      </div>
      
    </div>
  </div>
</template>