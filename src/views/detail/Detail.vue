<!-- 组件说明 -->
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav" :current-index="currentIndex"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
      <debounce></debounce>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.scroll {
  height: calc(100% - 44px);
}
</style>

<script>
//import x from ''
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from "components/content/backTop/BackTop";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
import GoodsList from "components/content/goods/GoodsList";

// 公共组件
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "../../common/utils";
import { itemListenerMixin } from "../../common/mixin";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      saveY: 0,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,

    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    debounce,
    BackTop,
  },
  computed: {},

  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
      console.log(this.themeTopYs);
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      // 2
      for (let i = 0; i < length - 1; i++) {
        
        if (
          this.currentIndex !== i &&
          (positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1])
        ) {
          this.currentIndex = i
          console.log(this.currentIndex);
          
          this.$refs.nav.currentindex = this.currentIndex
        }
      }
      // 3.是否显示回到顶部
      this.isShowBackTop = -position.y > 1000 ? true : false;

    }
  },
  mixins: [itemListenerMixin],
  created() {
    // 1. 保存存入的iid
    (this.iid = this.$route.params.iid),
      // 2. 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.根据顶部的图片轮播数据
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 2. 获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);
        // 4. 保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6
        this.commentInfo = data.rate.list[0];
      }),
      getRecommend().then(res => {
        this.recommends = res.data.list;
      }),
      (this.getThemeTopY = debounce(() => {
        (this.themeTopYs = []),
          this.themeTopYs.push(0),
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 100));
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  }
};
</script>