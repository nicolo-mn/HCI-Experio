<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane-fill.svg'
import personIcon from '../assets/icons-all/person.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import plusIcon from '../assets/icons-all/plus.svg'

const router = useRouter()

const cities = [
  { name: 'Chicago', path: null },
  { name: 'Dublin', path: null },
  { name: 'Rome', path: null },
  { name: 'Kyoto', path: null },
  { name: 'Milan', path: '/bacheca-viaggio-singolo' },
  { name: 'Tokyo', path: null },
  { name: 'New York', path: null },
  { name: 'Paris', path: null },
  { name: 'London', path: null },
  { name: 'Berlin', path: null },
]

function onCityClick(path) {
  // Always navigate to BachecaViaggioSingolo for now, regardless of the specific path
  router.push('/bacheca-viaggio-singolo')
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

function goToNuovoViaggio() {
    router.push('/nuovo-viaggio')
}
</script>

<template>
  <!-- Main container: fixed height (screen), flex column -->
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
      
    <!-- Header: Fixed at top (part of flex layout, not scrolling) -->
    <div class="w-full md:w-1/3 shrink-0 flex items-end justify-between px-5 py-4 mt-4 bg-whitesmoke z-10">
        <b class="text-[2.5rem] leading-none text-black">I tuoi viaggi</b>
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 pb-1" @click="goToNuovoViaggio">
           <img :src="plusIcon" alt="Nuovo Viaggio" class="w-full h-full object-contain filter brightness-0" />
        </div>
    </div>

    <!-- Scrollable Cities List -->
    <div class="w-full md:w-1/3 flex-1 overflow-y-auto flex flex-col gap-6 px-5 pb-[6rem] pt-4">
        <div 
            v-for="city in cities" 
            :key="city.name"
            class="relative w-full h-[5rem] shrink-0 rounded-[10px] bg-goldenrod shadow-[0px_4px_4px_6px_#1a5e63] flex items-center justify-between px-6 cursor-pointer hover:opacity-90 transition-opacity"
            @click="onCityClick(city.path)"
        >
            <span class="text-[2rem] font-bold text-black">{{ city.name }}</span>
            <!-- Icon: Arrow Left flipped vertically (180deg rotation to point right) -->
            <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain transform rotate-180" alt="Go" />
        </div>
    </div>

    <!-- Fixed Navbar -->
    <div class="fixed bottom-0 left-0 w-full h-[4.188rem] bg-[#1a5e63] border-t border-gray-300 flex justify-center z-50">
        <div class="w-full md:w-1/3 flex justify-around items-center h-full">
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80" @click="goToHome">
                <img :src="houseIcon" alt="Home" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80" @click="goToTrips">
                <img :src="planeIcon" alt="Plane" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <div class="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80" @click="goToProfile">
                <img :src="personIcon" alt="Profile" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
        </div>
    </div>

  </div>
</template>