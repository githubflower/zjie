<template>
	<div class="header-wrap">
		<img id="logo" src="../assets/logo.png"/>
		<ul>
			<router-link to="/business" tag="li">业务概况</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'Header'
	}
</script>
<style>
	.header-wrap{
		position: relative;
		height: 70px;
		border-bottom: 1px solid #ffffff;
		color: #ffffff;
	}
	#logo{
		position: absolute;
		top: 15px;
		left: 15px;
		width: 40px;
		height: 40px;
	}
	ul{
		margin-left: 100px;
	}
	li{
		display: inline-block;
		padding: 20px;
	}
</style>