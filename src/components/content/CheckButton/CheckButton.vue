<!-- 组件说明 -->
<template>
  <div class='check-button' :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<style scoped>
  img{
    border-radius: 50%;
    border: 1px solid darkgray;
  }
  .check{
    border: none;
    background-color: red;
    border-radius: 50%;

  }
</style>

<script>
  //import x from ''
  export default {
    name:"CheckButton",
    props:{
      isCheck:{
        type:Boolean,
        default(){
          return true
        }
      }
    },
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
  }
</script>