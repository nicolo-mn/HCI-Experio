<template>
  	<div :class="$style.listaChat">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.messaggi">Messaggi</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.persona" @click="onPersonaContainerClick">
      			<div :class="$style.paola">Paola</div>
      			<div :class="$style.personaChild" />
      			<img :class="$style.keyboardArrowRightIcon2" alt="" />
    		</div>
    		<div :class="$style.persona2">
      			<div :class="$style.paola">Marco</div>
      			<div :class="$style.personaChild" />
      			<img :class="$style.keyboardArrowRightIcon2" alt="" />
    		</div>
    		<img :class="$style.navbarIcon" alt="" />
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onPersonaContainerClick() {
    		// Add your code here
  	}</script>
<style  module>.listaChat {
  	width: 100%;
  	height: 951px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 24px;
  	color: #000;
  	font-family: Urbanist;
}
  	.notchHeight {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 402px;
    		height: 54px;
    		overflow: hidden;
  	}
  	.titoloPagina {
    		position: absolute;
    		top: 54px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 81px;
    		overflow: hidden;
    		font-size: 40px;
  	}
  	.messaggi {
    		position: absolute;
    		top: 17px;
    		left: 52px;
  	}
  	.keyboardArrowRightIcon {
    		position: absolute;
    		top: 31px;
    		left: 14px;
    		width: 30px;
    		height: 30px;
    		object-fit: contain;
  	}
  	.persona {
    		position: absolute;
    		top: 136px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 71px;
    		overflow: hidden;
    		cursor: pointer;
  	}
  	.paola {
    		position: absolute;
    		top: calc(50% - 8.5px);
    		left: calc(50% - 146px);
    		font-weight: 500;
    		display: inline-block;
    		width: 300px;
    		height: 18px;
  	}
  	.personaChild {
    		position: absolute;
    		top: calc(50% - 14.5px);
    		left: 15px;
    		border-radius: 50%;
    		background-color: #d9d9d9;
    		width: 30px;
    		height: 30px;
  	}
  	.keyboardArrowRightIcon2 {
    		position: absolute;
    		top: 21px;
    		left: 360px;
    		width: 30px;
    		height: 30px;
  	}
  	.persona2 {
    		position: absolute;
    		top: 207px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 71px;
    		overflow: hidden;
  	}
  	.navbarIcon {
    		position: absolute;
    		top: 807px;
    		left: 0px;
    		width: 402px;
    		height: 67px;
  	}

</style>
