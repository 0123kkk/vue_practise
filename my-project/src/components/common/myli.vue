<!--  -->
<template>
      <li>
        <slot></slot>
      </li>
</template>

<script>
export default {
    name:'my-li',
  data () {
    return {
    };
  },

}

</script>
<style  scoped>
 li{
    list-style: none;
    width: 33.333%;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
    font-size:14px;
    margin-top:10px;
 }
 img{
   width:40px;
   height:40px; 
 }
 
</style>
