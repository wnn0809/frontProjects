<template>
  <div>
    <p>获取顶层父级ID</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 7, name: '快鱼', pid: 2 },
        { id: 8, name: '海澜之家', pid: 2 },
        { id: 9, name: '森马', pid: 2 },
        { id: 13, name: '华为mate10', pid: 4 },
        { id: 14, name: '华为mate20', pid: 4 },
        { id: 15, name: '华为mate30', pid: 4 },
        { id: 16, name: '华为mate40', pid: 15 },
        { id: 17, name: '华为mate50', pid: 16 },
        { id: 4, name: '华为', pid: 1 },
        { id: 5, name: 'ViVo', pid: 1 },
        { id: 6, name: 'OPPO', pid: 1 },
        { id: 10, name: '长虹', pid: 3 },
        { id: 11, name: '飞利浦', pid: 3 },
        { id: 12, name: '松下', pid: 3 },
        { id: 1, name: '手机' },
        { id: 2, name: '服装' },
        { id: 3, name: '家电' }
      ]
    }
  },
  mounted() {
    this.geTopParentId(this.list, 17)
  },
  methods: {
    geTopParentId(jsonData, id) {
      let arr = []
      let n = id
      let rev = (jsonData, id) => {
        jsonData.forEach(element => {
        if (element.id === n) {
          if (element.pid) {
            n = element.pid
            arr.unshift(n)
            rev(this.list, n)
          }
        }
      })
      return arr
      }
      arr = rev(jsonData, id)
      console.log('arr', arr)
    }
  }
}
</script>
