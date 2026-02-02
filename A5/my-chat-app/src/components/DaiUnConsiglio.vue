<script setup>
import { useRouter, useRoute } from 'vue-router'
import { reactive, computed, ref } from 'vue'
import { store } from "../services/store"
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import imageIcon from '../assets/icons-all/image.svg'

const router = useRouter()
const route = useRoute()

const receiver = computed(() => route.query.receiver || 'Utente')
const location = computed(() => route.query.location || '')
const arrival = computed(() => route.query.arrival || '')
const departure = computed(() => route.query.departure || '')

const subHeader = computed(() => {
    if (location.value) {
        if (arrival.value && departure.value) {
            return `${location.value}, ${formatDate(arrival.value)} - ${formatDate(departure.value)}`
        }
        return location.value
    }
    return ''
})

function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
}

const form = reactive({
    title: '',
    description: '',
    image: null
})

const fileInputRef = ref(null)

function triggerFileInput() {
    fileInputRef.value?.click()
}

function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
        // Read file as Base64/DataURL
        const reader = new FileReader()
        reader.onload = (e) => {
            form.image = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

function onPublishClick() {
    if (!form.title || !form.description) {
        alert("Inserisci titolo e descrizione")
        return
    }

    try {
        store.init() // Ensure store is ready
        store.createAdvice({
            title: form.title,
            description: form.description,
            receiver: receiver.value,
            location: location.value, // Save location from context
            image: form.image || '' 
        })
        alert("Consiglio pubblicato!")
        router.push('/home')
    } catch (e) {
        alert(e.message) // e.g., "Must be logged in"
    }
}

function onBackClick() {
    router.back()
}
</script>

<template>
  	<div class="min-h-screen w-full flex flex-col items-center bg-whitesmoke font-urbanist pt-2">
    		<div class="w-full md:w-1/3 flex flex-col gap-6 p-5 relative">
                
                <!-- Header -->
      			<div class="flex flex-col gap-1 mb-4 relative">
                    <div class="flex items-center gap-4">
                        <img 
                            :src="arrowLeft" 
                            class="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity" 
                            @click="onBackClick" 
                            alt="Back"
                        />
                        <b class="text-[2.5rem] leading-tight text-black">Consiglia a {{ receiver }}</b>
                    </div>
                    <!-- Subheader: Context Info -->
                    <div v-if="subHeader" class="text-dimgray text-[1.125rem] font-medium ml-12">
                        su: {{ subHeader }}
                    </div>
      			</div>

                <!-- Title Input -->
                <div class="w-full">
                    <input 
                        v-model="form.title"
                        class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" 
                        placeholder="Titolo" 
                        type="text" 
                    />
                </div>

                <!-- Description Textarea -->
                <div class="w-full">
                    <textarea 
                        v-model="form.description"
                        class="w-full h-[9.875rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border p-[1rem] font-bold placeholder-dimgray outline-none resize-none font-urbanist text-[0.875rem] text-dimgray" 
                        placeholder="Descrizione"
                    ></textarea>
                </div>

                <!-- Add Images Section -->
                <div 
                    class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border flex items-center px-[1.5rem] cursor-pointer hover:bg-gray-50 transition-colors gap-4 relative overflow-hidden"
                    @click="triggerFileInput"
                >
                    <span v-if="!form.image" class="font-bold text-dimgray text-[0.875rem] flex-1">Aggiungi Immagini</span>
                    <span v-else class="font-bold text-dimgray text-[0.875rem] flex-1">Immagine selezionata</span>
                    
                    <img v-if="!form.image" :src="imageIcon" class="w-6 h-6 object-contain" alt="Add Image" />
                    
                    <!-- Preview -->
                    <img v-if="form.image" :src="form.image" class="h-full w-auto object-cover absolute right-0 top-0" alt="Preview" />
                    
                    <input 
                        ref="fileInputRef"
                        type="file" 
                        accept="image/*" 
                        class="hidden" 
                        @change="onFileChange"
                    />
                </div>
      			
                <!-- Publish Button -->
      			<div class="w-full h-[4rem] mt-auto">
					<button 
                        class="w-full h-full shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border cursor-pointer flex items-center justify-center font-bold tracking-[0.1px] leading-[1.25rem] text-[1.125rem] text-white hover:opacity-90 transition-opacity" 
                        @click="onPublishClick"
                    >
						Pubblica
					</button>
      			</div>

    		</div>
  	</div>
</template>