<template>
  	<div :class="$style.letuezone">
    		<div :class="$style.notchHeight" />
    		<img :class="$style.titoloIcon" alt="" />
    		<div :class="$style.titolo">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.parigi">Parigi</b>
      			<img :class="$style.binSvgrepoCom1Icon" alt="" />
    		</div>
    		<div :class="$style.titolo2">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.parigi">Cesena</b>
      			<img :class="$style.binSvgrepoCom1Icon" alt="" />
    		</div>
    		<div :class="$style.titoloPagina">
      			<b :class="$style.selezionaLeTue">Seleziona le tue zone</b>
    		</div>
    		<div :class="$style.pubblica">
      			<div :class="$style.pubblicaChild" @click="onRectangleClick" />
      			<b :class="$style.avanti">Avanti</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onRectangleClick() {
    		// Add your code here
  	}</script>
<style  module>.letuezone {
  	width: 100%;
  	height: 874px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 9.61px;
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
    		flex-shrink: 0;
  	}
  	.titoloIcon {
    		position: absolute;
    		top: 182px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
    		flex-shrink: 0;
  	}
  	.titolo {
    		position: absolute;
    		top: 271px;
    		left: 97px;
    		width: 208px;
    		height: 43.9px;
    		flex-shrink: 0;
  	}
  	.titoloChild {
    		position: absolute;
    		height: 100%;
    		width: 100%;
    		top: 0%;
    		right: 0%;
    		bottom: 0%;
    		left: 0%;
    		border-radius: 3.43px;
    		background-color: #fff;
    		border: 1.4px solid #1a5e63;
    		box-sizing: border-box;
  	}
  	.parigi {
    		position: absolute;
    		height: 31.21%;
    		width: 81.83%;
    		top: 34.4%;
    		left: 5.94%;
    		letter-spacing: 0.07px;
    		line-height: 13.73px;
    		display: inline-block;
  	}
  	.binSvgrepoCom1Icon {
    		position: absolute;
    		width: 9.62%;
    		top: 12px;
    		right: 2.4%;
    		left: 87.98%;
    		max-width: 100%;
    		overflow: hidden;
    		height: 20px;
  	}
  	.titolo2 {
    		position: absolute;
    		top: 340px;
    		left: 97px;
    		width: 208px;
    		height: 43.9px;
    		flex-shrink: 0;
  	}
  	.titoloPagina {
    		position: absolute;
    		top: 54px;
    		left: -7px;
    		width: 402px;
    		height: 81px;
    		overflow: hidden;
    		flex-shrink: 0;
    		text-align: center;
    		font-size: 36px;
    		color: #000;
  	}
  	.selezionaLeTue {
    		position: absolute;
    		top: 17px;
    		left: 7px;
    		display: inline-block;
    		width: 402px;
    		flex-shrink: 0;
  	}
  	.pubblica {
    		position: absolute;
    		top: 762px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
    		flex-shrink: 0;
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
  	.avanti {
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
