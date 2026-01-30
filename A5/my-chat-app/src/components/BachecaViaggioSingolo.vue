<template>
  	<div :class="$style.bachecaViaggioSingolo">
    		<div :class="$style.bachecaViaggioSingoloChild" />
    		<div :class="$style.notchHeight" />
    		<div :class="$style.milanParent">
      			<b :class="$style.milan">Milan</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
      			<img :class="$style.edit3SvgrepoCom1Icon" alt="" />
      			<img :class="$style.binSvgrepoCom1Icon" alt="" />
    		</div>
    		<div :class="$style.post">
      			<div :class="$style.postChild" />
      			<div :class="$style.duomoDiMilano">Duomo di<br/> Milano</div>
        				<div :class="$style.milan2">Milan</div>
        				<img :class="$style.image4Icon" alt="" />
        				<div :class="$style.giovanni">@Giovanni</div>
        				<img :class="$style.postItem" alt="" />
      			</div>
      			<div :class="$style.post2">
        				<div :class="$style.postChild" />
        				<div :class="$style.galleriaVittorioEmanuele">Galleria Vittorio<br/> Emanuele II</div>
          					<div :class="$style.milan2">Milan</div>
          					<img :class="$style.image4Icon" alt="" />
          					<div :class="$style.giovanni">@Ludovica</div>
          					<img :class="$style.postItem" alt="" />
        				</div>
        				<img :class="$style.navbarIcon" alt="" />
      			</div>
      			</template>
      			<style  module>.bachecaViaggioSingolo {
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
        				.bachecaViaggioSingoloChild {
          					position: absolute;
          					top: 121px;
          					left: 12px;
          					background-color: #9c621b;
          					border: 7px solid #662c00;
          					box-sizing: border-box;
          					width: 378px;
          					height: 672px;
        				}
        				.notchHeight {
          					position: absolute;
          					top: 0px;
          					left: 0px;
          					width: 402px;
          					height: 54px;
          					overflow: hidden;
        				}
        				.milanParent {
          					position: absolute;
          					top: 54px;
          					right: 0px;
          					width: 402px;
          					height: 63px;
          					overflow: hidden;
          					font-size: 40px;
        				}
        				.milan {
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
        				.edit3SvgrepoCom1Icon {
          					position: absolute;
          					top: 17px;
          					left: 317px;
          					width: 30px;
          					height: 30px;
          					flex-shrink: 0;
        				}
        				.binSvgrepoCom1Icon {
          					position: absolute;
          					top: 17px;
          					left: 356px;
          					width: 30px;
          					height: 30px;
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
        				.duomoDiMilano {
          					position: absolute;
          					top: 143px;
          					left: 36px;
          					font-size: 20px;
          					font-weight: 600;
        				}
        				.milan2 {
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
        				.giovanni {
          					position: absolute;
          					top: 192px;
          					left: 40px;
          					text-decoration: underline;
          					display: inline-block;
          					width: 77.3px;
        				}
        				.postItem {
          					position: absolute;
          					top: 13px;
          					left: 11px;
          					border-radius: 4.2px;
          					width: 136px;
          					height: 85px;
          					object-fit: cover;
        				}
        				.post2 {
          					position: absolute;
          					top: 144px;
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
        				.navbarIcon {
          					position: absolute;
          					top: 807px;
          					left: 0px;
          					width: 402px;
          					height: 67px;
        				}
      			
      			</style>
                