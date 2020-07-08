<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="iconfont icon-jianshao"
        v-if="count"
        @click.stop="updateFoodCount(false)"
      />
    </transition>
    <div
      class="cart-count"
      v-if="count"
    >
      {{ count }}
    </div>
    <div
      class="iconfont icon-zengjia"
      @click.stop="updateFoodCount(true)"
    />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: function() {
        return 0
      }
    },
    subIndex: {
      type: Number,
      default: function() {
        return 0
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch(
        'updateFoodCount', 
        {isAdd, index: this.index, subIndex: this.subIndex}
      )
      .then(() => {
        if(isAdd) {
          this.count++
        } else {
          this.count--
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-jianshao {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $blue;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.3s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .icon-zengjia {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $blue;
  }
}
</style>
