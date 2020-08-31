<template>
  <div class="app_container">
    <!-- 显示各个组件的导航 -->
    <!-- $router.go(-1)返回上一页，就是返回你当前点击的上一页 -->
    <van-nav-bar :title="title" v-show="isShowNav" left-text="<" @click-left="$router.go(-1)" />

    <!-- 头部 -->
    <div class="header" id="header" v-show="isShowHeader">
      <img src="./assets/images/logo.png" alt />
      <van-search placeholder="请输入搜索关键词" />
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
import { Search, Tabbar, TabbarItem } from "vant";
import { NavBar } from "vant";
export default {
  data() {
    return {
      active: 0,
      isShowNav: false,
      isShowHeader: true,
      title: "",
    };
  },
  components: {
    "van-search": Search,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-nav-bar": NavBar,
  },
  methods: {
    controlHeight() {
      var headerEl = document.getElementById("header");
      // 包括padding、border、水平滚动条，但不包括margin的元素的高度。
      // 对于inline的元素这个属性一直是0，单位px，只读元素。
      var headerHeight = headerEl.offsetHeight;
      console.log(headerEl);
      console.log(headerHeight);
      window.onscroll = function () {
        var scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= headerHeight) {
          // 若元素已经有class="headerFixed",则不需要添加
          //console.log(headerEI.className);获取元素类名，是个字符串显示.
          if (headerEl.className.indexOf("headerFixed") == -1) {
            // -1 说明没有此类，则给他加上
            // classList:为 <div> 元素添加 class
            headerEl.classList.add("headerFixed");
          }
        } else {
          headerEl.classList.remove("headerFixed");
        }
      };
    },
    // 在父组件添加方法，供子组件调用
    showNavBar(options) {
      // 因为传进来的options是个对象，对象.属性 = 赋值
      this.title = options.title;
      this.isShowNav = true;
    },
    hideNavBar() {
      this.isShowNav = false;
    },
    showHeader() {
      this.isShowHeader = true;
    },
    hideHeader() {
      this.isShowHeader = false;
    },
  },
  created() {
    // 未挂载到真实DOM之前
    this.$nextTick(function () {
      // 挂载到真实DOM之后，才会执行这里的逻辑
      this.controlHeight();
    });
  },
};
</script>

<style lang="scss" scoped>
.app_container {
  position: relative;
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  background-color: #eeeeee;
  .header {
    padding: 3px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background-color: #fff;
    img {
      // margin:2px 4px;
      width: 44px;
      height: 44px;
    }
    div {
      flex: 1;
    }
  }

  .headerFixed {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 38;
  }
}
</style>
