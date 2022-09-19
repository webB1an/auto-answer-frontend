import { defineStore } from 'pinia';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

interface State {
  visitedViews: RouteLocationNormalizedLoaded[];
  cachedViews: string[];
}
// interface Getters {}
// interface Actions {}

export const useTagsViewStore = defineStore('tagsView', {
  state: (): State => ({
    visitedViews: [],
    cachedViews: []
  }),
  actions: {
    addView(route: RouteLocationNormalizedLoaded): void {
      this.addVisitedView(route);
      this.addCachedView(route);
    },
    delView(route: RouteLocationNormalizedLoaded): Promise<State> {
      return new Promise((resolve) => {
        this.delVisitedView(route);
        this.delCachedView(route);
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews]
        });
      });
    },
    delOtherViews(route: RouteLocationNormalizedLoaded) {
      this.visitedViews = this.visitedViews.filter((item) => {
        return item.meta.affix || route.path === item.path;
      });

      const index = this.cachedViews.indexOf(route.name as string);
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1);
      } else {
        this.cachedViews = [];
      }
    },
    delAllViews(): Promise<State> {
      return new Promise((resolve) => {
        this.cachedViews = [];
        this.visitedViews = this.visitedViews.filter((item) => {
          return item.meta.affix;
        });
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: []
        });
      });
    },
    addVisitedView(route: RouteLocationNormalizedLoaded): void {
      if (this.visitedViews.some((v) => v.path === route.path)) return;
      this.visitedViews.push(route);
    },

    addCachedView(route: RouteLocationNormalizedLoaded): void {
      if (this.cachedViews.includes(route.name as string)) return;
      if (!route.meta.noCache) {
        this.cachedViews.push(route.name as string);
      }
    },
    delVisitedView(route: RouteLocationNormalizedLoaded): Promise<RouteLocationNormalizedLoaded[]> {
      return new Promise((resolve) => {
        for (const [i, v] of this.visitedViews.entries()) {
          if (v.path === route.path) {
            this.visitedViews.splice(i, 1);
          }
        }
        resolve([...this.visitedViews]);
      });
    },
    delCachedView(tag: RouteLocationNormalizedLoaded): Promise<string[]> {
      return new Promise((resolve) => {
        const index = this.cachedViews.findIndex((item) => item === tag.name);
        index > -1 && this.cachedViews.splice(index, 1);
        resolve([...this.cachedViews]);
      });
    }
  }
});
