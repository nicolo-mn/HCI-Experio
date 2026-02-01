<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import positionPinIcon from '../assets/icons-all/location.svg'

const router = useRouter()

const cards = [
    { id: 1, title: 'Castello di Karlsruhe', location: 'Karlsruhe', user: '@Marco' },
    { id: 2, title: 'Castello di Karlsruhe', location: 'Karlsruhe', user: '@Paola' },
    { id: 3, title: 'Duomo di Milano', location: 'Milano', user: '@Giovanni' },
    { id: 4, title: 'Galleria V. Emanuele', location: 'Milano', user: '@Ludovica' },
    { id: 5, title: 'Muro di Berlino', location: 'Germania', user: '@Ernst' }
]

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

function goToConsiglio() {
    router.push('/consiglio')
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative overflow-hidden">
      
      <!-- Header -->
      <div class="shrink-0 flex items-center px-5 py-4 mt-4 bg-whitesmoke z-50">
        <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer mr-4" alt="Back" @click="onBackClick" />
        <b class="text-[2.5rem] leading-none text-black">Bacheca</b>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto w-full p-5 pb-[6rem]">
         <!-- Notice Board Container -->
         <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-1">
            
            <!-- Grid Layout for 2 columns -->
            <div class="grid grid-cols-2 gap-x-1 gap-y-4 place-items-center">
                
                <div v-for="card in cards" :key="card.id"
                     class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative"
                     @click="goToConsiglio">
                     
                    <!-- Image Placeholder -->
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img class="w-full h-full object-cover" alt="" />
                    </div>
                    
                    <!-- Location -->
                    <div class="flex items-center gap-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black">{{ card.location }}</span>
                    </div>

                    <!-- Title -->
                    <div class="text-[0.9rem] font-bold leading-tight text-center">{{ card.title }}</div>
                    
                    <!-- User Tag -->
                    <div class="text-[0.7rem] underline mt-auto mb-1">{{ card.user }}</div>
                </div>

            </div>
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