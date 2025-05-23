import MainLayout from 'src/layouts/MainLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      // put the routes here
      {
        path: 'merchant',
        component: () => import('pages/Merchant/MerchantPage.vue'),
      },
      {
        path: 'add-merchant',
        component: () => import('pages/Merchant/AddMerchantPage.vue'),
      },
      {
        name: 'view-merchant',
        path: 'view-merchant',
        component: () => import('pages/Merchant/ViewMerchant.vue'),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
