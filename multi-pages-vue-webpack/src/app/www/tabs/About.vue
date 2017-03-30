<template>
	<div id="about" v-once>
		<div class="header" style="height: 200px;background: #34ABFE;"></div>
		<div class="mui-row" style="text-align: center;background: #98d4fd;padding: 6px 0;">
		    <div class="mui-col-xs-6 mui-col-sm-6">
		    	<div class="icon-container">
		    		<span class="mui-icon mui-icon-chat"></span>
		    		<span class="mui-badge mui-badge-red">1</span>
		    	</div>
		    	<div>消息</div>
		    </div>
		    <div class="mui-col-xs-6 mui-col-sm-6">
		    	<span class="mui-icon mui-icon-compose person-info"></span>
		    	<div>个人资料</div>
		    </div>
		</div>
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">检查更新</a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right video">我的课程</a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right operate-detail">操作记录</a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">退出登录</a>
		    </li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.icon-container{
		position: relative;
	}
	.mui-badge{
		position: absolute;
		top:-6px;
		left: 50%;
		font-size: 8px;
	}
</style>