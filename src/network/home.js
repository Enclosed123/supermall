import {request} from './request'
export function getHomeMultidata(){
  return request({
      url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){
    return request({
      url:'http://106.54.54.237:8000/api/v1/home/data',
      params:{
        type,
        page
      }
    })
}