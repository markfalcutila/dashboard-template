<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <div class="sidebar_header">
        <div class="logo_container">
          <img src="../assets/images/sample-icon.png" alt="Logo" class="logo" />
          <p>Development Bank of the Philippines</p>
        </div>

        <div class="user_container">
          <p>Admin user</p>
          <q-icon name="expand_more" class="icon" />
        </div>

        <div class="line_vertical"></div>
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="item.title"
            :class="{ 'has-drawer': item.children }"
          >
            <!-- Regular Menu Item -->
            <template v-if="!item.children">
              <q-icon :name="item.icon" class="icon" />
              <router-link v-if="item.to" class="nav-link" :to="item.to">{{
                item.title
              }}</router-link>
              <span v-else class="nav-link">{{ item.title }}</span>
            </template>

            <!-- Dropdown Menu -->
            <template v-else>
              <div @click="toggleDrawer(index)" class="drawer-container">
                <div class="drawer-left">
                  <q-icon :name="item.icon" class="icon" />
                  <span>{{ item.title }}</span>
                </div>
                <q-icon
                  name="expand_more"
                  class="icon"
                  :class="{ 'rotate-180': openDropdownIndex === index }"
                />
              </div>

              <!-- Nested Sub-menu -->
              <ul v-show="openDropdownIndex === index" class="drawer">
                <li v-for="(child, childIdx) in item.children" :key="childIdx">
                  <router-link class="nav-link" :to="child.to">
                    {{ child.title }}
                  </router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sidebar-footer">
      <div class="line_vertical"></div>
      <img src="../assets/images/payconnect-icon.png" alt="payconnect logo" class="logo" />
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SideNavbar',

  setup() {
    const openDropdownIndex = ref<number | null>(null);

    const menuItems = [
      {
        title: 'Dashboard',
        icon: 'grid_view',
        to: '/dashboard',
      },
      {
        title: 'User Management',
        icon: 'manage_accounts',
        to: '/user-management',
      },
      {
        title: 'Merchants',
        icon: 'storefront',
        to: '/merchant',
      },
      {
        title: 'Transactions',
        icon: 'payments',
        to: '/transaction',
      },
      {
        title: 'Configuration',
        icon: 'tune',
        // to: '/settings',
        children: [{ title: 'sample child', to: '/sample-page' }],
      },
      {
        title: 'Logout',
        icon: 'logout',
        // to: '/settings',
      },
    ];

    const toggleDrawer = (index: number) => {
      openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
    };

    return {
      menuItems,
      toggleDrawer,
      openDropdownIndex,
    };
  },
});
</script>

<style scoped></style>
