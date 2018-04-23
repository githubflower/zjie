<template>
	<div id="business_order">
		<Header></Header>
		<div class="main">main</div>
		<div class="footer"></div>
	</div>
</template>
<script>
import Header from '@/components/Header.vue';   
export default{   
	name: 'BusinessOrder',
	components: {
		Header
	}
}
</script>
<style>
	#business_order{
		/*width: 100%;*/
	}
</style>