<!--  -->
<template>
  <div>
  
    <v-header title="图文详情"></v-header>
    <div class="d_header">
        <h3>{{infos.title}}</h3>
        <div class="label">
          <span>发起时间：{{infos.add_time| commentsTime("YYYY-MM-DD")}}</span>
          <span>{{infos.click}}次浏览</span>
           <span>分类：民生经济</span>
        </div>
    </div>
    <!-- 缩略图 -->
    <ul>
      <li v-for="(item,index) in img_Url" :key="index">
         <img :src="item.src"  class="small-img"/>
      </li>
    </ul>
    <!-- 文章内容 -->
    <div class="photo-desc">
      <p v-html="infos.content"></p>
    </div>
    
    <!-- 评论组件 -->
    <comment :cid="this.$route.params.id"></comment>
  </div>
</template>

<script>
  export default {
  
    data() {
  
      return {
        id:this.$route.params.id,
        img_Url:[],
        infos:{}
      };
  
    },
  
  
  
    components: {},
  
  
  
    computed: {},
  
  
  
    created() {
      let id = this.id;
      console.log(id)
      //  获取缩略图
       let get_smallimg=this.$axios.get(`getthumimages/${id}`);
      //  获取详情
       let get_details=this.$axios.get(`getimageInfo/${id}`);
      
      // 合并请求
      this.$axios.all([get_smallimg, get_details])
        .then(this.$axios.spread((imgs, infos)=>{
         this.img_Url=imgs.data.message;
         this.infos=infos.data.message[0]
          
        }));
    },
    methods: {}
  
  }
</script>
<style scoped>
  .d_header{
   padding-bottom:5px;
   border-bottom:1px solid #ccc;
  }
  .d_header>h3{
   color:#13C2F8;
   margin:10px 20px; 
  }
  .label{
   width:95%;
   margin-left:2.5%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   font-size:14px;
  }
  
  ul{
   width:100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content:flex-start;
  }

  ul>li{
   width:33.3%;
   list-style:none;
  }
  .small-img{
   width:100%;
  }
</style>