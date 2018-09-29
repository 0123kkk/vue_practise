<!--  -->
<template>
  <div>
  
    <!-- 头部 -->
  
    <v-header title="商品展示"></v-header>
  
    <!-- 商品列表部分 -->
  
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="autoFill">
  
      <ul class="list">
  
        <router-link :to="{name:'goodsdetail',query:{id:item.id}}"  v-for="item in goodsList" :key='item.id'>
          <li  class="list_item">
  
            <img :src="item.img_url" alt="">
  
            <p>{{item.title | splicStr(23)}}</p>
  
  
  
            <div class="price_box">
  
              <div>
  
                <span style="color:red;">￥{{item.market_price}}</span>
  
                <span style="color:gray">￥{{item.sell_price}}</span>
  
              </div>
  
              <div>
  
                <span>热卖中</span>
  
                <span>剩{{item.stock_quantity}}件</span>
  
              </div>
  
            </div>
  
          </li>
        </router-link>
  
  
  
      </ul>
  
    </mt-loadmore>
  
  </div>
</template>

<script>
  export default {
  
    data() {
  
      return {
  
        goodsList: [],
  
        page: 1,
  
        allLoaded: false,
  
        autoFill: false
  
      };
  
    },
  
  
  
    components: {},
  
  
  
    computed: {},
  
    created() {
  
      this.get_goodslist();
  
    },
  
  
  
    methods: {
  
      get_goodslist() {
  
        this.$axios.get(`getgoods?pageindex=${this.page}`).then(res => {
  
          console.log(res);
  
          let {
  
            list
  
          } = res.data.message;
  
          if (list < 10) {
  
            this.$toast("没有更多数据了");
  
            // 没有数据了
  
            // this.allLoaded = true;
  
          }
  
  
  
          if (this.page === 1) {
  
            this.goodsList = res.data.message;
  
          } else {
  
            // 追加
  
            this.goodsList = this.goodsList.concat(res.data.message);
  
          }
  
          this.page++; // 页码自增
  
        });
  
      },
  
      loadBottom() {
  
        console.log("11");
  
        this.get_goodslist();
  
        // 通知状态改变
  
        this.$refs.loadmore.onBottomLoaded();
  
      }
  
    }
  
  };
</script>
<style scoped>
  a{
    width:50%;
    text-decoration:none;
  }
  .list {
  
    width: 100%;
  
    display: flex;
  
    flex-direction: row;
  
    justify-content: space-around;
  
    flex-wrap: wrap;
  
    margin-bottom: 55px;
  
  }
  
  
  
  .list_item {
    width:90%;
    list-style: none;
  
    box-sizing: border-box;
  
    border: 1px solid #000;
  
    box-shadow: 0px 0px 3px #000000;
  
    margin: 10px 0;
  
  }
  
  
  
  .list_item>img {
  
    width: 100%;
  
  }
  
  
  
  .price_box {
  
    background-color: #cccccc;
  
  }
  
  
  
  .price_box>div:last-child {
  
    display: flex;
  
    flex-direction: row;
  
    justify-content: space-between;
  
    align-items: center;
  
  }
</style>