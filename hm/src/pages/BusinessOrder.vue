<template>
	<div id="business_order">
	  <el-table
	    :data="tableData"
	    border
	    style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="table-expand">
                    <el-form-item label="剩余单数">
                        <span>{{ props.row.left }}</span>
                    </el-form-item>
                    <el-form-item label="产品图片">
                        <span>{{ props.row.pic }}</span>
                    </el-form-item>
                    <el-form-item label="关键字">
                        <span>{{ props.row.keywords }}</span>
                    </el-form-item>
                    <el-form-item label="店铺名">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
	    <el-table-column type="index"></el-table-column>
	    <el-table-column prop="date" label="创建时间" sortable width="180"  
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler">
        </el-table-column>
	    <el-table-column prop="name" label="名称" width="180"></el-table-column>
	    <el-table-column prop="businessman" label="业务员" sortable="true" width="180"></el-table-column>
	    <el-table-column prop="customer" label="客户" sortable=true ></el-table-column>
        <el-table-column prop="goal_num" label="目标单数" sortable=true></el-table-column>
        <el-table-column prop="complete" label="完成单数"></el-table-column>
        <el-table-column prop="goal_days" label="目标天数"></el-table-column>
	    <!-- <el-table-column prop="left" label="剩余单数"></el-table-column> -->
	    <!-- <el-table-column prop="pic" label="产品图片"></el-table-column> -->
	    <!-- <el-table-column prop="desc" label="描述"></el-table-column> -->
	    <!-- <el-table-column prop="keywords" label="关键字"></el-table-column> -->
	    <!-- <el-table-column prop="shop" label="店铺名"></el-table-column> -->
	    <!-- 描述里面包括关键字、店铺名 -->
	    <el-table-column prop="payment" label="应付金额"></el-table-column>
	    <el-table-column prop="half_payment" label="已付金额"></el-table-column>
	  </el-table>
	</div>
</template>
<script>
export default {
	name: 'BusinessOrder',
	components: {},
	data() {
		return {
			tableData: [{
				date: '2016-05-01',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '王磊',
				customer: 'HM-冯生',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-05-02',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '战三',
				customer: 'HM-冯生',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-05-03',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '王磊',
				customer: 'HM-冯生',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-05-04',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '小邓',
				customer: 'HM-冯生',
				payment: 8800,
				half_payment: 5000
			}]
		}
	},
    methods: {
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }
}
</script>
<style>
    .table-expand {
        font-size: 0;
    }
    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .table-expand .el-form-item {
        margin-left: 50px;
        width: 40%;
    }
</style>