<template>
  <div class="app" id="app">
    <div class="banner">
      <img class="hidden-xl-only hidden-lg-only hidden-md-only" :src="bannerXSSM" alt="banner图">
      <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner图">
      <img class="hidden-xs-only hidden-sm-only hidden-lg-only" :src="bannerMD" alt="banner图">
      <h1>信令管理系统</h1>
    </div>
    <!-- 第一行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
        <router-view name="PartOne"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
        <router-view name="PartTwo"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
        <router-view name="PartThree"/>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :xs="23" :sm="23" :md="7" :lg="7" :xl="7" class="part">
        <router-view name="PartFour"/>
      </el-col>
      <el-col :xs="23" :sm="23" :md="7" :lg="7" :xl="7" class="part">
        <router-view name="PartFive"/>
      </el-col>
      <el-col :xs="25" :sm="25" :md="5" :lg="5" :xl="4" class="part">
        <router-view name="PartSeven"/>
      </el-col>
      <el-col :xs="25" :sm="25" :md="5" :lg="5" :xl="4" class="part">
        <router-view name="PartSix"/>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bannerXSSM: require("./assets/img/banner_640.png"),
      bannerMD: require("./assets/img/banner_1000.png"),
      bannerLGXL: require("./assets/img/banner.png"),
    };
  }
};
</script>

<style>
  html,body {
    height: 100%;
    /*overflow: hidden;*/
  }
  body{
    background:#011128;
    color:#fff;
  }
  .app{
    width:90%;
    margin: auto;
  }
  .part{
    padding:10px 15px 15px 20px;
  }
  .banner{
    width:97%;
    height:80px;
     margin: auto;
  }
  p{
    text-align:center;
  }
  .banner h1{
    position: relative;
    margin-top: -52px;
    margin-left: 74px;
    font-size: xx-large;
  }
</style>
