<template>
  <div class="avatar-container">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <img class="avatar" :src="avatar" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="CommandEnum.home"> 首页 </el-dropdown-item>
          <el-dropdown-item :command="CommandEnum.github"> 项目地址 </el-dropdown-item>
          <el-dropdown-item :command="CommandEnum.preview"> 预览地址 </el-dropdown-item>

          <el-dropdown-item divided :command="CommandEnum.logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
  import avatar from '@/assets/avatar.jpeg';

  enum CommandEnum {
    home,
    github,
    preview,
    logout
  }
  type target = '_blank' | 'self';

  const location = window.location.origin;

  const open = (url: string, target: target = '_blank') => {
    if (target === 'self') return (window.location.href = url);
    window.open(url);
  };

  const handleCommand = (command: CommandEnum) => {
    switch (command) {
      case CommandEnum.home:
        open(`${location}/#/dashboard/index`, 'self');
        break;
      case CommandEnum.github:
        open('https://github.com/webB1an/vite-element-admin');
        break;
      case CommandEnum.preview:
        open('https://webb1an.github.io/vite-element-admin');
        break;
      case CommandEnum.logout:
        break;
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/style/variable.scss';

  .avatar-container {
    float: right;
    display: flex;
    align-items: center;
    height: $navbarHeight;
    cursor: pointer;

    .avatar {
      width: 36px;
      height: 36px;
      border: 1px solid var(--custom-bg-color);
      border-radius: 50%;
    }
  }
</style>
