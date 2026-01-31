<template>
  	<div class="w-full h-[54.625rem] relative bg-whitesmoke overflow-hidden text-left text-[0.875rem] text-dimgray font-urbanist">
    		<div class="absolute top-[0rem] left-[0rem] w-[25.125rem] h-[3.375rem] overflow-hidden" />
    		<div class="absolute top-[3.375rem] left-[0rem] w-[25.125rem] h-[5.063rem] overflow-hidden text-[2.5rem] text-black">
      			<b class="absolute top-[1.063rem] left-[4.313rem]">Nuovo Viaggio</b>
    		</div>
    		<div class="absolute top-[11.375rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<b class="absolute h-[31.25%] w-[81.85%] top-[34.38%] left-[5.94%] tracking-num-0_1 leading-[1.25rem] inline-block">Luogo</b>
    		</div>
    		<div class="absolute top-[16.313rem] left-[3.063rem] w-[18.938rem] h-[4rem]">
      			<div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border" />
      			<div class="absolute top-[0.75rem] left-[3.875rem] flex items-center justify-center p-[0.625rem] gap-[0.625rem]">
        				<b class="relative tracking-num-0_1 leading-[1.25rem]">Arrivo</b>
        				<img class="h-[1.25rem] w-[1.25rem] relative" alt="" />
      			</div>
      			<div class="absolute top-[0.75rem] left-[9.688rem] flex items-center justify-center p-[0.625rem] gap-[0.625rem]">
        				<img class="h-[1.25rem] w-[1.25rem] relative" alt="" />
        				<b class="relative tracking-num-0_1 leading-[1.25rem]">Partenza</b>
      			</div>
      			<div class="absolute top-[0rem] left-[9.438rem] border-darkslategray border-solid border-r-[2px] box-border w-[0.125rem] h-[4rem]" />
    		</div>
    		<div class="absolute top-[47.625rem] left-[0rem] w-[25.125rem] h-[4rem] text-center text-[1.125rem] text-white">
      			<div class="absolute top-[0rem] left-[13.875rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-goldenrod border-goldenrod border-solid border-[2px] box-border w-[10.063rem] h-[4rem]" />
      			<b class="absolute top-[1.375rem] left-[16.375rem] tracking-num-0_1 leading-[1.25rem] inline-block w-[5.063rem] h-[1.25rem]">Cancella</b>
      			<div class="absolute top-[0rem] left-[1.25rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border w-[10.063rem] h-[4rem] cursor-pointer" @click="onRectangleClick" />
      			<b class="absolute top-[1.375rem] left-[3.75rem] tracking-num-0_1 leading-[1.25rem] inline-block w-[5.063rem] h-[1.25rem]">Salva</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onRectangleClick() {
    		// Add your code here
  	}</script>