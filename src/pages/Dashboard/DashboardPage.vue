<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="title-header">Dashboard</h1>
      <p>Collection of all information about the incoming payment and their transactions.</p>
      <br />

      <ChartGraph />

      <!-- <TerminalView/> -->
    </div>
  </div>
</template>

<script lang="ts">
import ChartGraph from './ChartGraphView.vue';
// import TerminalView from './TerminalView.vue';
export default {
  name: 'DashboardPage',
  components: {
    ChartGraph,
    // TerminalView,
  },
};
</script>
