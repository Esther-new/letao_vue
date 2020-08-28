//封装一个axios的实例
import axios from 'axios';

const instance = axios.create({
    // 可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    // 基准属性
    baseURL:"http://api.w0824.com/api",
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 拿相应数据的时候可以直接res.message,后面不用再需要加data.
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;