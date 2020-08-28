<template>
  <div class="app_container">
    <!-- 头部 -->
      <div class="header">
        <img src="./assets/images/logo.png" alt="">
        <van-search  placeholder="请输入搜索关键词" />
      </div> 
    <!-- 中间 (这里放路由匹配的动态内容)-->
      <div class="middle">
          <router-view></router-view>
      </div>
        <!-- 底部 -->
      <div class="footer">
          <van-tabbar v-model="active">
              <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
              <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
              <van-tabbar-item to="/user" icon="user-o">我的乐淘</van-tabbar-item>
          </van-tabbar>
      </div>
  </div>
</template>

<script>
import { Search, Tabbar, TabbarItem } from 'vant';
  export default {
    data(){
      return{
        active:0,
      }
    }
    ,components:{
      "van-search":Search,
      "van-tabbar":Tabbar,
      "van-tabbar-item":TabbarItem,
    }
  }
</script>

<style lang="scss" scoped>
  .app_container{
    // min-width:320px;
    // max-width:750px;
    // margin:auto;
    .header{
      padding:3px;
      display:flex;
      justify-content: space-between;
      justify-items:center;
      img{
        // margin:2px 4px;
        width:44px;
        height:44px;
      }
      div{
        flex:1;
      }
    }
  }
</style>
