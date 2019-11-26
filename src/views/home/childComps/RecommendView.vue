<!-- 组件说明 -->
<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 0 25px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
}
</style>

<script>
//import x from ''
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>