<template>
  <div class="root" >
    <el-table :data="scoreData" style="width: 50%;float:left">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="得分" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>得分: {{ scope.row.fenshu }}</p>
            <p>对手: {{ scope.row.duishou }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.fenshu }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="reboundData" style="width: 50%;float:right;">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="篮板" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>篮板: {{ scope.row.lanban }}</p>
            <p>对手: {{ scope.row.duishou }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.lanban }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="assistData" style="width: 50%;float:left">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="助攻" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>助攻: {{ scope.row.zhugong }}</p>
            <p>对手: {{ scope.row.duishou }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.zhugong }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="blockData" style="width: 50%;float:right">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="盖帽" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>盖帽: {{ scope.row.gaimao }}</p>
            <p>对手: {{ scope.row.duishou }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.gaimao }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "CurryVue",
  data() {
    return {
      scoreData: [
        {
          date: "2020-01-04",
          fenshu: "62",
          duishou: "开拓者",
        },
        {
          date: "2017-05-04",
          fenshu: "58",
          duishou: "骑士",
        },
        {
          date: "2019-11-27",
          fenshu: "57",
          duishou: "独行侠",
        },
        {
          date: "2013-02-08",
          fenshu: "53",
          duishou: "尼克斯",
        },
        {
          date: "2016-01-16",
          fenshu: "51",
          duishou: "奇才",
        },
      ],
      reboundData: [
        {
          date: "2020-08-14",
          lanban: "16",
          duishou: "骑士",
        },
        {
          date: "2019-05-26",
          lanban: "14",
          duishou: "太阳",
        },
        {
          date: "2020-12-29",
          lanban: "13",
          duishou: "独行侠",
        },
        {
          date: "2014-02-08",
          lanban: "12",
          duishou: "掘金",
        },
        {
          date: "2016-03-19",
          lanban: "10",
          duishou: "公牛",
        },
      ],
      assistData: [
        {
          date: "2020-08-14",
          zhugong: "16",
          duishou: "骑士",
        },
        {
          date: "2019-05-26",
          zhugong: "15",
          duishou: "森林狼",
        },
        {
          date: "2020-12-29",
          zhugong: "14",
          duishou: "开拓者",
        },
        {
          date: "2014-02-08",
          zhugong: "13",
          duishou: "骑士",
        },
        {
          date: "2016-03-19",
          zhugong: "12",
          duishou: "雷霆",
        },
      ],
      blockData: [
        {
          date: "2020-08-14",
          gaimao: "5",
          duishou: "全明星",
        },
        {
          date: "2019-05-26",
          gaimao: "4",
          duishou: "雄鹿",
        },
        {
          date: "2020-12-29",
          gaimao: "3",
          duishou: "热火",
        },
        {
          date: "2014-02-08",
          gaimao: "2",
          duishou: "篮网",
        },
        {
          date: "2016-03-19",
          gaimao: "2",
          duishou: "凯尔特人",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      row.date = null;
      row.duishou = null;
      if(row.fenshu){
        row.fenshu = null;
      }else if(row.lanban){
        row.lanban = null;
      }else if(row.zhugong){
        row.zhugong = null;
      }else{
        row.gaimao = null;
      }
    },
  },
};
</script>

<style scoped>
    .el-table{
        float: left;
        color:blue;
    }
</style>