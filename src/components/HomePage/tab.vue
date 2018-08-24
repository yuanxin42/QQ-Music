<template>
    <div class="tab">
        <!-- tag=""默认渲染成什么标签 -->
        <router-link tag="div" class="tab-item" to="/recommend">
            <span class="tab-link">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-link">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="tab-link">排行
            </span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-link">搜索</span>
        </router-link>
    </div>
</template>
<script>
// import pageheader from '@/components/HelloWorld'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped>
@tabheight: 44px;
@color: rgba(255,255,255,0.5);;
@bac-color: #222;
.tab {
    width: 100%;
    display: flex;
    height: @tabheight;
    line-height: @tabheight;
    background: @bac-color;
    color: @color;
    .tab-item {
        flex: 1;
        text-align: center;
        &:active{
            color: blue;
        }
    }
}
</style>
