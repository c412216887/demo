<template>
  <a-layout class="wrapper">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="menuKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        @click="clickMenu"
      >
        <a-menu-item :key="menu.id" v-for="menu in menuList">
          <router-link :to="menu.path">{{ menu.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <MenuSide :menuId="menuId" @getCatalogKeys="getCatalogKeys"></MenuSide>
      </a-layout-sider>
      <a-layout>
        <Suspense>
          <router-view :catalogKeys="catalogKeys"></router-view>
        </Suspense>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import type { Menu } from "../type"

import MenuSide from "./components/MenuSide.vue"

const menuList = ref<Menu[]>([
  { id:1, name: "Javascript高级程序设计", path: "book01",  module: "book01" },
  { id:2, name: "面试", path: "interview", module: "interview" }
])
let menuKeys = ref([menuList.value[0].id])
let menuId = ref(menuList.value[0].id)
const clickMenu = (item: {key: number}) => {
  menuId.value = item.key
}
let catalogKeys = ref()
const getCatalogKeys = (val: any) => {
  catalogKeys.value = val
}
</script>
<style lang="less" scoped>
.wrapper {
  height: 100vh;
}
</style>
