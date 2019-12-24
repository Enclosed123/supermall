<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="titles"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"></tab-control>

      <goods-list :goods="showGoods"></goods-list>
      <debounce></debounce>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>


<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0; */
  position: relative;
  z-index: 10;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>

<script>
//import x from ''

// 公共组件
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

// common部分
import { debounce } from "../../common/utils";
import {itemListenerMixin, backTopMixin} from '../../common/mixin'

// home子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    debounce
  },
  mixins:[itemListenerMixin,backTopMixin],
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 1.图片加载完成的事件监听

  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop",
      tabOffsettop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 触发事件相关组件
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      // 1.决定backTop是否显示
      this.isShowBackTop = -position.y > 1000 ? true : false;
      // 2.决定topFixed是否显示
      this.isTabFixed = -position.y > this.tabOffsettop ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      console.log(getHomeGoods);
    },
    swiperImageLoad() {
      this.tabOffsettop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求相关组件
     */

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].page += 0;
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    }
  },

};
</script>