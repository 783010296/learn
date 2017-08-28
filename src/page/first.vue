<template>
	<div id="firstMain"></div>
</template>

<script>
import echarts from 'echarts';
import axios from 'axios';

export default {
	name: 'first',
	data(){
		return{
			mychart:null,
			myoption:{
			   	title: { text: 'ECharts 小小例子' },//标题
			    tooltip: {},//提示框组件
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },//直角坐标系的
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: []
			    }]
			}
		}
	},
	methods:{
		drawEcharts(id){
			this.mychart = echarts.init(document.getElementById(id));
			axios.get('http://localhost:8110/first')
			.then(response=>{this.myoption.series[0].data = response.data.data;this.mychart.setOption(this.myoption);})
			.catch(error => {console.log(error)});
		}
	},
	mounted() {
		this.drawEcharts("firstMain");
	}
}
</script>

<style>

#firstMain{
	width:100%;
	height:400px;
}

</style>