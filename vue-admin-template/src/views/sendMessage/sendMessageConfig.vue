<template>
  <div class="sendMessage-main">
    <div class="content">
      <template>
        <el-tabs v-model="tabName">
          <el-tab-pane label="系统消息通知">
            <!--1-->
            <section class="section">
              <div class="audit-status">
                <span>有待审核的房间预约申请</span>
                <span>
                  <span v-if="auditState0.pushMessage" style="font-size:14px;padding-right:5px">发送消息通知</span>
                  <span v-else style="font-size:14px;padding-right:5px">不发送消息通知</span>
                  <el-switch
                    v-model="auditState0.pushMessage"
                    class="onSwitch"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object" v-if="auditState0.pushMessage">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked0" class="group-flex">
                  <el-checkbox class="checkbox" checked label="3">房间所在审核流程中各部门的管理用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="1">房间所在审核流程中各部门的主要负责人</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--2-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约申请提交成功</span>
                <span>
                  <el-switch
                    v-model="auditState1.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
            </section>
            <!--3-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约审核通过</span>
                <span>
                  <el-switch
                    v-model="auditState2.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked2" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="3">附赠审查该房间的房间管理员</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--4-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约审核不通过</span>
                <span>
                  <el-switch
                    v-model="auditState3.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked3" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--5-->
            <section class="section">
              <div class="audit-status">
                <span>提交的预约申请过期未审核</span>
                <span>
                  <el-switch
                    v-model="auditState4.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked4" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="3">房间所在审核流程中各部门的管理用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="1">房间所在审核流程中各部门的主要负责人</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--6-->
            <section class="section">
              <div class="audit-status">
                <span>已提交预约申请的房间被锁定，且锁定时段与预约时段有重合</span>
                <span>
                  <el-switch
                    v-model="auditState5.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked5" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--7-->
            <section class="section">
              <div class="audit-status">
                <span>已提交预约申请的房间被设置为不开放预约</span>
                <span>
                  <el-switch
                    v-model="auditState6.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked6" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--8-->
            <section class="section">
              <div class="audit-status">
                <span>申请人取消预约申请</span>
                <span>
                  <el-switch
                    v-model="auditState7.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange"
                  />
                </span>
              </div>
            </section>
          </el-tab-pane>
          <el-tab-pane label="校方消息通知平台">
            <section class="section">
              <div class="audit-status">
                <span style="line-height: 38px">校方消息通知平台接口地址：</span>
                <span style="width: 960px"><el-input placeholder="请输入" /></span>
              </div>
            </section>
            <!--1-->
            <section class="section">
              <div class="audit-status">
                <span>有待审核的房间预约申请</span>
                <span>
                  <el-switch
                    v-model="auditState0_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked0_school" class="group-flex">
                  <el-checkbox class="checkbox" checked label="3">房间所在审核流程中各部门的管理用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="1">房间所在审核流程中各部门的主要负责人</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--2-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约申请提交成功</span>
                <span>
                  <el-switch
                    v-model="auditState1_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
            </section>
            <!--3-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约审核通过</span>
                <span>
                  <el-switch
                    v-model="auditState2_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked2_school" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                  <el-checkbox class="checkbox" checked label="3">附赠审查该房间的房间管理员</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--4-->
            <section class="section">
              <div class="audit-status">
                <span>房间预约审核不通过</span>
                <span>
                  <el-switch
                    v-model="auditState3_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
            </section>
            <!--5-->
            <section class="section">
              <div class="audit-status">
                <span>提交的预约申请过期未审核</span>
                <span>
                  <el-switch
                    v-model="auditState4_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
            </section>
            <!--6-->
            <section class="section">
              <div class="audit-status">
                <span>已提交预约申请的房间被锁定，且锁定时段与预约时段有重合</span>
                <span>
                  <el-switch
                    v-model="auditState5_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked5_school" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--7-->
            <section class="section">
              <div class="audit-status">
                <span>已提交预约申请的房间被设置为不开放预约</span>
                <span>
                  <el-switch
                    v-model="auditState6_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
              <div class="notify-object">
                <span style="font-weight: bold">通知对象：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-checkbox-group v-model="checked6_school" class="group-flex">
                  <el-checkbox class="checkbox" checked label="2">提交预约申请的用户</el-checkbox>
                </el-checkbox-group>
              </div>
            </section>
            <!--8-->
            <section class="section">
              <div class="audit-status">
                <span>申请人取消预约申请</span>
                <span>
                  <el-switch
                    v-model="auditState7_school.pushMessage"
                    class="onSwitch"
                    inactive-text="发送消息通知"
                    @change="switchChange_school"
                  />
                </span>
              </div>
            </section>
          </el-tab-pane>
        </el-tabs>
        <el-button type="primary" class="submitBtn" @click="submitConfig()">提交</el-button>
      </template>
    </div>
  </div>
</template>

<script>
  // import { addMessageConfig } from '@/api/product-config'
  export default {
    data() {
      return {
        tabName: 0,
        switchStatus: false,
        switchStatus_school: false,
        auditState0: {
          'authType': 0,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState1: {
          'authType': 1,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState2: {
          'authType': 2,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState3: {
          'authType': 3,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState4: {
          'authType': 4,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState5: {
          'authType': 5,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState6: {
          'authType': 6,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState7: {
          'authType': 7,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState0_school: {
          'authType': 0,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState1_school: {
          'authType': 1,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState2_school: {
          'authType': 2,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState3_school: {
          'authType': 3,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState4_school: {
          'authType': 4,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState5_school: {
          'authType': 5,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState6_school: {
          'authType': 6,
          'pushMessage': false,
          'targetConfigList': []
        },
        auditState7_school: {
          'authType': 7,
          'pushMessage': false,
          'targetConfigList': []
        },
        checked0: [],
        checked2: [],
        checked3: [],
        checked4: [],
        checked5: [],
        checked6: [],
        checked0_school: [],
        checked2_school: [],
        checked5_school: [],
        checked6_school: [],
        systemMessageConfigList: [],
        schoolMessageConfigList: []
      }
    },
    methods: {
      async addMessageConfig(data) {
        await addMessageConfig(data)
      },
      switchChange(val) {
        console.log('val', val)
        this.switchStatus = val
      },
      switchChange_school(val) {
        console.log('val', val)
        this.switchStatus_school = val
      },
      resetSystemConfig() {
        this.auditState0.pushMessage = false
        this.auditState1.pushMessage = false
        this.auditState2.pushMessage = false
        this.auditState3.pushMessage = false
        this.auditState4.pushMessage = false
        this.auditState5.pushMessage = false
        this.auditState6.pushMessage = false
        this.auditState7.pushMessage = false
        // this.checked0 = []
        // this.checked2 = []
        // this.checked3 = []
        // this.checked4 = []
        // this.checked5 = []
        // this.checked6 = []
        this.auditState0.targetConfigList = []
        this.auditState1.targetConfigList = []
        this.auditState2.targetConfigList = []
        this.auditState3.targetConfigList = []
        this.auditState4.targetConfigList = []
        this.auditState5.targetConfigList = []
        this.auditState6.targetConfigList = []
        this.auditState7.targetConfigList = []
        this.systemMessageConfigList = []
      },
      resetSchoolConfig() {
        this.auditState0_school.pushMessage = false
        this.auditState1_school.pushMessage = false
        this.auditState2_school.pushMessage = false
        this.auditState3_school.pushMessage = false
        this.auditState4_school.pushMessage = false
        this.auditState5_school.pushMessage = false
        this.auditState6_school.pushMessage = false
        this.auditState7_school.pushMessage = false
        // this.checked0_school = []
        // this.checked2_school = []
        // this.checked5_school = []
        // this.checked6_school = []
        this.auditState0_school.targetConfigList = []
        this.auditState1_school.targetConfigList = []
        this.auditState2_school.targetConfigList = []
        this.auditState3_school.targetConfigList = []
        this.auditState4_school.targetConfigList = []
        this.auditState5_school.targetConfigList = []
        this.auditState6_school.targetConfigList = []
        this.auditState7_school.targetConfigList = []
        this.schoolMessageConfigList = []
      },
      submitConfig() {
        this.checked0.forEach(item => {
          this.auditState0.targetConfigList.push({
            targetType: item
          })
        })
        this.checked2.forEach(item => {
          this.auditState2.targetConfigList.push({
            targetType: item
          })
        })
        this.checked3.forEach(item => {
          this.auditState3.targetConfigList.push({
            targetType: item
          })
        })
        this.checked4.forEach(item => {
          this.auditState4.targetConfigList.push({
            targetType: item
          })
        })
        this.checked5.forEach(item => {
          this.auditState5.targetConfigList.push({
            targetType: item
          })
        })
        this.checked6.forEach(item => {
          this.auditState6.targetConfigList.push({
            targetType: item
          })
        })
        this.checked0_school.forEach(item => {
          this.auditState0_school.targetConfigList.push({
            targetType: item
          })
        })
        this.checked2_school.forEach(item => {
          this.auditState2_school.targetConfigList.push({
            targetType: item
          })
        })
        this.checked5_school.forEach(item => {
          this.auditState5_school.targetConfigList.push({
            targetType: item
          })
        })
        this.checked6_school.forEach(item => {
          this.auditState6_school.targetConfigList.push({
            targetType: item
          })
        })
        this.systemMessageConfigList.push(
          this.auditState0,
          this.auditState1,
          this.auditState2,
          this.auditState3,
          this.auditState4,
          this.auditState5,
          this.auditState6,
          this.auditState7
        )
        this.schoolMessageConfigList.push(
          this.auditState0_school,
          this.auditState1_school,
          this.auditState2_school,
          this.auditState3_school,
          this.auditState4_school,
          this.auditState5_school,
          this.auditState6_school,
          this.auditState7_school
        )
        console.log('this.tabName', this.tabName)
        this.tabName === '0' ? this.addMessageConfig(this.systemMessageConfigList).then(
          () => {
            this.resetSystemConfig()
            this.$message({
              showClose: true,
              message: '提交成功',
              type: 'success'
            })
          }
          ).catch(() => {
            this.$message.error('提交失败，请检查配置')
          })
          : this.addMessageConfig(this.schoolMessageConfigList).then(
          () => {
            this.resetSchoolConfig()
            this.$message({
              showClose: true,
              message: '提交成功',
              type: 'success'
            })
          }
          ).catch(() => {
            this.$message.error('提交失败，请检查配置')
          })
      }
    }
  }
</script>
<style>
  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #606266;
  }
  .el-tabs__header {
    background: #ffffff;
    padding: 0px 42px;
    margin: -10px -16px 0px -16px;
  }
  .el-tabs__nav-scroll {
    height: 70px;
  }
  .el-tabs__nav {
    line-height: 70px;
  }
  .el-tabs__item {
    font-size: 16px;
  }
  .el-tabs__active-bar {
    width: 110px;
  }
  .el-switch__label.is-active {
    color: #303133;
  }
</style>
<style lang="scss" scoped>
  .sendMessage-main {
    background: #eff1f5;
    height: 1100px;
    margin: 0px -15px;
  }
  .content {
    margin-top: 10px;
    padding: 10px 20px;
    .submitBtn{
      position: absolute;
      right: 50px;
      top: 32px;
      width: 85px;
      height: 30px;
    }
  }
  .section {
    background: #ffffff;
    margin: 20px;
    padding: 30px 50px;
    color: #606266;
    .audit-status {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
    }
    .notify-object {
      padding-top: 15px;
      font-size: 15px;
      display: flex;
      .group-flex {
        display: flex;
        justify-content: space-between;
      }
      .checkbox {
        width: 300px;
      }
    }
  }
</style>
