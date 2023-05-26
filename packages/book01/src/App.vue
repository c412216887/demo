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

const props = defineProps<{ menuKeys: number }>()
const menuKeys = props.menuKeys


const currentComponent = computed(() => {
  if (menuKeys === undefined) {
    return null
  } else {
    return defineAsyncComponent(() => import(`./components/${menuKeys}.vue`))
  }
})
</script>

<style lang="less" scoped>

</style>
