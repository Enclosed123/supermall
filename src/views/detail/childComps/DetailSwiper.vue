<!-- 组件说明 -->
<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>

<script>
  //import x from ''
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name:"DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
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