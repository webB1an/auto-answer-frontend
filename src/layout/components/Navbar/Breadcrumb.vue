<template>
  <el-breadcrumb id="breadcrumb-container" class="breadcrumb-container" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in routes" :key="item.path" :to="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import type { RouteLocationMatched } from 'vue-router';
  const routes = ref<RouteLocationMatched[]>([]);
  const route = useRoute();
  watch(
    route,
    () => {
      const { matched } = route;
      if (matched[0].children.length === 1) {
        routes.value = matched.slice(1);
      } else {
        routes.value = matched;
      }
    },
    {
      immediate: true
    }
  );
</script>

<style lang="scss" scoped>
  @import '@/style/variable.scss';

  .breadcrumb-container {
    float: left;
    height: $navbarHeight;
    margin-left: 6px;
    line-height: $navbarHeight;
  }
</style>
