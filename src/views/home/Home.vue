<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>
<style lang="css" scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:white;
  }
</style>

<script>
//import x from ''
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from 'network/home';
export default {
  name: "home",
  components: {
    NavBar,
  },
  created() {
    getHomeMultidata().then(res =>{
      console.log(res);
    })
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>