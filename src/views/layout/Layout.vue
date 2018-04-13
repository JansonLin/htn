<template>
  <div>
    <div class="header">头部信息</div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>


<script>
  export default {

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    font-size: 18px;
    color: red;
  }
</style>
