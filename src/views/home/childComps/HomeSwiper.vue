<!-- 组件说明 -->
<template>
<div class="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
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
    return {
      isLoad:false,
    };
  },
  computed: {},
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit("swiperImageLoad")
        this.isLoad = true
      }
    }
  }
};
</script>