<template>
  <div
    class="app-warpper"
    :class="{ 'open-siderbar': openSiderbar, 'hide-siderbar': hideSiderbar }"
  >
    <side-bar />
    <div class="main-container">
      <navbar v-if="appStore.navbarStatus" />
      <tags-view v-if="appStore.tagViewStatus" />
      <app-main />
    </div>

    <teleport to="body">
      <setting />
    </teleport>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useAppStore } from '@/stores/app';
  import SideBar from '@/layout/components/SideBar/index.vue';
  import Navbar from './components/Navbar/index.vue';
  import TagsView from './components/TagsView/index.vue';
  import AppMain from '@/layout/components/AppMain.vue';
  import Setting from './components/Setting/index.vue';

  const appStore = useAppStore();
  const openSiderbar = computed(() => appStore.siderbar.active);
  const hideSiderbar = computed(() => !appStore.siderbar.active);
</script>

<style lang="scss">
  @import '@/style/variable.scss';

  .app-warpper {
    width: 100%;
    height: 100%;
    background-color: var(--custom-bg-color);

    .main-container {
      background-color: var(--custom-bg-color);
      margin-left: $sideWidth;
      transition: margin-left $sideTransitionTime;
    }
  }

  .sidebar-container {
    transition: width $sideTransitionTime;
  }

  .open-siderbar {
    .sidebar-container {
      width: $sideWidth;
    }
  }

  .hide-siderbar {
    .sidebar-container {
      width: $sideCollapseWidth;

      .el-menu {
        width: $sideCollapseWidth;

        .el-menu-item {
          justify-content: center;
        }

        .el-sub-menu__title {
          justify-content: center;
        }
      }
    }

    .main-container {
      margin-left: $sideCollapseWidth;
    }
  }
</style>
