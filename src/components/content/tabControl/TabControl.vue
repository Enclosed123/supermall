<!-- 组件说明 -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 5px;
}
</style>

<script>
//import x from ''
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick",index);
    }
  }
};
</script>