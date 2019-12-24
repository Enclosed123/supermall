<!-- 组件说明 -->
<template>
  <div class='cart-list'>
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>

<script>
  //import x from ''
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import {mapGetters} from 'vuex'
  export default {
    name:"CartList",
    components: {
      Scroll,
      CartListItem,
    },
    data () {
      return {

      };
    },
    computed: {
      ...mapGetters(["cartList"])
    },
    methods: {

    },
  }
</script>