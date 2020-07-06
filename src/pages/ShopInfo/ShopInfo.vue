<template>
  <div>
    <ShopHead />
    <div class="tab">
      <div class="tab-item">
        <router-link
          to="/shopinfo/good"
          replace
        >
          点餐
        </router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/shopinfo/evaluation"
          replace
        >
          评价
        </router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/shopinfo/abort"
          replace
        >
          商家
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
  import ShopHead from '../../components/ShopHead'

  export default {
    mounted () {
      const {id} = this.$route.query
      this.$store.dispatch('getShopInfo',id)
    },
    components: {
        ShopHead
    }
  }
</script>
<style scoped lang="stylus">
  @import "../../common/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
