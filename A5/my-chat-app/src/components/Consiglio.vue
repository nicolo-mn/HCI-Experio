<template>
  	<div :class="$style.consiglio">
    		<div :class="$style.notchHeight" />
    		<div :class="$style.titoloPagina">
      			<b :class="$style.consigli">Consigli</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<img :class="$style.keyboardArrowRightIcon2" alt="" />
    		<img :class="$style.keyboardArrowRightIcon3" alt="" />
    		<div :class="$style.post">
      			<div :class="$style.postChild" />
      			<img :class="$style.image3Icon" alt="" />
      			<div :class="$style.karlsruheCastleParent">
        				<b :class="$style.karlsruheCastle">Karlsruhe Castle</b>
        				<div :class="$style.siTrattaDi">Si tratta di un castello molto affascinante con all’interno un museo ed un grande parco attorno, perfetto per te che sei appassionata di passeggiate!!!</div>
      			</div>
      			<div :class="$style.karlsruhe">Karlsruhe</div>
      			<img :class="$style.image4Icon" alt="" />
      			<div :class="$style.paola">@Paola</div>
    		</div>
    		<img :class="$style.pubblicaIcon" alt="" />
  	</div>
</template>
<style  module>.consiglio {
  	width: 100%;
  	height: 874px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 40px;
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
  	}
  	.consigli {
    		position: absolute;
    		top: 17px;
    		left: 52px;
  	}
  	.keyboardArrowRightIcon {
    		position: absolute;
    		top: 26px;
    		left: 13px;
    		width: 30px;
    		height: 30px;
    		object-fit: contain;
  	}
  	.keyboardArrowRightIcon2 {
    		position: absolute;
    		top: 460px;
    		left: 6px;
    		width: 30px;
    		height: 30px;
    		object-fit: contain;
  	}
  	.keyboardArrowRightIcon3 {
    		position: absolute;
    		top: 456px;
    		left: 367px;
    		width: 30px;
    		height: 30px;
  	}
  	.post {
    		position: absolute;
    		top: 262px;
    		left: 41px;
    		width: 320.9px;
    		height: 426.5px;
    		text-align: center;
    		font-size: 17.66px;
  	}
  	.postChild {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 4px 8.12px #662c00;
    		border-radius: 20.31px;
    		background-color: rgba(242, 201, 76, 0.8);
    		width: 320.9px;
    		height: 426.5px;
  	}
  	.image3Icon {
    		position: absolute;
    		top: 26.4px;
    		left: 22.34px;
    		border-radius: 8.53px;
    		width: 276.2px;
    		height: 172.7px;
    		object-fit: cover;
  	}
  	.karlsruheCastleParent {
    		position: absolute;
    		top: 207.46px;
    		left: 0px;
    		width: 317.5px;
    		height: 161.3px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		padding: 8.4px 16.8px;
    		box-sizing: border-box;
    		gap: 25.2px;
    		font-size: 21.84px;
  	}
  	.karlsruheCastle {
    		position: relative;
  	}
  	.siTrattaDi {
    		align-self: stretch;
    		height: 55.4px;
    		position: relative;
    		font-size: 18.48px;
    		display: inline-block;
    		flex-shrink: 0;
  	}
  	.karlsruhe {
    		position: absolute;
    		top: 397.62px;
    		left: 36.08px;
    		display: inline-block;
    		width: 73.8px;
  	}
  	.image4Icon {
    		position: absolute;
    		top: 392px;
    		left: 12px;
    		width: 24.1px;
    		height: 24.1px;
    		object-fit: cover;
  	}
  	.paola {
    		position: absolute;
    		top: 397.62px;
    		left: 234.31px;
    		text-decoration: underline;
    		font-weight: 500;
    		display: inline-block;
    		width: 73.8px;
  	}
  	.pubblicaIcon {
    		position: absolute;
    		top: 732px;
    		left: 49px;
    		width: 303px;
    		height: 64px;
  	}

</style>
