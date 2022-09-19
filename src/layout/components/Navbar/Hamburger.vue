<template>
  <div id="hamburger-container" class="hamburger-container" @click="toggle">
    <svg
      :class="{ active: siderbar.active }"
      class="hamburger"
      t="1655886946936"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5096"
      width="128"
      height="128"
    >
      <path
        d="M616 582l-480 0a8 8 0 0 0-8 8l0 55.99999999a8 8 0 0 0 8 8.00000001L616 654a8 8 0 0 0 8-8l0-56a8 8 0 0 0-8-8z m8-204a8 8 0 0 0-8-8l-480 0a8 8 0 0 0-8 8.00000001l0 55.99999999a8 8 0 0 0 8 8L616 442a8 8 0 0 0 8-8l0-56z m-504 486L904 864a8 8 0 0 0 8-8l0-56a8 8 0 0 0-8-8l-784 0a8 8 0 0 0-8 8l0 56a8 8 0 0 0 8 8z m0-632L904 232a8 8 0 0 0 8-8l0-56a8 8 0 0 0-8-8l-784 0a8 8 0 0 0-8 8l0 56a8 8 0 0 0 8 8zM881.6 381.9L725.3 505a8.8 8.8 0 0 0 0 13.9L881.6 642.1a8.9 8.9 0 0 0 14.4-6.9l0-246.3a8.9 8.9 0 0 0-14.4-7z"
        p-id="1408"
      />
    </svg>
  </div>
</template>
<!-- Hamburger -->
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAppStore } from '@/stores/app';

  const appStore = useAppStore();

  const { siderbar } = storeToRefs(appStore);

  const toggle = () => appStore.toggleSidebar();
</script>
<style lang="scss">
  @import '@/style/variable.scss';

  .hamburger-container {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $navbarHeight;
    height: $navbarHeight;
    cursor: pointer;

    &:hover {
      background-color: var(---custom-icon-hover-color);
    }

    .hamburger {
      width: 20px;
      height: 20px;
      transform: rotate(180deg);
      color: var(--custom-icon-color);
      fill: currentColor;

      &.active {
        transform: rotate(0);
      }
    }
  }
</style>
