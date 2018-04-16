<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <a href="#">
          <img src="../../assets/banner_01.jpg" alt="banner">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img src="../../assets/banner_02.jpg" alt="banner">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img src="../../assets/banner_03.jpg" alt="banner">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img src="../../assets/banner_01.jpg" alt="banner">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img src="../../assets/banner_02.jpg" alt="banner">
        </a>
      </swiper-slide>
    </swiper>
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
    <div class="part2">
      <ul class="flex">
        <li>
          <p class="w-center">
            <span class="num">16<i>年</i></span>
          </p>
          <p class="cj_text">心理咨询师培训</p>
        </li>
        <li>
          <p class="w-center">
            <span class="num">16<i>年</i></span>
          </p>
          <p class="cj_text">育婴服务培训</p>
        </li>
        <li>
          <p class="w-center">
            <span class="num">近50000<i>名</i></span>
          </p>
          <p class="cj_text">就业学院</p>
        </li>
        <li>
          <p class="w-center">
            <span class="num">近50000<i>+</i></span>
          </p>
          <p class="cj_text">合作企业</p>
        </li>
        <li>
          <p class="w-center">
            <span class="num">100<i>所</i></span>
          </p>
          <p class="cj_text">合作院校</p>
        </li>
      </ul>
    </div>
    <div class="part3 title" >
      <h3>
        <span>湖南省健康人才</span>打造精品课程
      </h3>
      <p>教学研发·行业认证·人才输送</p>
      <swiper :options="swiperOption2" class="swiper-container1" ref="mySwiper2">
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ms_main">
            <p class="ms_img">
              <a href="#">
                <img src="../../assets/part1.png" alt="task">
              </a>
            </p>
            <p class="ms_h">育婴师培训</p>
            <p class="ms_text">
              0基础成为专业的健康管理师
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <p class="global_link"> <a href="#" target="_blank">了解课程</a></p>
    </div>
    <div class="part4 title">
      <h3>
        <span>新闻中心，</span>健康管理师之星
      </h3>
      <div class="w-container">
        <div class="tab_wrap">
          <div class="bz_tab bz_tab_01">
            <h3>健康管理师之星 <span><img src="../../assets/bz_icon.png"></span></h3>
            <p>首届湖南“健康管理师之星”评选结果公示</p>
          </div>
          <div class="bz_tab bz_tab_02">
            <h3>健康管理师之星<span><img src="../../assets/bz_icon.png"></span></h3>
            <p>首届湖南“健康管理师之星”评选结果公示</p>
          </div>
          <div class="bz_tab bz_tab_03">
            <h3>健康管理师之星<span><img src="../../assets/bz_icon.png"></span></h3>
            <p>首届湖南“健康管理师之星”评选结果公示</p>
          </div>
          <div class="bz_tab bz_tab_04 tab_active">
            <h3>健康管理师之星 <span><img src="../../assets/bz_icon.png"></span></h3>
            <p>首届湖南“健康管理师之星”评选结果公示</p>
          </div>
        </div>
        <div class="bz_device">
          <swiper :options="swiperOption3" ref="mySwiper2">
            <swiper-slide>
              <div class="ms_main">
                <p class="ms_img">
                  <a href="#">
                    <img src="../../assets/news.png" alt="task">
                  </a>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="ms_main">
                <p class="ms_img">
                  <a href="#">
                    <img src="../../assets/news.png" alt="task">
                  </a>
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <p class="global_link"> <a href="#" target="_blank">查看更多</a></p>
    </div>
    <div class="part5 title">
      <h3>
        <span>证书荣誉，</span>健康管理师之星
      </h3>
      <p>证书荣誉·证书荣誉·证书荣誉</p>
      <div class="part5-inner">
        <div><img src="../../assets/c.jpg" alt=""></div>
        <div><img src="../../assets/c2.jpg" alt=""></div>
        <div><img src="../../assets/c3.jpg" alt=""></div>
        <div><img src="../../assets/c4.jpg" alt=""></div>
        <div><img src="../../assets/c5.jpg" alt=""></div>
        <div><img src="../../assets/c6.jpg" alt=""></div>
        <div><img src="../../assets/c7.jpg" alt=""></div>
        <div><img src="../../assets/c8.jpg" alt=""></div>
        <div><img src="../../assets/c4.jpg" alt=""></div>
        <div><img src="../../assets/c5.jpg" alt=""></div>
        <div><img src="../../assets/c2.jpg" alt=""></div>
        <div><img src="../../assets/c7.jpg" alt=""></div>
      </div>
      <p class="global_link"> <a href="#" target="_blank">查看更多</a></p>
    </div>
    <div class="part5 title">
      <h3>
        <span>视频教学，</span>视频教学视频教学
      </h3>
      <p>视频教学·视频教学·视频教学</p>
      <div class="video-inner">
        <video src="../../assets/movie.mp4" controls="controls"></video>
      </div>
      <p class="global_link"> <a href="#" target="_blank">我要学习</a></p>
    </div>
    <div class="part5 title">
      <h3>
        <span>开班啦，</span>开班啦开班啦
      </h3>
      <p>就业前景·就业前景·就业前景</p>
      <div class="ban">
        <div class="zweb03 wow bounceIn animated" data-wow-delay="0.2s"
             style="visibility: visible; animation-delay: 0.2s; animation-name: bounceIn;">
          <div class="line">
            <div class="num n1">
              <p>2018年1月1日</p>
              <div class="box">
                <h1>婴幼儿照料护理<br>
                  和教育的人员</h1>
                <div class="tag">
                  <h2>育婴<br>
                    师</h2>
                </div>
              </div>
            </div>
            <div class="num n2">
              <p>2018年1月2日</p>
              <div class="box">
                <h1>婴幼儿照料护理<br>
                  和教育的人员</h1>
                <div class="tag">
                  <h2>育婴<br>
                    师</h2>
                </div>
              </div>
            </div>
            <div class="num n3">
              <p>2018年1月3日</p>
              <div class="box">
                <h1>婴幼儿照料护理<br>
                  和教育的人员</h1>
                <div class="tag">
                  <h2>育婴<br>
                    师</h2>
                </div>
              </div>
            </div>
            <div class="num n4">
              <p>2018年1月4日</p>
              <div class="box">
                <h1>婴幼儿照料护理<br>
                  和教育的人员</h1>
                <div class="tag">
                  <h2>育婴<br>
                    师</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="global_link"> <a href="#" target="_blank">我要报名</a></p>
    </div>
    <div class="part6 title">
      <h3>
        <span>热点招聘，</span>热点招聘信息
      </h3>
      <p>热点招聘·热点招聘·热点招聘</p>
      <div class="part6-inner">
        <div class="list">
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
          <div class="e">
            <a class="po_name" target="_blank" href="#" title="育儿师">
              店长
            </a>
            <strong>1-1.5万/月</strong>
            <a class="co_name" target="_blank" href="#" title="叶义言儿童生长促进中心">
              叶义言儿童生长促进中心
            </a>
            <span>湖南-长沙</span>
          </div>
        </div>
      </div>
      <p class="global_link"> <a href="#" target="_blank">我要求职</a></p>
    </div>
    <div class="footer">
      底部放一些公司联系方式等信息
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'home',
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 2000
          }
        },
        swiperOption2: {
          slidesPerView: 5,
          spaceBetween: 10,
          speed: 500,
          loop: true,
          centeredSlides: true,
          watchActiveIndex: true,
          autoplay: true
        },
        swiperOption3: {
          loop: true,
          autoplay: {
            delay: 2000
          }
        }
      }
    },
    methods: {},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    .footer {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 10px;
    }
    width: 100%;
    background-color: #f7f7f7;
    min-width: 1000px;
    position: relative;
    .part6 {
      background: #FFF;
      padding: 30px 0;
      .part6-inner {
        width: 1000px;
        margin: 20px auto;
        .list {
          padding-left: 30px;
          overflow: hidden;
          .e {
            float: left;
            width: 300px;
            height: 85px;
            margin: 0 0 10px 10px;
            padding: 10px;
            border: 1px solid #E8E8E8;
            a {
              float: left;
              width: 182px;
              height: 34px;
              line-height: 34px;
              font-size: 14px;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .po_name {
              color: #333;
            }
            strong {
              float: right;
              width: 90px;
              height: 34px;
              line-height: 34px;
              font-size: 14px;
              color: #ff6000;
              text-align: right;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .co_name {
              color: #666;
            }
            span {
              float: right;
              width: 92px;
              height: 34px;
              line-height: 34px;
              font-size: 14px;
              color: #999;
              text-align: right;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .ban {
      width: 1000px;
      margin: 20px auto;
      .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .bounceIn {
        -webkit-animation-name: bounceIn;
        animation-name: bounceIn;
      }
      .zweb03 .line {
        margin: 0 auto;
        width: 824px;
        height: 290px;
        position: relative;
        background: url(../../assets/line.png) no-repeat center center;
      }
      .zweb03 .line .num {
        top: 131px;
        width: 90px;
        height: 28px;
        z-index: 2;
        position: absolute;
        background: #bf095f;
        border-radius: 50%;
      }
      .zweb03 .line .num.n1 {
        left: -13px;
      }
      .zweb03 .line .num.n2 {
        left: 253px;
      }
      .zweb03 .line .num.n3 {
        left: 520px;
      }
      .zweb03 .line .num.n4 {
        right: -14px;
      }
      .zweb03 .line .num p {
        text-align: center;
        font-size: 10px;
        color: #ffffff;
        line-height: 28px;
      }
      .zweb03 .line .num .box {
        left: -10px;
        top: -130px;
        width: 126px;
        height: 290px;
        position: absolute;
      }
      .zweb03 .line .num.n1 .box h1, .zweb03 .line .num.n3 .box h1, .zweb03 .line .num.n5 .box h1 {
        margin-left: -46px;
        margin-top: 78px;
        font-size: 18px;
        width: 200px;
        line-height: 22px;
        color: #545454;
        text-align: center;
      }
      .zweb03 .line .num.n1 .tag, .zweb03 .line .num.n3 .tag, .zweb03 .line .num.n5 .tag {
        bottom: 0;
        width: 126px;
        height: 139px;
        z-index: -1;
        position: absolute;
        background: url(../../assets/zweb03-tag1.png) no-repeat center;
      }
      .zweb03 .line .num.n1 .tag h2, .zweb03 .line .num.n3 .tag h2, .zweb03 .line .num.n5 .tag h2 {
        margin-top: 56px;
        width: 108px;
        font-size: 24px;
        line-height: 26px;
        color: #ffffff;
        text-align: center;
      }
      .zweb03 .line .num.n2 .box h1, .zweb03 .line .num.n4 .box h1 {
        margin-left: -46px;
        margin-top: 170px;
        font-size: 18px;
        width: 200px;
        line-height: 22px;
        color: #545454;
        text-align: center;
      }
      .zweb03 .line .num.n2 .tag h2, .zweb03 .line .num.n4 .tag h2 {
        margin-top: 28px;
        width: 108px;
        font-size: 24px;
        line-height: 26px;
        color: #ffffff;
        text-align: center;
      }
      .zweb03 .line .num.n2 .tag, .zweb03 .line .num.n4 .tag {
        top: 0;
        width: 126px;
        height: 139px;
        z-index: -1;
        position: absolute;
        background: url(../../assets/zweb03-tag2.png) no-repeat center;
      }
    }
    .part5 {
      padding: 30px 0;
      background: #FFF;
      border-bottom: 1px solid #CCC;
      .video-inner {
        width: 1000px;
        margin: 20px auto;
        video {
          width: 1000px;
        }
      }
      .part5-inner {
        width: 1000px;
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        > div {
          width: 150px;
          height: 150px;
          margin-left: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          img {
            width: 150px;
            height: 150px;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
    .part4 {
      padding: 30px 0;
      background: #FFF;
      border-bottom: 1px solid #CCC;
      .w-container {
        width: 1000px;
        margin: 20px auto;
        position: relative;
        .bz_tab{
          width: 256px;
          position: absolute;
          text-align: right;
          cursor: pointer;
        }
        .bz_tab_01{
          left: 0;
          top:25px;
          padding-right: 45px;
        }
        .bz_tab_02{
          left: 0;
          bottom:40px;
          padding-right: 45px;
        }
        .bz_tab_03{
          right: 0;
          top:25px;
          padding-left: 45px;
          text-align: left;
        }

        .bz_tab_04{
          right: 0;
          bottom:40px;
          padding-left: 45px;
          text-align: left;
        }
        .bz_tab h3{
          position: relative;
          font-size: 18px;
          color: #333;
          font-weight: normal;
        }
        .bz_tab h3 > span{
          display: inline-block;
          position: absolute;
          right: -60px;
          width: 45px;
          height: 45px;
          border-radius: 45px;
          background: #f5f5f5;
          text-align: center;
          line-height: 45px;
          z-index: 1;
          top: -6px;
          padding-top: 4px;
          padding-right: 3px;
        }
        .bz_tab h3 > span img{
          display: inline-block;
        }
        .bz_tab p{
          margin-top: 14px;
          font-size: 14px;
          color: #999;
        }
        .bz_tab_03 h3 > span, .bz_tab_04 h3 > span{
          left: -60px;
        }

        .tab_active h3 > span{
          background: #3697d9;
        }
        .tab_active h3{
          color: #3697d9;
        }
        .bz_device {
          margin-left: 256px;
          width: 488px;
          height: 294px;
          position: relative;
          background: url(../../assets/bz_bg.jpg) no-repeat center;
          padding-top: 17px;
          .swiper-container {
            width: 368px;
            height: 230px;
            margin: 0 auto;
            img {
              width: 368px;
              height: 230px;
            }
          }
        }
      }
    }
    .global_link {
      text-align: center;
      height: 60px;
      >a{
        display: inline-block;
        width: 190px;
        height: 46px;
        border-radius: 23px;
        border:1px solid #3697d9;
        line-height: 44px;
        color: #3697d9;
        font-size: 20px;
        -o-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;
        &:hover{
          background: #3697d9;
          color: #fff;
          -o-transition: all 0.2s;
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          transition: all 0.2s;
        }
      }

    }
    .part3 {
      background: #FFF;
      padding: 30px 0;
      border-bottom: 1px solid #CCC;
      .swiper-container1 {
        width: 1000px;
        margin: 20px auto;
        padding-bottom: 20px;
        .swiper-slide {
          opacity: 0.7;
          transform: scale(.8);
          transition: 300ms;
          .ms_h{
            font-size: 16px;
            color: #333;
            font-weight:bold;
            padding: 10px 10px 0;
          }
          .ms_text{
            font-size: 13px;
            color: #999;
            padding:10px 10px 15px;
          }
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .title {
      > h3 {
        text-align: center;
        font-size: 38px;
        color: #333;
        font-weight: normal;
        height: 60px;
        line-height: 60px;
        span {
          color: #3697d9;
        }
      }
      > p:not(.global_link) {
        text-align: center;
        font-size: 20px;
        color: #999;
        height: 32px;
        line-height: 32px;
      }
    }
    .part2 {
      .flex {
        display: flex;
        li {
          margin: 30px 0;
          flex: 1;
          border-right: 1px solid #e4e4e4;
          text-align: center;
          .w-center {
            height: 80px;
            line-height: 80px;
            .num {
              position: relative;
              color: #3c3c3c;
              font-size: 50px;
              display: inline-block;
              font-family: Arial;
              i {
                position: absolute;
                top: 0;
                right: -20px;
                color: #949494;
                font-size: 12px;
                font-style: normal;
                width: 12px;
                height: 12px;
                line-height: 12px;
              }
            }
          }
          .cj_text {
            color: #949494;
            font-size: 12px;
          }
          &:last-child {
            border-right: 0;
          }
        }
      }
    }
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
<style rel="stylesheet/scss" lang="scss">
</style>
