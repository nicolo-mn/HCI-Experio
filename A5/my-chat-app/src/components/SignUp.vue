<template>
  	<div class="w-full h-[54.625rem] relative bg-whitesmoke overflow-hidden text-left text-[0.875rem] text-dimgray font-urbanist">
    		<div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />
    		<div class="absolute top-[3.375rem] left-[0rem] w-[25.125rem] h-[5.063rem] overflow-hidden text-[2.5rem] text-black">
      			<b class="absolute top-[1.063rem] left-[3.25rem]">Registrazione</b>
      			<img class="absolute top-[1.938rem] left-[0.875rem] w-[1.875rem] h-[1.875rem] object-contain" alt="" />
    		</div>
    		<div class="absolute top-[11.375rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-5 bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-num-0_1 leading-[1.25rem] inline-block">Username</b>
    		</div>
    		<div class="absolute top-[16.313rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-5 bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-num-0_1 leading-[1.25rem] inline-block">Nome</b>
    		</div>
    		<div class="absolute top-[32.063rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-5 bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-num-0_1 leading-[1.25rem] inline-block">Email</b>
    		</div>
    		<div class="absolute top-[37rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-5 bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-num-0_1 leading-[1.25rem] inline-block">Password</b>
    		</div>
    		<div class="absolute top-[47.625rem] left-[3.063rem] w-[18.938rem] h-[4rem] text-center text-[1.125rem] text-white">
      			<div class="absolute top-[0rem] left-[4.438rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-num-5 bg-darkslategray border-darkslategray border-solid border-[2px] box-border w-[10.063rem] h-[4rem] cursor-pointer" @click="onRectangleClick" />
      			<b class="absolute top-[1.375rem] left-[6.938rem] tracking-num-0_1 leading-[1.25rem] inline-block w-[5.063rem] h-[1.25rem]">Registrati</b>
    		</div>
    		<div class="absolute top-[21.25rem] left-[3.063rem] w-[18.938rem] h-[9.875rem]">
      			<div class="absolute top-[0rem] left-[0rem] rounded-num-5 bg-white border-darkslategray border-solid border-[2px] box-border w-[18.938rem] h-[9.875rem]" />
      			<b class="absolute top-[0.875rem] left-[1.063rem] tracking-num-0_1 leading-[1.25rem] inline-block w-[15.5rem] h-[1.25rem]">Descrivi te stesso/a, i tuoi hobby, cosa cerchi quando viaggi (Verrà utilizzato dagli altri utenti per darti consigli)</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	import { useRouter } from "vue-router";
  	const router = useRouter();
  	
  	function onRectangleClick() {
    		router.push("/le-tue-zone");
  	}</script>