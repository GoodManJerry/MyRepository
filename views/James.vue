<template>
  <div class="root">
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

    <el-table :data="reboundData" style="width: 50%;float:right">
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
  name: "JamesVue",
  data() {
    return {
      scoreData: [
        {
          date: "2014-03-07",
          fenshu: "61",
          duishou: "山猫",
        },
        {
          date: "2017-10-29",
          fenshu: "58",
          duishou: "步行者",
        },
        {
          date: "2022-03-06",
          fenshu: "56",
          duishou: "勇士",
        },
        {
          date: "2015-04-08",
          fenshu: "54",
          duishou: "雷霆",
        },
        {
          date: "2017-12-16",
          fenshu: "51",
          duishou: "奇才",
        },
      ],
      reboundData: [
        {
          date: "2008-10-13",
          lanban: "19",
          duishou: "森林狼",
        },
        {
          date: "2019-02-02",
          lanban: "18",
          duishou: "勇士",
        },
        {
          date: "2016-12-16",
          lanban: "16",
          duishou: "太阳",
        },
        {
          date: "2014-02-16",
          lanban: "15",
          duishou: "掘金",
        },
        {
          date: "2018-01-29",
          lanban: "14",
          duishou: "灰熊",
        },
      ],
      assistData: [
        {
          date: "2020-12-16",
          zhugong: "18",
          duishou: "雷霆",
        },
        {
          date: "2017-11-16",
          zhugong: "17",
          duishou: "湖人",
        },
        {
          date: "2016-06-19",
          zhugong: "16",
          duishou: "勇士",
        },
        {
          date: "2012-02-08",
          zhugong: "16",
          duishou: "凯尔特人",
        },
        {
          date: "2018-04-19",
          zhugong: "15",
          duishou: "猛龙",
        },
      ],
      blockData: [
        {
          date: "2013-10-14",
          gaimao: "6",
          duishou: "公牛",
        },
        {
          date: "2019-04-18",
          gaimao: "4",
          duishou: "篮网",
        },
        {
          date: "2006-12-18",
          gaimao: "4",
          duishou: "超音速",
        },
        {
          date: "2016-03-08",
          gaimao: "3",
          duishou: "黄蜂",
        },
        {
          date: "2018-03-06",
          gaimao: "3",
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
        color: purple;
    }
</style>