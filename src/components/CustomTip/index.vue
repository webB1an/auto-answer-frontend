<template>
  <div id="custom-container" :class="type">
    <p class="custom-tip-title" v-if="$slots.title">
      <slot name="title"></slot>
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
    title?: string;
  }

  withDefaults(defineProps<Props>(), {
    type: 'primary'
  });
</script>

<style lang="scss" scoped>
  #custom-container {
    --custom-tip-primary: #409eff;
    --custom-tip-success: #67c23a;
    --custom-tip-warning: #e6a23c;
    --custom-tip-danger: #f56c6c;
    --custom-tip-error: #f56c6c;
    --custom-tip-info: #909399;
    --custom-tip-primary-rgb: 64, 158, 255;
    --custom-tip-success-rgb: 103, 194, 58;
    --custom-tip-warning-rgb: 230, 162, 60;
    --custom-tip-danger-rgb: 245, 108, 108;
    --custom-tip-error-rgb: 245, 108, 108;
    --custom-tip-info-rgb: 144, 147, 153;
    // rgba(var(--el-color-primary-rgb), .1);
    --custom-tip-primary-bg: rgba(var(--custom-tip-primary-rgb), 0.1);
    --custom-tip-success-bg: rgba(var(--custom-tip-success-rgb), 0.1);
    --custom-tip-warning-bg: rgba(var(--custom-tip-warning-rgb), 0.1);
    --custom-tip-danger-bg: rgba(var(--custom-tip-danger-rgb), 0.1);
    --custom-tip-error-bg: rgba(var(--custom-tip-error-rgb), 0.1);
    --custom-tip-info-bg: rgba(var(--custom-tip-info-rgb), 0.1);

    padding: 8px 16px;
    font-size: 14px;

    ::v-deep(a) {
      color: var(--custom-tip-primary);
      text-decoration: none;
    }

    &.primary {
      background-color: var(--custom-tip-primary-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-primary);
    }

    &.success {
      background-color: var(--custom-tip-success-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-success);
    }

    &.warning {
      background-color: var(--custom-tip-warning-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-warning);
    }

    &.danger {
      background-color: var(--custom-tip-danger-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-danger);
    }

    &.error {
      background-color: var(--custom-tip-error-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-error);
    }

    &.info {
      background-color: var(--custom-tip-info-bg);
      border-radius: 4px;
      border-left: 5px solid var(--custom-tip-info);
    }

    .custom-tip-title {
      font-weight: 700;
      margin: 0 0 1rem 0;
      line-height: 1.7;
    }
  }
</style>
