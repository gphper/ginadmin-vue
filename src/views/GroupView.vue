<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-13 11:19:40
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>角色管理</span>
      </div>
    </template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </el-card>
</template>
<style scoped>
.page{
    text-align: center;
    margin-top: 10px;
}
</style>

<script>
export default {
  name: "GroupView",
  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    return { tableData };
  },
};
</script>
