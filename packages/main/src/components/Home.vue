<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{menuKeys: undefined}>()
const route = useRoute()
const router = useRouter()
function go2() {
  router.push({name: 'params', params: {id: 4}})
}
function showRoute() {
  console.log(route.fullPath)
}

</script>
<template>
  <a-layout>
    <a-layout-content><a-button type="primary"><router-link :to="{path: '/query', query: {id: 1}}">开始 -></router-link></a-button></a-layout-content>
    <a-layout-content><a-button type="primary"><router-link :to="{name: 'params', params: {id: 2}}">开始 -></router-link></a-button></a-layout-content>
    <a-layout-content><a-button type="primary" @click="go2">跳转</a-button></a-layout-content>
  </a-layout>
  <a-button @click="showRoute">显示route</a-button>
</template>
