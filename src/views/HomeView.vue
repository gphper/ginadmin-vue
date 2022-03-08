<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-06 13:39:26
-->
<template>
  <el-container class="layout-container-demo">
    <el-header>
      <div class="logo">GinAdmin</div>
      <div class="toolbar">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="avatar" src="@/assets/imgs/avatar.jpg" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>设置密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <el-sub-menu index="1">
              <template #title><div class="menu-icon">管</div> 管理员管理 </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">角色管理</el-menu-item>
                <el-menu-item index="1-2">用户管理</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title><span class="menu-icon">文</span> 文章管理 </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">文章列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>Main </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: #409EFF;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-sub-menu{
  position: relative;
  background-color: #409EFF;
  color: #fff;
}

.layout-container-demo /deep/ .el-sub-menu .el-menu-item-group__title{
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.layout-container-demo .el-sub-menu:hover{
  position: relative;
  background-color: #61acf8;
  color: #fff;
}

.layout-container-demo /deep/ .el-sub-menu .el-menu{
  position: relative;
  background-color: #61acf8;
}

.layout-container-demo /deep/ .el-sub-menu .el-menu .el-menu-item{
  color: #fff;
}

.layout-container-demo /deep/ .el-sub-menu .el-menu .el-menu-item:hover{
  background-color:  #8cc5ff;
}

.layout-container-demo /deep/ .el-sub-menu__title:hover{
  background-color: #61acf8;
}

.layout-container-demo /deep/ .el-sub-menu__title{
  color: #fff;
  font-size: 17px;
}

.menu-icon{
  color: #8cc5ff;
  width: 26px;
  background-color: #FFF;
  text-align: center;
  border-radius: 50%;
  height: 26px;
  line-height: 26px;
  margin-right: 10px;
  font-size: 15px !important;
}

.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #409EFF !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.layout-container-demo .logo {
  position: absolute;
  display: inline-flex;
  align-items: center;
  color: #fff;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  font-size: 25px;
}

.avatar {
  border-radius: 50%;
  width: 50px;
}
</style>

<script>
export default {
  name: "HomeView",
};
</script>
