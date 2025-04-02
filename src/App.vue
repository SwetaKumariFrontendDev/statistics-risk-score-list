<template>
    <div
      v-if="appStore.loading"
      class="bg-slate-200 w-full min-h-screen overflow-hidden flex"
    >
      <div class="flex justify-center gap-4 align-middle">
        <h1 class="text-xl font-bold mr-1 text-center">
          loading...
        </h1>
      </div>
    </div>
    <div v-else>
      <component :is="route.meta.layout" v-if="route.meta.layout" />
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { until } from '@vueuse/core';
import { useAppStore } from 'src/core/stores/app';

const route = reactive(useRoute());

const appStore = useAppStore();
const { loading, initialized } = storeToRefs(appStore);
appStore.initialize();

onMounted(async () => {
  await until(initialized)
    .toBe(true, {
      timeout: 30000,
      throwOnTimeout: true,
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}
</style>
