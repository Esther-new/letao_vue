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
      <van-grid-item to="/newslist" icon="photo-o" text="文字">
        <img src="../assets/images/menu19.png" alt />
        <div>乐淘头条</div>
      </van-grid-item>
    </van-grid>

    <van-divider :style="{ color: '#333', borderColor: '#545e6c', padding: '0 16px' }">为你推荐</van-divider>
    <div class="recommend">   
      <div class="goodlists" v-for="item in goolists" :key="item.id">
          <!-- 给图片放一个div防止等下图片跟文字没有实现弹性布局 -->
        <div class="item">
            <!-- 将v-lazy指令的值设置为你需要懒加载的图片（代替原本动态获取的:src） -->
          <img v-lazy="item.img_url" alt />
          </div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="footer">
              <span class="price">&yen;&nbsp;{{item.sell_price}}</span>
              <span class="buy">{{item.buy}}已购买</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider } from "vant";
import { getLunboTu, getGoodLists } from "../api/index.js";
export default {
  data() {
    return {
      lunbo: [],
      goolists: [],
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-grid": Grid,
    "van-grid-item": GridItem,
    "van-divider": Divider,
  },
  methods: {
    // 获取轮播图数据
    async getLunbo() {
      var res = await getLunboTu();
      this.lunbo = res.message;
    },
    async getGoodListData() {
        // 解构赋值，拿到响应数据里的message，直接获取message
      var { message } = await getGoodLists();
      // console.log(res);
      this.goolists = message;
      console.log(this.goolists);
    },
  },
  created() {
    // 这里是放虚拟dom的地方，初始化
    // 这个可以调用轮播图的数据
    // 这个是等实例化vm然后执行。
    this.getLunbo();
    this.getGoodListData();
    this.$parent.showHeader();
    this.$parent.hideNavBar();
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
.van-divider {
  background-color: #eeeeee;
}
.recommend {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
//  拉到底部不会被tabbar挡住内容
  margin-bottom: 60px;
  .goodlists {
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 4px;
    margin-bottom: 10px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    img {
      width: 100%;
    }
    .text {
        display: flex;
        flex-direction: column;
      .title {
        font-size: 12px;
        color: #333;
      }
      .footer {
        display: flex;
        align-items: center;
        .price {
          font-size: 14px;
          color: #f50;
          padding: 10px 0;
        }
        .buy {
          font-size: 12px;
          color: #999;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>