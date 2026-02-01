<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import settingsIcon from '../assets/icons-all/settings.svg'
import notificationsIcon from '../assets/icons-all/notifications.svg'
import chiaraImg from '../assets/icons-all/chiara.svg'
import positionPinIcon from '../assets/icons-all/location.svg' 
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import gamificationCupIcon from '../assets/icons-all/gamification-cup.svg'
import chatIcon from '../assets/icons-all/chat.svg'

const router = useRouter()

function goToHome() {
    router.push('/home')
}

function goToTrips() {
    router.push('/tutti-viaggi')
}

function goToProfile() {
    router.push('/profilo')
}

function onNotificationsIconClick() {
    router.push('/notifiche')
}

function goToGamification() {
    router.push('/gamification')
}

function goToListaChat() {
    router.push('/lista-chat')
}

function goToBachecaGenerale() {
    router.push('/bacheca-generale')
}

function goToConsigliDati() {
    router.push('/consigli-dati')
}
</script>

<template>
  <div class="w-full min-h-screen bg-whitesmoke flex flex-col items-center pb-[6rem] font-urbanist">
      
    <!-- Profile Content -->
    <div class="w-full md:w-1/3 flex flex-col gap-3 px-5 mt-10">
        
        <!-- Header: Avatar, Name, Actions -->
        <div class="flex items-center justify-between px-2">
            <div class="flex items-center gap-4">
                <img :src="chiaraImg" class="w-[3.25rem] h-[3.25rem] rounded-full object-cover shadow-sm" alt="Chiara" />
                <span class="text-[1.875rem] font-bold text-black">Chiara</span>
            </div>
            <div class="flex items-center gap-2">
                 <img :src="chatIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity filter brightness-0" alt="Chat" @click="goToListaChat" />
                 <img :src="gamificationCupIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" alt="Gamification" @click="goToGamification" />
                 <img :src="notificationsIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" alt="Notifications" @click="onNotificationsIconClick" />
                 <img :src="settingsIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" alt="Settings" />
            </div>
        </div>

        <!-- Bio -->
        <div class="text-[1.25rem] font-medium leading-tight text-black mt-1 px-2">
            Mi piacciono i croissant, le passeggiate nei parchi e i palazzi storici.
        </div>

        <!-- Bio Separator -->
        <div class="w-full h-[1px] bg-black opacity-20 my-1"></div>

        <!-- Section: La mia bacheca -->
        <div class="flex flex-col gap-1 mt-1">
            <div class="flex items-center gap-2 mb-1 px-2 cursor-pointer hover:opacity-80" @click="goToBachecaGenerale">
                 <span class="text-[1.5rem] font-semibold text-black">La mia bacheca</span>
                 <!-- Arrow Right -->
                 <img :src="arrowLeft" class="w-[1.2rem] h-[1.2rem] object-contain transform rotate-180" alt="Go" />
            </div>

            <!-- Brown Container (Notice Board) -->
            <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-2 flex justify-center gap-4 overflow-x-auto">
                
                <!-- Card 1 -->
                <div class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative">
                    <!-- Image -->
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img src="https://via.placeholder.com/150" class="w-full h-full object-cover" alt="Castle" />
                    </div>
                    
                    <!-- Location -->
                    <div class="flex items-center gap-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black">Karlsruhe</span>
                    </div>

                    <!-- Title -->
                    <div class="text-[0.9rem] font-bold leading-tight text-center">Karlsruhe Castle</div>
                    
                    <!-- User Tag -->
                    <div class="text-[0.7rem] underline mt-auto mb-1">@Marco</div>
                </div>

                <!-- Card 2 -->
                 <div class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative">
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                         <img src="https://via.placeholder.com/150" class="w-full h-full object-cover" alt="Duomo" />
                    </div>
                    
                    <div class="flex items-center gap-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black">Milan</span>
                    </div>

                    <div class="text-[0.9rem] font-bold leading-tight text-center">Duomo di milano</div>
                    
                    <div class="text-[0.7rem] underline mt-auto mb-1">@Paola</div>
                </div>

            </div>
        </div>

        <!-- Section: Consigli donati -->
        <div class="flex flex-col gap-1 mt-2">
             <div class="flex items-center gap-2 mb-1 px-2 cursor-pointer hover:opacity-80" @click="goToConsigliDati">
                 <span class="text-[1.5rem] font-semibold text-black">Consigli donati</span>
                 <img :src="arrowLeft" class="w-[1.2rem] h-[1.2rem] object-contain transform rotate-180" alt="Go" />
            </div>

            <!-- Brown Container (Notice Board) -->
            <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-2 flex justify-center gap-4 overflow-x-auto">
                <!-- Card 1 -->
                <div class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative">
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img src="https://via.placeholder.com/150" class="w-full h-full object-cover" alt="Scala" />
                    </div>
                    
                    <div class="flex items-center gap-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black">Milano</span>
                    </div>

                    <div class="text-[0.9rem] font-bold leading-tight text-center">La Scala</div>
                    
                    <div class="text-[0.7rem] underline mt-auto mb-1">@Paola</div>
                </div>

                <!-- Card 2 -->
                 <div class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative">
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img src="https://via.placeholder.com/150" class="w-full h-full object-cover" alt="Duomo" />
                    </div>
                    
                    <div class="flex items-center gap-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black">Milan</span>
                    </div>

                    <div class="text-[0.9rem] font-bold leading-tight text-center">Duomo di milano</div>
                    
                    <div class="text-[0.7rem] underline mt-auto mb-1">@Marco</div>
                </div>
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
                <!-- Active Icon (Filled) -->
                <img :src="personIcon" alt="Profile" class="w-full h-full object-contain filter brightness-0 invert" />
            </div>
        </div>
    </div>

  </div>
</template>