<!--  -->
<template>
  <div>
    <!-- 二级头部 -->
    <v-header title="新闻列表"></v-header>
     <!-- 列表 -->
     <ul>
        <li v-for="item in listArr" :key="item.id" class="list_item" @click="to_details(item.id)">
          <div>
            <img :src="item.img_url" alt="" class="news_img">
          </div>
          <div>
            <p>{{item.title}}</p>
            <p>
              <span class="click">点击数:{{item.click}}</span>
              <span class="date">发表时间:{{item.add_time |commentsTime("YYYY-MM-DD")}}</span>
            </p>
          </div>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listArr:[]
    };
  },

 created () {
   this.$axios.get("getnewslist")
   .then((res)=>{
    console.log(res)
    this.listArr=res.data.message
   })
   .catch((err)=>{
     console.log(err)
   })
 },
  methods: {
    // 路由跳转
    to_details(id){
      this.$router.push({
        name:"newsdetails",
        params:{
         id:id
        }
      });
    }
  }
}

</script>
<style  scoped>
   ul{
     margin-bottom:55px;
   }
   
   .list_item{
     width:97%;
     padding:0 1.5%;
     display: flex;
     flex-direction:row;
     font-size:14px;
     margin-top:10px;
   }
   .news_img{
     width:60px;
     height:60px;
     margin-right:10px;
   }
   .click{
     color:#3F9CF3;
     margin-right:40px;
   }
   .date{
     color:#3F9CF3;
   }
</style>