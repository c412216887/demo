<script lang="ts" setup>
import type { Classic } from "@demo/types"
const { classic } = defineProps<{ classic: Classic }>()
</script>

<template>
  <template  v-if="classic.name">
    <a-sub-menu :key="classic.id" >
      <template #title>{{ classic.name }}</template>
      <a-menu-item :key="section.id" v-for="section in classic.section">{{ section.name }}</a-menu-item>
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item :key="section.id" v-for="section in classic.section">{{ section.name }}</a-menu-item>
  </template>
</template>
