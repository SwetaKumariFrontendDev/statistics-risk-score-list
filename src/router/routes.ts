import { RouteRecordRaw } from 'vue-router';
import AppLayout from 'src/core/components/layouts/AppLayout.vue';

/**
 * Array of route objects.
 * Each route object represents a route in the application.
 * @type {RouteRecordRaw[]}
 */
const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('src/modules/index/IndexPage.vue'),
    meta: {
      title: 'Index',
      layout: AppLayout,
    },
  },

  {
    name: 'StatisticsDetailsCmp',
    path: '/test-details/:testCode',
    component: () => import('src/modules/StatisticDetails/StatisticsDetailsCmp.vue'),
    meta: {
      title: 'StatisticsDetailsCmp',
      layout: AppLayout,
    },
    props: (route) => ({
      testCode: route.params.testCode,
      testProfile: route.query.test_profile,
      testProfileVersion: route.query.test_profile_version,
    }),
  },
];

export default routes;
