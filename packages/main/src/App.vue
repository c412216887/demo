<template>
  <a-layout class="wrapper">
    <a-layout-header class="header">
      <a-menu
        v-model:selectedKeys="navKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item :key="nav.id" v-for="nav in navigations">
          <router-link :to="nav.path">{{ nav.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff" v-if="navKeys[0] !== -1">
        <MenuSide :navId="navKeys[0]" @getSectionId="getSectionId"></MenuSide>
      </a-layout-sider>
      <a-layout>
        <Suspense>
          <router-view :menuKeys="sectionId"></router-view>
        </Suspense>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import type { Navigation } from "@demo/types"
import MenuSide from "./components/MenuSide.vue"
import {useStore} from "./store/index"
import {useRoute, useRouter } from "vue-router"

const store = useStore()
const navigations = computed<Navigation[]>(() => {
  return [{id: -1, name: "DEMO", path: "/", component: ""}, ...store.$state.navigations]
})

let navKeys = ref<number[]>([-1])
const route = useRoute()
const router = useRouter()
watchEffect(() => {
  const path = route.path
  console.log({route})
  if (path !== '' && path !== '/') {
    const currentNav = store.$state.navigations.find(nav => nav.path === path)
    if (!currentNav) {
      router.replace("/404")
    } else {
      navKeys.value = [currentNav.id]
    }
  }
})

let sectionId = ref(1)
const getSectionId = (val: number[]) => {
  sectionId.value = val[0]
}
</script>
<style lang="less" scoped>
.wrapper {
  height: 100vh;
}
</style>
