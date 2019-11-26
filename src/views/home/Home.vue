<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>

<script>
//import x from ''
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);

      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  computed: {},
  methods: {}
};
</script>