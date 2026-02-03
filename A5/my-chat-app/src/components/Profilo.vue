<script setup>
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { store } from "../services/store"
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import notificationsIcon from '../assets/icons-all/notifications.svg'
import positionPinIcon from '../assets/icons-all/location.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import logoutIcon from '../assets/icons-all/logout.svg'
import gamificationCupIcon from '../assets/icons-all/gamification-cup.svg'
import chatIcon from '../assets/icons-all/chat.svg'

const router = useRouter()

function onLogoutClick() {
    store.logout()
    router.push('/')
}


const receivedAdvices = ref([])
const sentAdvices = ref([])
const user = computed(() => store.state.currentUser)

onMounted(() => {
    store.init()
    if (user.value) {
        receivedAdvices.value = store.getReceivedAdvices(user.value.username)
        sentAdvices.value = store.getSentAdvices(user.value.username)
    }
})

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

function goToConsiglio(id, type) {
    if (id) {
        const query = { id: id }
        if (type) query.type = type
        router.push({ path: '/consiglio', query: query })
    } else {
        router.push('/consiglio')
    }
}
</script>

<template>
  <div class="w-full min-h-screen bg-whitesmoke flex flex-col items-center pb-[6rem] font-urbanist">
      
    <!-- Profile Content -->
    <div class="w-full md:w-1/3 flex flex-col gap-3 px-5 mt-10">
        
        <!-- Header: Avatar, Name, Actions -->
        <div class="flex items-center justify-between px-2">
            <div class="flex items-center gap-4">
                <img :src="store.resolveAvatar(user ? user.username : '')" class="w-[3.25rem] h-[3.25rem] rounded-full object-cover shadow-sm border-[1px] border-black/10" alt="Avatar" />
                <span class="text-[1.875rem] font-bold text-black">{{ user ? user.name : 'Ospite' }}</span>
            </div>
            <div class="flex items-center gap-2">
                 <img :src="chatIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity filter brightness-0" alt="Chat" @click="goToListaChat" />
                 <div class="relative w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" @click="goToGamification">
                    <img :src="gamificationCupIcon" class="w-full h-full" alt="Gamification" />
                    <div v-if="user && user.hasUnreadBadges" class="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
                 </div>
                 <img :src="notificationsIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" alt="Notifications" @click="onNotificationsIconClick" />
                 <img :src="logoutIcon" class="w-[1.7rem] h-[1.7rem] cursor-pointer hover:opacity-70 transition-opacity" alt="Logout" @click="onLogoutClick" />
            </div>
        </div>

        <!-- Bio -->
        <div class="text-[1.25rem] font-medium leading-tight text-black mt-1 px-2">
            {{ user ? user.description : 'Registrati per vedere il tuo profilo!' }}
        </div>

        <!-- Zones Chips -->
        <div v-if="user && user.zones && user.zones.length > 0" class="flex flex-wrap gap-2 mt-1 px-2">
            <div 
                v-for="zone in user.zones" 
                :key="zone"
                class="bg-darkslategray text-white px-3 py-1 rounded-[15px] flex items-center text-[0.875rem] font-bold"
            >
                {{ zone }}
            </div>
        </div>

        <!-- Bio Separator -->
        <div class="w-full h-[1px] bg-black opacity-20 my-1"></div>

        <!-- Section: La mia bacheca (Received Advices) -->
        <div class="flex flex-col gap-1 mt-1">
            <div class="flex items-center gap-2 mb-1 px-2 cursor-pointer hover:opacity-80" @click="goToBachecaGenerale">
                 <span class="text-[1.5rem] font-semibold text-black">La mia bacheca</span>
                 <!-- Arrow Right -->
                 <img :src="arrowLeft" class="w-[1.2rem] h-[1.2rem] object-contain transform rotate-180" alt="Go" />
            </div>

            <!-- Brown Container (Notice Board) -->
            <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-2 flex justify-start gap-4 overflow-x-auto min-h-[14rem]">
                
                 <div v-if="receivedAdvices.length === 0" class="text-white w-full text-center mt-10 italic">
                    Nessun consiglio ricevuto ancora.
                </div>

                <div 
                    v-for="advice in receivedAdvices" 
                    :key="advice.id"
                    class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative"
                    @click="goToConsiglio(advice.id, 'received')"
                >
                    <!-- Image -->
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                        <img v-if="advice.image" :src="advice.image" class="w-full h-full object-cover" alt="Image" />
                        <span v-else>Foto</span>
                    </div>
                    
                    <!-- Location -->
                    <div class="flex items-center gap-1 w-full justify-start px-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black truncate">{{ advice.location }}</span>
                    </div>

                    <!-- Title -->
                    <div class="text-[0.9rem] font-bold leading-tight text-center line-clamp-2 w-full">{{ advice.title }}</div>
                    

                </div>

            </div>
        </div>

        <!-- Section: Consigli donati (Sent Advices) -->
        <div class="flex flex-col gap-1 mt-2">
             <div class="flex items-center gap-2 mb-1 px-2 cursor-pointer hover:opacity-80" @click="goToConsigliDati">
                 <span class="text-[1.5rem] font-semibold text-black">Consigli dati</span>
                 <img :src="arrowLeft" class="w-[1.2rem] h-[1.2rem] object-contain transform rotate-180" alt="Go" />
            </div>

            <!-- Brown Container (Notice Board) -->
            <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-2 flex justify-start gap-4 overflow-x-auto min-h-[14rem]">
                
                <div v-if="sentAdvices.length === 0" class="text-white w-full text-center mt-10 italic">
                    Non hai ancora dato consigli.
                </div>

                 <div 
                    v-for="advice in sentAdvices" 
                    :key="advice.id"
                    class="min-w-[9.375rem] w-[9.375rem] h-[11.813rem] rounded-[10px] bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] p-2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-95 transition-opacity shrink-0 relative"
                    @click="goToConsiglio(advice.id, 'sent')"
                >
                    <!-- Image -->
                    <div class="w-[7.856rem] h-[4.913rem] bg-black/10 rounded-[4.2px] mb-1 flex items-center justify-center text-black/20 font-bold overflow-hidden">
                       <img v-if="advice.image" :src="advice.image" class="w-full h-full object-cover" alt="Image" />
                       <span v-else class="text-[0.7rem]">Nessuna foto</span>
                    </div>
                    
                    <!-- Location -->
                    <div class="flex items-center gap-1 w-full justify-start px-1">
                        <img :src="positionPinIcon" class="w-[0.8rem] h-[0.8rem]" alt="Pin" />
                        <span class="text-[0.8rem] text-black truncate">{{ advice.location }}</span>
                    </div>

                    <!-- Title -->
                    <div class="text-[0.9rem] font-bold leading-tight text-center line-clamp-2 w-full">{{ advice.title }}</div>
                    

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