<script setup>
import paolaImg from '../assets/icons-all/paola.svg'
import gianniImg from '../assets/icons-all/gianni.svg'
import locationIcon from '../assets/img-all/location.png'
import houseIcon from '../assets/icons-all/house-fill.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  	<div class="w-full min-h-screen bg-whitesmoke overflow-y-auto">
    		<div class="w-1/3 min-w-[25.125rem] mx-auto h-[70.688rem] relative bg-whitesmoke text-center text-[2rem] text-black font-twinkle-star shadow-2xl">
      			<div class="absolute top-[0rem] left-[0rem] w-full h-[3.375rem] overflow-hidden" />
      			<div class="absolute top-[9.25rem] left-1/2 -translate-x-1/2 w-[22.25rem] h-[26.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_9px_#1a5e63] rounded-[20px] bg-goldenrod w-[22.25rem] h-[26.813rem]" />
        				<div class="absolute top-[2.125rem] left-[7.375rem] text-[3.25rem] inline-block w-[10.25rem]">Paola</div>
        				<img class="absolute top-[1.125rem] left-[1.313rem] rounded-[50%] w-[6.563rem] h-[6.563rem] object-cover" :src="paolaImg" alt="Paola" />
        				<div class="absolute top-[5.313rem] left-[7.875rem] inline-block w-[10.438rem]">Parigi</div>
        				<div class="absolute top-[10.875rem] left-[1.938rem] text-[1.375rem] font-urbanist inline-block w-[18.375rem]">Sono molto appassionata di rocknroll, cerco qualche consilgio per visitare Parigi attraverso i concerti</div>
        				<div class="absolute top-[19.875rem] left-[calc(50%_-_92px)] w-[11.438rem] h-[2.813rem] cursor-pointer text-white font-urbanist" @click="onGroupContainerClick">
          					<div class="absolute top-[0rem] left-[calc(50%_-_91.5px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-darkslategray border-dimgray border-solid border-[2px] box-border w-[11.438rem] h-[2.813rem]" />
          					<div class="absolute top-[0.063rem] left-[1.797rem]">Consiglia</div>
        				</div>
        				<img class="absolute top-[5.125rem] left-[8.563rem] w-[1.875rem] h-[1.875rem]" alt="Location" :src="locationIcon"/>
      			</div>
      			<div class="absolute top-[38rem] left-1/2 -translate-x-1/2 w-[22.25rem] h-[26.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_9px_#1a5e63] rounded-[20px] bg-goldenrod w-[22.25rem] h-[26.813rem]" />
        				<div class="absolute top-[2.125rem] left-[7.375rem] text-[3.25rem] inline-block w-[10.25rem]">Gianni</div>
        				<img class="absolute top-[1.125rem] left-[1.313rem] rounded-[50%] w-[6.563rem] h-[6.563rem] object-cover" :src="gianniImg" alt="Gianni" />
        				<div class="absolute top-[5.313rem] left-[7.875rem] inline-block w-[10.438rem]">Parigi</div>
        				<div class="absolute top-[10.875rem] left-[1.938rem] text-[1.375rem] font-urbanist inline-block w-[18.375rem]">Cerco delle belle cammiinate stimolanti in mezzo alla natura o in esplorazione della città</div>
        				<div class="absolute top-[19.875rem] left-[calc(50%_-_92px)] w-[11.438rem] h-[2.813rem] cursor-pointer text-white font-urbanist" @click="onGroupContainerClick">
          					<div class="absolute top-[0rem] left-[calc(50%_-_91.5px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-darkslategray border-dimgray border-solid border-[2px] box-border w-[11.438rem] h-[2.813rem]" />
          					<div class="absolute top-[0.063rem] left-[1.797rem]">Consiglia</div>
        				</div>
        				<img class="absolute top-[5.125rem] left-[8.563rem] w-[1.875rem] h-[1.875rem]" alt="Location" :src="locationIcon"/>
      			</div>
      			<div class="absolute top-[3.375rem] left-[0rem] w-full h-[3.938rem] overflow-hidden flex items-end py-[0rem] px-[1.25rem] box-border text-[2.5rem] font-urbanist">
        				<b class="relative">Experio</b>
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