<script setup>
import { ref, computed } from 'vue';
import { store } from '../services/store.js';
import { useRouter } from "vue-router";
import arrowLeft from '../assets/icons-all/arrow-left.svg';

const router = useRouter();

// State
const availableZones = ref([
    'Parigi', 'Cesena', 'Roma', 'Milano', 'Londra', 'New York', 'Tokyo', 'Berlino', 
    'Madrid', 'Barcellona', 'Amsterdam', 'Vienna'
]);
const selectedZones = ref([]);
const searchQuery = ref('');
const isDropdownOpen = ref(false);
const inputRef = ref(null);

// Computed
const filteredZones = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return availableZones.value.filter(z => 
        z.toLowerCase().includes(query) && 
        !selectedZones.value.includes(z)
    );
});

// Methods
function onBackClick() {
    router.back();
}

function onNextClick() {
    store.updateUserZones(selectedZones.value);
    router.push("/home");
}

function selectZone(zone) {
    selectedZones.value.push(zone);
    searchQuery.value = '';
    inputRef.value?.focus();
}

function removeZone(zone) {
    selectedZones.value = selectedZones.value.filter(z => z !== zone);
}

function handleInputFocus() {
    isDropdownOpen.value = true;
}

function handleInputBlur() {
    // Delay closing to allow click event on dropdown items
    setTimeout(() => {
        isDropdownOpen.value = false;
    }, 200);
}
</script>

<template>
  	<div class="min-h-screen w-full flex items-center justify-center bg-whitesmoke font-urbanist">
    		<div class="w-full md:w-1/3 flex flex-col gap-6 p-5 relative">
                
                <!-- Header with Back Arrow and Title -->
      			<div class="flex items-center gap-4 mb-4 relative">
                    <img 
                        :src="arrowLeft" 
                        class="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity" 
                        @click="onBackClick" 
                        alt="Back"
                    />
					<b class="text-[2rem] leading-tight text-black">Seleziona le tue zone</b>
      			</div>
      			
                <!-- Multiselect Component -->
                <div class="relative w-full">
                    <div 
                        class="w-full min-h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border p-2 flex flex-wrap gap-2 items-center cursor-text"
                        @click="inputRef?.focus()"
                    >
                        <!-- Selected Tags -->
                        <div 
                            v-for="zone in selectedZones" 
                            :key="zone"
                            class="bg-darkslategray text-white px-3 py-1 rounded-[15px] flex items-center gap-2 text-[0.875rem] font-bold"
                        >
                            <span>{{ zone }}</span>
                            <span 
                                @click.stop="removeZone(zone)" 
                                class="cursor-pointer hover:text-gray-300 font-bold"
                            >×</span>
                        </div>

                        <!-- Search Input -->
                        <input 
                            ref="inputRef"
                            v-model="searchQuery"
                            @focus="handleInputFocus"
                            @blur="handleInputBlur"
                            class="flex-1 bg-transparent outline-none min-w-[100px] text-[0.875rem] text-dimgray font-bold placeholder-dimgray h-full py-1"
                            placeholder="Cerca una zona..."
                            type="text" 
                        />
                    </div>

                    <!-- Dropdown Menu -->
                    <div 
                        v-if="isDropdownOpen && filteredZones.length > 0"
                        class="absolute top-[105%] left-0 w-full bg-white border-darkslategray border-solid border-[2px] rounded-[5px] box-border z-10 max-h-[200px] overflow-y-auto shadow-lg"
                    >
                        <div 
                            v-for="zone in filteredZones" 
                            :key="zone"
                            class="px-4 py-3 hover:bg-whitesmoke cursor-pointer text-dimgray font-bold text-[0.875rem]"
                            @mousedown.prevent="selectZone(zone)"
                        >
                            {{ zone }}
                        </div>
                    </div>
                    <div v-if="isDropdownOpen && filteredZones.length === 0 && searchQuery" class="absolute top-[105%] left-0 w-full bg-white border-darkslategray border-solid border-[2px] rounded-[5px] box-border z-10 px-4 py-3 text-dimgray text-[0.875rem]">
                        Nessun risultato trovato
                    </div>
                </div>

                <!-- Spacer to push button down if needed, or just margin -->
      			
                <!-- Next Button -->
      			<div class="w-full h-[4rem] mt-auto">
					<button 
                        class="w-full h-full shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border cursor-pointer flex items-center justify-center font-bold tracking-[0.1px] leading-[1.25rem] text-[1.125rem] text-white hover:opacity-90 transition-opacity" 
                        @click="onNextClick"
                    >
						Avanti
					</button>
      			</div>

    		</div>
  	</div>
</template>