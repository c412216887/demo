<template>
  <a-layout class="wrapper">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="menuKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item :key="menu.path" v-for="menu in menuList">
          <router-link :to="menu.path">{{ menu.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </a-layout>
</template>
<script setup lang="ts">
import type { Menu } from "../type"
const menuList = ref<Menu[]>([
  { name: "Javascript高级程序设计", path: "book01",  module: "book01" },
  { name: "面试", path: "interview", module: "interview" }
])
const menuKeys = ref([menuList.value[0].module])

</script>
<style lang="less" scoped>
.wrapper {
  height: 100vh;
}
</style>
