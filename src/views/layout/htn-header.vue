<template>
  <div class="header clearfix">
    <div class="right">
      <span>在线留言</span>
      <span>个人注册</span>
      <span>企业注册</span>
      <span>登录</span>
      <span>站内消息</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'htn-header'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    background-color: red;
    height: 35px;
    .right {
      float: right;
      padding-top: 2px;
      padding-right: 5px;
      span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        color: #FFF;
      }
    }
  }
  .clearfix:after {
    content: '';
    display: block;
    visibility: hidden;
    width: 0;
    height: 100%;
    clear: both;
  }
</style>
