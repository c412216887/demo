<template>
  <a-layout>
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

const props = defineProps<{ catalogKeys: string }>()
const catalogKeys = props.catalogKeys
debugger

const currentComponent = computed(() => {
  if (catalogKeys === "") {
    return null
  } else {
    console.log(catalogKeys)
    return defineAsyncComponent(() => import(`./components/${catalogKeys}.vue`))
  }
})
</script>

<style lang="less" scoped>

</style>
