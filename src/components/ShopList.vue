<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shopList.length > 0">
      <li class="shop_li border-1px" v-for="(shop, index) in shopList" :key="index">
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="shop.img" />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{shop.name}}</h4>
            </div>
            <div class="shop_detail_ul">
              <div class="supports" v-if="shop.support.quickShip">急速发货</div>
              <div class="supports" v-if="shop.support.noReason">7天无理由</div>
              <div class="supports" v-if="shop.support.isGirl">女店主</div>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <div class="star star-36">
                  <span class="star-item on" v-for="item in shop.rating" :key="item" />
                  <span class="star-item off" v-for="item in 5 - shop.rating" :key="item + 5" />
                </div>
                <div class="rating_section">{{shop.rating}} 分</div>
                <div class="order_section">月售出{{shop.count}}单</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="item in 6" :key="item">
        <img src="/img/shop/init_shop.svg" alt="init" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getShopList");
  },
  computed: {
    ...mapState(["shopList"])
  }
};
</script>

<style scoped lang="stylus">
@import '../common/mixins.styl';

.shop_container {
  margin-bottom: 50px;

  .shop_list {
    .shop_li {
      bottom-border-1px(#f1f1f1);
      width: 100%;

      >a {
        clearFix();
        display: block;
        box-sizing: border-box;
        padding: 15px 8px;
        width: 100%;

        .shop_left {
          float: left;
          box-sizing: border-box;
          width: 23%;
          height: 75px;
          padding-right: 10px;

          .shop_img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .shop_right {
          float: right;
          width: 77%;

          .shop_detail_header {
            clearFix();
            width: 100%;
            margin-bottom: 5px;

            .shop_title {
              float: left;
              width: 200px;
              color: #333;
              font-size: 16px;
              line-height: 16px;
              font-weight: 700;

              &::before {
                content: '品牌';
                display: inline-block;
                font-size: 11px;
                line-height: 11px;
                color: #333;
                background-color: #ffd930;
                padding: 2px 2px;
                border-radius: 2px;
                margin-right: 5px;
              }
            }
          }

          .shop_detail_ul {
            display: flex;

            .supports {
              color: #fff;
              border-radius: 15px;
              display: inline-block;
              height: 100%;
              width: 30%;
              font-size: 15px;
              text-align: center;

              &:nth-child(1) {
                background-color: #6fa3ef;
              }

              &:nth-child(2) {
                background-color: #ff9800;
              }

              &:nth-child(3) {
                background-color: #46c47c;
              }
            }
          }

          .shop_rating_order {
            clearFix();
            width: 100%;
            margin-top: 15px;
            margin-bottom: 8px;

            .shop_rating_order_left {
              float: left;
              color: #ff9a0d;

              .star { // 2x图 3x图
                float: left;
                font-size: 0;

                .star-item {
                  display: inline-block;
                  background-repeat: no-repeat;
                }

                &.star-48 {
                  .star-item {
                    width: 20px;
                    height: 20px;
                    margin-right: 22px;
                    background-size: 20px 20px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('/img/stars/star48_on');
                    }

                    &.half {
                      bg-image('/img/stars/star48_half');
                    }

                    &.off {
                      bg-image('/img/stars/star48_off');
                    }
                  }
                }

                &.star-36 {
                  .star-item {
                    width: 15px;
                    height: 15px;
                    margin-right: 6px;
                    background-size: 15px 15px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('/img/stars/star36_on');
                    }

                    &.half {
                      bg-image('/img/stars/star36_half');
                    }

                    &.off {
                      bg-image('/img/stars/star36_off');
                    }
                  }
                }

                &.star-24 {
                  .star-item {
                    width: 10px;
                    height: 10px;
                    margin-right: 3px;
                    background-size: 10px 10px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('/img/stars/star24_on');
                    }

                    &.half {
                      bg-image('/img/stars/star24_half');
                    }

                    &.off {
                      bg-image('/img/stars/star24_off');
                    }
                  }
                }
              }

              .rating_section {
                float: left;
                color: #ff6000;
                margin-left: 4px;
              }

              .order_section {
                float: right;
                color: #666;
                font-size: 20px;
                transform: scale(0.8);
              }
            }
          }
        }
      }
    }
  }
}
</style>
