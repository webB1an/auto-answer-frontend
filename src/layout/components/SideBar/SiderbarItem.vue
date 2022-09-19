<template>
  <template v-if="!route.hidden && route.children">
    <template v-if="hasOnlyOneVisibleChild(route.children, route)">
      <Item :route="onlyOneChild" :url="resolve(onlyOneChild.path)" />
    </template>

    <template v-else>
      <el-sub-menu :index="route.path">
        <template #title>
          <svg-icon v-if="route.meta?.icon" svg-class="el-icon" :name="`svg-${route.meta?.icon}`" />
          <span>{{ route.meta?.title }}</span>
        </template>
        <template v-for="item in route.children">
          <Item
            v-if="!item.children"
            :key="resolve(item.path)"
            :route="item"
            :url="resolve(item.path)"
          />
          <siderbar-item v-else :key="item.path" :route="item" :base-url="resolve(item.path)" />
        </template>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { RouteRecordRaw } from 'vue-router';
  import path from 'path-browserify';

  import SvgIcon from '@/components/SvgIcon.vue';
  import Item from './Item.vue';

  interface Props {
    baseUrl: string;
    route: RouteRecordRaw;
  }
  const props = withDefaults(defineProps<Props>(), {});

  const onlyOneChild = ref({} as RouteRecordRaw);

  const hasOnlyOneVisibleChild = (children: RouteRecordRaw[], route: RouteRecordRaw): boolean => {
    const visibleChildren = children.filter((item) => {
      if (item.hidden) {
        return false;
      }
      return true;
    });

    if (visibleChildren.length === 1) {
      onlyOneChild.value = visibleChildren[0];
      return true;
    }

    if (visibleChildren.length === 0) {
      onlyOneChild.value = { ...route };
      return true;
    }

    return false;
  };

  const resolve = (url: string): string => path.resolve(props.baseUrl, url);
</script>
