<script setup>
import { computed } from 'vue';
import { store } from '../services/store.js';
import paolaImg from '../assets/icons-all/paola.svg'
import gianniImg from '../assets/icons-all/gianni.svg'
import suitcaseIcon from '../assets/icons-all/suitcase.svg'
import houseIcon from '../assets/icons-all/house-fill.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import calendarIcon from '../assets/icons-all/calendar.svg'
import personIcon from '../assets/icons-all/person.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const suggestedUsers = computed(() => {
    // If no currentUser or no zones selected, maybe show all or none? 
    // Requirement: "a user should see only users that are planning trips in the areas (cities) they're expert in"
    // Assuming if no zones selected, show nothing.
    const myZones = store.state.currentUser?.zones || [];
    
    // Filter trips that match my zones
    const relevantTrips = store.state.trips.filter(trip => 
        myZones.some(zone => zone.toLowerCase() === trip.location.toLowerCase())
    );

    // Map to include user details
    return relevantTrips.map(trip => {
        const user = store.state.users.find(u => u.username === trip.user);
        return {
            tripId: trip.id,
            trip: trip,
            user: user || { name: 'Unknown', avatar: 'person', description: '' }
        };
    });
});

function getAvatar(avatarName) {
    if (avatarName === 'paola') return paolaImg;
    if (avatarName === 'gianni') return gianniImg;
    return personIcon; // default
}

function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
}

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
            <div class="w-full flex items-end py-4">
                <b class="text-[2.5rem] leading-none text-black">Experio</b>
            </div>
            
            <!-- Dynamic Cards -->
            <div 
                v-for="item in suggestedUsers" 
                :key="item.tripId"
                class="relative w-full rounded-[20px] bg-goldenrod p-6 flex flex-col gap-4 text-black shadow-[0px_0px_10px_6px_#1a5e63]"
            >
                
                <div class="flex items-center gap-4">
                    <!-- Avatar -->
                    <img class="w-[6.5rem] h-[6.5rem] rounded-full object-cover shrink-0" :src="getAvatar(item.user.avatar)" :alt="item.user.name" />
                    
                    <div class="flex flex-col">
                        <!-- Name -->
                        <div class="text-[3.25rem] font-twinkle-star leading-none">{{ item.user.name }}</div>
                        
                        <!-- Location -->
                        <div class="flex items-center gap-2 mt-1">
                            <img class="w-6 h-6" :src="suitcaseIcon" alt="Location" />
                            <span class="text-[1.5rem] font-bold">{{ item.trip.location }}</span>
                        </div>

                        <!-- Dates -->
                        <div class="flex items-center gap-2 mt-1">
                            <img class="w-6 h-6" :src="calendarIcon" alt="Dates" />
                            <span class="text-[1.25rem] font-bold">
                                {{ formatDate(item.trip.arrival) }} - {{ formatDate(item.trip.departure) }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Bio -->
                <div class="text-[1.375rem] leading-tight">
                    {{ item.user.description }}
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

            <!-- Empty State -->
            <div v-if="suggestedUsers.length === 0" class="text-center text-gray-500 mt-10">
                <p>Nessun utente trovato per le tue zone selezionate.</p>
                <button @click="router.push('/le-tue-zone')" class="text-darkslategray font-bold underline mt-2">
                    Modifica le tue zone
                </button>
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