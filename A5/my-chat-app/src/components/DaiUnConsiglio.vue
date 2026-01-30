<template>
  	<div :class="$style.daiunconsiglio">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.consigliaAPaola">Consiglia a Paola</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.titolo">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.titolo2">Titolo</b>
    		</div>
    		<div :class="$style.descrizione">
      			<div :class="$style.descrizioneChild" />
      			<b :class="$style.descrizione2">Descrizione</b>
    		</div>
    		<div :class="$style.immagine">
      			<div :class="$style.immagineChild" />
      			<b :class="$style.aggiungiImmagini">Aggiungi Immagini</b>
      			<img :class="$style.imageIcon" alt="" />
    		</div>
    		<div :class="$style.pubblica">
      			<div :class="$style.pubblicaChild" @click="onRectangleClick" />
      			<b :class="$style.pubblica2">Pubblica</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onRectangleClick() {
    		// Add your code here
  	}</script>
<style  module>.daiunconsiglio {
  	width: 100%;
  	height: 874px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 14px;
  	color: #565656;
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
    		width: 402px;
    		height: 81px;
    		overflow: hidden;
    		font-size: 40px;
    		color: #000;
  	}
  	.consigliaAPaola {
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
  	.titolo {
    		position: absolute;
    		top: 182px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
  	}
  	.titoloChild {
    		position: absolute;
    		height: 100%;
    		width: 100%;
    		top: 0%;
    		right: 0%;
    		bottom: 0%;
    		left: 0%;
    		border-radius: 5px;
    		background-color: #fff;
    		border: 2px solid #1a5e63;
    		box-sizing: border-box;
  	}
  	.titolo2 {
    		position: absolute;
    		height: 31.25%;
    		width: 81.85%;
    		top: 34.38%;
    		left: 5.94%;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
  	}
  	.descrizione {
    		position: absolute;
    		top: 261px;
    		left: 49px;
    		width: 303px;
    		height: 158px;
  	}
  	.descrizioneChild {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 5px;
    		background-color: #fff;
    		border: 2px solid #1a5e63;
    		box-sizing: border-box;
    		width: 303px;
    		height: 158px;
  	}
  	.descrizione2 {
    		position: absolute;
    		top: 14px;
    		left: 17px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 248px;
    		height: 20px;
  	}
  	.immagine {
    		position: absolute;
    		top: 437px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
  	}
  	.immagineChild {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 5px;
    		background-color: #fff;
    		border: 2px solid #1a5e63;
    		box-sizing: border-box;
    		width: 303px;
    		height: 64px;
  	}
  	.aggiungiImmagini {
    		position: absolute;
    		top: 22px;
    		left: 18px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 248px;
    		height: 20px;
  	}
  	.imageIcon {
    		position: absolute;
    		top: 18px;
    		left: 254px;
    		width: 24px;
    		height: 24px;
  	}
  	.pubblica {
    		position: absolute;
    		top: 762px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
    		text-align: center;
    		font-size: 18px;
    		color: #fff;
  	}
  	.pubblicaChild {
    		position: absolute;
    		top: 0px;
    		left: 71px;
    		box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
    		border-radius: 5px;
    		background-color: #1a5e63;
    		border: 2px solid #1a5e63;
    		box-sizing: border-box;
    		width: 161px;
    		height: 64px;
    		cursor: pointer;
  	}
  	.pubblica2 {
    		position: absolute;
    		top: 22px;
    		left: 111px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 81px;
    		height: 20px;
  	}

</style>
