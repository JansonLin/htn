<template>
  <div>
    <div class="thn-header">
      <div class="thn-header-inner clearfix">
        <div class="fl">
          <ul class="nav-list clearfix">
            <li><a href="#">健康人才网</a></li>
            <li><a href="#">健康人才网</a></li>
            <li class="nav-list_mobile">
              <a href="#"><i class="el-icon-mobile-phone"></i>访问手机端</a>
            </li>
          </ul>
        </div>
        <div class="fr">
          <div class="user-login">
            <a href="#">登录</a>
            <a href="#">个人注册</a>
            <a href="#">企业注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="thn-header_sub">
      <div class="th-header_sub-inner">
        <el-row  :gutter="20">
          <el-col :span="5" class="logo">
            <div class="logo-title">
              健康人才网
            </div>
          </el-col>
          <el-col :span="15">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-select v-model="select" slot="prepend" style="width:80px;">
                <el-option label="课程" value="1"></el-option>
                <el-option label="导师" value="2"></el-option>
                <el-option label="新闻" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <div class="tel">
              <i class="el-icon-phone"></i>0731-82595909
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="navigator">
      <div class="nav">
        <router-link to="home" class="active">首页</router-link>
        <router-link to="news-center">新闻中心</router-link>
        <router-link to="education-training">教育培训</router-link>
        <router-link to="job-hunting">招聘求职</router-link>
        <router-link to="about-us">关于我们</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'htnHeader',
    data() {
      return {
        input5: '',
        select: '1'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navigator {
    width: 1000px;
    margin: 0 auto;
    .nav {
      display: flex;
      a {
        flex: 1;
        text-align: center;
        font-size: 18px;
        color: #333;
        height: 50px;
        line-height: 50px;
        &.active,&:hover {
          color: #5382ec!important;
          border-bottom: 2px solid #5382ec;
        }
      }
    }
  }
  .thn-header_sub {
    width: 1000px;
    margin: 20px auto;
    .tel {
      height: 50px;
      line-height: 60px;
      font-size: 14px;
      color: #ccc;
    }
    .logo {
      .logo-title {
        font-size: 18px;
        background-image: url('../../../assets/logo.png');
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 50px auto;
        padding-left: 60px;
        height: 50px;
        line-height: 60px;
        font-weight: bold;
        font-family: "隶书", Arial, sans-serif
      }
    }
    .th-header_sub-inner {
      .input-with-select {
        margin-top: 10px;
      }
    }
  }
  .thn-header {
    height: 30px;
    line-height: 30px;
    position: relative;
    z-index: 7;
    background: #68697a;
    .thn-header-inner {
      zoom: 1;
      width: 1000px;
      margin: 0 auto;
      .user-login {
        zoom: 1;
        margin: 0 -17px 0 0;
        font-size: 12px;
        > a {
          padding: 0 17px 0 0;
          position: relative;
          color: #fff;
          float: left;
          &:before {
            float: left;
            content: "|";
            margin: 0 17px 0 0;
            color: #fff;
          }
          &:first-child:before {
            display: none;
          }
        }
      }
      .nav-list {
        li {
          float: left;
          &:before {
            float: left;
            content: "|";
            margin: 0;
            color: #fff;
          }
          &:first-child:before {
            display: none;
          }
          a {
            float: left;
            padding: 0 10px;
            color: #fff;
            font-size: 12px;
          }
        }
      }
    }

  }
</style>

<style rel="stylesheet/scss" lang="scss">

  .thn-header_sub {
    .el-input-group__prepend {
      background-color: #FFF;
    }
    .el-input__inner {
      /*border-left: 0;*/
    }
    .el-input-group__append {
      background: #3c8ce5;
      border-color: #3c8ce5;
      color:#fff;
      .el-icon-search {
        font-size: 18px;
      }
    }
  }
</style>

