<!--  -->
<template>
  <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src=item.img||item.src alt="">
      </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name:'my-swiper',
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
   
</style>