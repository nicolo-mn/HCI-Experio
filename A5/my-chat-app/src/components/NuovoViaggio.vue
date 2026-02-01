<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { store } from "../services/store"
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()

const form = reactive({
    location: '',
    arrival: '',
    departure: ''
})

function goBack() {
    router.back()
}

function onSave() {
    if (!form.location || !form.arrival || !form.departure) {
        alert("Inserisci tutti i campi")
        return
    }

    try {
        store.init()
        store.createTrip({
            location: form.location,
            arrival: form.arrival,
            departure: form.departure
        })
        alert("Viaggio creato!")
        router.back()
    } catch (e) {
        alert(e.message) // e.g. "Must be logged in"
    }
}

function onCancel() {
    router.back()
}
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
      
      <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
      <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl">
          
          <!-- Header -->
          <div class="w-full shrink-0 flex items-center px-5 py-6 mt-4 z-10">
               <!-- Back Arrow -->
              <div class="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 mr-4" @click="goBack">
                  <img :src="arrowLeft" class="w-6 h-6 object-contain" alt="Back" />
              </div>
              <b class="text-[2.5rem] leading-none text-black">Nuovo Viaggio</b>
          </div>

          <!-- Form Area -->
          <div class="flex-1 w-full flex flex-col gap-6 px-5 md:px-10 pt-8 overflow-y-auto">
              
              <!-- Luogo Field -->
               <div class="flex flex-col gap-2">
                  <label class="text-[1.25rem] font-bold text-black tracking-wide">Luogo</label>
                  <input 
                      v-model="form.location"
                      type="text" 
                      placeholder="Inserisci luogo"
                      class="w-full p-4 rounded-[10px] border-2 border-[#1a5e63] bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#1a5e63]"
                  />
              </div>

               <!-- Dates Row -->
               <div class="flex items-center justify-between gap-4 mt-4">
                   <!-- Arrivo -->
                   <div class="flex flex-col gap-2 flex-1 min-w-0">
                        <label class="text-lg font-bold text-black flex items-center gap-2">
                            Arrivo
                        </label>
                        <input 
                            v-model="form.arrival"
                            type="date"
                            class="w-full p-3 rounded-[10px] border-2 border-[#1a5e63] bg-white text-base focus:outline-none"
                        />
                   </div>

                   <!-- Divider -->
                   <div class="h-[3rem] w-[2px] bg-[#1a5e63] self-end mb-2 opacity-50 flex-shrink-0"></div>

                    <!-- Partenza -->
                   <div class="flex flex-col gap-2 flex-1 min-w-0">
                        <label class="text-lg font-bold text-black flex items-center gap-2">
                            Partenza
                        </label>
                        <input 
                            v-model="form.departure"
                            type="date"
                            class="w-full p-3 rounded-[10px] border-2 border-[#1a5e63] bg-white text-base focus:outline-none"
                        />
                   </div>
               </div>

          </div>

          <!-- Footer Actions -->
          <div class="w-full shrink-0 pb-10 pt-4 px-10 flex flex-col gap-4 bg-whitesmoke">
              <button 
                  class="w-full py-4 rounded-[10px] bg-[#1a5e63] text-white text-xl font-bold shadow-md hover:opacity-90 transition-opacity"
                  @click="onSave"
              >
                  Salva
              </button>
              
               <button 
                  class="w-full py-4 rounded-[10px] bg-goldenrod text-white text-xl font-bold shadow-md hover:opacity-90 transition-opacity"
                  @click="onCancel"
              >
                  Cancella
              </button>
          </div>

      </div>
  </div>
</template>