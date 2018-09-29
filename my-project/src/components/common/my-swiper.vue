<!--  -->
<template>
  <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src=item.img alt="">
      </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name:'my-swipe',
  props:['imgs'],  
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style  scoped>
   .mint-swipe {
    width: 100%;
    height: 200px;
  }
  
  .mint-swipe img {
    width: 100%;
  }
</style>