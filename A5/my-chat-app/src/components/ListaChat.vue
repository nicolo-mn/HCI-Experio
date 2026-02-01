<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../services/store.js'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()

const activeChats = computed(() => {
    return store.getChatUsers()
})

function onPersonaContainerClick() {

  // Add your code here
}

function onBackClick() {
    router.back()
}

function goToHome() {
    router.push('/home')
}

function goToTrips() {
    router.push('/tutti-viaggi')
}

function goToProfile() {
    router.push('/profilo')
}

function goToChat(username) {
    router.push('/chat/' + username)
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl overflow-hidden">
      
      <!-- Header -->
      <div class="shrink-0 flex items-center px-5 py-4 mt-4 bg-whitesmoke z-50">
        <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer mr-4" alt="Back" @click="onBackClick" />
        <b class="text-[2.5rem] leading-none text-black">Messaggi</b>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto w-full pb-[5rem]">
          <div 
            v-for="user in activeChats" 
            :key="user"
            class="w-full h-[4.438rem] border-black border-solid border-b-[1px] box-border relative cursor-pointer hover:bg-black/5 transition-colors" 
            @click="goToChat(user)"
          >
             <div class="absolute top-1/2 -translate-y-1/2 left-[4.5rem] font-medium text-[1.125rem]">{{ user }}</div>
             <div class="absolute top-1/2 -translate-y-1/2 left-[1rem] rounded-full bg-gainsboro w-[2.5rem] h-[2.5rem]" />
             <!-- Online status indicator placeholder -->
             <div class="absolute top-1/2 -translate-y-1/2 right-[1rem] w-[1rem] h-[1rem] bg-gray-300 rounded-full" /> 
          </div>
          
          <div v-if="activeChats.length === 0" class="p-5 text-center text-gray-500">
            Nessuna chat attiva.
          </div>
      </div>

    </div>
    
    <!-- Fixed Navbar -->
    <div class="fixed bottom-0 left-0 w-full h-[4.188rem] bg-darkslategray border-t border-gray-300 flex justify-center z-50">
        <div class="w-full md:w-1/3 flex justify-around items-center h-full">
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToHome">
              <img :src="houseIcon" alt="Home" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToTrips">
              <img :src="planeIcon" alt="Plane" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToProfile">
              <img :src="personIcon" alt="Profile" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
        </div>
    </div>
  </div>
</template>