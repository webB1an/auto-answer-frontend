<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="key" />
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useTagsViewStore } from '@/stores/tagsView';

  const tagsViewStore = useTagsViewStore();
  const { cachedViews } = storeToRefs(tagsViewStore);

  const route = useRoute();

  const key = computed(() => route.path);
</script>
<style lang="scss">
  .app-main {
    margin: 10px;
    padding: 10px;
    // background-color: #fff;
  }
</style>
