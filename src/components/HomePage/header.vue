<template>
  <div class="header">
        <div class="tit-auto">重庆 Music</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .header{
    background: #222;
    height: 2.75rem;
    color: #ec1b66;
    line-height:2.75rem;
    .tit-auto{
        width: 50%;
        text-align: center;
        margin: 0 auto;
    }
  }
</style>
