<!-- 组件说明 -->
<template>
  <div class='goods'>
    <goods-list-item class="goods-list-item" v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>

<script>
  //import x from ''
  import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsListItem
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