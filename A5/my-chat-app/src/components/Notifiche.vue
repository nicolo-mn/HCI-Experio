<template>
  	<div :class="$style.notifiche">
    		<div :class="$style.titoloPagina">
      			<b :class="$style.notifiche2">Notifiche</b>
      			<img :class="$style.keyboardArrowRightIcon" alt="" />
    		</div>
    		<div :class="$style.notifica">
      			<div :class="$style.ludovicaTiHaContainer">
        				<span>
          					<b :class="$style.ludovica">Ludovica </b>
          					<span :class="$style.tiHaDato">ti ha dato  un nuovo consiglio </span>
        				</span>
        				<span :class="$style.tiHaDato">
          					<span>1d</span>
        				</span>
      			</div>
      			<div :class="$style.notificaChild" />
      			<img :class="$style.notificaItem" alt="" />
    		</div>
    		<div :class="$style.notifica2">
      			<div :class="$style.ludovicaTiHaContainer">
        				<span>
          					<span>
            						<b :class="$style.ludovica">Marco </b>
            						<span :class="$style.span">ti ha dato  un nuovo consiglio </span>
          					</span>
          					<span :class="$style.span">
            						<span :class="$style.span2">5</span>
          					</span>
        				</span>
        				<span :class="$style.span">
          					<span :class="$style.span2">
            						<span>h</span>
          					</span>
        				</span>
      			</div>
      			<div :class="$style.notificaChild" />
      			<img :class="$style.image3Icon" alt="" />
    		</div>
    		<div :class="$style.notifica3">
      			<div :class="$style.ludovicaTiHaContainer">
        				<span>
          					<b :class="$style.ludovica">Paola </b>
          					<span :class="$style.tiHaDato">ti ha dato  un nuovo consiglio </span>
        				</span>
        				<span :class="$style.tiHaDato">
          					<span>1h</span>
        				</span>
      			</div>
      			<div :class="$style.notificaChild" />
      			<img :class="$style.image4Icon" alt="" />
    		</div>
    		<div :class="$style.notchHeight" />
  	</div>
</template>
<style  module>.notifiche {
  	width: 100%;
  	height: 874px;
  	position: relative;
  	background-color: #faf9f6;
  	overflow: hidden;
  	text-align: left;
  	font-size: 20px;
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
    		font-size: 40px;
  	}
  	.notifiche2 {
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
  	.notifica {
    		position: absolute;
    		top: 277px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 71px;
    		overflow: hidden;
  	}
  	.ludovicaTiHaContainer {
    		position: absolute;
    		top: 17px;
    		left: 45px;
    		display: inline-block;
    		width: 283px;
    		height: 48px;
  	}
  	.ludovica {
    		font-family: Urbanist;
  	}
  	.tiHaDato {
    		white-space: pre-wrap;
    		font-size: 10px;
    		color: #565656;
  	}
  	.notificaChild {
    		position: absolute;
    		top: 24px;
    		left: 7px;
    		border-radius: 50%;
    		background-color: #d9d9d9;
    		width: 30px;
    		height: 30px;
  	}
  	.notificaItem {
    		position: absolute;
    		top: 24px;
    		left: 342px;
    		border-radius: 4.2px;
    		width: 47px;
    		height: 30px;
    		object-fit: cover;
  	}
  	.notifica2 {
    		position: absolute;
    		top: 206px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 71px;
    		overflow: hidden;
  	}
  	.span {
    		font-size: 10px;
    		color: #565656;
  	}
  	.span2 {
    		white-space: pre-wrap;
  	}
  	.image3Icon {
    		position: absolute;
    		top: 26px;
    		left: 342px;
    		border-radius: 4.2px;
    		width: 47px;
    		height: 30px;
    		object-fit: cover;
  	}
  	.notifica3 {
    		position: absolute;
    		top: 135px;
    		left: 0px;
    		border-bottom: 1px solid #000;
    		box-sizing: border-box;
    		width: 402px;
    		height: 71px;
    		overflow: hidden;
  	}
  	.image4Icon {
    		position: absolute;
    		top: 24px;
    		left: 343px;
    		border-radius: 4.2px;
    		width: 47px;
    		height: 30px;
    		object-fit: cover;
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
