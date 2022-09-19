import { defineStore } from 'pinia';
import { setBooleanStorage, getBooleanStorage } from '@/utils/cookie';

export const useAppStore = defineStore('app', {
  state: () => ({
    isDarkTheme: getBooleanStorage('isDarkTheme'),
    welcomeStatus: getBooleanStorage('welcomeStatus'),
    settingStatus: getBooleanStorage('settingStatus'),
    siderbar: {
      active: getBooleanStorage('siderbarStatus')
    },
    navbarStatus: getBooleanStorage('navbarStatus'),
    breadcrumbStatus: getBooleanStorage('breadcrumbStatus'),
    tagViewStatus: getBooleanStorage('tagViewStatus')
  }),
  getters: {
    // menuActive: (state) => state.siderbar.active
  },
  actions: {
    toggleDarkTheme(val: boolean) {
      this.isDarkTheme = val;
      setBooleanStorage('isDarkTheme', val);
    },
    toggleWelcome() {
      this.welcomeStatus = !this.welcomeStatus;
      setBooleanStorage('welcomeStatus', this.welcomeStatus);
    },
    toggleSetting(value?: 'open' | 'close') {
      if (value === 'close') {
        this.settingStatus = false;
      } else if (value === 'open') {
        this.settingStatus = true;
      } else {
        this.settingStatus = !this.settingStatus;
      }

      setBooleanStorage('settingStatus', this.settingStatus);
    },
    toggleSidebar() {
      this.siderbar.active = !this.siderbar.active;
      setBooleanStorage('siderbarStatus', this.siderbar.active);
    },
    toggleNavbar() {
      this.navbarStatus = !this.navbarStatus;
      setBooleanStorage('navbarStatus', this.navbarStatus);
    },
    toggleBreadcrumb() {
      this.breadcrumbStatus = !this.breadcrumbStatus;
      setBooleanStorage('breadcrumbStatus', this.breadcrumbStatus);
    },
    toggleTagView() {
      this.tagViewStatus = !this.tagViewStatus;
      setBooleanStorage('tagViewStatus', this.tagViewStatus);
    }
  }
});
