<!--  -->
<template>
  <div>
    <div class="send_comment">
      <div class="head">
          <span>提交评论</span>
          <span>返回</span>
      </div>

      <div>
          <textarea style="width:90%;margin-left:5%;"  v-model="content"></textarea>
      </div>

      <mt-button type="primary" class="send_btn" @click="sedcomment">发表评论</mt-button>

      <ul class="commet_content">
          <li>
              <span>评论列表</span>
              <span>10条评论</span>
          </li>

          <li v-for='(item,index) in msg' :key="index">
              <div class="list">
                  <span>{{item.user_name}}：</span>
                  <span>{{item.content}}</span>
                  <span>{{item.add_time |formNow}}</span>
              </div>
          </li>

          <li>
            <mt-button size="large" type="danger" plain @click="getComment" :disabled="disabled">加载更多按钮{{page}}</mt-button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 name:'comment',
 props:['cid'],
  data () {
    return {
     content:'',
     msg:[],
     page:1,
     disabled:false
    };
  },

  components: {},

  computed: {},
  created(){
   this.getComment()
  },
  methods: {
    // 获取评论列表
    getComment(){
        console.log("aaaaa")
        this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then((res)=>{
          if(res.data.message.length<10&&this.page!==1){
            // 显示提示消息
            this.$toast({
              message:'没有数据了',
              iconClass: 'icon icon-success',
            })

            this.disabled=true;
            return;
          }

          if(this.page===1){
            this.msg=res.data.message;
          }else{
             this.msg=this.msg.concat(res.data.message);
          }
          this.page++;
        })
    },
    // 发表评论
    sedcomment(){
      var content=this.content
      this.$axios.post(`postcomment/${this.cid}`,`content=${this.content}`).then((res)=>{
        console.log(res)
        this.$toast({
              message:res.data.message,
              iconClass: 'icon icon-success',
            })
        // 页数归一
        this.page=1;
        // 清空input的内容
        this.content='';
        this.getComment();
      })
    }
  }
}

</script>
<style  scoped>
.head{
 display:flex;
 flex-direction: row;
 justify-content:space-between;
 margin:20px 0;
}
 .send_btn{
  width:100%;
  margin-top:20px;
 }
 .commet_content{
    margin-bottom:60px;
 }
 .commet_content>li:first-child{
   width:100%;
   display: flex;
   flex-direction: row;
   justify-content:space-between;
 }

 .list{
    border-bottom:1px solid #ccc;
 }
</style>