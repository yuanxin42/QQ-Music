<template>
  <div id="debug">
    <div id="wrapper">
      <p style="font-size:1rem">
          一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十</p>
      <!-- icon -->
      <img src="up.png" alt="向上" style="position:fixed;bottom:0.625rem;right:0.625rem;width:3rem;height:3rem;">
      <!--/*通过 bottom:10px;right:10px;width:48px;height:48px; 各除以16计算出来*/ -->
      <!-- photo -->
      <img src="p1.jpg" alt="向上" style="margin:0 auto;display:block;width:18.75rem;height:12.5rem;">
      <!--/*通过 width:300px;height:200px; 各除以16计算出来*/-->
    </div>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from '../../api/recommend'
export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  methods: {
    _getRecommend () {
      // 获取轮播图数据，引用recommend.js中的函数
      getRecommend().then((res) => {
        // ERR_OK ====0,语义化
        if (res.code === 0) {
          console.log(' ----轮播图数据----- ', res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === 0) {
          console.log('-------歌单数据--------', res.data.list)
          this.discList = res.data.list
        }
      })
    }
  },
  mounted () {
    this._getRecommend()
    this._getDiscList()
    console.log(this.recommends, this.discList)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
