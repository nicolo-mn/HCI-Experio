<template>
  	<div :class="$style.nuovoViaggio">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.nuovoViaggio2">Nuovo Viaggio</b>
    		</div>
    		<div :class="$style.titolo">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.luogo">Luogo</b>
    		</div>
    		<div :class="$style.titolo2">
      			<div :class="$style.titoloChild" />
      			<div :class="$style.arrivoParent">
        				<b :class="$style.arrivo">Arrivo</b>
        				<img :class="$style.vectorIcon" alt="" />
      			</div>
      			<div :class="$style.vectorParent">
        				<img :class="$style.vectorIcon" alt="" />
        				<b :class="$style.arrivo">Partenza</b>
      			</div>
      			<div :class="$style.titoloInner" />
    		</div>
    		<div :class="$style.pubblica">
      			<div :class="$style.pubblicaChild" />
      			<b :class="$style.cancella">Cancella</b>
      			<div :class="$style.pubblicaItem" @click="onRectangleClick" />
      			<b :class="$style.salva">Salva</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onRectangleClick() {
    		// Add your code here
  	}</script>
<style  module>.nuovoViaggio {
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
  	.nuovoViaggio2 {
    		position: absolute;
    		top: 17px;
    		left: 69px;
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
  	.luogo {
    		position: absolute;
    		height: 31.25%;
    		width: 81.85%;
    		top: 34.38%;
    		left: 5.94%;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
  	}
  	.titolo2 {
    		position: absolute;
    		top: 261px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
  	}
  	.arrivoParent {
    		position: absolute;
    		top: 12px;
    		left: 62px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 10px;
    		gap: 10px;
  	}
  	.arrivo {
    		position: relative;
    		letter-spacing: 0.1px;
    		line-height: 20px;
  	}
  	.vectorIcon {
    		height: 20px;
    		width: 20px;
    		position: relative;
  	}
  	.vectorParent {
    		position: absolute;
    		top: 12px;
    		left: 155px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 10px;
    		gap: 10px;
  	}
  	.titoloInner {
    		position: absolute;
    		top: 0px;
    		left: 151px;
    		border-right: 2px solid #1a5e63;
    		box-sizing: border-box;
    		width: 2px;
    		height: 64px;
  	}
  	.pubblica {
    		position: absolute;
    		top: 762px;
    		left: 0px;
    		width: 402px;
    		height: 64px;
    		text-align: center;
    		font-size: 18px;
    		color: #fff;
  	}
  	.pubblicaChild {
    		position: absolute;
    		top: 0px;
    		left: 222px;
    		box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
    		border-radius: 5px;
    		background-color: #f2c94c;
    		border: 2px solid #f2c94c;
    		box-sizing: border-box;
    		width: 161px;
    		height: 64px;
  	}
  	.cancella {
    		position: absolute;
    		top: 22px;
    		left: 262px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 81px;
    		height: 20px;
  	}
  	.pubblicaItem {
    		position: absolute;
    		top: 0px;
    		left: 20px;
    		box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
    		border-radius: 5px;
    		background-color: #1a5e63;
    		border: 2px solid #1a5e63;
    		box-sizing: border-box;
    		width: 161px;
    		height: 64px;
    		cursor: pointer;
  	}
  	.salva {
    		position: absolute;
    		top: 22px;
    		left: 60px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 81px;
    		height: 20px;
  	}

</style>
