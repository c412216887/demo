<script lang="ts" setup>
import type { Classic } from "@demo/types"
const { classic } = defineProps<{ classic: Classic }>()
</script>

<template>
  <a-sub-menu v-if="classic.name">
    <template #title>{{ classic.name }}</template>
    <a-menu-item :key="section.id" v-for="section in classic.section">{{ section.name }}</a-menu-item>
  </a-sub-menu>
  <template v-else>
    <a-menu-item >
      <a-menu-item :key="section.id" v-for="section in classic.section">{{ section.name }}</a-menu-item>
    </a-menu-item>
  </template>
</template>
