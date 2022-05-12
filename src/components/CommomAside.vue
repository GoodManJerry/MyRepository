<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3>{{isCollapse ? '数据' : '球星数据系统'}}</h3>
    <!-- 将menu中的数据 遍历输出到侧栏中 -->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in menu"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item :index="subIndex">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
  </el-menu>
</template>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/curry",
          name: "curry",
          label: "Curry",
          icon: "basketball",
          url: "UserManage/UserManage",
        },
        {
          path: "/kobe",
          name: "kobe",
          label: "Kobe",
          icon: "basketball",
          url: "UserManage/UserManage",
        },
        {
          path: "/jordan",
          name: "jordan",
          label: "Jordan",
          icon: "basketball",
          url: "UserManage/UserManage",
        },
        {
          path: "/James",
          name: "James",
          label: "James",
          icon: "basketball",
          url: "UserManage/UserManage",
        },
      ],
    };
  },
  methods: {
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
      //通过Vuex中的mutations方法完成面包屑
      this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    // noChildren() {
    //   return this.menu.filter((item) => !item.children);
    // },
    // hasChildren() {
    //   return this.menu.filter((item) => item.children);
    // },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
};
</script>