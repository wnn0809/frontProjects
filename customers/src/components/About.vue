<template>
  <div class="about">
    属性方式：
  <el-input
    placeholder="请选择日期"
    v-model="input1"
    style="width:200px;">
    <label slot="suffix" class="input-slot">天</label>
  </el-input>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      input1: ''
    }
  },
  methods: {

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
