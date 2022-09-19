<template>
  <el-menu-item :index="url">
    <svg-icon v-if="route.meta?.icon" class="el-icon" :name="`svg-${route.meta?.icon}`" />
    <template #title>{{ route.meta?.title }}</template>
  </el-menu-item>
</template>

<script setup lang="ts">
  import type { RouteRecordRaw } from 'vue-router';
  // import path from 'path-browserify'

  interface Props {
    url: string;
    route: RouteRecordRaw;
  }

  defineProps<Props>();
  // const resolve = (url: string): string => path.resolve(props.baseUrl, url)
</script>
