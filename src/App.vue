<template>
  <div id="app">
    <router-view />
    <FootNav v-show="$route.meta.showFoot" />
  </div>
</template>

<script>
import FootNav from './components/FootNav.vue'
export default {
  components: {
    FootNav
  }
}
</script>

<style scoped lang="stylus"></style>
