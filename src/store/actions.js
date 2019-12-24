import {ADD_TO_CART} from './mutations-types'

export default {
  addToCart(context,payload){

      // state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
  }
}