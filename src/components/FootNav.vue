<template>
  <div class="foot_nav">
    <a
      href="javascript:;"
      class="nav_item"
      :class="{on: '/home'===$route.path}"
      @click="jumpTo('/home')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye-" />
      </span>
      <span>Home</span>
    </a>
    <a
      href="javascript:;"
      class="nav_item"
      :class="{on: '/shop' === $route.path}"
      @click="jumpTo('/shop')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dianpu" />
      </span>
      <span>Shop</span>
    </a>
    <a
      href="javascript:;"
      class="nav_item"
      :class="{on: '/order' === $route.path}"
      @click="jumpTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan" />
      </span>
      <span>Order</span>
    </a>
    <a
      href="javascript:;"
      class="nav_item"
      :class="{on: '/profile' === $route.path}"
      @click="jumpTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-wode-" />
      </span>
      <span>Profile</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    jumpTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../common/mixins.styl';

.foot_nav {
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .nav_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #189EFF;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
