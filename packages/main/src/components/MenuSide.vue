<template>
  <a-menu
    v-model:selectedKeys="menuKeys"
    :open-keys="[1]"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <MenuItem :key="classic.id" v-for="classic in currentNav?.classic" :classic="classic"></MenuItem>
  </a-menu>
</template>

<script lang="ts" setup>
import axios from 'axios'
import MenuItem from './MenuItem.vue'
import type { NavContent } from '@demo/types'
import { getAxiosData } from '@demo/utils'

const props = defineProps<{ navId: number }>()
const emit = defineEmits(['getSectionId'])
const currentNav = shallowRef<NavContent>()
const menuKeys = ref<string[]>()
const { navId } = toRefs(props)
watch(navId, async (newId) => {
  if (newId) {
    const data = await axios.get(`${import.meta.env.VITE_HTTP}/m1/2321362-0-default/api/v1/getDetail/${props.navId}`)
    currentNav.value = getAxiosData(data)
    if (currentNav !== null) {
      // 设置左侧菜单默认值
      const id = currentNav.value?.classic?.[0]?.id
      menuKeys.value = id ? [id] : ['']
      emit('getSectionId', id)
    }
  }
})
watch(menuKeys, (newKeys) => {
  emit('getSectionId', newKeys)
})
</script>
