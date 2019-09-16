<template>
  <div class="customers">
    <article style="background:#eee">
      <p>table表格</p>
      <!-- table表格 -->
      <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 80%; margin: auto;">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div style="margin:12px 0; text-align: center;">
      <el-pagination
        background
        layout="sizes, prev, pager, next, jumper"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        :total="200"
        :current-page.sync="currentPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    </article>
    <!-- 动态添加表单 -->
    <p>动态添加表单</p>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" style="width: 400px;">
    <el-form-item
      prop="email"
      label="邮箱"
      :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ]"
    >
    <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'域名' + (index + 1)"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true, message: '域名不能为空', trigger: 'blur'
      }"
    >
    <div class="flex">
      <el-input class="inputform" v-model="domain.value"></el-input>
      <img class="deleteicon" @click.prevent="removeDomain(domain)" src="../assets/delete.png">
    </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="addDomain">新增域名</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
  <!-- 树形结构实现 -->
  <p>树形结构实现</p>
  <div class="el_tree">
    <el-tree
      :data="treedata"
      show-checkbox
      :default-expanded-keys="[1, 9]"
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps">
    </el-tree>
  </div>
  <!-- 模糊搜索 -->
  <p>模糊搜索</p>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
  ></el-autocomplete>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  <p>模糊搜索</p>
  </div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
      treedata: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: ['三级 1-1-1', '三级 1-2-1', '三级 1-3-1']
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
      ],
      // 默认显示第一页
      currentPage: 1,
      // 控制每页显示数据条数
      pagesize: 5,
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      list: [],
      seachList: [],
      state: '',
      timeout: null
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页${val}条`)
      this.pagesize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页${val}`)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    // 模糊搜索
    loadAll () {
      return [
        {process_name: '1111', update_time: '2019-09-16', campus_name: '淮南小区'},
        {process_name: '1111', update_time: '11:34:03', campus_name: '四川大学清水校区', auditor_name: '教研室'},
        {update_time: '2019-09-16 16:47:32', process_name: '66666', process_id: 34},
        {campus_name: '测试校区', process_name: '99999', process_id: 39, auditor_name: '科研处'},
        {campus_name: '比比大学', process_name: '000000', process_id: 40, auditor_name: '学生处'},
        {process_id: 16, process_name: '2222', campus_name: '觉悟大学', auditor_name: '教务处→学生处'}
      ]
    },
    querySearchAsync (queryString, cb) {
      var dataList = this.list
      dataList.forEach(item => {
        this.seachList.push({
          id: item.process_id,
          value: item.auditor_name
        })
      })
      // console.log('this.seachList', this.seachList)
      var results = queryString ? this.seachList.filter(this.createStateFilter(queryString)) : this.seachList
      // console.log('results', results)
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 1000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        if (state.id !== undefined && state.value !== undefined) {
          // ===0 筛选的数据只是首字匹配的列表项，！==-1包含输入字的所有列表项
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
        }
      }
    }
  },
  mounted () {
    this.list = this.loadAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-input__inner {
  width: 300px;
} */
  .flex {
    display: flex;
    width: 325px;
  }
  .deleteicon {
    width: 20px;
    height: 20px;
    margin-top: 8px;
    margin-left: 5px;
  }
</style>
