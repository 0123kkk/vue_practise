
<template>
     <ul>
          <slot></slot>
     </ul>
</template>

<script>
    export default {
    name:'my-ul', 
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
  ul{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap
  }
</style>



