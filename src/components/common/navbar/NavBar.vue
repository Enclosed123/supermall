<!-- 组件说明 -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left{
  width: 60px;
}

.right{
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>

<script>
//import x from ''

export default {
  name:"NavBar",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>