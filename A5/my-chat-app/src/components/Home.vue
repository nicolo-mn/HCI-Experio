<template>
  	<div :class="$style.home">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.rectangleParent">
      			<div :class="$style.frameChild" />
      			<div :class="$style.paola">Paola</div>
      			<img :class="$style.frameItem" alt="" />
      			<div :class="$style.parigi">Parigi</div>
      			<div :class="$style.sonoMoltoAppassionata">Sono molto appassionata di rocknroll, cerco qualche consilgio per visitare Parigi attraverso i concerti</div>
      			<div :class="$style.rectangleGroup" @click="onGroupContainerClick">
        				<div :class="$style.groupChild" />
        				<div :class="$style.consiglia">Consiglia</div>
      			</div>
      			<img :class="$style.travelSuitcaseSvgrepoCom1Icon" alt="" />
    		</div>
    		<div :class="$style.rectangleContainer">
      			<div :class="$style.frameChild" />
      			<div :class="$style.paola">Gianni</div>
      			<img :class="$style.frameItem" alt="" />
      			<div :class="$style.parigi">Parigi</div>
      			<div :class="$style.sonoMoltoAppassionata">Cerco delle belle cammiinate stimolanti in mezzo alla natura o in esplorazione della città</div>
      			<div :class="$style.rectangleGroup" @click="onGroupContainerClick">
        				<div :class="$style.groupChild" />
        				<div :class="$style.consiglia">Consiglia</div>
      			</div>
      			<img :class="$style.travelSuitcaseSvgrepoCom1Icon" alt="" />
    		</div>
    		<div :class="$style.experioWrapper">
      			<b :class="$style.experio">Experio</b>
    		</div>
    		<img :class="$style.navbarIcon" alt="" />
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onGroupContainerClick() {
    		// Add your code here
  	}</script>
<style  module>.home {
  	width: 100%;
  	height: 1131px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow-y: auto;
  	text-align: center;
  	font-size: 32px;
  	color: #000;
  	font-family: 'Twinkle Star';
}
  	.notchHeight {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 402px;
    		height: 54px;
    		overflow: hidden;
  	}
  	.rectangleParent {
    		position: absolute;
    		top: 148px;
    		left: 23px;
    		width: 356px;
    		height: 429px;
  	}
  	.frameChild {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 0px 4px 9px #1a5e63;
    		border-radius: 20px;
    		background-color: rgba(242, 201, 76, 0.8);
    		width: 356px;
    		height: 429px;
  	}
  	.paola {
    		position: absolute;
    		top: 34px;
    		left: 118px;
    		font-size: 52px;
    		display: inline-block;
    		width: 164px;
  	}
  	.frameItem {
    		position: absolute;
    		top: 18px;
    		left: 21px;
    		border-radius: 50%;
    		width: 105px;
    		height: 105px;
    		object-fit: cover;
  	}
  	.parigi {
    		position: absolute;
    		top: 85px;
    		left: 126px;
    		display: inline-block;
    		width: 167px;
  	}
  	.sonoMoltoAppassionata {
    		position: absolute;
    		top: 174px;
    		left: 31px;
    		font-size: 22px;
    		font-family: Urbanist;
    		display: inline-block;
    		width: 294px;
  	}
  	.rectangleGroup {
    		position: absolute;
    		top: 318px;
    		left: calc(50% - 92px);
    		width: 183px;
    		height: 45px;
    		cursor: pointer;
    		color: #fff;
    		font-family: Urbanist;
  	}
  	.groupChild {
    		position: absolute;
    		top: 0px;
    		left: calc(50% - 91.5px);
    		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    		border-radius: 10px;
    		background-color: #1a5e63;
    		border: 2px solid #565656;
    		box-sizing: border-box;
    		width: 183px;
    		height: 45px;
  	}
  	.consiglia {
    		position: absolute;
    		top: 1px;
    		left: 28.75px;
  	}
  	.travelSuitcaseSvgrepoCom1Icon {
    		position: absolute;
    		top: 82px;
    		left: 137px;
    		width: 30px;
    		height: 30px;
  	}
  	.rectangleContainer {
    		position: absolute;
    		top: 608px;
    		left: 23px;
    		width: 356px;
    		height: 429px;
  	}
  	.experioWrapper {
    		position: absolute;
    		top: 54px;
    		left: 0px;
    		width: 402px;
    		height: 63px;
    		overflow: hidden;
    		display: flex;
    		align-items: flex-end;
    		padding: 0px 20px;
    		box-sizing: border-box;
    		font-size: 40px;
    		font-family: Urbanist;
  	}
  	.experio {
    		position: relative;
  	}
  	.navbarIcon {
    		position: absolute;
    		top: 807px;
    		left: 0px;
    		width: 402px;
    		height: 67px;
  	}

</style>
