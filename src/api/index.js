// 封装一个模块，用于定义各种请求方法；

import instance from "./config.js";
// 按需导出
// console.log(instance);
export async function getLunboTu(){
    return await instance.get("/getlunbo");
}