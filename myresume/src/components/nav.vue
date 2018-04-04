<template>
	<div class="nav-wrap">
		<ul>
			<li v-for="item in navItems">
				<router-link :to="item.url">{{item.text}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import router from '@/router'
	export default {
		name: 'NavBar',
		router,
		data(){
			return {
				navItems: [
					{
						url: '/detail/info',
						text: '个人信息'
					},
					{
						url: '/detail/skill',
						text: '职业技能'
					},
					{
						url: '/detail/study',
						text: '学习笔记'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav-wrap{
		height: 43px;
		line-height: 43px;
		border-bottom: 1px solid #3366ff;
	}
	.router-link-active{
		color: #3366ff;
	}
	ul{
		list-style: none;
		display: flex;
	}
	li{
		flex: 1;
		text-align: center;
	}
	a{
		text-decoration: none;
		color: #000;
		&:visited{
			color: #000;
		}
		&.router-link-active{
			.router-link-active
		}
	}
</style>