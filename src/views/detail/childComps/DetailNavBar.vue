<!-- 组件说明 -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div 
        class="title-item" 
        v-for="(item, index) in titles" 
        :key="index"
        :class="{active:index === currentindex}"
        @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
//import x from ''
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex:0,
    };
  },
  computed: {},
  methods: {
    titleClick(index){
      this.currentindex = index
      this.$emit("titleClick",index)
    },
    backHome(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
  margin-top: 2px;
}

.active{
  color: var(--color-tint)
}

.back img{
  margin-top: 12px;
  margin-left: 10px;
}
</style>