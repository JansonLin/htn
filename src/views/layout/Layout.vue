<template>
  <div>
    <htn-header></htn-header>
    <router-link to="home">首页</router-link>
    <router-link to="news-center">新闻中心</router-link>
    <router-link to="education-training">教育培训</router-link>
    <router-link to="job-hunting">招聘求职</router-link>
    <router-link to="about-us">关于我们</router-link>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>


<script>
  import htnHeader from '@/views/layout/htn-header'
  export default {
    components: {
      htnHeader
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
