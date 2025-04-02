import { defineStore } from 'pinia';
import { NavigationItemGroup } from 'src/core/types/app';

type AppStore = {
  initialized: boolean;
  loading: boolean;
  navigationItemsGroup: NavigationItemGroup[];
};

/**
 * Represents the application store.
 */
export const useAppStore = defineStore('app', {
  state: () =>
    ({
      initialized: false,
      loading: false,
      navigationItemsGroup: [],
    } as AppStore),

  getters: {
    /**
     * Getters for the application store.
     */
  },

  actions: {
    /**
     * Initializes the application store.
     */
    async initialize(): Promise<boolean> {
      this.loading = true;
      await this.initializeNavigationItems();
      this.loading = false;
      this.initialized = true;
      return true;
    },

    /**
     * Initializes the navigation items.
     */
    async initializeNavigationItems() {
      this.navigationItemsGroup = [
        {
          items: [
            {
              name: 'index',
              route: { name: 'index' },
            },
          ],
          position: 'normal',
        },
      ];
    },
  },
});
