<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { store } from './services/store'

const router = useRouter()
const notification = computed(() => store.state.currentNotification)

function onNotificationClick() {
    if (notification.value) {
        store.state.currentNotification = null // Clear immediately
        router.push('/gamification')
    }
}

// Initialize store to load data from localStorage
store.init()
</script>

<template>
  <div>
    <router-view />

    <!-- Global Notification Popup -->
    <transition name="fade">
        <div 
            v-if="notification" 
            class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#1a5e63] text-white px-6 py-4 rounded-[10px] shadow-2xl z-[9999] flex items-center gap-3 border-2 border-goldenrod cursor-pointer hover:bg-[#14494d] transition-colors"
            @click="onNotificationClick"
        >
            <span class="text-2xl">🏆</span>
            <span class="font-bold text-lg font-urbanist">{{ notification.message }}</span>
        </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>