<template>
  <div>
    <my-swipe :imgs=imgs></my-swipe>
    <!-- 九宫格 -->
    <div>
      <my-ul>
        <my-li v-for="(item,index) in btn_list" :key="index">
          <router-link :to="item.router" class="link">
            <img :src="item.url" alt="">
            <div>{{item.name}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        imgs: [],
        btn_list: [{
            url: '../../../static/img/news.png',
            name: '新闻资讯',
            router: {
              name: 'newslist'
            }
          },
          {
            url: '../../../static/img/picShare.png',
            name: '图文分享',
            router: {
              name: 'Photo'
            }
          },
          {
            url: '../../../static/img/goodsShow.png',
            name: '商品展示',
            router: {
              name: 'goodslist'
            }
          },
          {
            url: '../../../static/img/feedback.png',
            name: '留言反馈',
            router: {
              name: 'newslist'
            }
          },
          {
            url: '../../../static/img/search.png',
            name: '搜索查询',
            router: {
              name: 'newslist'
            }
          },
          {
            url: '../../../static/img/callme.png',
            name: '联系我们',
            router: {
              name: 'newslist'
            }
          }
        ]
  
      }
    },
    created() {
      this.$axios.get('getlunbo')
        .then((res) => {
          console.log(res)
          this.imgs = res.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .link{
   text-decoration:none; 
   color:#333; 
 }
 
 .link>img{
   width:50px;
   height:50px;
 }
</style>
