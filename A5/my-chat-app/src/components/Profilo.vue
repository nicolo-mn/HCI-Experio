<template>
  	<div :class="$style.profilo">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.profilo2">
      			<div :class="$style.chiara">Chiara</div>
      			<img :class="$style.profiloChild" alt="" />
      			<img :class="$style.settingsIcon" alt="" />
      			<img :class="$style.notificationsIcon" alt="" @click="onNotificationsIconClick" />
      			<img :class="$style.emojiEventsIcon" alt="" @click="onNotificationsIconClick" />
    		</div>
    		<div :class="$style.descrizione">
      			<div :class="$style.descrizioneChild" />
      			<div :class="$style.miPiaccionoI">Mi piacciono i croissant, le passeggiate nei parchi e i palazzi storici.</div>
    		</div>
    		<div :class="$style.bacheca">
      			<div :class="$style.sfondoBacheca" />
      			<div :class="$style.post">
        				<div :class="$style.postChild" />
        				<div :class="$style.karlsruheCastle">Karlsruhe Castle</div>
        				<div :class="$style.karlsruhe">Karlsruhe</div>
        				<img :class="$style.image4Icon" alt="" />
        				<img :class="$style.image3Icon" alt="" />
        				<div :class="$style.marco">@Marco</div>
      			</div>
      			<div :class="$style.titoloBacheca" @click="onNotificationsIconClick">
        				<img :class="$style.keyboardArrowRightIcon" alt="" />
        				<div :class="$style.laMiaBacheca">La mia bacheca</div>
      			</div>
      			<div :class="$style.post2">
        				<div :class="$style.postChild" />
        				<div :class="$style.laScala">Karlsruhe Castle</div>
        				<div :class="$style.karlsruhe">Karlsruhe</div>
        				<img :class="$style.image4Icon" alt="" />
        				<img :class="$style.image3Icon" alt="" />
        				<div :class="$style.marco">@Paola</div>
      			</div>
    		</div>
    		<div :class="$style.consigliDati">
      			<div :class="$style.sfondoBacheca" />
      			<div :class="$style.post">
        				<div :class="$style.postChild" />
        				<div :class="$style.karlsruheCastle">Duomo di milano</div>
        				<div :class="$style.karlsruhe">Milan</div>
        				<img :class="$style.image4Icon" alt="" />
        				<img :class="$style.image3Icon" alt="" />
        				<div :class="$style.marco">@Marco</div>
      			</div>
      			<div :class="$style.titoloBacheca2">
        				<img :class="$style.keyboardArrowRightIcon2" alt="" />
        				<div :class="$style.consigliDonati">Consigli donati</div>
      			</div>
      			<div :class="$style.post2">
        				<div :class="$style.postChild" />
        				<div :class="$style.laScala">La Scala</div>
        				<div :class="$style.karlsruhe">Milano</div>
        				<img :class="$style.image4Icon" alt="" />
        				<img :class="$style.image3Icon" alt="" />
        				<div :class="$style.marco">@Paola</div>
      			</div>
    		</div>
    		<img :class="$style.navbarIcon" alt="" />
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onNotificationsIconClick() {
    		// Add your code here
  	}</script>
<style  module>.profilo {
  	width: 100%;
  	height: 874px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 15px;
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
    		flex-shrink: 0;
  	}
  	.profilo2 {
    		position: absolute;
    		top: 54px;
    		left: 0px;
    		width: 402px;
    		height: 90px;
    		overflow: hidden;
    		flex-shrink: 0;
    		font-size: 30px;
  	}
  	.chiara {
    		position: absolute;
    		top: 17px;
    		left: 106px;
    		display: inline-block;
    		width: 131px;
    		height: 34px;
  	}
  	.profiloChild {
    		position: absolute;
    		top: 8px;
    		left: 36px;
    		border-radius: 50%;
    		width: 52px;
    		height: 52px;
    		object-fit: cover;
  	}
  	.settingsIcon {
    		position: absolute;
    		top: 24px;
    		left: 349px;
    		width: 27px;
    		height: 27px;
  	}
  	.notificationsIcon {
    		position: absolute;
    		top: 24px;
    		left: 322px;
    		width: 27px;
    		height: 27px;
    		cursor: pointer;
  	}
  	.emojiEventsIcon {
    		position: absolute;
    		top: 24px;
    		left: 295px;
    		width: 27px;
    		height: 27px;
    		cursor: pointer;
  	}
  	.descrizione {
    		position: absolute;
    		top: 144px;
    		left: 0px;
    		width: 402px;
    		height: 92px;
    		flex-shrink: 0;
    		font-size: 20px;
  	}
  	.descrizioneChild {
    		position: absolute;
    		top: 91.5px;
    		left: -0.5px;
    		border-top: 1px solid #000;
    		box-sizing: border-box;
    		width: 403px;
    		height: 1px;
  	}
  	.miPiaccionoI {
    		position: absolute;
    		top: 0px;
    		left: 36px;
    		font-weight: 500;
    		display: inline-block;
    		width: 330px;
    		height: 72px;
  	}
  	.bacheca {
    		position: absolute;
    		top: 236px;
    		left: 12px;
    		width: 384px;
    		height: 282px;
    		flex-shrink: 0;
    		text-align: center;
  	}
  	.sfondoBacheca {
    		position: absolute;
    		top: 52px;
    		left: 0px;
    		box-shadow: 0px 0px 4px 4px #662c00;
    		background-color: #9c621b;
    		width: 379px;
    		height: 225px;
  	}
  	.post {
    		position: absolute;
    		top: 73px;
    		left: 214px;
    		width: 150px;
    		height: 189px;
  	}
  	.postChild {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 0px 4px 4px #662c00;
    		border-radius: 10px;
    		background-color: rgba(242, 201, 76, 0.8);
    		width: 150px;
    		height: 189px;
  	}
  	.karlsruheCastle {
    		position: absolute;
    		top: 132px;
    		left: 12px;
    		font-weight: 600;
    		display: inline-block;
    		width: 126px;
    		height: 13px;
  	}
  	.karlsruhe {
    		position: absolute;
    		top: 105.3px;
    		left: 40.82px;
    		display: inline-block;
    		width: 75px;
    		height: 12.6px;
  	}
  	.image4Icon {
    		position: absolute;
    		top: 99.66px;
    		left: 31.58px;
    		width: 18.5px;
    		height: 18.5px;
    		object-fit: cover;
  	}
  	.image3Icon {
    		position: absolute;
    		top: 10.66px;
    		left: 12.14px;
    		border-radius: 4.2px;
    		width: 125.7px;
    		height: 78.6px;
    		object-fit: cover;
  	}
  	.marco {
    		position: absolute;
    		top: 172.8px;
    		left: 37.97px;
    		text-decoration: underline;
    		display: inline-block;
    		width: 73.4px;
    		height: 9.9px;
  	}
  	.titoloBacheca {
    		position: absolute;
    		top: 16px;
    		left: 0px;
    		width: 331px;
    		height: 36px;
    		cursor: pointer;
    		text-align: left;
    		font-size: 25px;
  	}
  	.keyboardArrowRightIcon {
    		position: absolute;
    		top: 0px;
    		left: 180.58px;
    		width: 26.8px;
    		height: 26.8px;
  	}
  	.laMiaBacheca {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		font-weight: 600;
    		display: inline-block;
    		width: 331px;
    		height: 36px;
  	}
  	.post2 {
    		position: absolute;
    		top: 73px;
    		left: 14px;
    		width: 150px;
    		height: 189px;
  	}
  	.consigliDati {
    		position: absolute;
    		top: 518px;
    		left: 12px;
    		width: 384px;
    		height: 289px;
    		flex-shrink: 0;
    		text-align: center;
  	}
  	.titoloBacheca2 {
    		position: absolute;
    		top: 16px;
    		left: 0px;
    		width: 364px;
    		height: 36px;
    		text-align: left;
    		font-size: 25px;
  	}
  	.keyboardArrowRightIcon2 {
    		position: absolute;
    		top: 0px;
    		left: 164px;
    		width: 28.1px;
    		height: 28.1px;
  	}
  	.consigliDonati {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		font-weight: 600;
    		display: inline-block;
    		width: 364px;
    		height: 36px;
  	}
  	.laScala {
    		position: absolute;
    		top: 134px;
    		left: 12px;
    		font-weight: 600;
    		display: inline-block;
    		width: 126px;
    		height: 13px;
  	}
  	.navbarIcon {
    		position: absolute;
    		top: 800px;
    		left: 0px;
    		width: 402px;
    		height: 77.7px;
    		flex-shrink: 0;
  	}

</style>
