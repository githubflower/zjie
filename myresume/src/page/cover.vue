<template>
	<div class="cover">
		<div class="logo-wrap">
	      <img src="../assets/zjie.jpg">
	    </div>
	    <h3>zjie</h3>
	    <h2>web前端工程师</h2>
		
		<swiper></swiper>

	    <!-- 利用$router.push('path')实现router-link的功能 -->
	    <div class="detail-wrap">
	    	<div class="detail" @click="jump2detail">了解更多</div>
	    </div>
	    <!-- <router-link :to="'/detail'">more</router-link> -->
    </div>
</template>

<script>
	import swiper from '@/components/swiper'
	export default {
		name: 'Cover',
		components: {
			swiper
		},
		methods: {
			jump2detail: function(){
				// 跳转到detail页面
				this.$router.push('detail/info');
			}
		}
	}
</script>

<style>
	.cover{
		margin-top: 60px;
	}
	.logo-wrap img{
	  width: 50px;
	  height: 50px;
	  border-radius: 28px;
	  border: 3px solid #42b983;
	}

	@keyframes zoom-big{
		0% {
			/*width: 60px; height: 60px; line-height: 60px; */
			/*background-color: #3366ff;*/
			box-shadow: 0px 0px 20px 1px #ffffff;
			/*-webkit-transform: scale(.8, .8);*/
		}
		50% {
			/*width: 70px; height: 70px; line-height: 70px;*/
		}
		100% {
			/*width: 80px; height: 80px; line-height: 80px; */
			/*background-color: #33ddff;*/
			/*background-color: #99ccff;*/
			/*border-color: #99ccff;*/
			box-shadow: 0px 0px 20px 5px #3366ff;

			/*-webkit-transform: scale(1, 1);*/
		}
	}
	.detail-wrap{
		height: 200px;
		margin-top: 50px;
		text-align: center;
	}
	.detail{
		/*让这个div居中*/
		display: inline-block;
		width: 80px;
		height: 80px;
		line-height: 80px;
		border-radius: 46px;
		border-style: solid;
		border-width: 5px;
		background-color: #3366ff;
		/*background-image: radial-gradient(circle,#3366ff,#33ddff);*/
		/*background-image: radial-gradient(40px circle at center center, #3366ff, #33ddff);*/
		color: #ffffff;
		font-size: 13px;
		animation: zoom-big 2s infinite alternate;
	}
</style>

