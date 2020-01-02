<!-- 组件说明 -->
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  /* top: 520px; */
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.3);
  z-index: 2;
}
</style>

<script>
//import x from ''
export default {
  name:'TabBar',
  components: {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>