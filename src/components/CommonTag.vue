<template>
  <div class="tabs">
    <!-- 
      closable:是否出现关闭标志
      :effect="$route.name === tag.name ? 'dark' : 'plain'" 路由名=标签名
    -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag); //关闭标签
      if (tag.name !== this.$route.name) {
        //关掉的标签不是当前路由
        return;
      }
      if (index === length) {
        //判断是不是最后一个
        this.$router.push({
          name: this.tags[index - 1].name, //最后一个 则向左移动一个标签
        });
      } else {
        this.$router.push({
          name: this.tags[index].name, //不是最后一个 则向右移动一个标签
        });
      }
    },
  },
};
</script>

<style lang="less">
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>