<template>
  <a-menu
    v-model:selectedKeys="catalogKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    @click="clickMenu"
  >
    <MenuItem :key="classic.id" v-for="classic in selectedBook?.classic" :classic="classic"></MenuItem>
  </a-menu>
</template>

<script lang="ts" setup>
import axios from 'axios'
import MenuItem from './menuItem.vue'
import type { NavContent } from '@demo/types'
import { getAxiosData } from '@demo/utils'
const props = defineProps<{ menuId: number }>()
const emit = defineEmits(['getCatalogKeys'])
let selectedBook = ref<NavContent>()
let catalogKeys = ref()
watchEffect(async () => {
  if (props.menuId) {
    const data = await axios.get(`${import.meta.env.VITE_HTTP}/m1/2321362-0-default/api/v1/${props.menuId}`)
    selectedBook.value = getAxiosData(data)
    if (selectedBook !== null) {
        const id = selectedBook.value?.classic?.[0]?.id
      catalogKeys.value = id?[id]:['']
    }
  }
})
const clickMenu = (item: {key: number}) => {
  emit('getCatalogKeys', item.key)
}
</script>
