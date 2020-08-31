// 封装一个模块，用于定义各种请求方法；

import instance from "./config.js";

// 按需导出
// console.log(instance);
// 获取轮播图
export async function getLunboTu(){
    return await instance.get("/getlunbo");
}

//获取首页推荐商品
// limit是默认拿到数据10条
export async function getGoodLists(limit = 10){
    return await instance.get(`/recommend?limit=${limit}`)
}

export async function getNewListData(page=1,pageSize=10){
    return await instance.get(`/getnewslist?page=${page}&pageSize=${pageSize}`)
}