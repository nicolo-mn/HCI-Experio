<script setup>
import { useRouter } from 'vue-router'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import locationIcon from '../assets/icons-all/location.svg'
import binIcon from '../assets/icons-all/bin.svg'

const router = useRouter()

function goBack() {
    router.back()
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
      
      <!-- Content Area: Center the card vertically and horizontally -->
      <div class="flex-1 flex flex-col items-center justify-center w-full gap-4">
          
          <!-- Slider Area: Arrow Left + Card + Arrow Right -->
          <div class="flex items-center justify-center w-full gap-2">
              <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Previous" />
              
              <!-- Card -->
              <div class="relative w-[20.056rem] h-[26.656rem] shrink-0">
                  <div class="absolute top-0 left-0 w-full h-full bg-goldenrod rounded-[20.31px] shadow-[0px_4px_8.12px_#662c00]" />
                  
                  <!-- Card Content -->
                  <div class="relative w-full h-full flex flex-col items-center p-4">
                      <!-- Image -->
                      <img src="https://via.placeholder.com/150" class="w-[17.263rem] h-[10.794rem] object-cover rounded-[8.53px] mt-2 bg-black/10" alt="Castle" />
                      
                      <!-- Title and Description -->
                      <div class="mt-4 flex flex-col items-center text-center w-full gap-2">
                          <b class="text-[1.365rem]">Karlsruhe Castle</b>
                          <div class="text-[1.104rem] leading-tight px-2">
                              Si tratta di un castello molto affascinante con all’interno un museo ed un grande parco attorno, perfetto per te che sei appassionata di passeggiate!!!
                          </div>
                      </div>
                      
                      <!-- Footer Info -->
                      <div class="mt-auto w-full flex items-center justify-between px-2 pb-2">
                           <div class="flex items-center gap-1">
                               <img :src="locationIcon" class="w-[1rem] h-[1rem]" alt="Location" />
                               <span class="text-[1.1rem]">Karlsruhe</span>
                           </div>
                           <span class="text-[1.1rem] font-medium underline">@Paola</span>
                      </div>
                  </div>
              </div>
              
              <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer rotate-180" alt="Next" />
          </div>

      </div>

       <!-- Bottom Action: Delete Button -->
       <div class="shrink-0 w-full mb-20 flex justify-center">
            <button class="w-1/2 h-[3.125rem] bg-red-500 rounded-[5px] flex items-center justify-center shadow-md active:scale-95 transition-transform">
                 <img :src="binIcon" class="w-6 h-6 object-contain filter brightness-0 invert" alt="Delete" />
            </button>
       </div>

    </div>
  </div>
</template>