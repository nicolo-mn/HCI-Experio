<template>
  	<div :class="$style.tuoiviaggi">
    		<div :class="$style.cityFrame">
      			<div :class="$style.chicago">
        				<b :class="$style.newYork">Chicago</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.dublin">
        				<b :class="$style.newYork">Dublin</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.rome">
        				<b :class="$style.newYork">Rome</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.kyoto">
        				<b :class="$style.newYork">Kyoto</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.milan" @click="onMilanContainerClick">
        				<b :class="$style.newYork">Milan</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.tokyo">
        				<b :class="$style.newYork">Tokyo</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.newyork">
        				<b :class="$style.newYork">New York</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
      			<div :class="$style.paris">
        				<b :class="$style.newYork">Paris</b>
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
      			</div>
    		</div>
    		<img :class="$style.navbarIcon" alt="" />
    		<div :class="$style.viaggi">
      			<b :class="$style.iTuoiViaggi">I tuoi viaggi</b>
      			<img :class="$style.vectorIcon" alt="" @click="onMilanContainerClick" />
    		</div>
    		<div :class="$style.notchHeight" />
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onMilanContainerClick() {
    		// Add your code here
  	}</script>
<style  module>.tuoiviaggi {
  	width: 100%;
  	height: 990px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 40px;
  	color: #000;
  	font-family: Urbanist;
}
  	.cityFrame {
    		position: absolute;
    		top: 154px;
    		left: 8px;
    		width: 386px;
    		height: 807px;
  	}
  	.chicago {
    		position: absolute;
    		top: 104px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.keyboardArrowRightIcon {
    		position: absolute;
    		top: 22px;
    		left: 330px;
    		width: 30px;
    		height: 30px;
  	}
  	.dublin {
    		position: absolute;
    		top: 520px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.rome {
    		position: absolute;
    		top: 208px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.kyoto {
    		position: absolute;
    		top: 624px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.milan {
    		position: absolute;
    		top: 728px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
    		cursor: pointer;
  	}
  	.tokyo {
    		position: absolute;
    		top: 312px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.newyork {
    		position: absolute;
    		top: 416px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.newYork {
    		position: absolute;
    		top: 14px;
    		left: 27px;
    		display: inline-block;
    		width: 262px;
    		height: 52px;
  	}
  	.paris {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 4px 4px 6px #1a5e63;
    		border-radius: 10px;
    		background-color: #f2c94c;
    		width: 386px;
    		height: 79px;
    		overflow: hidden;
  	}
  	.navbarIcon {
    		position: absolute;
    		top: 802px;
    		left: 0px;
    		width: 402px;
    		height: 74px;
  	}
  	.viaggi {
    		position: absolute;
    		top: 54px;
    		left: 0px;
    		width: 402px;
    		height: 63px;
    		overflow: hidden;
    		text-align: center;
  	}
  	.iTuoiViaggi {
    		position: absolute;
    		top: 10px;
    		left: -10px;
    		display: inline-block;
    		width: 262px;
    		height: 44px;
    		flex-shrink: 0;
  	}
  	.vectorIcon {
    		position: absolute;
    		width: 8.71%;
    		top: calc(50% - 12.5px);
    		right: 6.97%;
    		left: 84.33%;
    		max-width: 100%;
    		overflow: hidden;
    		height: 35px;
    		cursor: pointer;
    		flex-shrink: 0;
  	}
  	.notchHeight {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 402px;
    		height: 54px;
    		overflow: hidden;
  	}

</style>
