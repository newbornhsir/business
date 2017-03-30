<template>
	<div id="home">
		<div class="home-top">
			<span class="mui-icon mui-icon-back arrow-select"></span>
			<span class="mui-icon mui-icon-forward arrow-select"></span>
			<div class="header">
				<div class="report-header top">环球港</div>
				<div class="report-income-name top">总营收</div>
				<div class="report-income-data top">1000</div>
			</div>
			<div class="mui-row report-content">
				<div class="mui-col-sm-3 mui-col-xs-3">
				<div>现金收入</div>
					<div>1000</div>
				</div>
				<div class="mui-col-sm-3 mui-col-xs-3">
					<div>线上支付</div>
					<div>1000</div>
				</div>
				<div class="mui-col-sm-3 mui-col-xs-3">
					<div>线上比例</div>
					<div>1000</div>
				</div>
				<div class="mui-col-sm-3 mui-col-xs-3 end">
					<div>免费币</div>
					<div>1000</div>
				</div>
			</div>
			<div class="mui-row report-content">
				<div class="mui-col-sm-4 mui-col-xs-4">
					<div>礼品出击奖</div>
					<div>1000</div>
				</div>
				<div class="mui-col-sm-4 mui-col-xs-4">
					<div>出货率</div>
					<div>1000</div>
				</div>
				<div class="mui-col-sm-4 mui-col-xs-4 end">
					<div>单日单台</div>
					<div>1000</div>
				</div>
			</div>
		</div>
		<div class="mui-row home-operate">
			<div class="mui-col-sm-6 mui-col-xs-6 report-entry">
				<div class="pic"><span class="mui-icon mui-icon-image"></span></div>
				<div class="name">营运报表</div>
			</div>
			<div class="mui-col-sm-6 mui-col-xs-6 other-entry">
				<div class="mui-row device-manage">
					<div class="mui-col-sm-4 mui-col-xs-4 pic"><span class="mui-icon mui-icon-videocam"></span></div>
					<div class="mui-col-sm-8 mui-col-xs-8 name">设备管理</div>
				</div>
				<div class="average">
					<div class="team-manage">
						<div class="pic commonpic"><span class="mui-icon mui-icon-plusempty"></span></div>
						<div class="name">成员管理</div>
					</div>
					<div class="online-course">
						<div class="pic commonpic"><span class="mui-icon mui-icon-videocam"></span></div>
						<div class="name">在线课堂</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home"
	}
</script>

<style>
	.header{
	padding: 10px 0 20px;
	/*background: rgb(81,180,199);*/
}
.mui-content{
	padding-bottom: 55px;
}
.arrow-select{
	background: white;
	color: silver;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	line-height: 40px;
	text-align: center;
	position: absolute;
	top:140px;
	font-size: 30px;
}
.arrow-select.mui-icon-back{
	left: 10px;
}
.arrow-select.mui-icon-forward{
	right: 10px;
}
.home-top{
	/*background: url(../../static/img/home_bg.png);*/
	background: #007AFF;
	background-size: cover;
	border: none;
	z-index: 10;
	position: relative;
}
.top{
	margin: 0 auto;
	text-align: center;
	color: #fff;
	
}
.report-header{
	padding: 15px 0;
	font-weight: bolder;
}
.report-income-name{
	padding: 10px;
}
.report-income-data{
	padding-bottom: 15px;
}
.report-content{
	text-align: center;
	padding: 20px 5px;
	/*background: rgb(81,180,199);*/
	color: #fff;
}
.report-content:nth-child(2){
	border-bottom: 1px solid #fff;
}
.report-content>div{
	/*padding-top: 20px;*/
	border-right: 1px solid #fff;
}
.report-content>.end{
	border-right: none;
}
.report-content>div>div{
	padding: 10px 0;
}
.home-operate{
	text-align: center;
	display: flex;
	align-items: center;
	margin-top: 20px;
	overflow: hidden;
}
.home-operate>div{
	background: #fff;
}
.report-entry,.other-entry{
	border: 1px solid #e9e9e9;
	box-sizing: border-box;
	position: relative;
}
.report-entry{
	left: -1px;
}
.other-entry{
	right: -1px;
	border-left: none;
	border-bottom: none;
}
.pic{
	color: #33cc99;
}
.name{
	color: silver;
}
@media only screen and (max-width:319px ) {
	.report-entry,.other-entry{
		height: 160px;
	}
	.report-entry{
		padding: 20px 0 10px;
	}
	.report-entry>div:nth-child(1){
		height: 100px;
		box-sizing: border-box;
		/*padding:;*/
	}
	.report-entry>div:nth-child(1)>span{
		font-size: 100px;
	}
	.report-entry>div:nth-child(2){
		height: 30px;
	}
	.other-entry>div:nth-child(1){
		height: 50px;
		box-sizing: border-box;
		line-height: 50px;
		border-bottom: 1px solid #e9e9e9;
		border-left: 1px solid #e9e9e9;
	}
	.other-entry>div:nth-child(2){
		height: 108px;
		box-sizing: border-box;
		margin-top: 2px;
		border-left: 1px solid #e9e9e9;
		display: flex;
		align-content: center;
	}
	.average>div{
		float: left;
		width: 49%;
		height: 107px;
		box-sizing: border-box;
		overflow: hidden;
		display: inline-block;
		border-right: 1px solid #e9e9e9;
		border-top:1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		/*border: 1px solid slategray;*/
	}
	.average>div:nth-child(2){
		margin-left: 4px;
		border-left: 1px solid #e9e9e9;
		
	}
	.commonpic{
		padding-top: 14px;
		box-sizing: border-box;
		height: 60px;
		line-height: 50px;
	}
	.commonpic>span{
		font-size: 40px;
	}
	
}
@media only screen and (min-width: 320px) and (max-width: 360px) {
	.report-entry,.other-entry{
		height: 170px;
	}
	.report-entry{
		padding: 20px 0 10px;
	}
	.report-entry>div:nth-child(1){
		height: 100px;
		box-sizing: border-box;
		/*padding:;*/
	}
	.report-entry>div:nth-child(1)>span{
		font-size: 100px;
	}
	.report-entry>div:nth-child(2){
		height: 40px;
	}
	.other-entry>div:nth-child(1){
		height: 56px;
		box-sizing: border-box;
		line-height: 56px;
		border-bottom: 1px solid #e9e9e9;
		border-left: 1px solid #e9e9e9;
	}
	.other-entry>div:nth-child(2){
		height: 108px;
		box-sizing: border-box;
		margin-top: 6px;
		border-left: 1px solid #e9e9e9;
		display: flex;
		align-content: center;
	}
	.average>div{
		float: left;
		width: 49%;
		height: 107px;
		box-sizing: border-box;
		overflow: hidden;
		display: inline-block;
		border-right: 1px solid #e9e9e9;
		border-top:1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		/*border: 1px solid slategray;*/
	}
	.average>div:nth-child(2){
		margin-left: 4px;
		border-left: 1px solid #e9e9e9;
		
	}
	.commonpic{
		padding-top: 20px;
		box-sizing: border-box;
		height: 70px;
		line-height: 50px;
	}
	.commonpic>span{
		font-size: 40px;
	}
}
@media only screen and (min-width: 361px) and (max-width: 425px) {
	.report-entry,.other-entry{
		height: 190px;
	}
	.report-entry{
		padding: 30px 0 10px;
	}
	.report-entry>div:nth-child(1){
		height: 120px;
		box-sizing: border-box;
		/*padding:;*/
	}
	.report-entry>div:nth-child(1)>span{
		font-size: 110px;
	}
	.report-entry>div:nth-child(2){
		height: 40px;
	}
	.other-entry>div:nth-child(1){
		height: 60px;
		box-sizing: border-box;
		line-height: 60px;
		border-bottom: 1px solid #e9e9e9;
		border-left: 1px solid #e9e9e9;
	}
	.other-entry>div:nth-child(2){
		height: 120px;
		box-sizing: border-box;
		margin-top: 10px;
		border-left: 1px solid #e9e9e9;
		display: flex;
		align-content: center;
	}
	.average>div{
		float: left;
		width: 49%;
		height: 119px;
		box-sizing: border-box;
		overflow: hidden;
		display: inline-block;
		border-right: 1px solid #e9e9e9;
		border-top:1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		/*border: 1px solid slategray;*/
	}
	.average>div:nth-child(2){
		margin-left: 4px;
		border-left: 1px solid #e9e9e9;
		
	}
	.commonpic{
		padding-top: 30px;
		box-sizing: border-box;
		height: 70px;
		line-height: 50px;
	}
	.commonpic>span{
		font-size: 40px;
	}
}
@media only screen and (min-width: 426px){
	/*.home-operate{
		width: 420px;
		margin: 20px auto;
	}*/
	.report-entry,.other-entry{
		height: 200px;
	}
	.report-entry{
		padding: 30px 0 10px;
	}
	.report-entry>div:nth-child(1){
		height: 115px;
		box-sizing: border-box;
		/*padding:;*/
	}
	.report-entry>div:nth-child(1)>span{
		font-size: 116px;
	}
	.report-entry>div:nth-child(2){
		height: 30px;
	}
	.other-entry>div:nth-child(1){
		height: 70px;
		box-sizing: border-box;
		line-height: 70px;
		border-bottom: 1px solid #e9e9e9;
		border-left: 1px solid #e9e9e9;
	}
	.other-entry>div:nth-child(2){
		height: 130px;
		box-sizing: border-box;
		margin-top: 10px;
		border-left: 1px solid #e9e9e9;
		display: flex;
		align-content: center;
	}
	.average>div{
		float: left;
		width: 49%;
		height: 119px;
		box-sizing: border-box;
		overflow: hidden;
		display: inline-block;
		border-right: 1px solid #e9e9e9;
		border-top:1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		/*border: 1px solid slategray;*/
	}
	.average>div:nth-child(2){
		margin-left: 4px;
		border-left: 1px solid #e9e9e9;
		
	}
	.commonpic{
		padding-top: 30px;
		box-sizing: border-box;
		height: 70px;
		line-height: 50px;
	}
	.commonpic>span{
		font-size: 40px;
	}
}
</style>