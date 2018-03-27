<template>
	<div class="frame-swiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="slide in swiperSlides" :key="slide.url"><img :src="slide.img"></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'Swiper',
		data() {
		    return {
				swiperOption: {
					autoplay: {
						delay: 3000,
						// stopOnLastSlide: true,
    					disableOnInteraction: true
					},
					initialSlide:0,
					// loop: false,
					setWrapperSize :true,
					pagination : {
						el: '.swiper-pagination',
						clickable: true
					},
					observeParents:true
				},
				swiperSlides: []
		  	}
		},
		components: {
		    swiper,
		    swiperSlide
		},
		mounted() {
		    //获取图片列表
			this.getSliders();
		},
		methods: {
			getSliders: function(){
				var swiperSlides =[
					{
			      		"img": require("../assets/img/slides/jquery.png"),
			      		"url": "jquery"
			      	},
			      	{
			      		"img": require("../assets/logo.png"),
			      		"url": "vue"
			      	},
			      	{
			      		"img": require("../assets/img/slides/ext.png"),
			      		"url": "ext"
			      	}
				];
				this.swiperSlides = swiperSlides;
			}
		}
	}
</script>
<style type="text/css">
.frame-swiper .swiper-slide{
	height: 126px;
	background-color: #e0e0e0;
}
.frame-swiper .swiper-slide img{
	height: 126px;
}
</style>