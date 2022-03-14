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
      <AsideComp @menuItemClick="menuItemClick" :menuData="menus"></AsideComp>
      <MainComp @removeTag="removeTag" :tagData="tabs" :activeTab="activeTab"></MainComp>
    </el-container>
  </el-container>
</template>

<style scoped>


.layout-container-demo .el-header {
  position: relative;
  background-color: #409eff;
  color: var(--el-text-color-primary);
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
import AsideComp from "@/components/AsideComp.vue";
import MainComp from "@/components/MainComp.vue";
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HomeView",
  components:{
    AsideComp,
    MainComp
  },
  setup() {
    const isCollapse = ref(false);

    const objs = reactive({
      tabs: [],
      menus:[
        {
          title:"管理员管理",
          children:[
            {
              name:"/admin/group",
              label:"角色管理"
            },
            {
              name:"/admin/user",
              label:"用户管理"
            },
          ]
        }
      ]
    });

    const activeTab = ref("");

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

    const menuItemClick = (menuname, menuindex) => {
      let exit = false;
      //先判断存不存在菜单
      objs.tabs.forEach(function (one) {
        if (one.name == menuindex) {
          //定位到指定值
          exit = true;
        }
      });

      if (!exit) {
        objs.tabs.push({
          name: menuindex,
          label: menuname,
        });
      }
      activeTab.value = menuindex;
      router.push(menuindex);
    };

    return {
      isCollapse,
      handleClick,
      menuItemClick,
      activeTab,
      removeTag,
      ...toRefs(objs),
    };
  },
};
</script>
