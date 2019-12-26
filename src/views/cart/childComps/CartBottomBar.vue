<!-- 组件说明 -->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :isCheck="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">总计:{{totalPrice}}</div>
    <div class="calculate">结算({{checkLength}})</div>
  </div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 50px;
}
.check-button {
  width: 18px;
  height: 18px;
  line-height: 25px;
}
.price {
  margin-left: 45px;
  flex: 1;
}
.calculate {
  width: 70px;
  background-color: red;
  color: white;
  text-align: center;
}
</style>

<script>
//import x from ''
import CheckButton from "components/content/CheckButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((proValue, item) => {
            return proValue + item.lowNowPrice * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((proValue, item) => {
          return proValue + item.count;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList.count === 0) {
        return false;
      } else {
        return !this.cartList.find(item => !item.checked);
      }
    }
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
};
</script>