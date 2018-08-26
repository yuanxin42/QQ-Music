<template>
  <div id="recommend">
    <div class="lunbo">
      <transition-group tag="ul" class="recommend-lunbo" name='image'>
        <li v-for="(item,index) in recommends" :key="index" v-show="index == mark">
          <router-link tag="a" :to="item.linkUrl">
            <img :src="item.picUrl" alt="#">
          </router-link>
          <div class="lunbo-titbox">
            <span :class="{active:(mark ===index)}" v-for="(item,index) in recommends" :key="index" @click="changemark(index)"></span>
          </div>
        </li>
      </transition-group>
    </div>
    <div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li @click="selectItem(item)" v-for="(item,index) in disclist" class="itemlist" :key='index'>
            <div class="icon">
              <img :src="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
              <!-- v-html会对字符做转义 -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { getRecommend, getDiscList } from '../../api/recommend'
import { getRecommend } from '../../api/recommend'
import list from '../../api/disclist'
export default {
  data () {
    return {
      recommends: [],
      mark: 0,
      timer: null,
      disclist: []
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
    // _getDiscList () {
    //   getDiscList().then((res) => {
    //     if (res.code === 0) {
    //       console.log('-------歌单数据--------', res.data.list)
    //       this.discList = res.data.list
    //     }
    //   })
    // },
    stoplunbo () {
      console.log('结束轮播')
      clearInterval(this.timer)
      this.timer = null
    },
    changemark (index) {
      this.stoplunbo()
      this.mark = index
      this.runlunbo()
    },
    runlunbo () {
      console.log('开始轮播')
      this.timer = setInterval(() => {
        this.mark++
        if (this.mark === this.recommends.length) {
          this.mark = 0
        }
      }, 3000)
    },
    // 点击进入路由
    selectItem (item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item)
    }
  },
  created () {
    this._getRecommend()
    // this._getDiscList()
  },
  mounted () {
    this.$nextTick(function () {
      this.runlunbo()
    })
    this.disclist = list.disclist.data.list
    console.log(typeof (this.disclist), this.disclist, '我是dis')
    console.log(this.disclist, '报错了')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../assets/css/common.less";
.lunbo {
  width: 100%;
  height: 1rem;
  height: auto;
  position: relative;
  .recommend-lunbo {
    width: 100%;
    height: 9.35rem; // height: auto;
    overflow: hidden;
    position: relative;
    li {
      width: 100%;
      position: absolute;
      a {
        display: block;
        width: 100%;
        img {
          width: 100%;
          height: 9.35rem;;
        }
      }
    }
  }
  .lunbo-titbox {
    text-align: center;
    margin-top: -1.5rem;
    span {
      display: inline-block;
      width: 1.175rem;
      background: white;
      margin-right: 0.625rem;
      height: 0.625rem;
    }
    .active {
      width: 1.675rem;
      background: @head-color;
    }
  }
}

.recommend-list {
  background: @bac-color;
  .list-title {
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: @head-color;
    font-size: 1rem;
    font-weight: 300;
  }
  .itemlist {
    width: 100%;
    height: 4.5rem;
    .icon {
      width: 25%;
      text-align: center;
      .tofloat();
      & img {
        width: 3.75rem;
        height: 3.75rem;
      }
    }
    .text {
      width: 75%;
      .tofloat();
      .name {
        color: white;
        font-size: 1rem;
        font-weight: 300;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .desc{
        color: @letter-color;
      }
    }
  }
}

.image-enter-active {
  transform: translateX(0);
  transition: all 0.5s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 0.5s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
</style>
