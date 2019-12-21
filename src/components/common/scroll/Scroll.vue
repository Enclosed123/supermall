<!-- 组件说明 -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//import x from ''
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    },

    pullUpLoad:{
      type:Boolean,
      default:true
    },
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad,
    }),
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
      // this.scroll.on("pullingUp",()=>{
      //   this.$emit("pullingUp")
        
      // });
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
  },
  computed: {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0 
    }
  }
};
</script>