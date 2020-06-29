<template>
  <div>
    <Evaluation />
    <Food />
    <Abort />
  </div>
</template>
<script>
    import Evaluation from './Evaluation'
    import Food from './Food'
    import Abort from './Abort'

    export default {
        components: {
            Evaluation,
            Food,
            Abort
        }
    }
</script>
<style scoped lang="stylus">
 
</style>
