<template>
  <div class="loading-container" :style="{ 'background-color': background }">
    <div class="loading-spinner">
      <svg
        t="1660792293702"
        class="spinner-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30"
        height="30"
        fill="#409eff"
      >
        <path
          d="M544 704v256h-64v-256h64z m126.4-78.848l180.992 180.992-45.248 45.248-180.992-180.992 45.248-45.248z m-316.8 0l45.248 45.248-180.992 180.992-45.248-45.248 180.992-180.992zM960 480v64h-256v-64h256z m-640 0v64H64v-64h256zM217.856 172.608l180.992 180.992-45.248 45.248-180.992-180.992 45.248-45.248z m588.288 0l45.248 45.248-180.992 180.992-45.248-45.248 180.992-180.992zM544 64v256h-64V64h64z"
        />
      </svg>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface LoadingOptions {
    text?: string;
    background?: string;
  }

  withDefaults(defineProps<LoadingOptions>(), {
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  });
</script>

<style lang="scss" scoped>
  .loading-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    color: #409eff;

    .loading-spinner {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      font-size: 14px;
      color: #409eff;
      text-align: center;
    }
  }

  .spinner-icon {
    animation: spinner infinite 3s linear;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
