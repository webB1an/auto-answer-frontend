<template>
  <div class="navbar-container">
    <hamburger />
    <breadcrumb v-if="appStore.breadcrumbStatus" />
    <div class="right-nav">
      <avatar />
      <setting />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Hamburger from './Hamburger.vue';
  import Breadcrumb from './Breadcrumb.vue';
  import Avatar from './Avatar.vue';
  import Setting from './Setting.vue';
  import { useAppStore } from '@/stores/app';

  const appStore = useAppStore();

  // interface Props {
  //   isActive: boolean,
  //   toggleSidebar: () => void
  // }

  // withDefaults(defineProps<Props>(), {
  //   isActive: false,
  //   toggleSidebar: () => {}
  // })
</script>
<style lang="scss">
  @import '@/style/variable.scss';

  .navbar-container {
    background-color: var(--custom-el-bg-color);
    height: $navbarHeight;

    .right-nav {
      float: right;
      height: $navbarHeight;
    }
  }
</style>
