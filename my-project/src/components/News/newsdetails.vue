<!--  -->
<template>
  <div>
    <v-header title="新闻详情"></v-header>
    <div class="header">
      <p>{{details.title}}</p>
      <div>
          <span class="click">点击数:{{details.click}}</span>
          <span >分类:民生经济</span>
          <span class="time">添加时间:{{details.add_time | commentsTime("YYYY-MM-DD")}}</span>
      </div>
    </div>
    <div v-html="details.content" class="news_content">
       
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     details:{}
    };
  },

  created () {
      let { id } = this.$route.params;
      console.log("haha")
      this.$axios.get(`getnew/${id}`).then((res)=>{
        console.log(res)
        this.details=res.data.message[0]
      })
  },

  methods: {}
}

</script>

<style scoped>
 .header>p{
  font-size:20px;
  color:#0A87F8;
  font-weight:bold; 
  margin-top:20px;
 }
 .news_content{
   padding:10px  5px;
   margin-bottom:55px;
 }
 
 .news_content p{
  margin:15px 0;
 }
 .header{
   border:1px solid #dedede;
 }
 
 .header>div{
   margin-top:20px;
   
 }
 .header>div>span:first-child{
    margin-right:20px;
 }
 
 .header>div>span:last-child{
    margin-left:20px;
 }
</style>