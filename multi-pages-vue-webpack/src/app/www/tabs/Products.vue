<template>
	<div id="products" v-once>
		<div class="row">
			<div class="row-large">
				<div>
					<button class="mui-btn mui-btn-upload mui-btn-block reset">上新</button>
				</div>
				<div class="row-average-container">
					<div class="row-average">
						<button class="mui-btn mui-btn-addmulti mui-btn-block reset">杂橱</button>
					</div>
					<div class="row-average">
						<button class="mui-btn mui-btn-cancel mui-btn-block reset">下架</button>
					</div>
				</div>
			</div>
			<div class="row-small">
				<button class="mui-btn mui-btn-addstore mui-btn-block reset">补货</button>
			</div>
		</div>
		<div class="row">
			<div class="row-small special">
				<button class="mui-btn mui-btn-outstore mui-btn-block reset">出仓</button>
			</div>
			<div class="row-large">
				<button class="mui-btn mui-btn-instore mui-btn-block reset">门店进货</button>
			</div>
			<div class="row-large">
				<button class="mui-btn mui-btn-manage mui-btn-block reset">库存管理</button>
			</div>
			<div class="row-small special">
				<button class="mui-btn mui-btn-buy mui-btn-block reset">订货</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.mui-content{
	/*padding: 15px;*/
	/*background: url(../../static/img/home_bg.png);*/
	background-size: 100% 300px;
	background-repeat: no-repeat;
	padding-top: 60px;
}
.row{
	overflow: hidden;
}
.row-large{
	float: left;
	width: 66%;
	padding: 2px;
	box-sizing: border-box;
}
.row-small{
	float: left;
	width: 33%;
	padding: 2px;
	box-sizing: border-box;
}
.row-average-container{
	overflow: hidden;
}
.row-average{
	float: left;
	width: 50%;
	padding: 2px;
	box-sizing: border-box;
}
.reset{
	margin: 0;
	padding: 0;
}
@media only screen and (max-width:360px ) {
	.reset{
		line-height: 100px;
	}
	.row-small>.reset{
		line-height: 204px;
	}
	.special>.reset{
		line-height: 100px;
	}
}
@media only screen and (min-width:361px ) {
	.reset{
		line-height: 120px;
	}
	.row-small>.reset{
		line-height: 244px;
	}
	.special>.reset{
		line-height: 120px;
	}
}
</style>