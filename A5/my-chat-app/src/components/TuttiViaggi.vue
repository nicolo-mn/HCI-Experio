<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane-fill.svg'
import personIcon from '../assets/icons-all/person.svg'

const router = useRouter()

function onMilanContainerClick() {
  router.push('/bacheca-viaggio-singolo')
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
    <div class="w-1/3 min-w-[25.125rem] mx-auto h-[61.875rem] relative bg-whitesmoke text-left text-[2.5rem] text-black font-urbanist shadow-2xl">
      <div class="absolute top-[9.625rem] left-[0.5rem] w-[24.125rem] h-[50.438rem]">
        <div class="absolute top-[6.5rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Chicago</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[32.5rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Dublin</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[13rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Rome</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[39rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Kyoto</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[45.5rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden cursor-pointer" @click="onMilanContainerClick">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Milan</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[19.5rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Tokyo</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[26rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">New York</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
        <div class="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_6px_#1a5e63] rounded-num-10 bg-goldenrod w-[24.125rem] h-[4.938rem] overflow-hidden">
          <b class="absolute top-[0.875rem] left-[1.688rem] inline-block w-[16.375rem] h-[3.25rem]">Paris</b>
          <img class="absolute top-[1.375rem] left-[20.625rem] w-[1.875rem] h-[1.875rem]" alt="" />
        </div>
      </div>
      <img class="absolute top-[50.125rem] left-[0rem] w-[25.125rem] h-[4.625rem]" alt="" />
      <div class="absolute top-[3.375rem] left-[0rem] w-[25.125rem] h-[3.938rem] overflow-hidden text-center">
        <b class="absolute top-[0.625rem] left-[-0.625rem] inline-block w-[16.375rem] h-[2.75rem] shrink-0">I tuoi viaggi</b>
        <img class="absolute w-[8.71%] top-[calc(50%_-_12.5px)] right-[6.97%] left-[84.33%] max-w-full overflow-hidden h-[2.188rem] cursor-pointer shrink-0" alt="" @click="onMilanContainerClick" />
      </div>
      <div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />

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