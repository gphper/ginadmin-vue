<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-13 20:35:34
-->
<template>
  <el-aside :width="asideWidth">
    <div class="collapse" @click="switchTag">{{ collapseButton }}</div>
    <el-menu
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#C0C4CC"
      :unique-opened="true"
      :collapse="isCollapse"
    >
      <el-sub-menu :index="index" v-for="item,index in menuData" :key="index">
        <template #title>
          <div class="menu-icon">{{item.title.charAt(0)}}</div>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="menuItemClick(item_sub.label, item_sub.name)" v-for="item_sub,index_sub in item.children" :key="index_sub" :index="item_sub.index"
            >{{item_sub.label}}</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.collapse {
  text-align: center;
  color: #c0c4cc;
  background-color: #66b1ff;
}

:deep(.el-menu--collapse) {
  width: 80px;
}

:deep(.el-sub-menu .el-menu-item-group__title) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.el-aside {
  color: var(--el-text-color-primary);
  background: #409eff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}

.el-menu {
  border-right: none;
}

.menu-icon {
  color: #8cc5ff;
  width: 26px !important;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
  height: 26px !important;
  line-height: 26px !important;
  margin-right: 10px;
  font-size: 15px !important;
}
</style>

<script>
import { computed, ref } from "vue";
export default {
  name: "AsideComp",
  props:{
      menuData:{
          type:Array
      }
  },
  setup(props,context) {
    const isCollapse = ref(false);

    const collapseButton = computed(() => {
      if (isCollapse.value) {
        return ">>";
      } else {
        return "<<";
      }
    });

    const switchTag = () => {
      isCollapse.value = !isCollapse.value;
    };

    const asideWidth = computed(() => {
      if (isCollapse.value) {
        return "88px";
      } else {
        return "200px";
      }
    });

    const menuItemClick = (menuname, menuindex)=>{
        context.emit('menuItemClick',menuname, menuindex)
    }

    return { isCollapse, switchTag, asideWidth, collapseButton,menuItemClick };
  },
};
</script>
