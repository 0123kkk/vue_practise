<!--  -->
<template>
  <div>
      <v-header title="图文分享"></v-header>
      <!-- 分类列表 -->
      <ul class="classify">
          <li v-for="item in classification" :key="item.id" @click="change_bar(item.id)" :class="item.id==cateid?'active':''" >{{item.title}}</li>
      </ul>
      
      <!-- 分类详情 -->
      <ul class="details_box">
        <li v-for="item in class_details" :key="item.id" class="detial_item" >
          <router-link :to="{ name:'Photodetails',params:{id:item.id} }">
          <img v-if="item.id === 0" v-lazy="item.img_url">
          <img :src="item.img_url" alt="" class="cover_img">
          <div class="title_box">
            <h3>{{item.title}}</h3>
            <p>{{item.zhaiyao}}</p>
          </div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classification:[],
      class_details:[]
    };
  },

  components: {},

  computed: {},

  created(){
    this.$axios.get("getimgcategory").then((res)=>{
      // console.log(res)
      var all={title:'全部',id:0};
      this.classification=res.data.message;
      this.classification.unshift(all);
      
      this.change_bar(0);
    })
  },

  methods: {
    change_bar(id){
      var cateid=id
      this.cateid=id;
      this.$axios.get('getimages/'+cateid).then((res)=>{
        console.log(res)
        this.class_details=res.data.message
      })
    },
    to_details(id){
      console.log(id)
       this.$router.push({
        name:"Photodetails",
        params:{
         id:id
        }
      });
    }
  }
}

</script>
<style  scoped>
  
  .classify{
   display:flex;
   flex-direction: row;
   white-space: nowrap;
   overflow-x: auto;
  }
  
  .classify>li{
   list-style:none;
   margin:6px;
   color:blue
  }
  .details_box{
   margin-bottom:55px;
  }
  .detial_item{
    position: relative;
  }
  
  .cover_img{
   width:100%;
   height:300px;
  }
  
  .title_box{
   position: absolute;
   bottom:5px;
   left:0;
   background-color:rgba(0, 0, 0, 0.8);
   color:#fff;
   font-size:14px;
   padding: 5px 0;
  }

  .active{
   border-bottom:1px solid blue;
  }
</style>