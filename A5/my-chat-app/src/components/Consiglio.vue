<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { store } from "../services/store"
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import locationIcon from '../assets/icons-all/location.svg'
import binIcon from '../assets/icons-all/bin.svg'

const router = useRouter()
const route = useRoute()

onMounted(() => {
    store.init()
})

const currentId = computed(() => parseInt(route.query.id))
const currentUser = computed(() => store.state.currentUser)

const advice = computed(() => {
    if (!store.state.advices) return null
    return store.state.advices.find(a => a.id === currentId.value) || null
})

const adviceList = computed(() => {
    if (!currentUser.value || !advice.value) return []
    const me = currentUser.value.username
    
    // If I am the sender, show sent advices
    if (advice.value.sender === me) {
        return store.state.advices
            .filter(a => a.sender === me)
            .sort((a, b) => b.timestamp - a.timestamp)
    }
    // If I am the receiver, show received advices
    else {
        return store.state.advices
            .filter(a => a.receiver === me)
            .sort((a, b) => b.timestamp - a.timestamp)
    }
})

const currentIndex = computed(() => {
    if (!advice.value) return -1
    return adviceList.value.findIndex(a => a.id === advice.value.id)
})

const prevId = computed(() => {
    // List is sorted DESC by timestamp (Newest first)
    // So "Previous" visual item (Left) could be interpreted as "Newer" (index - 1)
    if (currentIndex.value > 0) {
        return adviceList.value[currentIndex.value - 1].id
    }
    return null
})

const nextId = computed(() => {
    // "Next" visual item (Right) could be interpreted as "Older" (index + 1)
    if (currentIndex.value !== -1 && currentIndex.value < adviceList.value.length - 1) {
        return adviceList.value[currentIndex.value + 1].id
    }
    return null
})

function goToAdvice(id) {
    if (id) {
        router.replace({ query: { ...route.query, id } })
    }
}

function goBack() {
    router.back()
}

function onDelete() {
    if (confirm("Vuoi eliminare questo consiglio?")) {
        alert("Funzionalità di eliminazione non ancora attiva.")
    }
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl overflow-hidden p-4">
      
       <!-- Header -->
      <div class="shrink-0 flex items-center gap-4 mt-4 mb-4">
         <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="goBack" />
         <b class="text-[2.5rem] leading-none text-black">Consiglio</b>
      </div>
      
      <!-- Content Area -->
      <div class="flex-1 flex flex-col items-center justify-center w-full gap-4">
          
          <div v-if="!advice" class="text-center text-xl">Caricamento o Consiglio non trovato...</div>

          <!-- Slider Area: Arrow Left + Card + Arrow Right -->
          <div v-else class="flex items-center justify-center w-full gap-2">
              <img 
                v-if="prevId"
                :src="arrowLeft" 
                class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" 
                alt="Previous" 
                @click="goToAdvice(prevId)"
              />
              <div v-else class="w-[1.875rem] h-[1.875rem]" /> <!-- Spacer -->
              
              <!-- Card -->
              <div class="relative w-[20.056rem] h-[26.656rem] shrink-0">
                  <div class="absolute top-0 left-0 w-full h-full bg-goldenrod rounded-[20.31px] shadow-[0px_4px_8.12px_#662c00]" />
                  
                  <!-- Card Content -->
                  <div class="relative w-full h-full flex flex-col items-center p-4">
                      <!-- Image -->
                      <img v-if="advice.image" :src="advice.image" class="w-[17.263rem] h-[10.794rem] object-cover rounded-[8.53px] mt-2 bg-black/10" alt="Image" />
                       <div v-else class="w-[17.263rem] h-[10.794rem] bg-black/10 rounded-[8.53px] mt-2 flex items-center justify-center">No Image</div>
                      
                      <!-- Title and Description -->
                      <div class="mt-4 flex flex-col items-center text-center w-full gap-2 overflow-hidden">
                          <b class="text-[1.365rem] truncate w-full px-2">{{ advice.title }}</b>
                          <div class="text-[1.104rem] leading-tight px-2 h-[8rem] overflow-y-auto">
                              {{ advice.description }}
                          </div>
                      </div>
                      
                      <!-- Footer Info -->
                      <div class="mt-auto w-full flex items-center justify-between px-2 pb-2">
                           <div class="flex items-center gap-1">
                               <img :src="locationIcon" class="w-[1rem] h-[1rem]" alt="Location" />
                               <span class="text-[1.1rem]">{{ advice.location }}</span>
                           </div>
                           <span class="text-[1.1rem] font-medium underline">@{{ advice.sender }}</span>
                      </div>
                  </div>
              </div>
              
              <img 
                v-if="nextId"
                :src="arrowLeft" 
                class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer rotate-180" 
                alt="Next" 
                @click="goToAdvice(nextId)"
              />
              <div v-else class="w-[1.875rem] h-[1.875rem]" /> <!-- Spacer -->
          </div>

      </div>

       <!-- Bottom Action: Delete Button -->
       <div class="shrink-0 w-full mb-20 flex justify-center" v-if="advice">
            <button class="w-1/2 h-[3.125rem] bg-red-500 rounded-[5px] flex items-center justify-center shadow-md active:scale-95 transition-transform" @click="onDelete">
                 <img :src="binIcon" class="w-6 h-6 object-contain filter brightness-0 invert" alt="Delete" />
            </button>
       </div>

    </div>
  </div>
</template>