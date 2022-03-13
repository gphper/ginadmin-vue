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
      <el-aside :width="asideWidth">
        <div class="collapse" @click="switchTag">{{ collapseButton }}</div>
        <!-- <el-scrollbar max-height="200px" always="false"> -->
        <el-menu
          background-color="#409eff"
          text-color="#fff"
          active-text-color="#C0C4CC"
          :unique-opened="true"
          :collapse="isCollapse"
        >
          <el-sub-menu index="1">
            <template #title>
              <div class="menu-icon">管</div>
              <span>管理员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="menuItemClick('角色管理', $event)"
                index="/admin/group"
                >角色管理</el-menu-item
              >
              <el-menu-item @click="menuItemClick('用户管理', $event)" index="/admin/user"
                >用户管理</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <div class="menu-icon">文</div>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
        <!-- </el-scrollbar> -->
      </el-aside>
      <el-main>
        <el-tabs
          v-model="activeTab"
          closable
          type="card"
          @tab-click="handleClick"
          @tab-remove="removeTag"
        >
          <el-tab-pane
            v-for="item in tabs"
            :key="item"
            :label="item.label"
            :name="item.name"
          >
            <router-view></router-view>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
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

.layout-container-demo .el-header {
  position: relative;
  background-color: #409eff;
  color: var(--el-text-color-primary);
}

.layout-container-demo :deep(.el-sub-menu .el-menu-item-group__title) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
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

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: #409eff !important;
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
import { computed, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HomeView",
  setup() {
    const isCollapse = ref(false);

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

    const objs = reactive({
      tabs: [],
    });

    const collapseButton = computed(() => {
      if (isCollapse.value) {
        return ">>";
      } else {
        return "<<";
      }
    });

    const activeTab = ref("/admin/group");

    const router = useRouter();
    const handleClick = (tab) => {
      router.push(tab.props.name);
    };

    const removeTag = (targetName) => {
      let nextTag = {};
      let newTag = [];
      objs.tabs.forEach(function (item, index) {
        if (item.name == targetName) {
          //定位到指定值
          nextTag = objs.tabs[index - 1] || objs.tabs[index + 1];
        } else {
          newTag.push(item);
        }
      });

      if (newTag.length > 0) {
        activeTab.value = nextTag.name;
        router.push(nextTag.name);
      }

      objs.tabs = newTag;
    };

    const menuItemClick = (menuname, item) => {
      let exit = false;
      //先判断存不存在菜单
      objs.tabs.forEach(function (one) {
        if (one.name == item.index) {
          //定位到指定值
          exit = true;
        }
      });

      if (!exit) {
        objs.tabs.push({
          name: item.index,
          label: menuname,
        });
      }
      activeTab.value = item.index;
      router.push(item.index);
    };

    return {
      isCollapse,
      switchTag,
      asideWidth,
      collapseButton,
      handleClick,
      menuItemClick,
      activeTab,
      removeTag,
      ...toRefs(objs),
    };
  },
};
</script>
