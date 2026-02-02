<script setup>
import { ref, computed, nextTick, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { store } from '../services/store.js'
import arrowLeft from '../assets/icons-all/arrow-left.svg'
import sendIcon from '../assets/icons-all/send.svg'
import binIcon from '../assets/icons-all/bin.svg'

const router = useRouter()
const route = useRoute()
const username = computed(() => route.params.username)
const messageText = ref('')
const messagesContainer = ref(null)

const conversationMessages = computed(() => {
    return store.getMessages(username.value)
})

function onBackClick() {
    router.back()
}

function sendMessage() {
    if (!messageText.value.trim()) return
    store.sendMessage(messageText.value, username.value)
    messageText.value = ''
    scrollToBottom()
}

function deleteChat() {
    if (confirm(`Sei sicuro di voler eliminare la chat con ${username.value}?`)) {
        store.deleteChat(username.value)
        router.push('/lista-chat')
    }
}

function scrollToBottom() {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
        }
    })
}

// Scroll to bottom on mount and when messages change
onMounted(scrollToBottom)
watch(conversationMessages, scrollToBottom, { deep: true })
</script>

<template>
  <div class="w-full h-screen bg-whitesmoke flex flex-col items-center font-urbanist overflow-hidden">
    <!-- Main Content Container: 100% width on mobile, 1/3 on md+ screens -->
    <div class="w-full md:w-1/3 flex flex-col h-full bg-whitesmoke relative shadow-2xl overflow-hidden">
      
       <!-- Header -->
      <div class="shrink-0 flex items-center justify-between px-5 py-4 mt-4 bg-whitesmoke z-50">
        <div class="flex items-center gap-4">
             <img :src="arrowLeft" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="onBackClick" />
             <b class="text-[2.5rem] leading-none text-black">{{ username }}</b>
        </div>
        <!-- Icons/Avatar placeholder -->
         <div class="flex items-center gap-2">
            <img :src="binIcon" class="w-[1.875rem] h-[1.875rem] object-contain cursor-pointer filter brightness-0" alt="Delete Chat" @click="deleteChat" />
         </div>
      </div>
      
      <!-- Messages Area -->
      <div ref="messagesContainer" class="relative flex-1 w-full overflow-y-auto p-4 flex flex-col gap-4">
        
        <div 
            v-for="msg in conversationMessages" 
            :key="msg.id"
            class="w-full flex"
            :class="msg.sender === store.state.currentUser?.username ? 'justify-end' : 'justify-start'"
        >
            <!-- Message Bubble -->
            <div 
                class="max-w-[80%] min-h-[3rem] shadow-[0px_4px_8.12px_#662c00] rounded-[20px] p-4 flex items-center text-[1.125rem]"
                :class="msg.sender === store.state.currentUser?.username ? 'bg-gainsboro' : 'bg-goldenrod'"
            >
                {{ msg.text }}
            </div>
        </div>

      </div>
      
      <!-- Input Area (Fixed at bottom of flex container) -->
      <div class="shrink-0 w-full px-4 pb-8 pt-2 bg-whitesmoke">
         <div class="relative w-full flex items-end gap-2">
             <textarea 
                v-model="messageText"
                class="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white border-darkslategray border-solid border-[3px] box-border w-full h-[3.125rem] resize-none p-2 text-[1.25rem] font-urbanist focus:outline-none"
                placeholder="Scrivi un messaggio..."
                @keydown.enter.prevent="sendMessage"
             ></textarea>
             
             <button 
                class="shrink-0 flex items-center justify-center rounded-[50%] bg-darkslategray w-[3.125rem] h-[3.125rem] cursor-pointer hover:opacity-90 transition-opacity"
                @click="sendMessage"
             >
                <img :src="sendIcon" alt="Send" class="w-6 h-6 object-contain filter brightness-0 invert" />
             </button>
         </div>
      </div>

    </div>
  </div>
</template>