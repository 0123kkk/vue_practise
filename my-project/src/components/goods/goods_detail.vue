<!--  -->
<template>
  <div>
    <v-header title="商品详情"></v-header>
    <!-- 轮播图 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},
  
  created(){
    var goods_id=this.$route.query.id;
     this.$axios.get(`getgoods?pageindex=${this.page}`).then(res => {

     })
  },

  methods: {}
}

</script>
<style  scoped>
</style>