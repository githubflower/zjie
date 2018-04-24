<template>
	<div id="business_order">
	  <el-table
	    :data="tableData"
	    border
        stripe=true
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
	    <el-table-column prop="date" label="创建时间" sortable width="150"  
            align="center"
            :filters="filters"
            :filter-method="filterHandler">
        </el-table-column>
	    <el-table-column prop="name" label="名称" min-width="220" align="center"></el-table-column>
	    <el-table-column prop="businessman" label="业务员" sortable="true" min-width="100" align="center"></el-table-column>
	    <el-table-column prop="customer" label="客户" sortable=true min-width="100" align="center"></el-table-column>
        <el-table-column prop="goal_num" label="目标单数" sortable=true align="right"  width="120"></el-table-column>
        <!-- <el-table-column prop="complete" label="完成单数" align="right" width="100"></el-table-column> -->
        <el-table-column label="完成单数" align="right" width="100">
            <template slot-scope="scope">
                <router-link to="aa" :businessId="scope.row.business_id ">{{ scope.row.complete }}</router-link>
            </template> 
        </el-table-column>
        <el-table-column prop="goal_days" label="目标天数" align="right"  width="100"></el-table-column>
	    <!-- <el-table-column prop="left" label="剩余单数"></el-table-column> -->
	    <!-- <el-table-column prop="pic" label="产品图片"></el-table-column> -->
	    <!-- <el-table-column prop="desc" label="描述"></el-table-column> -->
	    <!-- <el-table-column prop="keywords" label="关键字"></el-table-column> -->
	    <!-- <el-table-column prop="shop" label="店铺名"></el-table-column> -->
	    <!-- 描述里面包括关键字、店铺名 -->
	    <el-table-column prop="payment" label="应付金额" align="right"></el-table-column>
	    <el-table-column prop="half_payment" label="已付金额" align="right"></el-table-column>
	  </el-table>
	</div>
</template>
<script>
import Util from '../util.js'
/**
 * [generateFilters 生成最近7天的过滤日期]
 * @return {[type]} [description] 如[{text: '2016-05-01', value: '2016-05-01'}]
 */
let generateFilters = function(){
    let day_ms = 86400000;// 24 * 3600 * 1000   1天的毫秒数
    let ary = [];
    for (var i = 7; i > 0; i--) {
        ary.push({
            text: Util.formatDate(+new Date() - i * day_ms),
            value: Util.formatDate(+new Date() - i * day_ms),
        });
    }
    return ary;
}
export default {
	name: 'BusinessOrder',
	components: {},
	data() {
		return {
            // filters: [{text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}],
            filters: generateFilters(),
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
                business_id: 'HM1',
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
				customer: 'HM-C生',
                business_id: 'HM2',
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
				customer: 'HM-B生',
                business_id: 'HM3',
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
				customer: 'HM-A生',
                business_id: 'HM4',
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