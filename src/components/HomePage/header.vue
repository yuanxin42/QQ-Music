<template>
  <div class="header">
    <div class="tit-auto">
      <div class="icon"></div>
      <div class="icon-txt">黑龙江 Music</div>
    </div>
    <div class="icon-right"></div>
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
@import "../../assets/css/common.less";
.head-img(@url) {
  // header导航栏的图片的样式
  height: 2rem;
  background: url(@url) no-repeat;
  background-size: 100% 100%;
  padding-top: 0.325rem;
}

.header {
  background: @bac-color;
  height: 2.75rem;
  color: @head-color;
  line-height: 2.75rem;
  position: relative;
  .tit-auto {
    width: 50%;
    height: 2.75rem;
    text-align: center;
    margin: 0 auto;
    .icon {
      width: 20%;
      .head-img("../../assets/imgs/panda@3x.png");
      .tofloat();
    }
    .icon-txt {
      width: 80%;
      .tofloat(right); // float: left;
    }
  }
  .icon-right {
    width: 10%;
    .head-img("../../assets/imgs/panda@3x.png");
    position: absolute;
    top: 0;
    right: 1.25rem;
    color: black;
  }
}
</style>
