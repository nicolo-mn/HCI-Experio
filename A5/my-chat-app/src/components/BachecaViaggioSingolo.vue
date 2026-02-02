<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { store } from "../services/store"
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane-fill.svg'
import personIcon from '../assets/icons-all/person.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import positionPinIcon from '../assets/icons-all/location.svg'
import calendarIcon from '../assets/icons-all/calendar.svg'

const router = useRouter()
const route = useRoute()

const currentLocation = ref('Viaggio')
const relevantAdvices = ref([])

onMounted(() => {
    store.init()
    if (route.query.location) {
        currentLocation.value = route.query.location
        relevantAdvices.value = store.getAdvicesByLocation(route.query.location)
    }
})

const tripDetails = computed(() => {
    if (!store.state.currentUser) return null
    return store.state.trips.find(t => 
        t.user === store.state.currentUser.username && 
        t.location === currentLocation.value
    )
})

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

function goToConsiglio(id) {
    if (id) {
         router.push({ 
            path: '/consiglio', 
            query: { 
                id: id,
                type: 'trip', // Match the param name expected by Consiglio
                location: currentLocation.value // Pass the specific location
            } 
        })
    } else {
         router.push('/consiglio')
    }
}
</script>

<template>
  <div class="w-full min-h-screen bg-whitesmoke overflow-y-auto font-urbanist">
    <div class="w-full md:w-1/3 min-w-[25.125rem] mx-auto min-h-screen relative bg-whitesmoke text-center text-black shadow-2xl flex flex-col">
      
      <!-- Header -->
      <div class="shrink-0 flex items-center justify-between px-5 py-4 mt-4 bg-whitesmoke z-10">
        <div class="flex flex-col items-start gap-1">
             <div class="flex items-center gap-4">
                 <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="onBackClick" />
                 <b class="text-[2.5rem] leading-none text-black">{{ currentLocation }}</b>
             </div>
             <div v-if="tripDetails" class="ml-[3.5rem] flex items-center gap-2 opacity-70">
                <img :src="calendarIcon" class="w-[1.25rem] h-[1.25rem] object-contain" alt="Calendar" />
                <div class="text-[1.125rem] font-medium italic">
                    {{ tripDetails.arrival }} - {{ tripDetails.departure }}
                </div>
             </div>
        </div>
      </div>

      <!-- Notice Board Container -->
      <div class="flex-1 w-full px-4 pb-[6rem]">
          <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-1 h-full min-h-[400px]">
            
            <div v-if="relevantAdvices.length === 0" class="text-white w-full text-center mt-10 italic text-xl">
                Nessun consiglio trovato per {{ currentLocation }}.
            </div>

            <!-- Grid Layout for 2 columns -->
            <div class="grid grid-cols-2 gap-x-1 gap-y-4 place-items-center">
                
                <div v-for="card in relevantAdvices" :key="card.id"
                     class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative"
                     @click="goToConsiglio(card.id)">
                     
                    <!-- Image Placeholder -->
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img v-if="card.image" :src="card.image" class="w-full h-full object-cover" alt="Image" />
                        <span v-else>Foto</span>
                    </div>
                    
                    <!-- Location -->
                    <div class="flex items-center gap-1 w-full justify-start pl-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black truncate">{{ card.location }}</span>
                    </div>

                    <!-- Title -->
                    <div class="text-[0.9rem] font-bold leading-tight text-center w-full px-1 min-h-[2.5rem] flex items-center justify-center line-clamp-2">{{ card.title }}</div>
                    
                    <!-- User Tag (Sender) -->
                    <div class="text-[0.7rem] underline mt-auto mb-1 w-full text-center">@{{ card.sender }}</div>
                </div>

            </div>
          </div>
      </div>
      
      <!-- Fixed Navbar -->
      <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:w-1/3 min-w-[25.125rem] h-[4.188rem] bg-darkslategray border-t border-gray-300 flex justify-around items-center z-50">
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