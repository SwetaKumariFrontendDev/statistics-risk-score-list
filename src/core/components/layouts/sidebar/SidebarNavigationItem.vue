<template>
  <div>
    <div class="cursor-pointer">
      <component
        :is="'route' in item ? 'router-link' : 'a'"
        :to="'route' in item ? item.route : undefined"
        :href="'link' in item ? item.link : undefined"
        class="items-center font-medium inline-flex w-full transition-all"
        :class="[
          !sidebar.open ? 'justify-center' : 'justify-start',
          type === 'bottom'
            ? 'text-primary text-sm sidebar-navigation-item-bottom rounded-lg'
            : 'text-white text-xs sidebar-navigation-item px-2 py-2 rounded-lg',
        ]"
        :target="'link' in item ? '_blank' : undefined"
        rel="noopener"
      >
        <div v-if="!open" class="flex justify-center font-bold">
          <span>
            <span
              class="inline-flex items-center justify-center w-full text-base text-slate-600"
              >{{ item.name.slice(0, 2).toUpperCase() }}</span
            >
          </span>
        </div>
        <Transition name="fade" :duration="open ? 150 : 0">
          <div v-if="open" class="justify-center flex font-semibold">
            {{ type === 'bottom' ? item.name : item.name.toUpperCase() }}
          </div>
        </Transition>
      </component>
    </div>
    <div
      v-for="child in item?.children"
      :key="child.name"
      class="my-2 transition-all"
      :class="[!open ? '' : 'ml-6']"
    >
      <SidebarNavigationItem
        :item="child"
        :type="type"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  NavigationItem,
  NavigationItemGroupPosition,
} from 'src/core/types/app';
import { useLocalStorage } from '@vueuse/core';
import { ref, watch } from 'vue';

defineProps<{
  item: NavigationItem;
  type: NavigationItemGroupPosition;
}>();

const sidebar = useLocalStorage('sidebar', { open: true });
const open = ref(sidebar.value.open);
watch(sidebar, () => {
  if (sidebar.value.open) {
    setTimeout(() => (open.value = true), 150);
  } else {
    open.value = false;
  }
});
</script>

<style>
@reference "src/css/tailwind.css";

.router-link-active.sidebar-navigation-item {
  @apply bg-primary text-slate-800;
}

.router-link-active.sidebar-navigation-item-bottom {
  @apply underline;
}

.sidebar-navigation-item:hover {
  @apply bg-primary text-slate-800;
}

.sidebar-navigation-item-bottom:hover {
  @apply underline;
}
</style>
