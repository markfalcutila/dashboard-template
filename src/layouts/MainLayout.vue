<template>
  <div class="app-container">
    <Sidebar class="sidebar_content" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from 'src/layouts/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
