<template>
  <div>
    <mt-header title="用户行为采集" >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="select">
      <mt-tab-item href="#/home/first" id="first">
        <img slot="icon" src="https://m.baidu.com/favicon.ico">
        柱状图
      </mt-tab-item>
      <mt-tab-item href="#/home/second" id="second">
        <img slot="icon" src="https://m.baidu.com/favicon.ico">
        饼状图
      </mt-tab-item>
      <mt-tab-item href="#/home/third" id="third">
        <img slot="icon" src="https://m.baidu.com/favicon.ico">
        折线图
      </mt-tab-item>
      <mt-tab-item href="#/home/forth" id="forth">
        <img slot="icon" src="https://m.baidu.com/favicon.ico">
        正负图
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      select:"first"
    }
  }
}

/*

<mt-tabbar>
  <mt-tab-item id="外卖" href="#/home">
    <img slot="icon" src="https://m.baidu.com/favicon.ico">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单" href="#/home/first">
    <img slot="icon" src="https://m.baidu.com/favicon.ico">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现" href="#/home/second">
    <img slot="icon" src="https://m.baidu.com/favicon.ico">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的" href="#/home/third">
    <img slot="icon" src="https://m.baidu.com/favicon.ico">
    我的
  </mt-tab-item>
</mt-tabbar>

 */

</script>
