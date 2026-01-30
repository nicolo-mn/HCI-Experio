<template>
  	<div :class="$style.gamification">
    		<div :class="$style.titoloPagina">
      			<b :class="$style.premi">Premi</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.sfondoBachecaParent">
      			<div :class="$style.sfondoBacheca" />
      			<div :class="$style.oro">
        				<div :class="$style.oroChild" />
        				<img :class="$style.goldMedalIcon" alt="" />
        				<b :class="$style.consigliRicevuti">100 consigli ricevuti</b>
      			</div>
      			<div :class="$style.bronzo">
        				<div :class="$style.oroChild" />
        				<img :class="$style.bronzeMedalIcon" alt="" />
        				<b :class="$style.consigliRicevuti">25 consigli ricevuti</b>
      			</div>
      			<div :class="$style.argento">
        				<div :class="$style.oroChild" />
        				<b :class="$style.consigliRicevuti">50 consigli ricevuti</b>
        				<img :class="$style.silverMedalIcon" alt="" />
      			</div>
      			<div :class="$style.bronzodonati">
        				<div :class="$style.oroChild" />
        				<b :class="$style.consigliRicevuti">25 consigli donati</b>
        				<img :class="$style.award4Icon" alt="" />
      			</div>
      			<div :class="$style.oroDonati">
        				<div :class="$style.oroChild" />
        				<b :class="$style.consigliRicevuti">100 consigli donati</b>
        				<img :class="$style.trophyCupIcon" alt="" />
      			</div>
      			<div :class="$style.oroDonati2">
        				<div :class="$style.oroChild" />
        				<b :class="$style.consigliRicevuti">50 consigli donati</b>
        				<img :class="$style.award5Icon" alt="" />
      			</div>
    		</div>
    		<div :class="$style.notchHeight" />
  	</div>
</template>
<style  module>.gamification {
  	width: 100%;
  	height: 1094px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 40px;
  	color: #000;
  	font-family: Urbanist;
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
  	}
  	.premi {
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
  	.sfondoBachecaParent {
    		position: absolute;
    		top: 158px;
    		left: 11px;
    		width: 379px;
    		height: 859px;
    		text-align: center;
    		font-size: 15px;
  	}
  	.sfondoBacheca {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 0px 4px 4px #662c00;
    		background-color: #9c621b;
    		width: 379px;
    		height: 859px;
  	}
  	.oro {
    		position: absolute;
    		top: 21px;
    		left: 30px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.oroChild {
    		position: absolute;
    		top: 9px;
    		left: 10px;
    		box-shadow: 0px 0px 4px 4px #1a5e63;
    		background-color: rgba(242, 201, 76, 0.8);
    		border: 1px solid #1a5e63;
    		box-sizing: border-box;
    		width: 125px;
    		height: 166px;
  	}
  	.goldMedalIcon {
    		position: absolute;
    		top: 21px;
    		left: 31px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 76px;
    		height: 101.5px;
    		object-fit: contain;
  	}
  	.consigliRicevuti {
    		position: absolute;
    		top: 128px;
    		left: 22px;
    		display: inline-block;
    		width: 101px;
  	}
  	.bronzo {
    		position: absolute;
    		top: 227px;
    		left: 30px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.bronzeMedalIcon {
    		position: absolute;
    		top: 35px;
    		left: 39px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 68px;
    		height: 90.4px;
    		object-fit: contain;
  	}
  	.argento {
    		position: absolute;
    		top: 20px;
    		left: 204px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.silverMedalIcon {
    		position: absolute;
    		top: 32px;
    		left: 38px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 69px;
    		height: 96px;
    		object-fit: contain;
  	}
  	.bronzodonati {
    		position: absolute;
    		top: 640px;
    		left: 30px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.award4Icon {
    		position: absolute;
    		top: 50px;
    		left: 23px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 100px;
    		height: 49.2px;
    		object-fit: contain;
  	}
  	.oroDonati {
    		position: absolute;
    		top: 433px;
    		left: 30px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.trophyCupIcon {
    		position: absolute;
    		top: 9px;
    		left: 35px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 75px;
    		height: 112.2px;
  	}
  	.oroDonati2 {
    		position: absolute;
    		top: 433px;
    		left: 205px;
    		border-radius: 4px;
    		width: 145px;
    		height: 184px;
    		overflow: hidden;
  	}
  	.award5Icon {
    		position: absolute;
    		top: 48px;
    		left: 23px;
    		filter: drop-shadow(5.484486103057861px 5.484486103057861px 6.27px rgba(0, 0, 0, 0.3));
    		width: 100px;
    		height: 49.2px;
    		object-fit: contain;
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
