<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane-fill.svg'
import personIcon from '../assets/icons-all/person.svg'
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
  <div class="w-full min-h-screen bg-whitesmoke overflow-y-auto">
    <div class="w-1/3 min-w-[25.125rem] mx-auto h-[54.625rem] relative bg-whitesmoke text-center text-[0.938rem] text-black font-urbanist shadow-2xl">
      <div class="absolute top-[7.563rem] left-[0.75rem] bg-saddlebrown-100 border-saddlebrown-200 border-solid border-[7px] box-border w-[23.625rem] h-[42rem]" />
      <div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />
      <div class="absolute top-[3.375rem] right-[0rem] w-[25.125rem] h-[3.938rem] overflow-hidden text-[2.5rem]">
        <b class="absolute top-[0.375rem] left-[2.563rem] shrink-0">Milan</b>
        <img :src="arrowLeft" class="absolute top-[1.063rem] left-[0.688rem] w-[1.875rem] h-[1.875rem] object-contain shrink-0 cursor-pointer" alt="Back" @click="onBackClick" />
        <img class="absolute top-[1.063rem] left-[19.813rem] w-[1.875rem] h-[1.875rem] shrink-0" alt="" />
        <img class="absolute top-[1.063rem] left-[22.25rem] w-[1.875rem] h-[1.875rem] shrink-0" alt="" />
      </div>
      <div class="absolute top-[9rem] left-[13.5rem] w-[9.875rem] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.875rem] h-[13.125rem]" />
        <div class="absolute top-[8.938rem] left-[2.25rem] text-[1.25rem] font-semibold">Duomo di<br/> Milano</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Milan</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Giovanni</div>
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-[4.2px] w-[8.5rem] h-[5.313rem] object-cover" alt="" />
      </div>
      <div class="absolute top-[9rem] left-[1.688rem] w-[9.875rem] h-[13.125rem]">
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.875rem] h-[13.125rem]" />
        <div class="absolute top-[9rem] left-[0.5rem] text-[1.25rem] font-semibold">Galleria Vittorio<br/> Emanuele II</div>
        <div class="absolute top-[7.313rem] left-[2.688rem] inline-block w-[4.938rem] h-[0.875rem]">Milan</div>
        <img class="absolute top-[6.938rem] left-[2.063rem] w-[1.25rem] h-[1.25rem] object-cover" alt="" />
        <div class="absolute top-[12rem] left-[2.5rem] [text-decoration:underline] inline-block w-[4.831rem]">@Ludovica</div>
        <img class="absolute top-[0.813rem] left-[0.688rem] rounded-[4.2px] w-[8.5rem] h-[5.313rem] object-cover" alt="" />
      </div>
      <img class="absolute top-[50.438rem] left-[0rem] w-[25.125rem] h-[4.188rem]" alt="" />

      <!-- Fixed Navbar -->
      <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-1/3 min-w-[25.125rem] h-[4.188rem] bg-darkslategray border-t border-gray-300 flex justify-around items-center z-50">
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