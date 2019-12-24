<!-- 组件说明 -->
<template>
  <div class='cart'>
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 商品汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<style scoped>
  .cart{
    height: 100vh;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }

</style>

<script>
  //import x from ''
  //childComps
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  export default {
    name:'cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar,
    },
    data () {
      return {

      };
    },
    computed: {
      ...mapGetters({
        length:"cartLength",
        list:"cartList"
      })
    },
    methods: {

    },
  }
</script>