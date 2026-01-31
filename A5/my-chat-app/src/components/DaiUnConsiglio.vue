<script setup lang="ts">
  	import { useRouter } from 'vue-router'
    import arrowLeft from '../assets/icons-all/arrow-left.svg'

    const router = useRouter()
  	
  	function onRectangleClick() {
    		router.push('/home')
  	}

    function onBackClick() {
        router.back()
    }
</script>

<template>
  	<div class="w-full min-h-screen bg-whitesmoke overflow-y-auto">
        <div class="w-1/3 min-w-[25.125rem] mx-auto h-[54.625rem] relative bg-whitesmoke text-left text-[0.875rem] text-dimgray font-urbanist shadow-2xl">
    		<div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />
    		<div class="absolute top-[3.375rem] left-[0rem] w-[25.125rem] h-[5.063rem] overflow-hidden text-[2.5rem] text-black">
      			<b class="absolute top-[1.063rem] left-[3.25rem]">Consiglia a Paola</b>
      			<img :src="arrowLeft" class="absolute top-[1.938rem] left-[0.875rem] w-[1.875rem] h-[1.875rem] object-contain cursor-pointer" alt="Back" @click="onBackClick" />
    		</div>
    		<div class="absolute top-[11.375rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-[0.1px] leading-[1.25rem] inline-block">Titolo</b>
    		</div>
    		<div class="absolute top-[16.313rem] left-[3.063rem] w-[18.938rem] h-[9.875rem]">
      			<div class="absolute top-[0rem] left-[0rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border w-[18.938rem] h-[9.875rem]" />
      			<b class="absolute top-[0.875rem] left-[1.063rem] tracking-[0.1px] leading-[1.25rem] inline-block w-[15.5rem] h-[1.25rem]">Descrizione</b>
    		</div>
    		<div class="absolute top-[27.313rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute top-[0rem] left-[0rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border w-[18.938rem] h-[4rem]" />
      			<b class="absolute top-[1.375rem] left-[1.125rem] tracking-[0.1px] leading-[1.25rem] inline-block w-[15.5rem] h-[1.25rem]">Aggiungi Immagini</b>
      			<img class="absolute top-[1.125rem] left-[15.875rem] w-[1.5rem] h-[1.5rem]" alt="" />
    		</div>
    		<div class="absolute top-[47.625rem] left-[3.063rem] w-[18.938rem] h-[4rem] text-center text-[1.125rem] text-white">
      			<div class="absolute top-[0rem] left-[4.438rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border w-[10.063rem] h-[4rem] cursor-pointer" @click="onRectangleClick" />
      			<b class="absolute top-[1.375rem] left-[6.938rem] tracking-[0.1px] leading-[1.25rem] inline-block w-[5.063rem] h-[1.25rem]">Pubblica</b>
    		</div>
        </div>
  	</div>
</template>