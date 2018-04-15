<template>
  <div class="container">
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#">
            <img src="../../assets/banner_01.jpg" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="../../assets/banner_02.jpg" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="../../assets/banner_03.jpg" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="../../assets/banner_04.jpg" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="../../assets/banner_05.jpg" alt="banner">
          </a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header-inner clearfix">
        <div class="fl">
          <div class="logo"></div>
        </div>
        <div class="fr">
          <ul class="nav">
            <li><a href="#">首页</a></li>
            <li><a href="#">新闻中心</a></li>
            <li><a href="#">教育培训</a></li>
            <li><a href="#">招聘求职</a></li>
            <li><a href="#">关于我们</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part">
      <div class="cj_part1">
        <ul class="cj_part1_ul">
          <li class="tag1">
            <div class="img"></div>
            <div class="info">
              <div class="h2">培训</div>
              <p>健康产业人才培训</p>
            </div>
          </li>
          <li class="tag2">
            <div class="img"></div>
            <div class="info">
              <div class="h2">就业创业</div>
              <p>行业人才就业</p>
            </div>
          </li>
          <li class="tag3">
            <div class="img"></div>
            <div class="info">
              <div class="h2">优秀人才</div>
              <p>健康产业机构推荐</p>
            </div>
          </li>
          <li class="tag4">
            <div class="img"></div>
            <div class="info">
              <div class="h2">人才交流</div>
              <p>优秀心理咨询师</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      AAA
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'home',
    mounted() {
      new Swiper('#swiper', {
        lazy: true,
        loop: true,
        // autoplay: {
        //   delay: 2000
        // }
      })
    },
    data() {
      return {
        msg: '首页'
      }
    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    width: 100%;
    min-width: 1000px;
    position: relative;
    .part {
      position: relative;
      width: 1000px;
      margin: 0 auto;
      height: 45px;
      .cj_part1 {
        z-index: 1;
        position: absolute;
        top: -75px;
        left: 0;
        right: 0;
        height: 120px;
        background-color: #FFF;
        -moz-box-shadow: 0 2px 3px #cfcfcf;
        -webkit-box-shadow: 0 2px 3px #cfcfcf;
        -ms-box-shadow: 0 2px 3px #cfcfcf;
        box-shadow: 0 2px 3px #cfcfcf;
        .cj_part1_ul {
          display: flex;
          padding: 23px 0;
          li {
            flex: 1;
            .img {
              width: 84px;
              height: 75px;
              float: left;
            }
            .info {
              float: left;
              width: 150px;
              height: 75px;
              .h2 {
                margin-top: 20px;
                font-size: 18px;
                line-height: 18px;
                color: #333;
                font-weight: normal;
              }
              p {
                margin-top: 8px;
                line-height: 14px;
                color: #999;
              }
            }
          }
          .tag1 {
            .img {
              background: url(../../assets/hot-top-tag1.png) no-repeat center;
            }
          }
          .tag2 {
            .img {
              background: url(../../assets/hot-top-tag2.png) no-repeat center;
            }
          }
          .tag3 {
            .img {
              background: url(../../assets/hot-top-tag3.png) no-repeat center;
            }
          }
          .tag4 {
            .img {
              background: url(../../assets/hot-top-tag4.png) no-repeat center;
            }
          }
        }
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          a {
            display: block;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background-color: rgba(204, 204, 204, 0.2);
      padding: 20px 5px;
      .header-inner {
        width: 1000px;
        margin: 0 auto;
        .fl {
          .logo {
            width: 200px;
            height: 30px;
            background-image: url(../../assets/logo.png);
            background-size: 100% auto;
            background-repeat: no-repeat;
          }
        }
        .fr {
          .nav {
            li {
              display: inline-block;
              padding: 0 20px;
              a {
                font-size: 16px;
                display: block;
                color: #FFF;
                height: 30px;
                line-height: 30px;
                &:hover {
                  border-bottom: 2px solid #3086c0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
