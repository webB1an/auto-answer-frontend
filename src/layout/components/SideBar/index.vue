<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        unique-opened
        mode="vertical"
        background-color="#30354d"
        text-color="#9699a5"
        active-text-color="#fff"
        :collapse-transition="false"
        router
      >
        <siderbar-item
          v-for="route in asyncRoutes"
          :key="route.path"
          :base-url="route.path"
          :route="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  // store
  import { useAppStore } from '@/stores/app';
  // component
  import SiderbarItem from './SiderbarItem.vue';

  // 菜单
  import { asyncRoutes } from '@/router/index';

  // 获取菜单状态
  const appStore = useAppStore();
  const isCollapse = computed(() => !appStore.siderbar.active);
</script>

<style lang="scss">
  @import '@/style/sidebar.scss';
</style>
