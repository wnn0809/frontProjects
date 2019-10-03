<template>
  <div class="about">
  <el-input
    suffix-icon="el-icon-search"
    placeholder="请输入内容"
    v-model="input1"
    @input="search"
    style="width:200px;">
    <!-- <label slot="suffix" class="input-slot">天</label> -->
  </el-input>
  <!-- <input id="map_search_btn" type="button" @click="search" value="搜索"/> -->
  <div id="map_search_result">
    <li v-for="item in datalist" :key="item" @click="testclick">{{item}}</li>
  </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      input1: '',
      datalist: []
    }
  },
  methods: {
    search () {
      this.datalist = ['101教室', '102教室', '103教室', '104教室', '105教室']
      // var rdom = document.getElementById('map_search_result')

    //   rdom.innerHTML = ''

    //   datalist.forEach(function (result) {
    //     rdom.innerHTML += '<li @click=testclick>' + result + '</li>'
    //   })
    },
    testclick (e) {
      console.log(1111, e.target.innerText)
      this.input1 = e.target.innerText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-slot {
    line-height: 2.8;
    color: black;
  }
</style>
