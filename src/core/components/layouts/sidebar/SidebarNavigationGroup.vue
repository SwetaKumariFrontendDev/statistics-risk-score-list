<template>
  <div v-for="(itemGroup, index) in navigationItemsGroup" :key="index">
    <div
    >
      <div class="space-y-2">
        <div
          v-if="itemGroup?.name"
          :class="sidebar.open ? 'mt-10 mb-4' : 'mt-[72px]'"
        >
          <div
            v-if="itemGroup.name && sidebar.open"
            class="uppercase font-semibold text-slate-500 text-sm whitespace-nowrap overflow-hidden"
          >
            {{ itemGroup.name }}
          </div>
        </div>
        <div
          v-for="navigationItem in itemGroup.items"
          :key="navigationItem.name"
        >
          <SidebarNavigationItem
            :item="navigationItem"
            :type="itemGroup.position"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavigationItemGroup } from 'src/core/types/app';
import { useLocalStorage } from '@vueuse/core';
import SidebarNavigationItem from './SidebarNavigationItem.vue';

defineProps<{
  navigationItemsGroup: NavigationItemGroup[];
}>();

const sidebar = useLocalStorage('sidebar', { open: true });
</script>
