<template>
  <a-layout>
    <!-- 左侧导航栏 -->
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        v-model:selectedKeys="catalogKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <menu-item :key="classic.id" v-for="classic in selectedBook.classic" :classic="classic"></menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <component :is="currentComponent"></component>
        </a-layout-content>
      </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import type { NavContent } from '@demo/types'
import menuItem from "./components/menuItem.vue"
import axios from 'axios'
import { getAxiosData } from '@demo/utils'
let catalogKeys = ref([""])
const data = await axios.get(`${import.meta.env.VITE_HTTP}/m1/2321362-0-default/api/v1/1`)
const selectedBook = ref<NavContent>(getAxiosData(data))
if (selectedBook !== null) {
  watchEffect(() => {
    const id = selectedBook.value.classic?.[0]?.id
    catalogKeys.value = id ? [id] : [""]
  })
}
const currentComponent = computed(() => {
  if (catalogKeys.value[0] === "") {
    return null
  } else {
    console.log(catalogKeys.value)
    return defineAsyncComponent(() => import(`./components/${catalogKeys.value[0]}.vue`))
  }
})
watch(catalogKeys, (newKey) => {
  console.log(newKey)
})
</script>

<style lang="less" scoped>

</style>
