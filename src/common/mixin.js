import {debounce} from './utils'
import {POP, NEW, SELL} from "./const";
import BackTop from "components/content/backTop/BackTop";


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null,
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh);
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad',() => this.itemImgListener)
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop: false,

    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}
