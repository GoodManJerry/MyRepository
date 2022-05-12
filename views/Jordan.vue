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
  name: "JordanVue",
  data() {
    return {
      scoreData: [
        {
          date: "1990-03-28",
          fenshu: "69",
          duishou: "骑士",
        },
        {
          date: "1993-12-04",
          fenshu: "65",
          duishou: "凯尔特人",
        },
        {
          date: "1988-11-27",
          fenshu: "60",
          duishou: "活塞",
        },
        {
          date: "1989-02-16",
          fenshu: "58",
          duishou: "尼克斯",
        },
        {
          date: "1996-06-16",
          fenshu: "54",
          duishou: "爵士",
        },
      ],
      reboundData: [
        {
          date: "1990-03-28",
          lanban: "18",
          duishou: "骑士",
        },
        {
          date: "1996-02-08",
          lanban: "16",
          duishou: "太阳",
        },
        {
          date: "1988-12-01",
          lanban: "15",
          duishou: "魔术",
        },
        {
          date: "1993-01-12",
          lanban: "14",
          duishou: "湖人",
        },
        {
          date: "1987-11-17",
          lanban: "13",
          duishou: "火箭",
        },
      ],
      assistData: [
        {
          date: "1989-03-25",
          zhugong: "17",
          duishou: "开拓者",
        },
        {
          date: "1992-12-26",
          zhugong: "15",
          duishou: "森林狼",
        },
        {
          date: "1998-10-29",
          zhugong: "14",
          duishou: "勇士",
        },
        {
          date: "1993-02-11",
          zhugong: "12",
          duishou: "骑士",
        },
        {
          date: "1990-03-25",
          zhugong: "12",
          duishou: "马刺",
        },
      ],
      blockData: [
        {
          date: "1991-10-14",
          gaimao: "6",
          duishou: "超音速",
        },
        {
          date: "1996-03-28",
          gaimao: "5",
          duishou: "热火",
        },
        {
          date: "1997-12-11",
          gaimao: "4",
          duishou: "凯尔特人",
        },
        {
          date: "1995-05-07",
          gaimao: "3",
          duishou: "篮网",
        },
        {
          date: "1987-12-19",
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
        color: red;
    }
</style>