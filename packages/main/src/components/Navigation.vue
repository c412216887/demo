<script lang="ts" setup>
import { useStore } from "../store/index"
const store = useStore()
store.getNavigation()
</script>
<template>
  <a-menu-item :key="menu.id" v-for="menu in store.Navigation">
    <router-link :to="menu.path">{{ menu.name }}</router-link>
  </a-menu-item>
</template>
