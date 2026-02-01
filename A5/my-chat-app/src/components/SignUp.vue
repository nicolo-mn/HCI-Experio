<template>
  	<div class="min-h-screen w-full flex items-center justify-center bg-whitesmoke font-urbanist">
    		<div class="w-full md:w-1/3 flex flex-col gap-6 p-5">
      			<div class="flex items-center gap-4 mb-4">
					<b class="text-[2.5rem] text-black">Registrazione</b>
      			</div>
      			
      			<input class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Username" type="text" />
      			
      			<input class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Nome" type="text" />
      			
      			<textarea class="w-full h-[9.875rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border p-[1rem] font-bold placeholder-dimgray outline-none resize-none font-urbanist text-[0.875rem] text-dimgray" placeholder="Descrivi te stesso/a, i tuoi hobby, cosa cerchi quando viaggi (Verrà utilizzato dagli altri utenti per darti consigli)"></textarea>
      			
      			<input class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Email" type="email" />
      			
      			<input class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Password" type="password" />
      			
      			<div class="w-full h-[4rem] mt-4">
					<button class="w-full h-full shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border cursor-pointer flex items-center justify-center font-bold tracking-num-0_1 leading-[1.25rem] text-[1.125rem] text-white hover:opacity-90 transition-opacity" @click="onRectangleClick">
						Registrati
					</button>
      			</div>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	import { useRouter } from "vue-router";
  	const router = useRouter();
  	
  	function onRectangleClick() {
    		router.push("/le-tue-zone");
  	}</script>