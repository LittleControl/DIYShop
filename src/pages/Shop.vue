<template>
  <div class="shop">
    <HeadTop title="商家店铺" />
    <form
      class="search_form"
      @submit.prevent="search"
    >
      <input
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
        v-model="keyword"
      >
      <input
        type="submit"
        name="submit"
        class="search_submit"
      >
    </form>
    <SearchResult v-if="!showReco" />
    <ShopList v-show="showReco" />
  </div>
</template>

<script>
import HeadTop from '../components/HeadTop'
import ShopList from '../components/ShopList'
import SearchResult from '../components/SearchResult'

export default {
  data() {
    return {
      keyword: '',
      showReco: true
    }
  },
  components: {
    HeadTop,
    ShopList,
    SearchResult
  },
  methods: {
    search() {
      const keyword = this.keyword.trim()
      this.$store.dispatch('searchShop',keyword)
      .then(() => {
        this.showReco = false
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../common/mixins.styl';

.shop {
  width: 100%;

  .search_form {
    clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #189eff;
        font-size: 16px;
        color: #fff;
        background-color: #189eff;
      }
    }
  }
}
</style>
