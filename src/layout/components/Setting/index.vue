<template>
  <el-drawer v-model="drawer" direction="rtl" size="300px">
    <template #header>
      <div>项目配置</div>
    </template>
    <template #default>
      <el-divider content-position="center">主题</el-divider>
      <div class="align-center">
        <el-switch
          v-model="isDark"
          @change="toggleDarkMode"
          inline-prompt
          :active-icon="light"
          :inactive-icon="dark"
          size="large"
        />
      </div>

      <el-divider content-position="center">界面配置</el-divider>
      <div class="setting-switch">
        <div class="name">进入欢迎</div>
        <el-switch v-model="welcome" />
      </div>
      <div class="setting-switch">
        <div class="name">左侧菜单</div>
        <el-switch v-model="siderbar" />
      </div>
      <div class="setting-switch">
        <div class="name">顶栏</div>
        <el-switch v-model="navbar" />
      </div>
      <div class="setting-switch">
        <div class="name">面包屑</div>
        <el-switch v-model="breadcrumb" />
      </div>
      <div class="setting-switch">
        <div class="name">标签页</div>
        <el-switch v-model="tagView" />
      </div>
    </template>
  </el-drawer>

  <div class="float-setting" v-if="!navbar" @click="appStore.toggleSetting('open')">
    <svg-icon name="svg-setting" />
  </div>
</template>

<script lang="ts" setup>
  import { unref, computed, h } from 'vue';
  import { useDark, useEventListener, tryOnUnmounted } from '@vueuse/core';
  import SvgIcon from '@/components/SvgIcon.vue';
  import { useAppStore } from '@/stores/app';

  const light = h(SvgIcon, { name: 'svg-sun' });
  const dark = h(SvgIcon, { name: 'svg-moon' });

  const appStore = useAppStore();

  const isDark = useDark();

  const toggleDarkMode = () => {
    appStore.toggleDarkTheme(unref(isDark));
  };

  const drawer = computed({
    get() {
      return appStore.settingStatus;
    },
    set(val) {
      const type = val ? 'open' : 'close';
      appStore.toggleSetting(type);
    }
  });

  const welcome = computed({
    get() {
      return appStore.welcomeStatus;
    },
    set() {
      appStore.toggleWelcome();
    }
  });

  const siderbar = computed({
    get() {
      return appStore.siderbar.active;
    },
    set() {
      appStore.toggleSidebar();
    }
  });

  const navbar = computed({
    get() {
      return appStore.navbarStatus;
    },
    set() {
      appStore.toggleSetting('close');
      appStore.toggleNavbar();
    }
  });

  const breadcrumb = computed({
    get() {
      return appStore.breadcrumbStatus;
    },
    set() {
      appStore.toggleBreadcrumb();
    }
  });

  const tagView = computed({
    get() {
      return appStore.tagViewStatus;
    },
    set() {
      appStore.toggleTagView();
    }
  });

  const cleanListenter = useEventListener('beforeunload', () => {
    appStore.toggleSetting('close');
  });

  tryOnUnmounted(() => {
    cleanListenter();
  });
</script>

<style lang="scss" scoped>
  .align-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .setting-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 14px;
  }

  .float-setting {
    position: fixed;
    right: 0;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #409eff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
</style>
