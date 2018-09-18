<template>
  <div id="app">
    <mt-header  title="信息管理系统"></mt-header>
    <router-view />
  
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
       <div @click="change('Home')"> 
         <img slot="icon" src="../static/img/index.png">首页
       </div>
      </mt-tab-item>

      <mt-tab-item id="Vip">
        <div @click="change('Vip')">
         <img slot="icon" src="../static/img/vip.png">会员
        </div>
      </mt-tab-item>

      <mt-tab-item id="Car">
        <div @click="change('Car')">
         <img slot="icon" src="../static/img/shopcart.png">购物车  
        </div>
      </mt-tab-item>

      <mt-tab-item id="Serach">
        <div @click="change('Serach')">
          <img slot="icon" src="../static/img/search.png">查找
        </div>
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>


<script>
  export default {
    name: "App",
    data() {
      return {
        selected: ''
      }
    },
    methods: {
      change(val){
       this.$router.push({
        name:val,
      });
      }
    }
  };
</script>

<style>
  .mint-tabbar{
   position: fixed;
   bottom:0;
   left:0;
  }
  
  .mint-tab-item-label img {
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
</style>
