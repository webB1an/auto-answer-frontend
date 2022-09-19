<template>
  <div id="tags-view-container" class="tags-view-container" ref="tagsViewRef">
    <el-scrollbar class="tags-view-scroll" ref="scrollbarRef">
      <span
        ref="tag"
        v-for="item in visitedViews"
        @click="toLink($event, item)"
        @contextmenu.prevent="openMenu(item, $event)"
        :key="item.path"
        :class="{ 'tags-view-active': item.path === route.path }"
        class="tags-view"
      >
        {{ item.meta?.title }}
        <span v-if="!isAffix(item)" @click.stop="closeSelectedTag(item)" class="tags-view-close">
          ×
        </span>
      </span>
    </el-scrollbar>
  </div>
  <Teleport to="body">
    <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOtherTags(selectedTag)">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </Teleport>
</template>

<script lang="ts" setup>
  import { ref, unref, watch, nextTick } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { cloneDeep } from 'lodash';
  import path from 'path-browserify';
  import { ElScrollbar } from 'element-plus';
  import { useTagsViewStore } from '@/stores/tagsView';
  import { asyncRoutes } from '@/router/index';
  import type { RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router';

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

  const tagsViewRef = ref<HTMLElement | null>(null);
  const tag = ref<HTMLElement[] | null>(null);

  const route = useRoute();
  const router = useRouter();

  const tagsViewStore = useTagsViewStore();
  const { visitedViews } = storeToRefs(tagsViewStore);

  const visible = ref(false);
  const left = ref(0);
  const top = ref(0);
  const affix = ref<RouteLocationNormalizedLoaded[]>([]);
  const selectedTag = ref<RouteLocationNormalizedLoaded>({} as RouteLocationNormalizedLoaded);

  const toLink = (_e: MouseEvent, tag: RouteLocationNormalizedLoaded) => {
    router.push({ path: tag.path });
  };

  const isAffix = (tag: RouteLocationNormalizedLoaded) => !!tag.meta?.affix;

  const filterAffixTags = (routes: RouteRecordRaw[], basePath = '/') => {
    let tags: RouteLocationNormalizedLoaded[] = [];
    routes.forEach((item) => {
      if (item.meta && item.meta?.affix) {
        const tagPath = path.resolve(basePath, item.path);
        tags.push({
          fullPath: tagPath,
          hash: '',
          matched: [],
          meta: { ...item.meta },
          name: item.name,
          params: {},
          path: tagPath,
          query: {},
          redirectedFrom: undefined
        });
      }

      if (item.children) {
        const childTag = filterAffixTags(item.children, item.path);
        if (childTag.length >= 1) {
          tags = [...tags, ...childTag];
        }
      }
    });
    return tags;
  };

  const initTags = () => {
    const affixTags = (affix.value = filterAffixTags(asyncRoutes));

    for (const tag of affixTags) {
      if (tag.name) {
        tagsViewStore.addVisitedView(tag);
      }
    }
  };

  const addView = () => {
    // deep clone
    if (route.name) {
      tagsViewStore.addView(cloneDeep(route));
    }
  };

  const openMenu = (tag: RouteLocationNormalizedLoaded, e: MouseEvent) => {
    const menuWidth = 80;
    visible.value = true;

    const target = e.target as Element;
    const { width: targetWidth, left: targetOffsetLeft } = target.getBoundingClientRect();

    left.value = targetOffsetLeft + targetWidth / 2 - menuWidth / 2;
    top.value = e.clientY;

    selectedTag.value = tag;
  };

  const closeMenu = () => {
    visible.value = false;
  };

  const isActiveTag = (tag: RouteLocationNormalizedLoaded) => {
    return tag.path === route.path;
  };

  const toLastVisitedView = (visitedViews: RouteLocationNormalizedLoaded[]) => {
    const len = visitedViews.length;
    if (len > 0) {
      router.push({
        path: visitedViews[len - 1].fullPath
      });
    } else {
      router.push('/');
    }
  };

  const refreshSelectedTag = (tag: RouteLocationNormalizedLoaded) => {
    tagsViewStore.delCachedView(tag).then(() => {
      nextTick(() => {
        router.replace({
          path: '/redirect' + tag.fullPath
        });
      });
    });
  };

  const closeSelectedTag = (tag: RouteLocationNormalizedLoaded) => {
    tagsViewStore.delView(tag).then(({ visitedViews }) => {
      if (isActiveTag(tag)) {
        toLastVisitedView(visitedViews);
      }
      moveToTarget();
    });
  };

  const closeOtherTags = (tag: RouteLocationNormalizedLoaded) => {
    tagsViewStore.delOtherViews(tag);
  };

  const closeAllTags = (tag: RouteLocationNormalizedLoaded) => {
    tagsViewStore.delAllViews().then(({ visitedViews }) => {
      if (affix.value.some((v) => v.path === tag.path)) {
        return router.push({
          path: tag.path
        });
      }

      toLastVisitedView(visitedViews);
    });
  };

  const toTarget = (act: HTMLElement) => {
    const container = unref(tagsViewRef);
    const scrollbar = unref(scrollbarRef);

    if (!container || !scrollbar) return;
    // tagsView 宽度
    const containerW = container.offsetWidth;
    // 活跃 tag 相较于父集的距离
    const actL = act.offsetLeft;
    // 活跃 tag 宽度
    const actW = act.offsetWidth;
    // siderW
    const siderW = container.offsetLeft;

    // 活跃 tag 距离最左边距离
    const actToLeft = act.getBoundingClientRect().x;

    // 活跃 tag 在可视区域
    if (actToLeft < siderW + containerW && actToLeft >= siderW) return;
    // 活跃 tag 在左边不可视区域
    if (actToLeft <= siderW) {
      scrollbar.setScrollLeft(0);
    } else if (actL >= containerW) {
      // 活跃 tag 在右边不可视区域
      scrollbar.setScrollLeft(actL - containerW + actW);
    }
  };

  const moveToTarget = () => {
    nextTick(() => {
      const tags = unref(tag);
      if (!tags || tags.length === 0) return;
      for (const t of tags) {
        if (t.className.includes('tags-view-active')) {
          toTarget(t);
        }
      }
    });
  };

  initTags();

  watch(
    route,
    () => {
      addView();
      moveToTarget();
    },
    {
      immediate: true
    }
  );

  watch(visible, (value) => {
    if (value) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
  });
</script>

<style lang="scss" scoped>
  .tags-view-scroll {
    // background-color: #fff;
  }

  .tags-view-container {
    // display: flex;
    // align-items: center;
    width: 100%;
    height: 32px;
    padding: 2px 0;
    border-bottom: 1px solid var(--custom-tag-view-container-border-color);
    border-top: 1px solid var(--custom-tag-view-container-border-color);
    background-color: var(--custom-tag-view-bg-color);
    overflow-y: scroll;
    white-space: nowrap;

    .tags-view {
      // flex-shrink: 0;
      // display: flex;
      display: inline-block;
      align-items: center;
      height: 26px;
      padding: 0 8px;
      margin-left: 6px;
      font-size: 12px;
      line-height: 26px;
      border: 1px solid var(--custom-tag-view-border-color);
      cursor: pointer;

      &:hover {
        .tags-view-close {
          color: #fff;
          border-radius: 50%;
          background-color: #ccc;
        }
      }

      &-active {
        color: #409eff;
        background-color: #d9ecff;
      }

      &-close {
        display: inline-block;
        width: 10px;
        height: 10px;
        font-size: 12px;
        text-align: center;
        line-height: 10px;
        margin-left: 4px;
      }
    }
  }

  .contextmenu {
    position: absolute;
    width: 80px;
    padding: 6px 0;
    font-size: 12px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
    list-style-type: none;
    z-index: 999;

    li {
      height: 24px;
      padding-left: 10px;
      line-height: 24px;
      color: var(--custom-contextmenu-text-color);
      cursor: pointer;

      &:hover {
        background-color: #efefef;
      }
    }
  }
</style>
