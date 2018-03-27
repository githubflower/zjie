<template>
	<div class="info">
		<div class="card">
			<p>
				<i class="legend"></i>
				<em>男</em>
				<em>28岁</em> 
				<em>1990年01月出生</em> 
				<em>本科</em> 
				<em>4年工作经验</em>
			</p>
			<p>
				<i class="phone"></i>
				<em>186 7164 6096</em>
				<i class="email"></i>
				<em>varemail@sina.com</em>
			</p>
		</div>
		<div class="desc">
			<h6>自我评价：</h6>
			<p>老实憨厚 不幽默 不会吹牛</p>
			<p>爱编程 爱挑战 爱学习</p>
			<h6>座右铭：</h6>
			<p>犯其至难，图其至远</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
	}
</script>
<style type="text/css" scoped>
	.info{
		font-size: 13px;
	}
	li{
		display: block;
	}
	.desc{
		margin-left: 15px;
		text-align: left;
	}
	.desc p{
		/*border-bottom: 1px solid #3366ff;*/
	}
	.card{
		display: inline-block;
		margin-top: 20px;
		padding: 10px;
		border: 1px solid #3366ff;
		text-align: left;
	}
	i{
		display: inline-block;
		width: 16px;
	    height: 16px;
		background: url('../assets/img/icons.png') 0 0 no-repeat;
	}
	.legend{
	    background-position: -5px -118px;
	}
	.phone{
		background-position: -5px -239px;
	}
	.email{
		margin-left: 20px;
		background-position: -5px -136px;
	}
	em{
		margin-right: 10px;
		font-style: normal;
		font-size: 13px;
	}
</style>