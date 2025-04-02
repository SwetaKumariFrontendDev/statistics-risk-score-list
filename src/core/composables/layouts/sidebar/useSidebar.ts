import { ref, watch } from 'vue';
import { useLocalStorage } from '@vueuse/core';

/**
 * Custom composable function for managing the sidebar state and layout.
 * The sidebar can be opened or closed, and its layout is adjusted based on the device type.
 *
 * @returns An object containing the following properties:
 *   - open: A reactive reference to the sidebar state (open or closed).
 *   - sidebar: A reactive reference to the sidebar object.
 */
export function useSidebar() {
  const sidebar = useLocalStorage('sidebar', { open: true });
  const open = ref(sidebar.value.open);

  watch(sidebar.value, () => {
    if (sidebar.value.open) {
      setTimeout(() => (open.value = true), 250);
    } else {
      open.value = false;
    }
  });

  return {
    open,
    sidebar,
  };
}
