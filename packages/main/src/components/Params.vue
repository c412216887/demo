<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const params = route.params
</script>

<template>
<div>{{ params }}</div>
</template>
