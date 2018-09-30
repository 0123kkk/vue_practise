<!--  -->
<template>
  <div>
    <v-header title="商品详情"></v-header>
    <!-- 轮播图 -->
    <div class="swiper_box">
       <my-swiper :imgs=imgs></my-swiper>
    </div>

    <!-- 商品信息 -->
    <div class="info_box">
      <h3 class="title">{{info.title}}</h3>
      <div class="price">
        <p class="market_price">
          <span>市场价:</span>
          <s>￥{{info.market_price}}</s>
        </p>
        <p class="sell_price">
          <span>销售价:</span>
          <span>￥{{info.sell_price}}</span>
        </p>
      </div>

      <div>

      </div>
      <div></div>

    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs:[],
      info:[]
    };
  },

  components: {},

  computed: {},
  
  created(){
       var goods_id=this.$route.query.id;
       let imgReq = this.$axios.get(`getthumimages/${goods_id}`);
       let infoReq = this.$axios.get(`goods/getinfo/${goods_id}`);
            // 合并请求 $axios.all([]).then(传播响应).catch()
           this.$axios.all([imgReq,infoReq])
            .then(
                this.$axios.spread(
                    (imgRes,infoRes)=>{
                        this.imgs = imgRes.data.message;
                        console.log(imgRes.data.message);
                        this.info = infoRes.data.message[0];
                        console.log(infoRes.data.message[0])
                 })
            )
            .catch(console.log)
        
  },

  methods: {}
}

</script>
<style  scoped>
 .swiper_box,
 .info_box{
   width:98%;
   border:1px solid #CCCCCC;
   border-radius:10px;
   margin-left:1%;
   margin-bottom:5px;
 }

 .mint-swipe {
    width: 90%;
    height: 200px;
    border:1px solid #CCCCCC;
    margin:5%;
    border-radius:20px;

  }
  
  .mint-swipe img {
    width: 100%;
  }
  
  .title{
    width: 95%;
    margin-left:2.5%;
    text-align: left;
    color:blue;
    border-bottom:1px solid #000;
  }
  .price{
    width: 95%;
    margin-left:2.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height:100px;
  }
  .market_price{
    margin-right:20px;
  }

.sell_price>span:last-child{
  font-size:25px;
  color:red;
}
  
</style>