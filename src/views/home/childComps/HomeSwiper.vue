<!-- 组件说明 -->
<template>
<div class="HomeSwiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</div>
</template>

<script>
//import x from ''
import {Swiper,SwiperItem} from 'common/swiper'
export default {
  name:'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>