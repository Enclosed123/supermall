<!-- 组件说明 -->
<template>
  <div class=''>
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style>
@import "assets/css/base.css";

</style>

<script>
  //import x from ''
import MainTabBar from 'content/MainTabBar/MainTabBar'

  export default {
    components: {
      MainTabBar,
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