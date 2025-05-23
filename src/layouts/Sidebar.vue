<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <div class="sidebar_header">
        <div class="logo_container">
          <img src="../assets/images/sample-icon.png" alt="Logo" class="logo" />
          <p>Development Bank of the Philippines</p>
        </div>

        <div class="user_container">
          <!-- <p>Resty Joy Antiquin</p> -->
          <p>Admin user</p>
          <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
        </div>

        <div class="line_vertical"></div>
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul>
          <!-- Dashboard Link -->
          <li>
            <!-- <font-awesome-icon class="icon" :icon="['fas', 'tachometer-alt']" /> -->
            <font-awesome-icon class="icon" :icon="['fas', 'border-all']" />
            <router-link class="nav-link" to="/">Dashboard</router-link>
          </li>

          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'store']" />
            <router-link class="nav-link" to="/merchant">Merchants</router-link>
          </li>

          <!-- Dropdown Menu (Drawer) -->
          <!-- <li @click="toggleDrawer" class="has-drawer">
            <div class="drawer-container">
              <div class="drawer-left">
                <font-awesome-icon class="icon" :icon="['fas', 'store']" />
                <span>Merchants</span>
              </div>
              <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
            </div> -->

          <!-- Nested Drawer (Sub-menu) -->
          <!-- <ul v-show="isDrawerOpen" class="drawer">
              <li><router-link class="nav-link" to="/merchant">All</router-link></li>
              <li><router-link class="nav-link" to="/">Pending</router-link></li>
            </ul>
          </li> -->

          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'chart-simple']" />
            <router-link class="nav-link" to="/settings">Transactions</router-link>
          </li>

          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'cogs']" />
            <router-link class="nav-link" to="/settings">Configuration</router-link>
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
export default {
  name: 'AppSidebar',
  data() {
    return {
      isDrawerOpen: false, // State to control the visibility of the drawer
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen; // Toggle the drawer state
    },
  },
};
</script>
