<!--  -->
<template>
    <mt-header :title="title">
        <div @click="back" slot="left">
            <mt-button icon="back" >返回</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
    export default {
        name:'v-header',
        props:['title'],
        data() {
            return {};
        },
       methods: {
           back(){
                this.$router.go(-1)
           }
       }
    
    }
</script>
<style  scoped>
    .mint-header{
      background-color:#70e8ff;
     }
</style>