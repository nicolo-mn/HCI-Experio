<script setup>
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'
import arrowLeft from '../assets/icons-all/arrow-left.svg'

const router = useRouter()

function onPersonaContainerClick() {
  // Add your code here
}

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
    <div class="w-1/3 min-w-[25.125rem] mx-auto h-[70.688rem] relative bg-whitesmoke text-left text-[1.5rem] text-black font-urbanist shadow-2xl">
      <div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />
      <div class="absolute top-[3.375rem] left-[0rem] border-black border-solid border-b-[1px] box-border w-[25.125rem] h-[5.063rem] overflow-hidden text-[2.5rem]">
        <b class="absolute top-[1.063rem] left-[3.25rem]">Messaggi</b>
        <img :src="arrowLeft" class="absolute top-[1.938rem] left-[0.875rem] w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="onBackClick" />
      </div>
      <div class="absolute top-[8.5rem] left-[0rem] border-black border-solid border-b-[1px] box-border w-[25.125rem] h-[4.438rem] overflow-hidden cursor-pointer" @click="onPersonaContainerClick">
        <div class="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_146px)] font-medium inline-block w-[18.75rem] h-[1.125rem]">Paola</div>
        <div class="absolute top-[calc(50%_-_14.5px)] left-[0.938rem] rounded-[50%] bg-gainsboro w-[1.875rem] h-[1.875rem]" />
        <img class="absolute top-[1.313rem] left-[22.5rem] w-[1.875rem] h-[1.875rem]" alt="" />
      </div>
      <div class="absolute top-[12.938rem] left-[0rem] border-black border-solid border-b-[1px] box-border w-[25.125rem] h-[4.438rem] overflow-hidden">
        <div class="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_146px)] font-medium inline-block w-[18.75rem] h-[1.125rem]">Marco</div>
        <div class="absolute top-[calc(50%_-_14.5px)] left-[0.938rem] rounded-[50%] bg-gainsboro w-[1.875rem] h-[1.875rem]" />
        <img class="absolute top-[1.313rem] left-[22.5rem] w-[1.875rem] h-[1.875rem]" alt="" />
      </div>
      
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