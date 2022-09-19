import { createApp } from 'vue';
import type { App, ComponentPublicInstance } from 'vue';
import Loading from './index.vue';

type Data = Record<string, unknown>;
interface LoadingOptions extends Data {
  text?: string;
  background?: string;
}

let instance: ComponentPublicInstance;

export const CustomLoading = {
  show(options?: LoadingOptions) {
    if (!instance) {
      instance = createApp(Loading, options).mount(document.createElement('div'));
    }

    document.body.appendChild(instance.$el);
  },
  close() {
    document.body.removeChild(instance.$el);
  }
};

export default {
  install: (app: App) => {
    app.config.globalProperties.$loading = CustomLoading;
  }
};
