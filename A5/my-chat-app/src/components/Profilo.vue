<script setup lang="ts">
import { useRouter } from 'vue-router'
import houseIcon from '../assets/icons-all/house.svg'
import planeIcon from '../assets/icons-all/plane.svg'
import personIcon from '../assets/icons-all/person-fill.svg'

const router = useRouter()

function goToHome() {
    router.push('/home')
}

function goToTrips() {
    router.push('/tutti-viaggi')
}

function goToProfile() {
    router.push('/profilo')
}

function onNotificationsIconClick() {
    // Add your code here
}
</script>

<template>
  <div class="w-full min-h-screen bg-whitesmoke overflow-y-auto">
    <div class="w-1/3 min-w-[25.125rem] mx-auto h-[68.375rem] relative bg-whitesmoke text-left text-[0.938rem] text-black font-urbanist shadow-2xl">
    		<div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden shrink-0" />
    		<div class="absolute top-[3.375rem] left-[0rem] w-[25.125rem] h-[5.625rem] overflow-hidden shrink-0 text-[1.875rem]">
      			<div class="absolute top-[1.063rem] left-[6.625rem] inline-block w-[8.188rem] h-[2.125rem]">Chiara</div>
      			<img class="absolute top-[0.5rem] left-[2.25rem] rounded-[50%] w-[3.25rem] h-[3.25rem] object-cover" alt="" />
      			<img class="absolute top-[1.5rem] left-[21.813rem] w-[1.688rem] h-[1.688rem]" alt="" />
      			<img class="absolute top-[1.5rem] left-[20.125rem] w-[1.688rem] h-[1.688rem] cursor-pointer" alt="" @click="onNotificationsIconClick" />
      			<img class="absolute top-[1.5rem] left-[18.438rem] w-[1.688rem] h-[1.688rem] cursor-pointer" alt="" @click="onNotificationsIconClick" />
    		</div>
    		<div class="absolute top-[9rem] left-[0rem] w-[25.125rem] h-[5.75rem] shrink-0 text-[1.25rem]">
      			<div class="absolute top-[5.719rem] left-[-0.031rem] border-black border-solid border-t-[1px] box-border w-[25.188rem] h-[0.063rem]" />
      			<div class="absolute top-[0rem] left-[2.25rem] font-medium inline-block w-[20.625rem] h-[4.5rem]">Mi piacciono i croissant, le passeggiate nei parchi e i palazzi storici.</div>
    		</div>
    		<div class="absolute top-[14.75rem] left-[0.75rem] w-[24rem] h-[17.625rem] shrink-0 text-center">
      			<div class="absolute top-[3.25rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] bg-saddlebrown w-[23.688rem] h-[14.063rem]" />
      			<div class="absolute top-[4.563rem] left-[13.375rem] w-[9.375rem] h-[11.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.375rem] h-[11.813rem]" />
        				<div class="absolute top-[8.25rem] left-[0.75rem] font-semibold inline-block w-[7.875rem] h-[0.813rem]">Karlsruhe Castle</div>
        				<div class="absolute top-[6.581rem] left-[2.551rem] inline-block w-[4.688rem] h-[0.788rem]">Karlsruhe</div>
        				<img class="absolute top-[6.229rem] left-[1.974rem] w-[1.156rem] h-[1.156rem] object-cover" alt="" />
        				<img class="absolute top-[0.666rem] left-[0.759rem] rounded-[4.2px] w-[7.856rem] h-[4.913rem] object-cover" alt="" />
        				<div class="absolute top-[10.8rem] left-[2.373rem] [text-decoration:underline] inline-block w-[4.588rem] h-[0.619rem]">@Marco</div>
      			</div>
      			<div class="absolute top-[1rem] left-[0rem] w-[20.688rem] h-[2.25rem] cursor-pointer text-left text-[1.563rem]" @click="onNotificationsIconClick">
        				<img class="absolute top-[0rem] left-[11.286rem] w-[1.675rem] h-[1.675rem]" alt="" />
        				<div class="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[20.688rem] h-[2.25rem]">La mia bacheca</div>
      			</div>
      			<div class="absolute top-[4.563rem] left-[0.875rem] w-[9.375rem] h-[11.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.375rem] h-[11.813rem]" />
        				<div class="absolute top-[8.375rem] left-[0.75rem] font-semibold inline-block w-[7.875rem] h-[0.813rem]">Karlsruhe Castle</div>
        				<div class="absolute top-[6.581rem] left-[2.551rem] inline-block w-[4.688rem] h-[0.788rem]">Karlsruhe</div>
        				<img class="absolute top-[6.229rem] left-[1.974rem] w-[1.156rem] h-[1.156rem] object-cover" alt="" />
        				<img class="absolute top-[0.666rem] left-[0.759rem] rounded-[4.2px] w-[7.856rem] h-[4.913rem] object-cover" alt="" />
        				<div class="absolute top-[10.8rem] left-[2.373rem] [text-decoration:underline] inline-block w-[4.588rem] h-[0.619rem]">@Paola</div>
      			</div>
    		</div>
    		<div class="absolute top-[32.375rem] left-[0.75rem] w-[24rem] h-[18.063rem] shrink-0 text-center">
      			<div class="absolute top-[3.25rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] bg-saddlebrown w-[23.688rem] h-[14.063rem]" />
      			<div class="absolute top-[4.563rem] left-[13.375rem] w-[9.375rem] h-[11.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.375rem] h-[11.813rem]" />
        				<div class="absolute top-[8.25rem] left-[0.75rem] font-semibold inline-block w-[7.875rem] h-[0.813rem]">Duomo di milano</div>
        				<div class="absolute top-[6.581rem] left-[2.551rem] inline-block w-[4.688rem] h-[0.788rem]">Milan</div>
        				<img class="absolute top-[6.229rem] left-[1.974rem] w-[1.156rem] h-[1.156rem] object-cover" alt="" />
        				<img class="absolute top-[0.666rem] left-[0.759rem] rounded-[4.2px] w-[7.856rem] h-[4.913rem] object-cover" alt="" />
        				<div class="absolute top-[10.8rem] left-[2.373rem] [text-decoration:underline] inline-block w-[4.588rem] h-[0.619rem]">@Marco</div>
      			</div>
      			<div class="absolute top-[1rem] left-[0rem] w-[22.75rem] h-[2.25rem] text-left text-[1.563rem]">
        				<img class="absolute top-[0rem] left-[10.25rem] w-[1.756rem] h-[1.756rem]" alt="" />
        				<div class="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[22.75rem] h-[2.25rem]">Consigli donati</div>
      			</div>
      			<div class="absolute top-[4.563rem] left-[0.875rem] w-[9.375rem] h-[11.813rem]">
        				<div class="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_4px_#662c00] rounded-[10px] bg-goldenrod w-[9.375rem] h-[11.813rem]" />
        				<div class="absolute top-[8.375rem] left-[0.75rem] font-semibold inline-block w-[7.875rem] h-[0.813rem]">La Scala</div>
        				<div class="absolute top-[6.581rem] left-[2.551rem] inline-block w-[4.688rem] h-[0.788rem]">Milano</div>
        				<img class="absolute top-[6.229rem] left-[1.974rem] w-[1.156rem] h-[1.156rem] object-cover" alt="" />
        				<img class="absolute top-[0.666rem] left-[0.759rem] rounded-[4.2px] w-[7.856rem] h-[4.913rem] object-cover" alt="" />
        				<div class="absolute top-[10.8rem] left-[2.373rem] [text-decoration:underline] inline-block w-[4.588rem] h-[0.619rem]">@Paola</div>
      			</div>
    		</div>
    		<img class="absolute top-[50rem] left-[0rem] w-[25.125rem] h-[4.856rem] shrink-0" alt="" />

      <!-- Fixed Navbar -->
      <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-1/3 min-w-[25.125rem] h-[4.188rem] bg-darkslategray border-t border-gray-300 flex justify-around items-center z-50">
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToHome">
          <img :src="houseIcon" alt="Home" class="w-full h-full object-contain filter brightness-0 invert" />
        </div>
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToTrips">
          <img :src="planeIcon" alt="Plane" class="w-full h-full object-contain filter brightness-0 invert" />
        </div>
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="goToProfile">
          <!-- Active Person Icon (Filled) -->
          <img :src="personIcon" alt="Profile" class="w-full h-full object-contain filter brightness-0 invert" />
        </div>
      </div>
    </div>
  </div>
</template>