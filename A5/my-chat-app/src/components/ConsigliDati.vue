<template>
  	<div :class="$style.consigliDati">
    		<div :class="$style.consigliDatiChild" />
    		<div :class="$style.notchHeight" />
    		<div :class="$style.consigliDatiParent">
      			<b :class="$style.consigliDati2">Consigli dati</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.post">
      			<div :class="$style.postChild" />
      			<div :class="$style.karlsruheCastle">Karlsruhe Castle</div>
      			<div :class="$style.karlsruhe">Karlsruhe</div>
      			<img :class="$style.image4Icon" alt="" />
      			<img :class="$style.image3Icon" alt="" />
      			<div :class="$style.marco">@Marco</div>
    		</div>
    		<div :class="$style.post2">
      			<div :class="$style.postChild" />
      			<div :class="$style.karlsruheCastle">Karlsruhe Castle</div>
      			<div :class="$style.karlsruhe">Karlsruhe</div>
      			<img :class="$style.image4Icon" alt="" />
      			<img :class="$style.image3Icon" alt="" />
      			<div :class="$style.marco">@Paola</div>
    		</div>
    		<div :class="$style.post3">
      			<div :class="$style.postChild" />
      			<div :class="$style.duomoDiMilano">Duomo di<br/> Milano</div>
        				<div :class="$style.karlsruhe">Milan</div>
        				<img :class="$style.image4Icon" alt="" />
        				<div :class="$style.marco">@Giovanni</div>
        				<img :class="$style.image3Icon" alt="" />
      			</div>
      			<div :class="$style.post4">
        				<div :class="$style.postChild" />
        				<div :class="$style.galleriaVittorioEmanuele">Galleria Vittorio<br/> Emanuele II</div>
          					<div :class="$style.karlsruhe">Milan</div>
          					<img :class="$style.image4Icon" alt="" />
          					<div :class="$style.marco">@Ludovica</div>
          					<img :class="$style.image3Icon" alt="" />
        				</div>
        				<div :class="$style.post5">
          					<div :class="$style.postChild" />
          					<div :class="$style.muroDiBerlino">Muro di Berlino</div>
          					<div :class="$style.karlsruhe">Germany</div>
          					<img :class="$style.image4Icon" alt="" />
          					<img :class="$style.image3Icon" alt="" />
          					<div :class="$style.marco">@Ernst</div>
        				</div>
        				<img :class="$style.navbarIcon" alt="" />
      			</div>
      			</template>
      			<style  module>.consigliDati {
        				width: 100%;
        				height: 874px;
        				position: relative;
        				background-color: #faf9f6;
        				overflow-y: auto;
        				text-align: center;
        				font-size: 15px;
        				color: #000;
        				font-family: Urbanist;
      			}
        				.consigliDatiChild {
          					position: absolute;
          					top: 121px;
          					left: 12px;
          					background-color: #9c621b;
          					border: 7px solid #662c00;
          					box-sizing: border-box;
          					width: 378px;
          					height: 721px;
        				}
        				.notchHeight {
          					position: absolute;
          					top: 0px;
          					left: 0px;
          					width: 402px;
          					height: 54px;
          					overflow: hidden;
        				}
        				.consigliDatiParent {
          					position: absolute;
          					top: 54px;
          					right: 0px;
          					width: 402px;
          					height: 63px;
          					overflow: hidden;
          					font-size: 40px;
        				}
        				.consigliDati2 {
          					position: absolute;
          					top: 6px;
          					left: 41px;
          					flex-shrink: 0;
        				}
        				.keyboardArrowRightIcon {
          					position: absolute;
          					top: 17px;
          					left: 11px;
          					width: 30px;
          					height: 30px;
          					object-fit: contain;
          					flex-shrink: 0;
        				}
        				.post {
          					position: absolute;
          					top: 144px;
          					left: 216px;
          					width: 158px;
          					height: 210px;
        				}
        				.postChild {
          					position: absolute;
          					top: 0px;
          					left: 0px;
          					box-shadow: 0px 0px 4px 4px #662c00;
          					border-radius: 10px;
          					background-color: rgba(242, 201, 76, 0.8);
          					width: 158px;
          					height: 210px;
        				}
        				.karlsruheCastle {
          					position: absolute;
          					top: 149px;
          					left: 6px;
          					font-size: 20px;
          					font-weight: 600;
        				}
        				.karlsruhe {
          					position: absolute;
          					top: 117px;
          					left: 43px;
          					display: inline-block;
          					width: 79px;
          					height: 14px;
        				}
        				.image4Icon {
          					position: absolute;
          					top: 111px;
          					left: 33px;
          					width: 20px;
          					height: 20px;
          					object-fit: cover;
        				}
        				.image3Icon {
          					position: absolute;
          					top: 13px;
          					left: 11px;
          					border-radius: 4.2px;
          					width: 136px;
          					height: 85px;
          					object-fit: cover;
        				}
        				.marco {
          					position: absolute;
          					top: 192px;
          					left: 40px;
          					text-decoration: underline;
          					display: inline-block;
          					width: 77.3px;
        				}
        				.post2 {
          					position: absolute;
          					top: 144px;
          					left: 27px;
          					width: 158px;
          					height: 210px;
        				}
        				.post3 {
          					position: absolute;
          					top: 379px;
          					left: 216px;
          					width: 158px;
          					height: 210px;
        				}
        				.duomoDiMilano {
          					position: absolute;
          					top: 143px;
          					left: 36px;
          					font-size: 20px;
          					font-weight: 600;
        				}
        				.post4 {
          					position: absolute;
          					top: 379px;
          					left: 27px;
          					width: 158px;
          					height: 210px;
        				}
        				.galleriaVittorioEmanuele {
          					position: absolute;
          					top: 144px;
          					left: 8px;
          					font-size: 20px;
          					font-weight: 600;
        				}
        				.post5 {
          					position: absolute;
          					top: 614px;
          					left: 27px;
          					width: 158px;
          					height: 210px;
        				}
        				.muroDiBerlino {
          					position: absolute;
          					top: 149px;
          					left: 11px;
          					font-size: 20px;
          					font-weight: 600;
        				}
        				.navbarIcon {
          					position: absolute;
          					top: 806px;
          					left: 0px;
          					width: 402px;
          					height: 67px;
        				}
      			
      			</style>
                