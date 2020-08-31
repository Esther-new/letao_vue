<template>
  <div class="newslist">
    <!-- <div>{{$route.params.id}}</div> -->
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="newsitem" v-for="item in newslist" :key="item.id">
        <div class="news">
          <div class="img">
            <img v-lazy="item.img_url" alt />
          </div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="footer">
              <span class="time">发布时间：{{item.add_time|dateFormat}}</span>
              <span class="click">点击:{{item.click}}次</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </van-pull-refresh>
    <!-- 通过 loading 属性设置按钮为加载状态 -->
    <van-button
      :loading="isMore"
      type="info"
      @click="loadMore"
      block
      loading-text="loading...."
    >点击更多</van-button>
  </div>
</template>

<script>
import { Button, PullRefresh, Toast } from "vant";
// 从外面掉进来的不需要加this
import { getNewListData } from "@/api/index.js";
export default {
  data() {
    return {
      newslist: [],
      // 是否处于加载中状态
      isLoading: false,
      //用于计算当前页数
      page: 1,
      //每页的条数
      pageSize: 10,
      //当数据还没有加载成功，底部的按钮转圈圈
      isMore: false,
    };
  },
  components: {
    "van-button": Button,
    "van-pull-refresh": PullRefresh,
  },
  methods: {
    async getnewsData() {
      // 底部按钮显示为原始状态
      this.isMore = false;
      var { message } = await getNewListData(this.page, this.pageSize);
      // 当没有获取到数据时，提示无数据
      if (message.length == 0) {
        Toast("亲，没有数据了呢");
        return;
      }
      this.newslist = this.newslist.concat(message);
    },
    onRefresh() {
      setTimeout(() => {
        // 下拉刷新获取首页的数据
        this.page = 1;
        // 需要清空数组里的数据，因为原本接收的数组里已经有数据了，清空了就不会重复》
        this.newslist = [];
        // 不处于加载状态
        this.isLoading = false;
        this.getnewsData();
        Toast("刷新成功");
      }, 1000);
    },
    loadMore() {
      //当点击
      this.page++;
      this.isMore = true;
      this.getnewsData();
    },
  },
  created() {
    this.getnewsData();
    this.$parent.showNavBar({title:"新闻列表"})
    this.$parent.hideHeader();
  },
};
</script>

<style lang="scss" scoped>
.newslist {
  .newsitem {
    // display:flex;
    //  justify-content: space-between;
    margin-top: 6px;
    .news {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #cccccc;
      .img {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        margin-bottom: 2px;
        img {
          width: 100%;
          // height:100px
        }
      }
      .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:3px;
        .title {
          margin-top: 10px;
          margin-left: 3px;
          font-size: 13px;
          font-weight: 700;
            // 设置两行文本，超出显示省略号
            text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .footer {
          display: flex;
          justify-content: space-between;
            margin-bottom: 30px;
            margin-left:3px;
          span {
            font-size: 12px;
            color: #888888;
          }
        }
      }
    }
  }
}
</style>