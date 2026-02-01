<script setup>
import paolaImg from '../assets/icons-all/paola.svg'
import gianniImg from '../assets/icons-all/gianni.svg'
import suitcaseIcon from '../assets/icons-all/suitcase.svg'
import houseIcon from '../assets/icons-all/house-fill.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

function onGroupContainerClick() {
		router.push('/dai-un-consiglio')
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
</script>

<template>
  	<div class="w-full min-h-screen bg-whitesmoke flex flex-col items-center pb-[5rem] font-urbanist">
        
        <!-- Feed Container -->
        <div class="w-full md:w-1/3 flex flex-col gap-6 px-5 mt-4">
            
            <!-- Header -->
            <div class="w-full flex items-end">
                <b class="text-[2.5rem] leading-none text-black">Experio</b>
            </div>
            
            <!-- Paola Card -->
            <div class="relative w-full rounded-[20px] bg-goldenrod p-6 flex flex-col gap-4 text-black shadow-[0px_0px_10px_6px_#1a5e63]">
                
                <div class="flex items-center gap-4">
                    <!-- Avatar -->
                    <img class="w-[6.5rem] h-[6.5rem] rounded-full object-cover shrink-0" :src="paolaImg" alt="Paola" />
                    
                    <div class="flex flex-col">
                        <!-- Name -->
                        <div class="text-[3.25rem] font-twinkle-star leading-none">Paola</div>
                        
                        <!-- Location -->
                        <div class="flex items-center gap-2 mt-1">
                            <img class="w-6 h-6" :src="suitcaseIcon" alt="Location" />
                            <span class="text-[1.5rem] font-bold">Parigi</span>
                        </div>
                    </div>
                </div>

                <!-- Bio -->
                <div class="text-[1.375rem] leading-tight">
                    Sono molto appassionata di rocknroll, cerco qualche consilgio per visitare Parigi attraverso i concerti
                </div>

                <!-- Action Button -->
                <div class="w-full flex justify-center mt-2">
                    <button 
                        class="w-[11.5rem] h-[2.8rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-darkslategray border-dimgray border-solid border-[2px] box-border text-white font-urbanist font-bold text-[1rem] hover:opacity-90 transition-opacity cursor-pointer"
                        @click="onGroupContainerClick"
                    >
                        Consiglia
                    </button>
                </div>
            </div>

            <!-- Gianni Card -->
            <div class="relative w-full rounded-[20px] bg-goldenrod p-6 flex flex-col gap-4 text-black shadow-[0px_0px_10px_6px_#1a5e63]">
                
                <div class="flex items-center gap-4">
                    <!-- Avatar -->
                    <img class="w-[6.5rem] h-[6.5rem] rounded-full object-cover shrink-0" :src="gianniImg" alt="Gianni" />
                    
                    <div class="flex flex-col">
                        <!-- Name -->
                        <div class="text-[3.25rem] font-twinkle-star leading-none">Gianni</div>
                        
                        <!-- Location -->
                        <div class="flex items-center gap-2 mt-1">
                            <img class="w-6 h-6" :src="suitcaseIcon" alt="Location" />
                            <span class="text-[1.5rem] font-bold">Parigi</span>
                        </div>
                    </div>
                </div>

                <!-- Bio -->
                <div class="text-[1.375rem] leading-tight">
                    Cerco delle belle camminate stimolanti in mezzo alla natura o in esplorazione della città
                </div>

                <!-- Action Button -->
                <div class="w-full flex justify-center mt-2">
                    <button 
                        class="w-[11.5rem] h-[2.8rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-darkslategray border-dimgray border-solid border-[2px] box-border text-white font-urbanist font-bold text-[1rem] hover:opacity-90 transition-opacity cursor-pointer"
                        @click="onGroupContainerClick"
                    >
                        Consiglia
                    </button>
                </div>
            </div>

            <!-- Test Card (Marco) -->
            <div class="relative w-full rounded-[20px] bg-goldenrod p-6 flex flex-col gap-4 text-black shadow-[0px_0px_10px_6px_#1a5e63]">
                
                <div class="flex items-center gap-4">
                    <!-- Avatar -->
                    <img class="w-[6.5rem] h-[6.5rem] rounded-full object-cover shrink-0" :src="paolaImg" alt="Marco" />
                    
                    <div class="flex flex-col">
                        <!-- Name -->
                        <div class="text-[3.25rem] font-twinkle-star leading-none">Marco</div>
                        
                        <!-- Location -->
                        <div class="flex items-center gap-2 mt-1">
                            <img class="w-6 h-6" :src="suitcaseIcon" alt="Location" />
                            <span class="text-[1.5rem] font-bold">Roma</span>
                        </div>
                    </div>
                </div>

                <!-- Bio -->
                <div class="text-[1.375rem] leading-tight">
                    Vorrei scoprire i migliori ristoranti tradizionali e le piazzette nascoste del centro.
                </div>

                <!-- Action Button -->
                <div class="w-full flex justify-center mt-2">
                    <button 
                        class="w-[11.5rem] h-[2.8rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-darkslategray border-dimgray border-solid border-[2px] box-border text-white font-urbanist font-bold text-[1rem] hover:opacity-90 transition-opacity cursor-pointer"
                        @click="onGroupContainerClick"
                    >
                        Consiglia
                    </button>
                </div>
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