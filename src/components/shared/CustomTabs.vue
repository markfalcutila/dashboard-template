<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      class="text-primary"
      active-color="primary"
      indicator-color="primary"
      align="left"
      dense
      narrow-indicator
    >
      <q-tab name="business" label="Business details" />
      <q-tab name="configurations" label="Configurations" />
      <q-tab name="bank" label="Bank details" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="business">
        <slot name="business" />
      </q-tab-panel>
      <q-tab-panel name="configurations">
        <slot name="configurations" />
      </q-tab-panel>
      <q-tab-panel name="bank">
        <slot name="bank" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('business');
</script>

<style scoped>
.q-tabs {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 12px;
}
</style>
