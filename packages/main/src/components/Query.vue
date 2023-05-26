<script lang="ts" setup>
import { useRoute } from "vue-router"
const route = useRoute()
const query = route.query
</script>

<template>
<div>{{ query }}</div>
</template>
