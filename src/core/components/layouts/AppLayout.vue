<template>
  <div
    class="flex w-full min-h-screen relative"
  >
    <div class="flex flex-col h-full w-full">
      <div
        class="inline-flex w-full h-screen relative"
      >
        <!-- SIDEBAR -->
        <SidebarComponent />
        <!-- MAIN CONTENT -->
        <main
          class="flex-grow bg-white min-w-[0] overflow-x-hidden relative min-h-full"
        >
          <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in" :duration="150">
              <component
                :is="Component"
                :key="route.path"
                class="px-6 py-4 min-h-full"
              />
            </transition>
          </RouterView>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarComponent from './sidebar/SidebarComponent.vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
</script>
