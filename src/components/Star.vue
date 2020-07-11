<template>
  <div
    class="star"
    :class="'star-'+ size"
  >
    <span
      class="star-item on"
      v-for="item in ratingScore.on"
      :key="item"
    />
    <span
      class="star-item half"
      v-if="ratingScore.half"
    />
    <span
      class="star-item off"
      v-for="item in ratingScore.off"
      :key="item + 5"
    />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['rating', 'size'],
  computed: {
    ratingScore() {
      let res = {
        on: 0,
        off: 0,
        half: true
      }
      const { rating } = this
      if (Math.floor(rating) < rating) {
        res.half = true
        res.on = Math.floor(rating)
        res.off = 5 - Math.floor(rating) - 1
      } else {
        res.on = rating
        res.half = false
        res.off = 5 - rating
      }
      return res
    }
  }
}
</script>
<style scoped lang="stylus">
@import '../common/mixins.styl';

.star {
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
}</style>
