<template>
  <el-form
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    label-width="100px"
    class="login-container"
  >
  
    <h3 class="login_title">系统登录</h3>

    <el-form-item
      label="用户名"
      label-width="80px"
      prop="username"
      class="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="密码"
      label-width="80px"
      prop="password"
    >
      <el-input
        type="password"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>

    <el-form-item class="login_submit">
      <el-button
        type="primary"
        @click="login"
        @keyup.enter="login"
        class="login_submit"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
// import Mock from 'mockjs'
export default {
  name: "loginVue",
  data() {
    return {
      form: {},
      //校验规则
      rules: {
        username: [
          //一个对象表示一个规则
          { require: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [{ require: true, message: "请输入密码", trigger: "blur" }],
      },
      name: "admin",
      word: "123",
    };
  },
  methods: {
    login() {
      //使用mock生成随机数
      // const token = Mock.random.guid()
      // this.$store.commit('setToken',token)
      // this.$router.push({name:'home'})


      this.$store.state.user.username = this.form.username;
      this.$store.state.user.password = this.form.password;
      if (
        this.form.username === this.name &&
        this.form.password === this.word
      ) {
        this.$router.push({
          name: "home",
        });
      } else {
        alert("输入的用户名或密码不正确");
      }
    },
  },
};
</script>

<style lang="less">
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_submit {
  margin: 10px auto 0 auto;
}
</style>