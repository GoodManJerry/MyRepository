<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" width="200px" />
            <div class="userInfo">
              <p class="name">Admin</p>
            </div>
          </div>
          <div class="login-info">
            <p>
              登录时间为：<span>{{ nowDate }}</span>
            </p>
            <p>登录地点为：<span>广州</span></p>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img src="../../src/assets/images/curry.png" width="200px" />
            <div class="userInfo">
              <p class="name">Curry</p>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div class="user">
            <img src="../../src/assets/images/jordan.png" width="200px" />
            <div class="userInfo">
              <p class="name">Jordan</p>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img src="../../src/assets/images/kobe.png" width="200px" />
            <div class="userInfo">
              <p class="name">Kobe</p>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div class="user">
            <img src="../../src/assets/images/james.png" width="200px" />
            <div class="userInfo">
              <p class="name">James</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "homeIndex",
  data() {
    return {
      userImg: require("../../src/assets/images/user.jpg"),
      Date: new Date(),
    };
  },
  computed:{
      nowDate(){
        return this.Date.getFullYear()+'-'+(this.Date.getMonth()+1)+'-'+this.Date.getDate()
      }
  },
};
</script>

<style scoped>
</style>