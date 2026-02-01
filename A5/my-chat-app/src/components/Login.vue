<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { store } from '../services/store'

const router = useRouter()
const form = reactive({
    username: '',
    password: ''
})

function onLogin() {
    if (!form.username) {
        alert("Inserisci un username")
        return
    }
    
    // Initialize store if needed
    store.init()
    
    const success = store.login(form.username)
    if (success) {
        router.push('/home')
    } else {
        alert("Utente non trovato. Registrati prima!")
    }
}

function goToSignup() {
    router.push('/signup')
}
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-whitesmoke font-urbanist">
    <div class="w-full md:w-1/3 flex flex-col gap-6 p-5 items-center">
        
        <!-- Header -->
        <div class="flex flex-col items-center gap-2 mb-8">
            <b class="text-[3rem] text-darkslategray">Experio</b>
            <span class="text-dimgray text-lg">Accedi al tuo account</span>
        </div>
        
        <!-- Username Input -->
        <input 
            v-model="form.username" 
            class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[1rem] text-dimgray" 
            placeholder="Username" 
            type="text" 
        />
        
        <!-- Password Input (Visual only) -->
        <input 
            v-model="form.password" 
            class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[1rem] text-dimgray" 
            placeholder="Password" 
            type="password" 
        />
        
        <!-- Login Button -->
        <div class="w-full h-[4rem] mt-4">
            <button 
                class="w-full h-full shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border cursor-pointer flex items-center justify-center font-bold text-[1.25rem] text-white hover:opacity-90 transition-opacity" 
                @click="onLogin"
            >
                Accedi
            </button>
        </div>
        
        <!-- Signup Link -->
        <div class="mt-4 text-center">
            <span class="text-dimgray">Non hai un account? </span>
            <span class="font-bold underline cursor-pointer text-darkslategray hover:text-black" @click="goToSignup">Registrati</span>
        </div>

    </div>
  </div>
</template>
