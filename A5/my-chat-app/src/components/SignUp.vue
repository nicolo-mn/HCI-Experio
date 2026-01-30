<template>
  	<div :class="$style.signUp">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.registrazione">Registrazione</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.titolo">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.username">Username</b>
    		</div>
    		<div :class="$style.titolo2">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.username">Nome</b>
    		</div>
    		<div :class="$style.titolo3">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.username">Email</b>
    		</div>
    		<div :class="$style.titolo4">
      			<div :class="$style.titoloChild" />
      			<b :class="$style.username">Password</b>
    		</div>
    		<div :class="$style.pubblica">
      			<div :class="$style.pubblicaChild" @click="onRectangleClick" />
      			<b :class="$style.registrati">Registrati</b>
    		</div>
    		<div :class="$style.descrizione">
      			<div :class="$style.descrizioneChild" />
      			<b :class="$style.descriviTeStessoa">Descrivi te stesso/a, i tuoi hobby, cosa cerchi quando viaggi (Verrà utilizzato dagli altri utenti per darti consigli)</b>
    		</div>
  	</div>
</template>
<script setup lang="ts">
  	
  	
  	function onRectangleClick() {
    		// Add your code here
  	}</script>
<style  module>.signUp {
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
  	.registrazione {
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
  	.username {
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
  	.titolo3 {
    		position: absolute;
    		top: 513px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
  	}
  	.titolo4 {
    		position: absolute;
    		top: 592px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
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
  	.registrati {
    		position: absolute;
    		top: 22px;
    		left: 111px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 81px;
    		height: 20px;
  	}
  	.descrizione {
    		position: absolute;
    		top: 340px;
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
  	.descriviTeStessoa {
    		position: absolute;
    		top: 14px;
    		left: 17px;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: inline-block;
    		width: 248px;
    		height: 20px;
  	}

</style>
