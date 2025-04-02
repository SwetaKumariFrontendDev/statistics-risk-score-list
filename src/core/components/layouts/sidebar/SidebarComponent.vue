<template>
  <aside
    :class="[
      sidebar.open? 'w-[220px]' : 'w-[72px]',
      'bg-slate-800 transition-all duration-300 overflow-hidden sideBar h-full',
    ]"
  >
    <div class="w-full h-full flex-col flex overflow-hidden">
      <div class="w-full flex justify-end">
        <div
          class="text-white cursor-pointer hover:opacity-50 transition-all duration-300 p-1"
          size="20px"
          @click="sidebar.open = !sidebar.open"
        >
          {{ sidebar.open ? '←' : '→' }}
        </div>
      </div>
      <div
        v-if="sidebar.open"
        class="pl-6 inline-flex w-full items-center mt-1"
      >
      </div>

      <div
        id="sidebar-navigation"
        class="flex flex-col flex-1 w-full overflow-hidden"
        :class="sidebar.open ? 'mt-10' : 'mt-[72px]'"
      >
        <div
          class="flex-1 overflow-y-auto overflow-x-hidden"
          :class="sidebar.open ? 'px-4' : 'px-5'"
        >
          <div>
            <SidebarNavigationGroup
              :navigationItemsGroup="
                navigationItemsGroup.filter((group) => group.position === 'normal')
              "
            />
          </div>
        </div>
        <div class="w-full h-min">
          <hr class="pb-4 text-slate-500 opacity-15" />
          <div :class="sidebar.open ? 'px-4' : 'px-5'">
            <div>
              <div
                class="w-full inline-flex items-stretch h-full mb-4"
                :class="[sidebar.open ? '' : 'flex-col']"
              >
                <div
                  class="flex items-center"
                  :class="sidebar.open ? 'mr-2' : ''"
                >
                  <span class="block w-8 h-8 rounded-full bg-slate-700 text-xs text-slate-500 font-semibold text-center leading-8">
                    TU
                  </span>
                </div>
                <div v-if="open" class="flex-1 text-start">
                  <div class="text-slate-500 font-medium text-xs">
                    Test Company
                  </div>
                  <div class="text-white font-bold text-xs">
                    Test User
                  </div>
                </div>
              </div>
            </div>
            <div
              class="transition-all duration-300"
            >
              <div
                v-if="
                  navigationItemsGroup
                    .filter((group) => group.position === 'bottom')
                "
              >
                <SidebarNavigationGroup
                  :navigationItemsGroup="
                    navigationItemsGroup.filter(
                      (group) => group.position === 'bottom'
                    )
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from 'src/core/stores/app';
import SidebarNavigationGroup from 'src/core/components/layouts/sidebar/SidebarNavigationGroup.vue';
import { useSidebar } from 'src/core/composables/layouts/sidebar/useSidebar';

const appStore = useAppStore();
const { navigationItemsGroup } =
  storeToRefs(appStore);
const { sidebar } = useSidebar();
const open = ref(sidebar.value.open);

watch(sidebar.value, () => {
  if (sidebar.value.open) {
    setTimeout(() => (open.value = true), 150);
  } else {
    open.value = false;
  }
});

/**
 * Lifecycle hook that runs when the component is mounted.
 * - Calls `resizeHandler` to handle initial resize logic.
 * - Adds a 'resize' event listener to the window to call `resizeHandler` on window resize.
 */
onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
});

/**
 * Lifecycle hook that runs before the component is unmounted.
 * - Removes the 'resize' event listener from the window.
 */
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});

/**
 * Handles the resize event to adjust the sidebar's visibility based on the window's width.
 */
function resizeHandler() {
  if (window.innerWidth < 1279) {
    sidebar.value.open = false;
  } else {
    sidebar.value.open = true;
  }
}
</script>

<style>
</style>
