
<script setup lang="ts">
  	import { useRouter } from "vue-router";
  	import arrowLeft from '../assets/icons-all/arrow-left.svg';
  	const router = useRouter();
  	
  	function onRectangleClick() {
    		router.push("/home");
  	}

    function onBackClick() {
        router.back();
    }
</script>

<template>
  	<div class="w-full h-[54.625rem] relative bg-whitesmoke overflow-hidden text-left text-[0.601rem] text-dimgray font-urbanist">
    		<div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden shrink-0" />
    		<img class="absolute top-[11.375rem] left-[3.063rem] w-[18.938rem] h-[4rem] shrink-0" alt="" />
    		<div class="absolute top-[16.938rem] left-[6.063rem] w-[13rem] h-[2.744rem] shrink-0">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3.43px] bg-white border-darkslategray border-solid border-[1.4px] box-border" />
      			<b class="absolute h-[31.21%] w-[81.83%] top-[34.4%] left-[5.94%] tracking-[0.07px] leading-[0.858rem] inline-block">Parigi</b>
      			<img class="absolute w-[9.62%] top-[0.75rem] right-[2.4%] left-[87.98%] max-w-full overflow-hidden h-[1.25rem]" alt="" />
    		</div>
    		<div class="absolute top-[21.25rem] left-[6.063rem] w-[13rem] h-[2.744rem] shrink-0">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3.43px] bg-white border-darkslategray border-solid border-[1.4px] box-border" />
      			<b class="absolute h-[31.21%] w-[81.83%] top-[34.4%] left-[5.94%] tracking-[0.07px] leading-[0.858rem] inline-block">Cesena</b>
      			<img class="absolute w-[9.62%] top-[0.75rem] right-[2.4%] left-[87.98%] max-w-full overflow-hidden h-[1.25rem]" alt="" />
    		</div>
    		<div class="absolute top-[3.375rem] left-[-0.437rem] w-[25.125rem] h-[5.063rem] overflow-hidden shrink-0 text-center text-[2.25rem] text-black">
      			<b class="absolute top-[1.063rem] left-[0.438rem] inline-block w-[25.125rem] shrink-0">Seleziona le tue zone</b>
                <img :src="arrowLeft" class="absolute top-[1.5rem] left-[1.5rem] w-8 h-8 cursor-pointer" @click="onBackClick" />
    		</div>
    		<div class="absolute top-[47.625rem] left-[3.063rem] w-[18.938rem] h-[4rem] shrink-0 text-center text-[1.125rem] text-white">
      			<div class="absolute top-[0rem] left-[4.438rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border w-[10.063rem] h-[4rem] cursor-pointer" @click="onRectangleClick" />
      			<b class="absolute top-[1.375rem] left-[6.938rem] tracking-[0.1px] leading-[1.25rem] inline-block w-[5.063rem] h-[1.25rem]">Avanti</b>
    		</div>
  	</div>
</template>