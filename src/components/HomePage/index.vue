<template>
  <div>
      <pageheader></pageheader>
       <tab></tab>
       <router-view></router-view>
  </div>
</template>
<script>
import pageheader from '@/components/HomePage/header'
import tab from '@/components/HomePage/tab'
// import pageheader from '@/components/HelloWorld'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    pageheader,
    tab
  }
}
</script>
<style scoped>

</style>
