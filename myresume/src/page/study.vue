<template>
	<div class="study">
		<h3>遇到的问题：</h3>
		<dl>

			<dt>1.npm run dev开启本地服务后浏览器可以正常访问，但是用手机访问不了index页面？</dt>
				<dd>问题1暂时还没解决，大致定位应该是node本地服务器配置问题</dd>
				<dd>3 days after...</dd>
				<dd>现在决定解决掉这个问题，</dd>
				<dd>1.首先关闭了本地防火墙、电脑管家等一系列设置，排除了系统问题</dd>
				<dd>2.开启nginx代理，手机和PC都能访问代理服务器，确定就是webpack-dev-server配置问题</dd>
				<dd>3.查找官方文档：指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，like this: host: "0.0.0.0" (https://doc.webpack-china.org/configuration/dev-server/#devserver)</dd>

			<dt>2.一个vue组件中能否有多个router-view?路由嵌套问题</dt>
				<dd>在网上搜了一下，没找到有用的信息，最后在官方文档中看到嵌套路由，通过配置children得以解决 https://router.vuejs.org/zh-cn/essentials/nested-routes.html</dd>
			
			<dt>3.在使用vue-awesome-swiper时，无法自动播放以及img标签引用图片路径问题</dt>
				<dd>原来是配置问题，swiper3中autoplay: 3000, swiper4中autoplay: bool or obj, vue-awesome-swiper依赖"swiper": "^4.0.7"</dd>
				<dd>刚开始我的静态资源是放在assets目录下的，结果图片加载不到，移动到static目录下后生效了，为什么？</dd>
				<dd>webpack打包的时候会将js中的路径当作普通的字符串，解决办法2种：</dd>
				<dd>1. import xxx from path or require path, 然后在data种返回这个变量</dd>
				<dd>2. 将资源移到static目录下，打包后static整个目录依然存在</dd>

			<dt>4.在使用vue-awesome-swiper自动播放时，从最后一张图片过渡到第1张图片后，第1张图片瞬间就会被第2张图片替换掉，也就是第1张图片始终没有停顿，</dt>
				<dd>我的配置选项如下：</dd>
				<dd>
				<pre v-highlightjs>
					<code class="javascript">
swiperOption: {
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
	initialSlide:0,
	loop: true,
	setWrapperSize :true,
	pagination : {
		el: '.swiper-pagination',
		clickable: true
	},
	observeParents:true
}
					</code>
				</pre>
				</dd>
				<dd>应该就是autoplay和loop一起使用时产生的bug，使用的时候注意一下就行了，当使用autoplay后如果需要循环则loop需要省略掉，如果不想循环则配置loop：false也不会有问题；</dd>
			<dt>5.将项目部署到github之后，页面里通过样式引入的图片失效</dt>
			<dd>将全局的assetsPublicPath: "/"改为"./"之后导致webpack处理css中图片路径的时候出问题，通过修改css合并的配置-增加ExtractTextPlugin.extract({publicPath: ../../})解决</dd>
		</dl>
	</div>
</template>
<script type="text/javascript">
import 'highlight.js/styles/default.css'
import Vue from 'vue'
	import VueHighlightJS from 'vue-highlightjs'
	

Vue.use(VueHighlightJS)
	export default{
	}
</script>
<style type="text/css">
	.study{
		padding: 25px;
		font-size: 13px;
		text-align: left;
	}
	.study dt{
		margin-top: 15px;
		border-top: 1px dashed #3366ff;
	}
	.study dl dt:first-child{
		border-width: 0;
		margin-top: 0;
	}
</style>