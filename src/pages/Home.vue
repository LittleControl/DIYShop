<template>
  <div class="home">
    <HeadTop :title="address">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo" />
      </span>
      <router-link to="/login" class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeadTop>
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <div class="banner">
              <img class="banner_item" :src="banner.url" alt="Banner1" />
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </nav>
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang" />
        <span class="shop_header_title">为你推荐</span>
        <ShopList />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import HeadTop from "../components/HeadTop";
import "swiper/css/swiper.min.css";
import ShopList from "../components/ShopList";
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getBanners");
  },
  components: {
    HeadTop,
    ShopList
  },
  computed: {
    ...mapState(["address", "banners"])
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          grabCursor: true,
          autoplay: true
        });
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../common/mixins.styl';

.home {
  width: 100%;

  .home_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .banner {
            .banner_item {
              width: 100%;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .home_shop_list {
    top-border-1px(#e4e4e4);
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
