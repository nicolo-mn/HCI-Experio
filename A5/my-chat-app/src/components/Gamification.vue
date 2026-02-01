<script setup>
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { store } from "../services/store"
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()
const user = computed(() => store.state.currentUser)
const sentCount = ref(0)
const receivedCount = ref(0)

onMounted(() => {
    store.init()
    if (user.value) {
        sentCount.value = store.getSentAdvices(user.value.username).length
        receivedCount.value = store.getReceivedAdvices(user.value.username).length
        store.markBadgesAsRead()
    }
})

// Define milestones logic
const milestones = computed(() => [
    {
        id: 'first-received',
        title: 'Primo Consiglio Ricevuto',
        unlocked: receivedCount.value >= 1,
        image: 'https://via.placeholder.com/150/FFD700/000000?text=1st+Received'
    },
    {
        id: 'first-given',
        title: 'Primo Consiglio Dato',
        unlocked: sentCount.value >= 1,
        image: 'https://via.placeholder.com/150/FFD700/000000?text=1st+Given'
    },
    {
        id: '50-received',
        title: '50 Consigli Ricevuti',
        unlocked: receivedCount.value >= 50,
        image: 'https://via.placeholder.com/150/C0C0C0/000000?text=50+Received'
    },
    {
        id: '50-given',
        title: '50 Consigli Dati',
        unlocked: sentCount.value >= 50,
        image: 'https://via.placeholder.com/150/C0C0C0/000000?text=50+Given'
    }
])

function onBackClick() {
    router.back()
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative overflow-hidden">
      
       <!-- Header -->
      <div class="shrink-0 flex items-center px-5 py-4 mt-4 bg-whitesmoke z-50">
        <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer mr-4" alt="Back" @click="onBackClick" />
        <b class="text-[2.5rem] leading-none text-black">Premi</b>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto w-full p-5 pb-[5rem]">
         <!-- Notice Board Container -->
         <div class="w-full bg-[#8B4513] border-[6px] border-solid border-[#662c00] p-4 min-h-[500px]">
            
            <!-- Flex Wrap Layout -->
            <div class="flex flex-wrap justify-center gap-3">
                
                <div v-for="milestone in milestones" :key="milestone.id"
                     class="w-[8.5rem] h-[12.5rem] shrink-0 bg-goldenrod shadow-[0px_0px_4px_4px_#662c00] border-2 border-[#1a5e63]/50 rounded-none p-2 flex flex-col items-center justify-center gap-2 transition-all duration-300"
                     :class="{ 'grayscale opacity-50': !milestone.unlocked, 'scale-105 shadow-xl': milestone.unlocked }">
                    
                    <img :src="milestone.image" class="w-[80%] h-[50%] object-contain" :alt="milestone.title" />
                    
                    <b class="text-[0.9rem] text-center leading-tight">{{ milestone.title }}</b>
                    
                    <div v-if="!milestone.unlocked" class="text-xs text-red-800 font-bold bg-white/50 px-2 rounded-full mt-1">
                        BLOCCATO
                    </div>
                </div>

            </div>
         </div>
      </div>

    </div>
  </div>
</template>