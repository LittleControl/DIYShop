<template>
  <div>
    <ShopHead />
    <Evaluation />
    <Food />
    <Abort />
  </div>
</template>
<script>
  import Evaluation from './Evaluation'
  import Food from './Food'
  import Abort from './Abort'
  import ShopHead from '../../components/ShopHead'

  export default {
    components: {
        Evaluation,
        Food,
        Abort,
        ShopHead
    }
  }
</script>
<style scoped lang="stylus">
 
</style>
