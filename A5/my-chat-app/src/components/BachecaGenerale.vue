<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()

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
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl overflow-y-auto">
      
      <!-- Background Border/Frame -->
      <div class="absolute top-[7.563rem] left-[0.75rem] right-[0.75rem] bg-saddlebrown-100 border-saddlebrown-200 border-solid border-[7px] box-border h-[45.063rem]" />
      
      <!-- Header -->
      <div class="absolute top-[0rem] left-[0rem] w-full h-[3.375rem] overflow-hidden" />
      <div class="absolute top-[3.375rem] right-[0rem] w-full h-[3.938rem] overflow-hidden text-[2.5rem]">
        <b class="absolute top-[0.375rem] left-[2.563rem] shrink-0">Bacheca</b>
        <img :src="arrowLeft" class="absolute top-[1.063rem] left-[0.688rem] w-[1.875rem] h-[1.875rem] object-contain shrink-0 cursor-pointer" alt="Back" @click="onBackClick" />
      </div>

      <!-- Content Items (keeping absolute for now but slightly adapting) -->
      <div class="absolute top-[9rem] left-[55%] w-[40%] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-num-10 bg-goldenrod w-full h-full" />
        <div class="absolute top-[9.313rem] left-[0.375rem] text-[1.25rem] font-semibold leading-tight">Karlsruhe Castle</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Karlsruhe</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-num-4_2 w-[80%] h-[5.313rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Marco</div>
      </div>

      <div class="absolute top-[9rem] left-[5%] w-[40%] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-num-10 bg-goldenrod w-full h-full" />
        <div class="absolute top-[9.313rem] left-[0.375rem] text-[1.25rem] font-semibold leading-tight">Karlsruhe Castle</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Karlsruhe</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-num-4_2 w-[80%] h-[5.313rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Paola</div>
      </div>

      <div class="absolute top-[23.688rem] left-[55%] w-[40%] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-num-10 bg-goldenrod w-full h-full" />
        <div class="absolute top-[8.938rem] left-[1rem] text-[1.25rem] font-semibold leading-tight">Duomo di<br/> Milano</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Milan</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Giovanni</div>
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-num-4_2 w-[80%] h-[5.313rem] object-cover" alt="" />
      </div>

      <div class="absolute top-[23.688rem] left-[5%] w-[40%] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-num-10 bg-goldenrod w-full h-full" />
        <div class="absolute top-[9rem] left-[0.5rem] text-[1.25rem] font-semibold leading-tight">Galleria V.<br/> Emanuele</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Milan</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Ludovica</div>
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-num-4_2 w-[80%] h-[5.313rem] object-cover" alt="" />
      </div>

      <div class="absolute top-[38.375rem] left-[5%] w-[40%] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-num-10 bg-goldenrod w-full h-full" />
        <div class="absolute top-[9.313rem] left-[0.688rem] text-[1.25rem] font-semibold leading-tight">Muro di Berlino</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Germany</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-num-4_2 w-[80%] h-[5.313rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Ernst</div>
      </div>
      
      <!-- Spacer for scroll -->
      <div class="h-[60rem] w-full"></div>

    </div>

    <!-- Fixed Navbar -->
    <div class="fixed bottom-0 left-0 w-full h-[4.188rem] bg-darkslategray border-t border-gray-300 flex justify-center z-50">
        <div class="w-full md:w-1/3 flex justify-around items-center h-full">
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