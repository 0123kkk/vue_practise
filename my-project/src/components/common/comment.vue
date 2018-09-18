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

      <mt-button type="primary" class="send_btn">发表评论</mt-button>

      <ul class="commet_content">
          <li>
              <span>评论列表</span>
              <span>10条评论</span>
          </li>

          <li>
              <div class="list">
                  <span>匿名用户:</span>
                  <span>12345667789</span>
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
    getComment(){
        console.log("aaaaa")
        this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then((res)=>{
         console.log(res)
         
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