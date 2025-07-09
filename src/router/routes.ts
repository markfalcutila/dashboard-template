import MainLayout from 'src/layouts/MainLayout.vue';
import DashboardPage from 'src/pages/Dashboard/DashboardPage.vue';
import AddUserManagement from 'src/pages/User/AddUserManagement.vue';
import UserManagement from 'src/pages/User/UserManagement.vue';
import ViewUserManagement from 'src/pages/User/ViewUserManagement.vue';
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

      // user management page
      {
        path: '/user-management',
        name: 'user-management',
        component: UserManagement,
        props: true,
      },
      {
        path: '/add-user-management',
        name: 'add-user',
        component: AddUserManagement,
      },
      {
        path: '/view-user-management',
        name: 'view-user-management',
        component: ViewUserManagement,
        props: true,
      },

      // transaction routes
      {
        name: 'transaction',
        path: 'transaction',
        component: () => import('pages/Transactions/TransactionPage.vue'),
      },
      {
        name: 'view-transaction',
        path: 'view-transaction',
        component: () => import('pages/Transactions/ViewTransaction.vue'),
        props: true,
      },

      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardPage,
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
