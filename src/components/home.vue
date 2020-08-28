<template>
  <div class="home-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <!-- 给图片添加唯一值:key -->
      <van-swipe-item v-for="items in lunbo" :key="items.img">
        <img :src="items.img" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- border为false是不显示边框 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item icon="photo-o">
        <img src="../assets/images/menu10.png" alt />
        <div>数码电器</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu12.png" alt />
        <div>9.9拼单</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu13.png" alt />
        <div>超市</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu15.png" alt />
        <div>乐淘服饰</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu16.png" alt />
        <div>物流查询</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu17.png" alt />
        <div>全部</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu18.png" alt />
        <div>美图欣赏</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../assets/images/menu19.png" alt />
        <div>乐淘头条</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
import { getLunboTu } from "../api/index.js";
export default {
  data() {
    return {
      lunbo: [],
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-grid": Grid,
    "van-grid-item": GridItem,
  },
  methods: {
    // 获取轮播图数据
    async getLunbo() {
      console.log(1);
      var res = await getLunboTu();
      this.lunbo = res.message;
    },
  },
  created() {
    // 这里是放虚拟dom的地方，初始化
    // 这个可以调用轮播图的数据
    // 这个是等实例化vm然后执行。
    this.getLunbo();
  },
};
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 200px;
  // background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-grid-item {
  img {
    // width:39px;
    // height:39px;
    width: 50%;
  }
}
</style>