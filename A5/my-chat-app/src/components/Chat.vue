<template>
  	<div :class="$style.chat">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.paola">Paola</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
      			<img :class="$style.binSvgrepoCom2Icon" alt="" />
    		</div>
    		<div :class="$style.rectangleParent">
      			<div :class="$style.groupChild" />
      			<div :class="$style.ciaoQuantoTempo">Ciao, quanto tempo ci vuole<br/>per visitare tutto?</div>
      			</div>
      			<div :class="$style.rectangleGroup">
        				<div :class="$style.groupItem" />
        				<div :class="$style.grazieMille">Grazie mille!</div>
      			</div>
      			<div :class="$style.rectangleContainer">
        				<div :class="$style.groupInner" />
        				<div :class="$style.circa2Ore">Circa 2 ore! Secondo me è bellissimo la mattina</div>
      			</div>
      			<div :class="$style.chatChild" />
      			<div :class="$style.scriviUnMessaggio">Scrivi un messaggio...</div>
      			<div :class="$style.chatItem" />
      			<img :class="$style.sendSvgrepoCom1Icon" alt="" />
    		</div>
    		</template>
    		<style  module>.chat {
      			width: 100%;
      			height: 874px;
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
      			.paola {
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
      			.binSvgrepoCom2Icon {
        				position: absolute;
        				top: 26px;
        				left: 349px;
        				width: 30px;
        				height: 30px;
      			}
      			.rectangleParent {
        				position: absolute;
        				top: 153px;
        				left: 70px;
        				width: 321px;
        				height: 75px;
      			}
      			.groupChild {
        				position: absolute;
        				top: 0px;
        				left: 0px;
        				box-shadow: 0px 4px 8.12px #662c00;
        				border-radius: 20.31px;
        				background-color: rgba(242, 201, 76, 0.8);
        				width: 321px;
        				height: 75px;
      			}
      			.ciaoQuantoTempo {
        				position: absolute;
        				top: 0px;
        				left: 15px;
        				display: flex;
        				align-items: center;
        				width: 294px;
        				height: 75px;
      			}
      			.rectangleGroup {
        				position: absolute;
        				top: 343px;
        				left: 241px;
        				width: 150px;
        				height: 52px;
      			}
      			.groupItem {
        				position: absolute;
        				top: 0px;
        				left: 0px;
        				box-shadow: 0px 4px 8.12px #662c00;
        				border-radius: 20.31px;
        				background-color: rgba(242, 201, 76, 0.8);
        				width: 150px;
        				height: 52px;
      			}
      			.grazieMille {
        				position: absolute;
        				top: 0px;
        				left: 8.01px;
        				display: flex;
        				align-items: center;
        				width: 137.4px;
        				height: 52px;
      			}
      			.rectangleContainer {
        				position: absolute;
        				top: 246px;
        				left: 14px;
        				width: 321px;
        				height: 79px;
      			}
      			.groupInner {
        				position: absolute;
        				top: 0px;
        				left: 0px;
        				box-shadow: 0px 4px 8.12px #662c00;
        				border-radius: 20.31px;
        				background-color: rgba(242, 201, 76, 0.8);
        				width: 321px;
        				height: 79px;
      			}
      			.circa2Ore {
        				position: absolute;
        				top: 0px;
        				left: 15px;
        				display: flex;
        				align-items: center;
        				width: 294px;
        				height: 79px;
      			}
      			.chatChild {
        				position: absolute;
        				top: 812px;
        				left: 14px;
        				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        				border-radius: 10px;
        				background-color: #fff;
        				border: 3px solid #1a5e63;
        				box-sizing: border-box;
        				width: 321px;
        				height: 50px;
      			}
      			.scriviUnMessaggio {
        				position: absolute;
        				top: 825px;
        				left: 29px;
        				font-size: 20px;
      			}
      			.chatItem {
        				position: absolute;
        				top: 812px;
        				left: 341px;
        				border-radius: 50%;
        				background-color: #1a5e63;
        				width: 50px;
        				height: 50px;
      			}
      			.sendSvgrepoCom1Icon {
        				position: absolute;
        				top: 814px;
        				left: 338px;
        				width: 50px;
        				height: 50px;
      			}
    		
    		</style>
