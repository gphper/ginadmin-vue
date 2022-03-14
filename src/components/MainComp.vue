<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-13 20:53:29
-->
<template>
  <el-main>
    <el-tabs
      v-model="activeIndex"
      closable
      type="card"
      @tab-click="handleClick"
      @tab-remove="removeTag"
    >
      <el-tab-pane
        v-for="item in tagData"
        :key="item"
        :label="item.label"
        :name="item.name"
      >
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>
<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "MainComp",
  props: {
    tagData: {
      type: Array,
    },
    activeTab: {
      type: String,
    },
  },
  setup(props, context) {
    const activeIndex = ref(props.activeTab);

    const router = useRouter();
    const handleClick = (tab) => {
      router.push(tab.props.name);
    };

    const removeTag = (targetName) => {
      context.emit("removeTag", targetName);
    };

    watch(
      () => props.activeTab,
      (newValue) => {
        activeIndex.value = newValue
      }
    );

    return { handleClick, removeTag, activeIndex };
  },
};
</script>
